Source: https://boringui.dev/docs/interface-cheat-sheet

Interface Cheat Sheet - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Interface Cheat Sheet

Practical interface rules, illustrated with BoringUI components.

Find a ruleFind a rule

Copy rules

65 rules across 7 categories.
User interfaceMotionTypographyColorAccessibilityLayoutWriting

## User interface

Shape, alignment, and depth that make controls easier to read.

### Use smooth corners with a round fallback

Keep the existing border-radius and progressively enhance it with corner-shape: superellipse(1.5). Unsupported browsers retain the original round corners. Apply the same shape to background, focus, and pseudo-element layers. Circles and fully rounded control mechanics keep round. The squircle keyword means superellipse(2), not our softer 1.5 default.

PreviewPreviewCodeCode

Inspect

24px
Round fallback

24px
BoringUI · superellipse(1.5)

Larger radius

Preview round fallback

Checking corner-shape support…

### Keep nested corners in the same shape family

For circular corners, use max(0, outer radius − inset) to align their centers. With superellipse(1.5), give both layers the same shape and treat that radius subtraction as a visual starting point, not an exact constant-width offset. When an even inset matters, use a real border on one element so the browser derives its inner edge instead of drawing a second, independently rounded box.

PreviewPreviewCodeCode

Inspect

Independent inner radius

One native border

Show values

Round fallback
Inset · 8px

Checking corner-shape support…

### Align what the eye sees

A mathematically centered shape can still look uneven. Use a small optical correction for asymmetric glyphs while keeping the control itself aligned.

PreviewPreviewCodeCode

Inspect

❌Geometrically centered

✅Optically centered

Show guides

### Balance padding around icons

A leading icon usually needs slightly less outer padding than the text edge. Use logical properties so the adjustment follows the reading direction.

PreviewPreviewCodeCode

Inspect

Add item

❌Equal side padding

Add item

✅Visually balanced

Show padding

Button documentation

### Build depth with layered shadows

Combine a quiet edge with soft shadows to separate raised content without a heavy border. BoringUI surface shadows already provide layered recipes; choose the level that fits the hierarchy.

PreviewPreviewCodeCode

Inspect

Workspace · 1
Menu · 1
Submenu1

❌One surface everywhere

Workspace · 1
Menu · 3
Submenu5

✅Depth follows the parent

Raise parent surface

Surfaces documentation

### Keep image edges visible

An inward one-pixel outline separates an image from a similar background without changing its dimensions. Use a faint black edge in light mode and a faint white edge in dark mode.

PreviewPreviewCodeCode

Inspect

❌No edge definition

✅A quiet, defined edge

Show outline

### Match icon weight to its label

Choose an icon stroke that feels as strong as the neighboring text. Judge the pair at its actual rendered size rather than relying on one stroke width for every context.

PreviewPreviewCodeCode

Inspect

Add item

❌Icon too light

Add item

✅Matching visual weight

### Pair surface and shadow levels

Start with a matching surface and shadow level so fill and depth describe the same elevation in both themes. Use the static surface helper for runtime choices so Tailwind can discover the class names.

PreviewPreviewCodeCode

Inspect

Workspace · 1
Menu · 1
Submenu1

❌One surface everywhere

Workspace · 1
Menu · 3
Submenu5

✅Depth follows the parent

Raise parent surface

Surfaces documentation

## Motion

Purposeful feedback with shared timing and restrained movement.

### Let motion start at the trigger

Anchor a popup’s transform origin to the control that opened it. Update that origin when placement flips so the movement still explains the relationship.
Implementation note
.popup[data-side="bottom"] { transform-origin: top left; }
.popup[data-side="top"] { transform-origin: bottom left; }
/* Use the positioning library's computed origin when available. */

### Keep menu entrances brief

Frequently opened menus should respond promptly. BoringUI retains its shared moderate spring on entry and uses the shorter exit token instead of removing entry motion.
Implementation note
import { spring } from "@/lib/springs";

const menuMotion = {
  initial: { opacity: 0, y: -4 },
  animate: { opacity: 1, y: 0, transition: spring.moderate },
  exit: { opacity: 0, y: -2, transition: spring.moderate.exit },
};
Motion documentation

### Dismiss with less movement

Use a shorter duration and less travel when content leaves. A fade with a small blur, up to 4px, can soften dismissal without repeating the full entrance.
Implementation note
import { spring } from "@/lib/springs";

const exit = {
  opacity: 0, y: -2, filter: "blur(4px)",
  transition: spring.moderate.exit,
};

### Transition only intended properties

List the properties that should change smoothly so layout and unrelated styles stay predictable. Existing transition-all usage does not satisfy this guidance and needs a deliberate replacement when touched.
Implementation note
.control {
  transition-property: background-color, color, box-shadow;
  transition-duration: 80ms; /* Shared fast tier */
}

### Press the surface inward

For BoringUI buttons, use a one-pixel surface inset with no scaling. Keep the outer hit area stationary so pressing does not move or shrink the target.

PreviewPreviewCodeCode

Inspect

Save draft

✅1px inset · short label

Save a longer draft

✅1px inset · any width

Press and hold · Surface moves inward. Label stays still.

Button documentation

### Crossfade changing icons

Overlap outgoing and incoming icons in one fixed-size slot. Fade, scale, and soften the glyphs during the swap; this icon treatment does not change the button press rule.
Implementation note
import { spring } from "@/lib/springs";

const iconMotion = {
  initial: { opacity: 0, scale: 0.25, filter: "blur(4px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  transition: spring.fast,
  exit: { opacity: 0, scale: 0.25, filter: "blur(4px)", transition: spring.fast.exit },
};

### Allow interactions to reverse smoothly

Let a new input redirect motion already in progress. Use shared springs for spatial interactions and explicit CSS transitions for simple color or opacity changes. Reserve keyframes for intentional one-time sequences.
Implementation note
.hint { opacity: 0; transition: opacity 80ms; }
.control:focus-within .hint { opacity: 1; }
@media (hover: hover) {
  .control:hover .hint { opacity: 1; }
}

### Limit theme motion to colors

Keep BoringUI’s 180ms color transitions during theme changes. Do not trigger movement, resizing, corner morphing, or other unrelated animation, and make reduced-motion changes immediate.
Implementation note
html.transitioning *, html.transitioning *::before, html.transitioning *::after {
  transition-property: background-color, color, border-color, fill, stroke !important;
  transition-duration: 180ms !important;
  transition-timing-function: ease-in-out !important;
}
@media (prefers-reduced-motion: reduce) {
  html.transitioning * { transition-duration: 0s !important; }
  html.transitioning *::before, html.transitioning *::after { transition-duration: 0s !important; }
}

### Add compositing hints only when needed

If a transforming element visibly jitters by a pixel or two, a targeted will-change hint may help, particularly on iOS Safari. Apply it around the interaction and remove it afterward instead of promoting every element.
Implementation note
.moving-layer[data-preparing="true"],
.moving-layer[data-moving="true"] { will-change: transform; }
.moving-layer { will-change: auto; }

### Reveal content in small groups

When an entrance is intentional, stagger a few meaningful groups instead of moving the entire page at once. Keep offsets short and avoid making later content wait through a long sequence.
Implementation note
import { spring } from "@/lib/springs";

const groupTransition = (index: number) => ({
  ...spring.fast,
  delay: Math.min(index, 3) * 0.03,
});

### Avoid accidental mount animations

Render the initial interface in its settled state unless an entrance serves a specific purpose. Enable interaction motion after mounting rather than letting default styles animate into place.
Implementation note
import { motion } from "framer-motion";

<motion.div initial={false} animate={{ opacity: visible ? 1 : 0 }} />

### Keep repeated feedback immediate

Hover and other high-frequency feedback should be instant or use the fast tier. Save longer motion for larger changes that need spatial explanation.
Implementation note
.item { transition: background-color 80ms; }
@media (hover: hover) {
  .item:hover { background: var(--accent); }
}

### Reuse the shared motion tiers

Use fast for micro feedback, moderate for menus and small expansions, and slow for larger changes. Preserve entry/exit timings of 0.08/0.06s, 0.16/0.12s, and 0.24/0.16s respectively; exits use the shared shorter tween and lighter travel.

PreviewPreviewCodeCode

Inspect

A little motion. A clear next step.

Open panelTry reversing mid-motion

Motion documentation

## Typography

Readable text, stable numbers, and thoughtful wrapping.

### Prefer WOFF2 for web delivery

Choose WOFF2 when preparing web font assets to reduce transfer size compared with TTF or OTF. BoringUI currently loads InterVariable.ttf; this is migration guidance, not a claim that its fonts already use WOFF2.
Implementation note
/* After supplying a licensed WOFF2 asset: */
@font-face {
  font-family: "Inter";
  src: url("/fonts/InterVariable.woff2") format("woff2");
  font-weight: 100 900;
  font-display: swap;
}

### Keep changing digits aligned

Use tabular numerals for timers, totals, prices, and numeric table cells so changing digits occupy consistent widths. Monospace text already provides equal-width characters.

PreviewPreviewCodeCode

Inspect

Total revenue$8,888.88
Last period$4,204.00

❌Proportional figures

Total revenue$8,888.88
Last period$4,204.00

✅Tabular figures

Update totals

### Constrain long reading lines

Aim for roughly 60–75 characters per line in long-form content. A character-based maximum width keeps articles readable on wide screens.
Implementation note
.prose { max-inline-size: 68ch; line-height: 1.6; }

### Shape headings and descriptions

Balance short headings and use pretty wrapping for brief descriptions to reduce awkward final lines. Keep ordinary wrapping for long articles.
Implementation note
h1, h2 { text-wrap: balance; }
.description { text-wrap: pretty; }
.prose { text-wrap: wrap; }

### Contain long tokens and short labels

Allow long URLs, identifiers, and words to break inside their container. Keep short badges and control labels on one line, with enough layout space for them.
Implementation note
.content { min-inline-size: 0; overflow-wrap: break-word; }
.badge, .control-label { white-space: nowrap; }

### Set font smoothing at the root

Where supported, root-level grayscale smoothing can give text a lighter, cleaner appearance. These platform-specific hints are not a substitute for readable font weight and contrast.
Implementation note
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

### Keep source text naturally capitalized

Store text in normal capitalization and apply visual casing through CSS. This keeps content reusable when its presentation changes.
Implementation note
<span className="eyebrow">Account settings</span>
/* CSS */
.eyebrow { text-transform: uppercase; letter-spacing: 0.04em; }

### Use punctuation that fits the meaning

Use curly quotation marks in prose, an en dash for ranges, an em dash for asides, and a single ellipsis character for trailing text. Keep literal code and identifiers unchanged.
Implementation note
const copy = {
  quote: '“Ready to publish?”',
  range: 'Monday–Friday',
  aside: 'Saved locally—ready when you are.',
  pending: 'Uploading…',
};

### Give underlines room around letters

Let the font guide underline placement and skip descenders where possible. The underline should identify a link without obscuring the shapes of its letters.
Implementation note
a {
  text-underline-position: from-font;
  text-decoration-skip-ink: auto;
}

### Make shortened text recoverable

If a label is clipped with an ellipsis, provide a keyboard- and touch-accessible way to read it in full. An expanded view is often more reliable than relying on a native title tooltip alone.

PreviewPreviewCodeCode

Inspect

A practical guide to thoughtful, accessible interface details

Design notes · 4 min read

Read full title

## Color

Semantic roles and deliberate palettes across themes.

### Assign every palette step a job

Connect each shade to a real role such as a canvas, hover state, edge, fill, or text. Avoid growing a palette with extra steps that no interface decision needs.
Implementation note
/* Role mapping, rather than an unused shade collection: */
.page { background: var(--background); }
.panel { background: var(--card); }
.secondary-copy { color: var(--muted-foreground); }

### Style components through semantic tokens

Consume colors by their role rather than reaching directly for a primitive shade. Theme definitions can then change the palette without rewriting component styles.

PreviewPreviewCodeCode

Inspect

background

foreground

muted

accent

border

destructive

One role per token. Every theme.

### Name tokens for their responsibility

Describe what a token does instead of encoding its hue or its first component. A role-based name remains meaningful when colors or layouts change.
Implementation note
.helper-text { color: var(--muted-foreground); }
.selected-item { background: var(--accent); color: var(--accent-foreground); }

### Keep accent neutral in BoringUI

BoringUI reserves accent for neutral interaction states, not brand identity. If a product needs brand colors, introduce a distinct semantic role instead of overloading accent or primary.
Implementation note
.highlighted-row {
  background: var(--accent);
  color: var(--accent-foreground);
}
/* Define a separate brand role in the product theme if needed. */

### Check contrast on the actual surface

Evaluate foreground colors against the background immediately beneath them, including hover, selected, and translucent states. Passing against the page canvas does not establish contrast inside a raised panel.
Implementation note
/* Evaluate this pair in both themes and every interaction state. */
.panel-caption {
  color: var(--muted-foreground);
  background: var(--card);
}

### Design dark colors independently

Choose dark-mode surfaces, text, and edges deliberately instead of applying a blanket inversion. BoringUI has separate dark surface and shadow recipes that should remain paired.
Implementation note
.panel {
  background: var(--surface-3);
  box-shadow: var(--shadow-3);
  color: var(--foreground);
}
/* Theme tokens supply the light and dark recipes; no filter: invert(). */
Surfaces documentation

### Resolve theme preference in one place

Offer System, Light, and Dark, with an explicit choice taking precedence over the operating system. Resolve that choice centrally; only follow system changes while System is selected.
Implementation note
type Theme = "system" | "light" | "dark";
const resolveTheme = (choice: Theme, systemDark: boolean) =>
  choice === "system" ? (systemDark ? "dark" : "light") : choice;

const resolved = resolveTheme(choice, mediaQuery.matches);
document.documentElement.classList.toggle("dark", resolved === "dark");
document.documentElement.classList.toggle("light", resolved === "light");

### Choose how gradients mix colors

Specify the interpolation space when the midpoint matters. Oklab tends toward even perceptual lightness, Oklch can retain stronger chroma, and sRGB often produces quieter midtones.
Implementation note
.gradient-sample {
  background: linear-gradient(90deg in oklab, #e99b64, #728ee8);
}
/* Compare with "in oklch" and "in srgb" for the intended effect. */

## Accessibility

Usable controls for keyboards, touch, and assistive technology.

### Start with native interactive elements

Use buttons for actions and anchors for navigation. Native elements provide expected keyboard behavior and semantics that generic containers would need to recreate.
Implementation note
<button type="button" onClick={saveDraft}>Save draft</button>
<a href="/settings">Account settings</a>

### Keep keyboard focus easy to locate

Use focus-visible for a clear keyboard focus indicator. Never remove the browser outline unless an equally visible replacement is provided.

PreviewPreviewCodeCode

Inspect

First actionNext action

Press Tab to follow the focus ring

### Follow the document’s focus order

Use zero to include a custom focus target in normal tab order and minus one for programmatic focus. Avoid positive tab indices, which make navigation diverge from the document structure.
Implementation note
<main id="main-content" tabIndex={-1}>…</main>
<div role="region" aria-label="Activity log" tabIndex={0}
  className="max-h-64 overflow-auto">…</div>

### Give icon buttons an action name

Provide a descriptive accessible label when a button has no visible text. Hide decorative glyphs from assistive technology, but never hide the focusable control itself.
Implementation note
<button type="button" aria-label="Close dialog">
  <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16">
    <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" />
  </svg>
</button>

### Describe an image’s contribution

Write alternative text that conveys the image’s useful content and purpose in context. Give purely decorative images an empty alt attribute so they do not add noise.
Implementation note
<img src="/delivery-map.png" alt="Pickup entrance on the east side of the building" />
<img src="/decorative-wave.svg" alt="" />

### Label fields and match their input mode

Give each input a persistent visible label associated with its ID. Select a type and input mode that match the expected value instead of making a placeholder carry the label.
Implementation note
<label htmlFor="email">Email address</label>
<input id="email" name="email" type="email" inputMode="email"
  autoComplete="email" />
Input group documentation

### Let people paste into fields

Keep paste available for passwords, verification codes, and other inputs. Blocking it disrupts password managers and forces unnecessary transcription.
Implementation note
<label htmlFor="code">Verification code</label>
<input id="code" name="code" inputMode="numeric" autoComplete="one-time-code" />
{/* Do not cancel paste events. */}

### Validate on submit and explain errors

Keep submission available until a request is pending, then prevent duplicate requests. On an invalid submission, mark affected fields, connect their error text, and focus the first invalid input.

PreviewPreviewCodeCode

Inspect

Email addressEmail address

Validate email
Try an empty field. Nothing is sent.

Input group documentation

### Make hit areas larger than their visuals

Use at least 24×24px targets, aiming for 40×40px on desktop and 44×44px on touch. BoringUI’s 36px and 28px visual controls can sit inside separate 44px hit areas; reserve layout space so neighboring targets never overlap.

PreviewPreviewCodeCode

Inspect

✅36px surface · 44px target

✅28px surface · 44px target

0 items added · Dashed line shows the hit area

Sizes documentation

### Let pointer events pass through decoration

Glows, gradients, and other decorative overlays should not intercept clicks or taps. Keep them out of the accessibility tree as well when they convey no information.
Implementation note
<div className="glow" aria-hidden="true" />
/* CSS */
.glow { position: absolute; inset: 0; pointer-events: none; }

### Apply hover feedback only where supported

Guard hover styling with a hover-capability query to avoid sticky feedback after touch taps. Keep keyboard focus and selected states independently visible.
Implementation note
@media (hover: hover) {
  .item:hover { background: var(--accent); }
}
.item:focus-visible { outline: 2px solid var(--foreground); }
.item[aria-selected="true"] { font-weight: 600; }

### Make reduced motion a first-class state

Keep the base presentation still and enable optional animation only when motion is allowed. For JavaScript motion, read the same preference and render the settled state without animated travel or delay.
Implementation note
.notice { opacity: 1; }
@media (prefers-reduced-motion: no-preference) {
  .notice { transition: opacity 80ms; }
}
/* Apply the same preference to motion-library transitions and staggers. */
Motion documentation

### Announce routine updates politely

Use a status region for ordinary updates such as saved changes or upload progress. Reserve alerts for urgent failures that need immediate attention, and update an already-mounted region when possible.

PreviewPreviewCodeCode

Inspect

Release notesProduct update
Draft

Publish example

### Pair status colors with another cue

Add a readable label, recognizable icon, or structural marker alongside color. A status should remain understandable without distinguishing its hue.
Implementation note
<span className="text-destructive">
  <span aria-hidden="true">!</span> Payment failed
</span>

### Offer a shortcut to the main content

Place a skip link before the navigation so it is the first keyboard stop. Reveal it on focus and give its destination a focusable main landmark.
Implementation note
<a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
<nav aria-label="Main">…</nav>
<main id="main-content" tabIndex={-1}>…</main>

## Layout

Spacing and density that communicate relationships.

### Leave room above anchor destinations

Offset linked headings so a sticky header does not cover them after navigation. Include a little breathing room beyond the header height.
Implementation note
:root { --header-height: 64px; }
h2[id], h3[id] { scroll-margin-top: calc(var(--header-height) + 16px); }

### Use spacing to explain relationships

Separate groups by at least twice their internal item spacing. The larger gap makes structure apparent before someone reads the labels.

PreviewPreviewCodeCode

Inspect

NotificationsEmail updatesPush notifications

PrivacyProfile visibilityRead receipts

Give groups more space

### Change density as a coordinated set

Use BoringUI’s default 36px or compact 28px visual control ladder together with its matching text, icon, and spacing values. Scope density with SizeProvider while preserving separate, non-overlapping touch targets.
Implementation note
import { SizeProvider } from "@/lib/size-context";
import { Button } from "@/components/ui/button";

<SizeProvider size="compact">
  <Button>Filter results</Button>
</SizeProvider>
Sizes documentation

## Writing

Clear labels and useful messages that help people act.

### Begin actions with a useful verb

Tell people what a button does with a concrete verb and object. Replace vague acknowledgments with labels that explain the action.

PreviewPreviewCodeCode

Inspect

Save your changes?

Your draft has edits that are not saved yet.

CancelSave draft

Say exactly what happens next.

Button documentation

### Name the consequence in confirmations

Make the confirmation action describe the actual result. Pair a specific destructive label with a clear cancellation option.
Implementation note
<button type="button" onClick={cancel}>Cancel</button>
<button type="button" onClick={deleteProject}>Delete project</button>

### Use one label for forward steps

Choose a single label for moving through a flow and repeat it across intermediate steps. Use a specific final action label when the flow actually submits or completes.
Implementation note
const forwardLabel = isLastStep ? "Create workspace" : "Continue";
<button type="submit">{forwardLabel}</button>

### Make link destinations clear

Write link text that identifies the page or resource it opens. A meaningful label also helps when links are read separately from the surrounding paragraph.
Implementation note
<a href="/docs/sizes">Read the control sizing guide</a>

### Keep interface capitalization consistent

Use the same casing convention for headings, labels, and actions. Sentence case is a clear default, while product names and acronyms retain their established spelling.
Implementation note
const labels = {
  heading: "Workspace settings",
  field: "Display name",
  action: "Save changes",
};

### Describe what an enabled toggle does

Write toggle labels as the behavior that becomes active when checked. Avoid negative phrasing that makes people mentally reverse the state.
Implementation note
<label>
  <input type="checkbox" name="readReceipts" />
  Send read receipts
</label>

### Turn an empty view into a next step

Explain what will appear in the space and offer one useful action to begin. Keep the message specific to the missing content.

PreviewPreviewCodeCode

Inspect

A place for your next idea

Keep files and notes together. Start with a project.
Create project

### Speak directly to the reader

Use “you” and “your” when explaining choices or consequences. Avoid describing the person using the interface as an abstract user.
Implementation note
<p>You can change your notification preferences at any time.</p>

## Reference

Adapted from the Interfaces cheat sheet and our motion, size, and surface systems.

Guidance for new work, not a compliance audit of every existing component.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
