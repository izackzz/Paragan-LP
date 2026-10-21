Source: https://boringui.dev/docs/tooltip

Tooltip React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Tooltip

Floating tooltip with spring-based animations, configurable placement, and rich content support.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/tooltip.json

Installs the Base UI flavor. Switch in the right panel.

## Basic

PreviewPreviewCodeCode

Inspect

Hover me

## Placement

PreviewPreviewCodeCode

Inspect

TopRightBottomLeft

## Rich Content

PreviewPreviewCodeCode

Inspect

Save

## Delay

PreviewPreviewCodeCode

Inspect

No delay500ms delay

## API Reference

 | Prop | Type | Default | Description

 | content | ReactNode | — | The content displayed inside the tooltip.

 | children | ReactElement | — | The trigger element. Must accept a ref.

 | side | "top" | "right" | "bottom" | "left" | "top" | Preferred side of the trigger to render the tooltip.

 | sideOffset | number | 8 | Distance in pixels between the tooltip and the trigger.

 | delayDuration | number | 200 | Milliseconds to wait before showing the tooltip on hover.

 | className | string | — | Additional classes applied to the tooltip content container.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
