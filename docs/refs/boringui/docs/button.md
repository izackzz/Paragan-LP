Source: https://boringui.dev/docs/button

Button React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Button

Versatile button with variants, sizes, loading state, and icon support.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/button.json

Installs the Base UI flavor. Switch in the right panel.

## Variants

PreviewPreviewCodeCode

Inspect

PrimarySecondaryTertiaryGhost

## Sizes

PreviewPreviewCodeCode

Inspect

SmallMediumLarge

## With Icons

PreviewPreviewCodeCode

Inspect

CreateNextSearch

## Loading & Disabled

PreviewPreviewCodeCode

Inspect

Click meSavingDisabled

## API Reference

 | Prop | Type | Default | Description

 | variant | "primary" | "secondary" | "tertiary" | "ghost" | "primary" | Visual style of the button.

 | size | "sm" | "md" | "lg" | "icon-sm" | "icon" | "icon-lg" | "md" | Size of the button.

 | loading | boolean | false | Shows a spinner and disables the button.

 | leadingIcon | IconComponent | — | Icon displayed before the label.

 | trailingIcon | IconComponent | — | Icon displayed after the label.

 | asChild | boolean | false | Merge props onto the child element instead of rendering a <button>.

 | disabled | boolean | false | Disables the button.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
