Source: https://boringui.dev/docs/fluid-hover

Fluid Hover - BoringUI design system
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Fluid Hover

Hover that never blinks and always follows your cursor to the nearest item.

## Installation

npx shadcn@latest add https://boringui.dev/r/use-fluid-hover.json

Installs the useFluidHover hook, the FluidHoverHighlight component, and the springs tokens, and adds framer-motion as a dependency. Every list, menu, strip, and grid in the library hovers with it.

## Blink or glide

Watch both cursors. The left blinks off and on 9 times per pass, and each blink pulls your eye back to the list. The right glides once, and your eye stays on the task.

PreviewPreviewCodeCode

Inspect

InboxDraftsSentArchiveTrash

❌ Plain :hover blinks at every gap

InboxDraftsSentArchiveTrash

✅ Fluid hover glides, one pass, one target

## Show the math

1 rule, no dead zones: the nearest dot wins. Flip the switch and that is the whole algorithm.

PreviewPreviewCodeCode

Inspect

InboxDraftsSentArchiveTrash

Show the math

## 3 axes

Menus, tabs, and card grids all feel the same under the cursor. Pass y, x, or xy and the highlight follows you down the list, across the strip, or to the closest card.

PreviewPreviewCodeCode

Inspect

axis="x"strips: tabs

LibraryLibraryRecentsRecentsFavoritesFavoritesSettingsSettings

axis="y"lists: menus, tables, radios

InboxInbox

DraftsDrafts

SentSent

ArchiveArchive

TrashTrash

axis="xy"grids: card groups

InboxInbox
Everything new lands here.

DraftsDrafts
Unsent, saved as you type.

SentSent
Delivered and archived.

TrashTrash
Emptied after 30 days.

## When to split a list

Split at the divider. Rows that are alternatives to each other share 1 list, children included, and the highlight never crosses into the next one.

PreviewPreviewCodeCode

Workspace

- ChatChat

- TodayToday
- YesterdayYesterday

- AgentsAgents
- KnowledgeKnowledge
- RunsRuns

Account

- ProfileProfile
- Log outLog out

1 listChildren ride with their parent.

SkippedDisabled rows are passed over.

New listA divider means a different kind.

## What it costs

1 element, 1 transform, 1 loop per move. 200 rows below: hover and watch the meter.

PreviewPreviewCodeCode

Inspect

Message 001Message 002Message 003Message 004Message 005Message 006Message 007Message 008Message 009Message 010Message 011Message 012Message 013Message 014Message 015Message 016Message 017Message 018Message 019Message 020Message 021Message 022Message 023Message 024Message 025Message 026Message 027Message 028Message 029Message 030Message 031Message 032Message 033Message 034Message 035Message 036Message 037Message 038Message 039Message 040Message 041Message 042Message 043Message 044Message 045Message 046Message 047Message 048Message 049Message 050Message 051Message 052Message 053Message 054Message 055Message 056Message 057Message 058Message 059Message 060Message 061Message 062Message 063Message 064Message 065Message 066Message 067Message 068Message 069Message 070Message 071Message 072Message 073Message 074Message 075Message 076Message 077Message 078Message 079Message 080Message 081Message 082Message 083Message 084Message 085Message 086Message 087Message 088Message 089Message 090Message 091Message 092Message 093Message 094Message 095Message 096Message 097Message 098Message 099Message 100Message 101Message 102Message 103Message 104Message 105Message 106Message 107Message 108Message 109Message 110Message 111Message 112Message 113Message 114Message 115Message 116Message 117Message 118Message 119Message 120Message 121Message 122Message 123Message 124Message 125Message 126Message 127Message 128Message 129Message 130Message 131Message 132Message 133Message 134Message 135Message 136Message 137Message 138Message 139Message 140Message 141Message 142Message 143Message 144Message 145Message 146Message 147Message 148Message 149Message 150Message 151Message 152Message 153Message 154Message 155Message 156Message 157Message 158Message 159Message 160Message 161Message 162Message 163Message 164Message 165Message 166Message 167Message 168Message 169Message 170Message 171Message 172Message 173Message 174Message 175Message 176Message 177Message 178Message 179Message 180Message 181Message 182Message 183Message 184Message 185Message 186Message 187Message 188Message 189Message 190Message 191Message 192Message 193Message 194Message 195Message 196Message 197Message 198Message 199Message 200

0movescounts as you hover

0.000 mspick per move0.00% of a 16.7 ms frame

0.0 mslongest frameeverything included, budget 16.7 ms

0layout writesa top/left animation writes 1 every frame

## Use when

- Everything in the list can be clicked: a menu, a list, tabs, a grid of links.
- The items sit close together.
- The items stay where they are while you look at them.

## Skip when

- A wrong click would hurt.
- Only some of the cards can be clicked.
- There is a lot of empty space around the items.
- Rows change place as you scroll.

## Reduced motion

The highlight respects the OS setting on its own. Turn on reduced motion and the travel drops out: the highlight still fades in on the nearest row, it just stops sliding between rows. No <MotionConfig> needed, so a copied component behaves the same in your app.

## Reference

useFluidHover(containerRef, options) picks, the highlight draws. Focus, roles, and focus rings stay with your rows.

### Options

 | Prop | Type | Default | Description

 | axis | "y" | "x" | "xy" | "y" | Which way the list runs: y for lists, x for strips, xy for grids.

 | isItemDisabled | (el: HTMLElement) => boolean | — | Skips an item: never lit, never clicked. Runs on every move, so keep it cheap.

 | gapClick | boolean | { maxDistance?: number } | true | A click between items goes to the lit one. false turns it off. maxDistance limits it to clicks within that many px.

### Returns

 | Prop | Type | Default | Description

 | handlers | { onMouseEnter, onMouseMove, onMouseLeave, onClick } | — | Spread onto the container. Mouse only. onClick is the gap click.

 | registerItem | (index, element | null) => void | — | Give it to each row. Indices start at 0 and must not change while the list is on screen.

 | activeIndex | number | null | — | The lit item, or null. Also set as data-fluid-hover-active on the item.

 | setActiveIndex | (index | null) => void | — | Light an item yourself, for keyboard focus. The hook never moves focus.

 | itemRects | ItemRect[] | — | Each item's box inside the container. Survives a parent scale, not a rotation.

 | isMeasured | boolean | — | True once every item has a box. Measured again on register and on resize.

 | remeasure | () => void | — | Measure again and hide the highlight until done. Call it when a popup opens.

 | sessionRef | RefObject<number> | — | Counts pointer entries. The highlight fades in fresh on each one.

### FluidHoverHighlight

 | Prop | Type | Default | Description

 | hover | ReturnType<typeof useFluidHover> | — | The hook. The highlight reads what it needs from it.

 | hidden | boolean | false | Show nothing, keep the state. A closed popup.

 | from | ItemRect | null | — | Where a fresh entry fades in from. Dropdowns pass the checked row.

 | className | string | — | Radius and z-index. The container must be position: relative.

 | transition | Transition | false | spring.fast | The travel. false snaps in place after a reflow.

The highlight moves on a transform. Width and height only animate between items of different sizes.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
