Source: https://boringui.dev/docs/input-group

InputGroup React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# InputGroup

Input field group with proximity hover and validation.

## Installation

npx shadcn@latest add https://boringui.dev/r/input-group.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

SearchSearch

## Multiple Fields

PreviewPreviewCodeCode

Inspect

NameName

EmailEmail

## Error State

PreviewPreviewCodeCode

Inspect

EmailEmail

Please enter a valid email address.

## API Reference — InputGroup

 | Prop | Type | Default | Description

 | children | ReactNode | — | InputField children.

 | axis | "x" | "y" | "xy" | "y" | Direction for proximity hover. Use "xy" for grid layouts.

## API Reference — InputField

 | Prop | Type | Default | Description

 | label | string | — | Label text above the input.

 | index | number | — | Position index within the group.

 | value | string | — | Controlled input value.

 | onChange | (value: string) => void | — | Called when the input value changes.

 | placeholder | string | — | Placeholder text.

 | icon | IconComponent | — | Leading icon inside the input.

 | leadingContent | ReactNode | — | Content inside the field before the input.

 | trailingContent | ReactNode | — | Content inside the field after the input.

 | variant | "ghost" | "filled" | "ghost" | Optional subtle field fill at rest.

 | controlClassName | string | — | Additional styles for the field container.

 | error | string | — | Error message shown below the input.

 | disabled | boolean | false | Disables the input.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
