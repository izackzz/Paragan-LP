Source: https://boringui.dev/docs/number-flow

NumberFlow React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# NumberFlow

Accessible animated numbers with digit wheels, Intl formatting, and reduced-motion support.

## Installation

npx shadcn@latest add https://boringui.dev/r/number-flow.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

1,2841,284Add visitors

## Formatting

PreviewPreviewCodeCode

Inspect

$12,480$12,480+8.4%+8.4%

## Timing and direction

PreviewPreviewCodeCode

Inspect

4242
DecreaseIncrease

## API Reference

 | Prop | Type | Default | Description

 | value | number | bigint | — | The numeric value to render. Changes transition automatically.

 | format | Intl.NumberFormatOptions | — | Formatting options for the rendered number, such as currency or compact notation.

 | locales | Intl.LocalesArgument | — | Locale or locale list passed to Intl.NumberFormat.

 | prefix / suffix | string | — | Static text placed before or after the formatted value.

 | trend | number | (oldValue, value) => number | Math.sign(value - oldValue) | Controls whether digit wheels travel up, down, or choose their shortest independent path.

 | transformTiming / spinTiming / opacityTiming | EffectTiming | — | Web Animations timing objects for layout, digit spin, and added or removed characters.

 | animated | boolean | true | Disables current and future transitions when set to false.

 | respectMotionPreference | boolean | true | Honors the user's reduced-motion preference by default.

## Credits

NumberFlow is powered by NumberFlow for React by Maxwell Barvian, released under the MIT License.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
