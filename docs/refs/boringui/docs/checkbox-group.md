Source: https://boringui.dev/docs/checkbox-group

CheckboxGroup React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# CheckboxGroup

Checkbox group with merged backgrounds for contiguous selections.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/checkbox-group.json

Installs the Base UI flavor. Switch in the right panel.

## Basic

PreviewPreviewCodeCode

Inspect

ApplesApples

BananasBananas

CherriesCherries

DatesDates

## API Reference — CheckboxGroup

 | Prop | Type | Default | Description

 | checkedIndices | Set<number> | — | Set of checked item indices. Used for merged background rendering.

 | children | ReactNode | — | CheckboxItem children.

## API Reference — CheckboxItem

 | Prop | Type | Default | Description

 | label | string | — | Text label for the checkbox.

 | index | number | — | Position index within the group.

 | checked | boolean | — | Whether this item is checked.

 | onToggle | () => void | — | Called when this item is toggled.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
