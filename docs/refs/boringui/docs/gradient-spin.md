Source: https://boringui.dev/docs/gradient-spin

GradientSpin React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# GradientSpin

A zero-dependency matrix loader swept by a gradient wavefront.

## Installation

npx shadcn@latest add https://boringui.dev/r/gradient-spin.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

Syncing workspacePreparing the latest changes

## Gradient and pattern

PreviewPreviewCodeCode

Inspect

ArrowDiagonalSnakeRipple

Every cell shares one opacity-only CSS keyframe. Negative delays place the wave in steady state on first paint, while OKLab sampling keeps multi-stop gradients vivid.

## API Reference

 | Prop | Type | Default | Description

 | gradient | GradientPresetName | readonly GradientStop[] | "sunrise" | Built-in palette or custom positioned hex color stops.

 | pattern | "arrow-up" | "diagonal" | "snake" | "ripple" | "arrow-up" | Wavefront path across the cell matrix.

 | rows | number | 3 | Number of rows in the matrix.

 | cols | number | 3 | Number of columns in the matrix.

 | cellSize | number | 4 | Cell edge length in pixels.

 | cellGap | number | 2 | Gap between cells in pixels.

 | cellRadius | number | 1 | Cell corner radius in pixels.

 | period | number | 750 | Duration of one wave sweep in milliseconds.

 | dim | number | 0.1 | Resting opacity outside the active wavefront.

 | colorBy | "row" | "path" | "row" | Maps the gradient top-to-bottom or along the wave path.

 | label | string | "Loading" | Accessible label announced for the status indicator.

 | respectReducedMotion | boolean | true | Freezes cells to a static mid-state when reduced motion is requested.

## Credits

GradientSpin is adapted from gradient-spin by ziye (@mona_biasia). The original source is MIT licensed; its copyright and license notice are preserved in the component source.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
