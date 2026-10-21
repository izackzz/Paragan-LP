Source: https://boringui.dev/docs/fine-tune-card

FineTuneCard React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# FineTuneCard

Inspector card for an agent adjusting visual design properties.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/fine-tune-card.json

Installs the Base UI flavor. Switch in the right panel.

## Preview

PreviewPreviewCodeCode

Inspect

Flavor cardFlavor card
Adjust

Layout

Width (px)Width (px)
W

Height (px)Height (px)
H

Radius (px)Radius (px)
Radius

Opacity (%)Opacity (%)
Opacity%

Type
Select type

## Source

Adapted from slev12397/beautiful-ui under the MIT License. Recomposed with BoringUI Card, Button, InputGroup, and Select. Attribution remains bundled with the component source.

## API Reference

 | Prop | Type | Default | Description

 | defaultValues | Partial<FineTuneValues> | — | Initial inspector values.

 | onChange | (values: FineTuneValues) => void | — | Reports inspector value changes.

 | size | "default" | "compact" | — | Pins the surrounding card size. Inspector controls retain their compact dimensions.

 | className | string | — | Additional card styles.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
