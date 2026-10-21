Source: https://boringui.dev/docs/surfaces

Surfaces - BoringUI design system
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Surfaces

Eight surface levels that nest. Components read their substrate from context and lift relative to it, so popovers, dropdowns, and dialogs stay visible at any depth — in both light and dark mode.

## Installation

npx shadcn@latest add https://boringui.dev/r/elevated.json

Installs the Elevated primitive plus the surface-context and surface-classes libs — the elevation ladder as code.

## The problem

In light mode, we use shadow behind white surfaces to signify elevation. In dark mode, we use progressively lighter backgrounds instead.

But traditional components have a fixed background — a dropdown often ends up the same color as the dialog it sits in. That makes your interface look like this:

PreviewPreviewCodeCode

Inspect

M
Invite to your workspace

Email
Select roleMember

Workspace ownerCan change workspace settings and invite new members

MemberCan't change workspace settings or invite new members

Restricted memberCan only see and edit content they created

CancelSend invites

Page background#171717

Dialog#333333

Role dropdown#333333

## The solution

Three pieces: tokens, substrate context, and the primitive.

### Tokens

Eight bg/shadow pairs. Light mode flattens to white after step 2 (shadow alone carries elevation). Dark mode keeps adding white-opacity plus a layered shadow recipe.

PreviewPreviewCodeCode

Inspect

Dark

1

2

3

4

5

6

7

8

Light

1

2

3

4

5

6

7

8

### Substrate

Each container knows its own level and tells whatever opens inside. A popover on the page and the same popover inside a dialog both end up at the right depth, without anything passed between them.

PreviewPreviewCodeCode

Inspect

On the page

FavoritesFavorites

RecentsRecents

PrivatePrivate

BG#171717

Menu#252525

Hover+6%

Selected+10%

Inside a popover

FavoritesFavorites

RecentsRecents

PrivatePrivate

BG#252525

Menu#333333

Hover+6%

Selected+10%

Inside a dialog

FavoritesFavorites

RecentsRecents

PrivatePrivate

BG#333333

Menu#414141

Hover+6%

Selected+10%

### Elevated

Wrap a panel and the background settles at the level it belongs to. The shadow doesn't change, so a popover still reads as a popover three layers down.

PreviewPreviewCodeCode

Inspect

Page
Card
Popover
Menu

### Move through levels

Drag both knobs to choose which slice of the ladder to nest. Each layer lifts a single step off the one it sits in — whether you span two levels or all eight.

PreviewPreviewCodeCode

Inspect

surface-1
surface-2
surface-3
surface-4
surface-5
surface-6
surface-7
surface-8

surface-1
surface-2
surface-3
surface-4

8 — 81—4

## Examples

### Invite dialog

Dialog at surface 5, role picker at surface 7 — no props passed between them.

PreviewPreviewCodeCode

Inspect

M
Invite to your workspace

Email
Select roleMember

Workspace ownerCan change workspace settings and invite new members

MemberCan't change workspace settings or invite new members

Restricted memberCan only see and edit content they created

CancelSend invites

### Color picker

The format dropdown sits one level above the picker panel.

PreviewPreviewCodeCode

Inspect

HEX

#

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
