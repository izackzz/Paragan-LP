Source: https://boringui.dev/docs/radio-group

RadioGroup React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# RadioGroup

Radio button group with proximity hover and animated selection.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/radio-group.json

Installs the Base UI flavor. Switch in the right panel.

## Basic

PreviewPreviewCodeCode

Inspect

Option AOption A

Option BOption B

Option COption C

## API Reference — RadioGroup

 | Prop | Type | Default | Description

 | selectedIndex | number | — | Index of the currently selected item.

 | children | ReactNode | — | RadioItem children.

## API Reference — RadioItem

 | Prop | Type | Default | Description

 | label | string | — | Text label for the radio item.

 | index | number | — | Position index within the group.

 | selected | boolean | — | Whether this item is selected.

 | onSelect | () => void | — | Called when this item is selected.

 | value | string | — | Optional Radix value for form integration.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
