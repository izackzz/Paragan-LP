Source: https://boringui.dev/docs/blur-number

BlurNumber React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# BlurNumber

Changed digits slide and blur into place while unchanged digits remain crisp and still.

## Installation

npx shadcn@latest add https://boringui.dev/r/blur-number.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

Monthly visitors
1,204,837

-7+1+137Randomize

## Formatting

PreviewPreviewCodeCode

Inspect

Revenue$4,999.00+$499.99

Conversion42.0%+0.7%

## Blur and timing

PreviewPreviewCodeCode

Inspect

8px · 320ms12,480

21px · 560ms12,480

Compare transition

## API Reference

 | Prop | Type | Default | Description

 | value | number | — | The numeric value to format. Changed character slots animate automatically.

 | format | Intl.NumberFormatOptions | — | Formatting options such as grouping and fixed fraction digits.

 | locale | string | "en-US" | Locale passed to Intl.NumberFormat. Keep it fixed for SSR consistency.

 | prefix / suffix | ReactNode | — | Content rendered before or after the formatted number.

 | duration | number | 450 | Duration of the slide, spring settle, and blur transition in milliseconds.

 | blur | number | 21 | Peak blur in pixels. Set it to 0 for a crisp changed-character slide.

 | style | BlurNumberStyle | — | Native span styles plus "--bui-blur-number-distance" for travel-distance tuning.

 | aria-label | string | — | Overrides the generated accessible value when a non-text prefix or suffix needs context.

## Credits

BlurNumber is adapted from animated-blur-number by serafim, released under the MIT License. See the original demo. For continuous digit wheels, formatting plugins, and grouped transitions, use NumberFlow.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
