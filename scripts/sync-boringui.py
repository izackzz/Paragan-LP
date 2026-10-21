#!/usr/bin/env python3
"""Snapshot the public BoringUI registry and docs using only Python's stdlib."""

import concurrent.futures
import datetime
import hashlib
import json
import re
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "docs/refs/boringui"
BASE = "https://boringui.dev"


def fetch(url):
    request = urllib.request.Request(url, headers={"User-Agent": "Paragan-LP-reference-sync/1.0"})
    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            return response.read()
    except Exception as error:
        raise RuntimeError(f"Download failed: {url}: {error}") from error


def save(path, data):
    target = ROOT / path
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(data)
    return {"path": path, "sha256": hashlib.sha256(data).hexdigest()}


class DocText(HTMLParser):
    """Readable text snapshot, omitting scripts, styles and SVGs."""

    def __init__(self):
        super().__init__()
        self.skip = 0
        self.parts = []

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style", "svg"):
            self.skip += 1
        if self.skip:
            return
        if tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.parts.append("\n\n" + "#" * int(tag[1]) + " ")
        elif tag in ("p", "div", "section", "pre", "tr", "ul", "ol", "br"):
            self.parts.append("\n")
        elif tag == "li":
            self.parts.append("\n- ")
        elif tag in ("td", "th"):
            self.parts.append(" | ")

    def handle_endtag(self, tag):
        if tag in ("script", "style", "svg"):
            self.skip -= 1
        elif not self.skip and tag in ("p", "div", "section", "pre", "tr", "h1", "h2", "h3", "h4"):
            self.parts.append("\n")

    def handle_data(self, data):
        if not self.skip:
            self.parts.append(data)


def main():
    records = []
    data = fetch(BASE + "/r/registry.json")
    registry = json.loads(data)
    records.append(save("registry.json", data))
    def item_url(name):
        # The catalog uses *-base names, but the published routes use base/*.
        path = "base/" + name[:-5] if name.endswith("-base") else name
        return BASE + "/r/" + path + ".json"

    pending = {item_url(item["name"]) for item in registry["items"]}
    seen = set()
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        while pending:
            batch = sorted(pending - seen)
            if not batch:
                break
            pending = set()
            for url, data in zip(batch, pool.map(fetch, batch)):
                item = json.loads(data)
                if not item.get("name") or not item.get("type"):
                    raise ValueError("Invalid registry item: " + url)
                records.append(save("registry/" + url.removeprefix(BASE + "/r/"), data))
                seen.add(url)
                for dependency in item.get("registryDependencies", []):
                    if dependency.startswith(BASE + "/r/") and dependency not in seen:
                        pending.add(dependency)

        index_html = fetch(BASE + "/docs").decode()
        pages = {"/docs"} | set(re.findall(r'href="(/docs/[a-z0-9-]+)', index_html))
        for path, data in zip(sorted(pages), pool.map(fetch, (BASE + p for p in sorted(pages)))):
            parser = DocText()
            parser.feed(data.decode())
            text = re.sub(r"\n[ \t]*\n(?:[ \t]*\n)+", "\n\n", "".join(parser.parts)).strip()
            if not text:
                raise ValueError("Empty documentation: " + path)
            name = "index" if path == "/docs" else path.rsplit("/", 1)[-1]
            records.append(save("docs/" + name + ".md", ("Source: " + BASE + path + "\n\n" + text + "\n").encode()))

    for name in ("registry", "registry-item"):
        data = fetch("https://ui.shadcn.com/schema/" + name + ".json")
        json.loads(data)
        records.append(save("schemas/" + name + ".json", data))

    manifest = {
        "source": BASE,
        "downloadedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "registryItems": len(seen),
        "documentationPages": len(pages),
        "files": sorted(records, key=lambda record: record["path"]),
    }
    save("manifest.json", (json.dumps(manifest, indent=2) + "\n").encode())
    print(f"Saved {len(seen)} registry items, {len(pages)} documentation pages and 2 JSON schemas to {ROOT}")


if __name__ == "__main__":
    main()
