Source: https://boringui.dev/docs/prompt-bar

PromptBar React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# PromptBar

Prompt composer with sources, commands, model selection, and dictation.

## Installation

npx shadcn@latest add https://boringui.dev/r/prompt-bar.json

This component is primitive-agnostic — same source under both flavors.

## Preview

PreviewPreviewCodeCode

Inspect

Vanilla 1

## Source

Adapted from slev12397/beautiful-ui under the MIT License. Commercial icons were replaced and demo analytics were removed; attribution remains bundled with the component foundation.

## API Reference

 | Prop | Type | Default | Description

 | variant | "Rounded" | "Pill" | Active shape | Optional shape override. Defaults to the active BoringUI radius configuration.

 | demo | boolean | false | Runs the optional guided example.

 | tall | boolean | false | Uses the expanded layout.

 | placeholder | string | — | Textarea placeholder.

 | onSend | (text: string) => void | — | Receives submitted prompts.

 | onConnect | (source: string, connected: boolean) => void | — | Reports data-source connection changes.

 | onModelChange | (model: string) => void | — | Reports model selection.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
