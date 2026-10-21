Source: https://boringui.dev/docs/slider

Slider React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Slider

Two variants: compact (spring-snapped thumb with track fill and range mode) and comfortable (pip-based discrete selector for settings panels).

## Installation

npx shadcn@latest add https://boringui.dev/r/base/slider.json

Installs the Base UI flavor. Switch in the right panel.

## Compact

PreviewPreviewCodeCode

Inspect

10025

## Range

PreviewPreviewCodeCode

Inspect

100 — 10025—75

## Steps

PreviewPreviewCodeCode

Inspect

10050

10050

## Value Display

PreviewPreviewCodeCode

Inspect

Volume: 100Volume: 40

Volume: 100Volume: 60

## Format

PreviewPreviewCodeCode

Inspect

Opacity: 100%Opacity: 75%

## Disabled

PreviewPreviewCodeCode

Inspect

10050

## Comfortable

PreviewPreviewCodeCode

Inspect

Roundness2

Roundness2

## Comfortable — Scrubber

PreviewPreviewCodeCode

Inspect

Volume

50%

## Comfortable — Format

PreviewPreviewCodeCode

Inspect

QualityMedium

QualityMedium

## Comfortable — Disabled

PreviewPreviewCodeCode

Inspect

Roundness2

Roundness2

## API Reference

Slider

 | Prop | Type | Default | Description

 | value | number | [number, number] | — | Current value. Pass an array to enable range mode with two thumbs.

 | onChange | (value: SliderValue) => void | — | Called when the value changes via drag, click, or keyboard.

 | min | number | 0 | Minimum value.

 | max | number | 100 | Maximum value.

 | step | number | 1 | Step increment. Thumb snaps to the nearest step during drag.

 | showSteps | boolean | false | Render dot indicators at each step position on the track.

 | showValue | boolean | true | Whether to display the current value label.

 | valuePosition | "left" | "right" | "top" | "bottom" | "tooltip" | "left" | Position of the value label. "tooltip" shows above the thumb during interaction.

 | formatValue | (v: number) => string | String | Custom formatter for the value label.

 | label | string | — | Accessible label for the slider, also shown as prefix in the value display.

 | disabled | boolean | false | Disables all interaction.

SliderComfortable

 | Prop | Type | Default | Description

 | value | number | — | Current selected value.

 | onChange | (value: number) => void | — | Called when the value changes via click, drag, or keyboard.

 | min | number | 0 | Minimum value.

 | max | number | 100 | Maximum value.

 | variant | "pips" | "scrubber" | "pips" | Visual mode. "pips" shows discrete dot indicators. "scrubber" shows no dots — drag anywhere in the row to set a continuous value.

 | step | number | 1 | Step increment for snapping. In pips mode, also determines the number of dots rendered.

 | label | string | — | Label shown on the left side. Transitions from muted to foreground on hover.

 | formatValue | (v: number) => string | String | Custom formatter for the value shown on the right.

 | disabled | boolean | false | Disables all interaction.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
