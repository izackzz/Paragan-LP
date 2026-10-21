Source: https://boringui.dev/docs/thinking-orb

ThinkingOrb React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# ThinkingOrb

Six dotted 2D-canvas states for communicating agent work at avatar and inline sizes.

## Installation

npx shadcn@latest add https://boringui.dev/r/thinking-orb.json

This component is primitive-agnostic — same source under both flavors.

## Playground

PreviewPreviewCodeCode

Inspect

Searching

A scan meridian crosses a dotted globe.

WorkingSearchingSolvingListeningComposingShaping

64px20px

0.75×1×1.5×
Pause

## Six agent states

PreviewPreviewCodeCode

Inspect

Working

Particles travel along tilted orbits.

Searching

A scan meridian crosses a dotted globe.

Solving

Orbital bands scramble and settle.

Listening

A waveform rolls through latitude rings.

Composing

A soft multi-band sash undulates.

Shaping

The outline morphs between three shapes.

## Inline status

PreviewPreviewCodeCode

Inspect

Listening for your next instruction

Composing a response

## API Reference

 | Prop | Type | Default | Description

 | state | "working" | "searching" | "solving" | "listening" | "composing" | "shaping" | "working" | Selects one of six purpose-tuned agent activity animations.

 | size | 64 | 20 | 64 | Uses the avatar or inline preset. Each size has its own dot count, radius, and motion tuning.

 | theme | "auto" | "dark" | "light" | "auto" | Chooses light or dark ink automatically from an ancestor theme or the OS preference.

 | speed | number | 1 | Multiplies the selected preset's baked animation speed.

 | paused | boolean | false | Freezes the canvas on its current frame.

 | aria-label | string | — | Overrides the accessible label supplied for the selected state.

 | Canvas props | CanvasHTMLAttributes<HTMLCanvasElement> | — | Passes className, style, data attributes, and other canvas props through.

The component renders a transparent 2D canvas, caps device pixel ratio at 2, pauses while offscreen or in a hidden tab, and shows a representative static frame when reduced motion is requested.

## Credits

ThinkingOrb is powered by thinking-orbs by Jakub Antalik, released under the MIT License. The original Thinking Orbs demo credits Jakub Antalik and Alex Brinza. The upstream copyright and license notice are preserved in the distributed component source.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
