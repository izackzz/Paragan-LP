Source: https://boringui.dev/docs/select

Select React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Select

Animated select menu with proximity hover, bordered/borderless variants, optional leading icons, and spring-animated popover.

## Installation

npx shadcn@latest add https://boringui.dev/r/select.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

Select a fruit…

## Variants

PreviewPreviewCodeCode

Inspect

Bordered

Borderless

## With Icons

PreviewPreviewCodeCode

Inspect

## Groups

PreviewPreviewCodeCode

Inspect

Settings…

## Scrollable List

PreviewPreviewCodeCode

Inspect

Select timezone…

## Error State

PreviewPreviewCodeCode

Inspect

Select a role…Please select a role to continue.

## Disabled

PreviewPreviewCodeCode

Inspect

Disabled

Some disabled…

## API Reference — Select

 | Prop | Type | Default | Description

 | value | string | — | Controlled selected value.

 | defaultValue | string | — | Uncontrolled default value.

 | onValueChange | (value: string) => void | — | Called when the selected value changes.

 | disabled | boolean | false | Disables the entire select.

 | name | string | — | Name for form submission.

 | required | boolean | false | Marks the select as required in forms.

## API Reference — SelectTrigger

 | Prop | Type | Default | Description

 | variant | "bordered" | "borderless" | "bordered" | Visual style of the trigger.

 | icon | IconComponent | — | Optional icon displayed before the value.

 | placeholder | string | "Select…" | Text shown when no value is selected.

 | error | string | — | Error message shown below the trigger.

## API Reference — SelectItem

 | Prop | Type | Default | Description

 | index | number | — | Position index within the content for proximity hover.

 | value | string | — | Unique value for this option.

 | icon | IconComponent | — | Optional icon displayed before the label.

 | disabled | boolean | false | Disables this individual item.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
