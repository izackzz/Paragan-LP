Source: https://boringui.dev/docs/dia-text

DiaText React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# DiaText

Gradient sweep text reveal with repeat playback and rotating copy.

## Installation

npx shadcn@latest add https://boringui.dev/r/dia-text.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

Make interfaces feel responsive.responsive.

## Rotating Copy

PreviewPreviewCodeCode

Inspect

Make systems feel smooth.smooth.

## Width Control

PreviewPreviewCodeCode

Inspect

Status: QueuedQueued

## Custom Sweep

PreviewPreviewCodeCode

Inspect

Gradient sweepGradient sweep

## API Reference

 | Prop | Type | Default | Description

 | text | string | string[] | — | A single string to reveal, or multiple strings to rotate through.

 | colors | string[] | built-in palette | Gradient stops used for the moving sweep band.

 | textColor | string | "var(--foreground)" | Base text color before and after the sweep passes.

 | duration | number | 1.5 | Duration of the sweep animation in seconds.

 | delay | number | 0 | Delay before playback starts in seconds.

 | repeat | boolean | false | Replays the sweep and advances through text arrays when present.

 | repeatDelay | number | 0.5 | Pause between repeat cycles in seconds.

 | triggerOnView | boolean | true | Waits for the text to enter the viewport before playback starts.

 | once | boolean | true | Runs the viewport-triggered reveal only once.

 | fixedWidth | boolean | false | Uses the widest measured value while rotating through multiple strings.

## Credits

DiaText adapts the gradient reveal behavior from Iconiq UI Dia Text.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
