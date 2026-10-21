Source: https://boringui.dev/docs/wobble

Wobble React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Wobble

A zero-dependency SVG displacement wrapper for giving text, media, and annotations an organic printed edge.

## Installation

npx shadcn@latest add https://boringui.dev/r/wobble.json

This component is primitive-agnostic — same source under both flavors.

## Live field

PreviewPreviewCodeCode

Inspect

Field note · issue 08Ideas need rough edges.Fractal noise bends the rendered pixels while the document structure stays put.

Strength6Frequency0.035Octaves3Seed8

The original three controls map directly to feDisplacementMap strength and feTurbulence frequency and octaves. Seed adds a stable way to vary the texture between instances.

## With NeatAnnotation

PreviewPreviewCodeCode

Inspect

Copy review
Ship after the reviewone final passone final pass.

Visual QA
Keep the human edgeintentionally unevenintentionally uneven.

Put Wobble inside NeatAnnotation when only the target should distort. The annotation arrow, note, layout bounds, and accessible description remain crisp and stable.

## Tuning and fallback

PreviewPreviewCodeCode

Inspect

distortedplain

Start near the 2 / 0.05 / 2 defaults. Large areas and high octave counts cost more to render. Forced-colors and print output automatically remove the distortion without hiding the content.

## Accessibility

Wobble changes pixels only: child text, links, controls, names, and descriptions stay in the accessibility tree. Keep strength low on dense text so the visual treatment does not reduce legibility, and use disabled when the surrounding state calls for an unfiltered presentation.

## API Reference

 | Prop | Type | Default | Description

 | children | ReactNode | — | Inline content, media, or another component receiving the SVG filter.

 | strength | number | 2 | Displacement distance, clamped from 0 to 40 SVG units.

 | frequency | number | 0.05 | Noise density, clamped from 0.001 to 0.5. Lower values make broader bends.

 | octaves | number | 2 | Noise detail passes, rounded and clamped from 1 to 5.

 | seed | number | 0 | Stable integer variation of the noise field, clamped from 0 to 999.

 | filterMargin | number | 20 | Extra filter region around the target, measured as a percentage of its bounds.

 | disabled | boolean | false | Keeps the wrapper and child semantics intact while removing the visual filter.

 | className / style | string / CSSProperties | — | Native span styling. Set display to block when wrapping full-width media.

## Credits

The visual technique is inspired by Wobble by wehwayne2. The Pen does not publish an explicit source-code license, so this component independently reimplements the effect with standard SVG primitives rather than redistributing its code.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
