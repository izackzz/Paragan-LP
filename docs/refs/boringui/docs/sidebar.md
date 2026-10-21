Source: https://boringui.dev/docs/sidebar

Sidebar React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Sidebar

A sidebar built from composable parts. Drag its edge to resize, collapse it away, and on mobile it becomes a drawer.

## Installation

Base UI flavor. Switch in the right panel.

Copy prompt

## Playground

PreviewPreviewCodeCode

Inspect

- AAcme Inc

⌘K

- NewNew⇧⌘O

fluid-functionalism

- Sidebar component height in demoSidebar component height in demo
- Sidebar component creationSidebar component creation
- Dark mode token auditDark mode token audit, unread

portfolio-site

- Scrollbar fade regressionScrollbar fade regression
- Registry deploy pipelineRegistry deploy pipeline, unread

- Micka Touillaud

## Layouts

3 layout options: sidebar default, floating to elevate the sidebar in a higher surface, inset to make your content stand out.

- AAurora AI
⌘K

Workspace

- ChatChat
- AgentsAgents
- KnowledgeKnowledge
- RunsRuns
- EvalsEvals

- Micka Touillaud

Sidebar

- AAurora AI
⌘K

Workspace

- ChatChat
- AgentsAgents
- KnowledgeKnowledge
- RunsRuns
- EvalsEvals

- Micka Touillaud

Floating

- AAurora AI
⌘K

Workspace

- ChatChat
- AgentsAgents
- KnowledgeKnowledge
- RunsRuns
- EvalsEvals

- Micka Touillaud

Inset

## Nesting

2 levels of nesting, one section level and one parent level.

PreviewPreviewCodeCode

Inspect

- AAurora AI
⌘K

Private

- DraftsDrafts

- Onboarding revampOnboarding revamp
- Competitor teardownCompetitor teardown

- Weekly notesWeekly notes

- Week 35 — planningWeek 35 — planning
- Week 34 — retroWeek 34 — retro

Shared

- EngineeringEngineering

- API guidelinesAPI guidelines
- Release processRelease process

- Product hubProduct hub

- Customer interviewsCustomer interviews
- RoadmapRoadmap

Recent

- TodayToday

- Onboarding revampOnboarding revamp
- API guidelinesAPI guidelines

- YesterdayYesterday

- Customer interviewsCustomer interviews
- Release processRelease process

## Actions & badges

Add badge indicator and up to 3 actions. Actions show on hover so the label keeps maximum readability.

PreviewPreviewCodeCode

Inspect

- AAurora AI
⌘K

Threads

- Summarise the Q3 board deckSummarise the Q3 board deck, unread
12

- Migration plan for Postgres 16Migration plan for Postgres 16, unread
4

- Why does retrieval miss the changelog?Why does retrieval miss the changelog?
6

- Rewrite the onboarding emailsRewrite the onboarding emails
8

- Debug the eval harness timeoutDebug the eval harness timeout, unread
9

- Draft the launch announcementDraft the launch announcement
5

- Compare embedding modelsCompare embedding models
3

- Micka Touillaud

## Header & footer

Stack the header and footer content vertically or horizontally.

- AAurora AI

⌘K

- New threadNew thread⇧⌘O

Threads

- Summarise the Q3 board deckSummarise the Q3 board deck
- Migration plan for Postgres 16Migration plan for Postgres 16, unread
- Why does retrieval miss the changelog?Why does retrieval miss the changelog?

- SettingsSettings
- What's newWhat's new

- Micka Touillaud

Vertical stacking

- AAurora AI

Threads

- Summarise the Q3 board deckSummarise the Q3 board deck
- Migration plan for Postgres 16Migration plan for Postgres 16, unread
- Why does retrieval miss the changelog?Why does retrieval miss the changelog?

Aurora 2 is hereAurora 2 is here
See what changed

- Micka Touillaud

Horizontal stacking

## Callouts

Elevate & promote news using the callout with stackable Banners or Inlines.

- AAurora AI
⌘K

Threads

- Summarise the Q3 board deckSummarise the Q3 board deck
12

- Migration plan for Postgres 16Migration plan for Postgres 16, unread
4

- Why does retrieval miss the changelog?Why does retrieval miss the changelog?
6

Sidebar is hereSidebar is here
New in Fluid Functionalism

500 stars500 stars
Find the hidden mosaic

Motion guidelinesMotion guidelines
Three spring tiers, one page

- Micka Touillaud

Stacked inlines

- AAurora AI
⌘K

Threads

- Summarise the Q3 board deckSummarise the Q3 board deck
12

- Migration plan for Postgres 16Migration plan for Postgres 16, unread
4

- Why does retrieval miss the changelog?Why does retrieval miss the changelog?
6

Sidebar is hereSidebar is here
New in Fluid Functionalism

500 stars500 stars
Find the hidden mosaic

Motion guidelinesMotion guidelines
Three spring tiers, one page

- Micka Touillaud

Stacked banners

## Resize, collapse & peek

Drag to resize, click to collapse, or press [ key. Open sidebar on click or hover.

- AAurora AI
⌘K

Threads

- Summarise the Q3 board deckSummarise the Q3 board deck
12

- Migration plan for Postgres 16Migration plan for Postgres 16, unread
4

- Why does retrieval miss the changelog?Why does retrieval miss the changelog?
6

- Rewrite the onboarding emailsRewrite the onboarding emails
8

- Debug the eval harness timeoutDebug the eval harness timeout, unread
9

On hover

On click

## Inside a dialog

A settings dialog with the sidebar inside. 3 props make it fit: collapsible="none" drops the rail and the drawer, persist={false} skips the cookie, and h-full pins it to the dialog's height. Below sm a Select takes over.

PreviewPreviewCodeCode

Inspect

Open settings

## No icon rail version?

Hot take baked into this component: there's no icon-only collapsed mode. On purpose.

Icon rails look tidy in screenshots but fail in use. Six ambiguous glyphs, and you suddenly need to tooltip most of them until you've found the right one.

Nesting, section labels and complementary actions are impossible to reflect. It only benefits power users on simple sidebars — and it's your worst way to educate users.

Half a sidebar is confusing for everybody. Convert yours now.

PreviewPreviewCodeCode

Inspect

A

❌ Icon rail: six glyphs, one tooltip at a time

✅ Peek on hover: the whole sidebar, one hover

## Functional and perfectly aligned

One rhythm everywhere: 24px icon buttons with 16px icons from header to footer.

PreviewPreviewCodeCode

Inspect

- AAurora AI

Threads

- Sidebar component height in demoSidebar component height in demo, unread
2

- Sidebar component creationSidebar component creation
5

- Dark mode token auditDark mode token audit, unread
3

- Scrollbar fade regressionScrollbar fade regression
1

- Registry deploy pipelineRegistry deploy pipeline, unread
7

- Micka Touillaud

## API Reference — SidebarProvider

 | Prop | Type | Default | Description

 | open | boolean | — | Controlled open state — pair with onOpenChange.

 | onOpenChange | (open: boolean) => void | — | Fires when the trigger, rail, or shortcut wants to toggle.

 | defaultOpen | boolean | true | Uncontrolled initial state. Read the sidebar_state cookie in a server layout to restore the last visit.

 | persist | boolean | true | Write the desktop state to the sidebar_state cookie (7 days). Mobile drawer state never persists.

 | peek | "none" | "hover" | "click" | "none" | What the collapsed edge does: an edge strip reveals the sidebar as a floating overlay, on hover or on click — and in hover mode, resting on the trigger peeks it too. Escape or an outside press dismisses; peeking never pins it or writes the cookie.

 | shortcut | string | null | "[" left · "]" right | Bare-key toggle, side-aware; null disables. Focus-scoped: the innermost provider containing focus answers.

 | mobileBreakpoint | number | 768 | Width (px) below which the sidebar becomes a modal drawer.

 | width / widthMobile | string | "16rem" / "18rem" | Rail and drawer widths, also published as --sidebar-width and --sidebar-width-mobile.

## API Reference — Sidebar

 | Prop | Type | Default | Description

 | side | "left" | "right" | "left" | Which edge the rail lives on. The provider mirrors it into the default shortcut — "[" left, "]" right — and the trigger's icon, the rail handle, and the drawer's slide all follow.

 | variant | "sidebar" | "floating" | "inset" | "sidebar" | Transparent rail, elevated floating card, or the inset pairing where SidebarInset becomes the card.

 | collapsible | "offcanvas" | "none" | "offcanvas" | Offcanvas slides the rail away; none renders a static, always-open column. (The icon-rail mode is intentionally not supported.)

 | rail | boolean | true | The built-in resize/collapse handle: drag to resize (160–360px), click to collapse, drag past the minimum to collapse. false hides it; the trigger and shortcut still toggle.

 | railTooltipOpen | boolean | — | Pins the rail's tooltip open (true) or closed (false); undefined leaves it on hover. Dragging always hides it — the collapse demo uses it to spotlight the handle.

 | bordered | boolean | true | The sidebar variant's inner-edge border.

 | SidebarTrigger | ButtonProps | — | Ghost icon button calling toggleSidebar(). Its tooltip carries the shortcut key.

 | SidebarContent viewportClassName | string | — | Extra classes for the scroll viewport — a ScrollArea carrying the scroll-fade mask, with the boundary hairline on its frame.

## API Reference — Sections

 | Prop | Type | Default | Description

 | SidebarGroup collapsible | boolean | false | Turns the group's label into an accordion toggle for everything after it. Hover raises the label's contrast and reveals a chevron.

 | SidebarGroup open / defaultOpen / onOpenChange | boolean · (open) => void | — | Control the accordion, or leave it uncontrolled.

 | SidebarGroupActions | part | — | Clusters 1–3 SidebarGroupAction buttons on the label row. A collapsible label keeps its chevron one gap clear of them.

 | SidebarGroupLabel / SidebarGroupAction render | ReactElement | — | Both accept render / asChild for composition.

## API Reference — Content level 1

 | Prop | Type | Default | Description

 | focusRing | boolean | true | SidebarMenu: draw the traveling keyboard focus ring. Off, keyboard focus moves the hover background only — for menus whose rows are the whole surface, like a settings dialog's section list.

 | SidebarMenuButton isActive | boolean | false | Marks the current row: aria-current, the traveling active background, and the semibold weight shift.

 | SidebarMenuButton icon | IconComponent | — | Leading icon — stroke width animates 1.5 → 2 with the row's state.

 | SidebarMenuButton status | "active" | "unread" | "idle" | — | Leads with a status dot instead of an icon: active/unread fill it, idle rings it. Stamps data-status, adds visually-hidden "unread" text, and active implies isActive.

 | SidebarMenuButton dot | "filled" | "ring" | — | Visual-only dot for when the status vocabulary doesn't fit. Overrides the status-derived dot; ignored when icon is set.

 | SidebarMenuButton size / variant | "default" | "sm" | "lg" · "default" | "outline" | — | Row height (default follows the size ladder; lg is a 48px two-line row) and an outline treatment for standalone rows.

 | SidebarMenuButton render / asChild | ReactElement · boolean | — | Render into a custom element, e.g. render={<Link href=…/>}.

 | SidebarMenuBadge | part | — | Trailing count. Keeps the rightmost slot when the row also has actions.

 | SidebarMenuAction showOnHover | boolean | false | Hide the action until the row is hovered or focused. The row reserves its width only while it shows, so the label runs full width at rest. Tracks the row's own button — a child's hover never reveals it.

 | SidebarMenuActions | part | — | Clusters more than one action on a row and publishes the count, so the row reserves exactly the gutter the cluster needs.

 | SidebarMenu size | "default" | "compact" | — | Pins the menu's rows to one step of the size ladder; omitted, they follow the surrounding SizeProvider.

 | SidebarMenuSkeleton showIcon | boolean | false | Placeholder row while data lands. Widths are deterministic, so SSR and client agree.

## API Reference — Content level 2

 | Prop | Type | Default | Description

 | SidebarMenuSub open | boolean | true | Built-in collapse on the sub-tree's measured height, never an animated auto — wire it to state alongside a toggling row.

 | SidebarMenuSubButton | { size, icon, isActive } | — | Nested row: 24 / 28px tall, text stays at the parent rows' size. Renders an <a> by default; also accepts render / asChild.

 | SidebarMenuBadge / SidebarMenuAction | part | — | Behave as they do at level 1, scoped to the nested row: an action here reveals on its own row, not on its siblings or its parent.

 | Highlight scope | — | — | Each sub-menu runs its own hover/active/focus overlays, so a nested row and its parent never fight over which one is lit.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
