Source: https://boringui.dev/docs/diff-table

DiffTable React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# DiffTable

AI-proposed edits sweeping through structured tabular data.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/diff-table.json

Installs the Base UI flavor. Switch in the right panel.

## Preview

PreviewPreviewCodeCode

Inspect

Proposed menu cleanup
Proposed menu changes. Use each changed row control to include or exclude the edit.
 | Flavor | Category | Supplier

 | Rocky Road | Classic | aurora-scoops

 | Bubblegum | Retro | kumo-creamery

 | Mint Chip | Classic | maple-orbit

 | 

PistachioSeasonalmaple-orbit

## Source

Adapted from slev12397/beautiful-ui under the MIT License. Commercial icons were replaced and demo analytics were removed; attribution remains bundled with the component foundation.

## API Reference

 | Prop | Type | Default | Description

 | onApply | (edits: { removals: number; additions: number }) => void | — | Receives the applied edit summary.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
