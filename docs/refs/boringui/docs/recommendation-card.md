Source: https://boringui.dev/docs/recommendation-card

RecommendationCard React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# RecommendationCard

Agent recommendation with confidence, alternatives, and decision actions.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/recommendation-card.json

Installs the Base UI flavor. Switch in the right panel.

## Preview

PreviewPreviewCodeCode

Inspect

Want me to place this restock order?
Reorder waffle cones from CCone King with lead time 7 days

High confidenceAlternativesAccept
High confidence: Reorder from Cone King · 7-day lead

## Source

Adapted from slev12397/beautiful-ui under the MIT License. Commercial icons were replaced and demo analytics were removed; attribution remains bundled with the component foundation.

## API Reference

 | Prop | Type | Default | Description

 | onAccept | (optionKey: string) => void | — | Receives the accepted recommendation.

 | onAlternativesChange | (open: boolean) => void | — | Reports alternative disclosure state.

 | onSelectionChange | (optionKey: string) => void | — | Reports the selected alternative.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
