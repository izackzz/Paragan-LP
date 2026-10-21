Source: https://boringui.dev/docs/selection-actions

SelectionActions React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# SelectionActions

Select a passage and hand it to an agent for a targeted rewrite.

## Installation

npx shadcn@latest add https://boringui.dev/r/selection-actions.json

This component is primitive-agnostic — same source under both flavors.

## Preview

PreviewPreviewCodeCode

Inspect

Pistachio holds the top slot all weekend. Churn it first thing Saturday so the batch has time to firm up before the afternoon rush.

## Source

Adapted from slev12397/beautiful-ui under the MIT License. Commercial icons were replaced and demo analytics were removed; attribution remains bundled with the component foundation.

## API Reference

 | Prop | Type | Default | Description

 | leadText | string | — | Text before the selected passage.

 | selectedText | string | — | Passage being transformed.

 | replacementText | string | — | Suggested replacement.

 | onAction | (action: string, selectedText: string) => void | — | Handles a rewrite action.

 | onExplain | (selectedText: string) => void | — | Handles Explain.

 | onKeep | (replacementText: string) => void | — | Keeps the rewrite.

 | onDiscard | (selectedText: string) => void | — | Discards the rewrite.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
