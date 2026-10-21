Source: https://boringui.dev/docs/shader-sweep

ShaderSweep React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# ShaderSweep

A self-contained WebGL transition band for masking meaningful view and state changes.

## Installation

npx shadcn@latest add https://boringui.dev/r/shader-sweep.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

Release 2.4Draft

Ready for review

Make the state change feel earned.

The content swaps at the band's midpoint, when visual attention is highest.
Publish

## Palette and direction

PreviewPreviewCodeCode

Inspect

Release 2.4Draft

Ready for review

Make the state change feel earned.

The content swaps at the band's midpoint, when visual attention is highest.
Publish

This preview advances to the next palette and direction at midpoint. Use position="absolute" for contained demos; the default fixed canvas covers the viewport.

## API Reference

 | Prop | Type | Default | Description

 | palette | Preset | readonly [string, string, string] | "aurora" | Five included palettes or a custom three-stop hex tuple.

 | direction | "left" | "right" | "up" | "down" | "right" | Direction the shader band travels.

 | duration | number | 900 | Band traversal time in milliseconds.

 | fadeDuration | number | 300 | Fade time after the band reaches the far edge.

 | midpoint | number | 0.52 | Progress point from 0 to 1 at which onMidpoint runs.

 | bandSize | number | 0.18 | Normalized band width. Lower values create a tighter beam.

 | intensity | number | 1 | Alpha and brightness multiplier from 0 to 1.5.

 | ripple | number | 0.45 | Edge displacement from 0 to 1.5. Use 0 for a straight band.

 | easing | "linear" | "ease-out" | "ease-in-out" | EasingFn | "ease-in-out" | Traversal curve. Custom functions receive progress from 0 to 1.

 | position | "fixed" | "absolute" | "fixed" | Covers the viewport or fills the nearest positioned parent.

 | reducedMotion | "skip" | "animate" | "skip" | Honors prefers-reduced-motion unless explicitly forced.

 | onMidpoint | () => void | Promise<void> | — | Swap the underlying view while the shader masks the change.

 | onComplete | () => void | — | Runs after traversal and fade finish.

The forwarded ref exposes play(options?) and cancel(). A play call returns separate midpoint and finished promises plus its own cancel function.

## Credits

ShaderSweep is inspired by glimm, the shader-driven transition library by Noman Ijaz. glimm is released under the MIT License; its copyright and license notice are preserved in the component source.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
