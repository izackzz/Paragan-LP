Source: https://boringui.dev/docs/progressive-blur

ProgressiveBlur React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# ProgressiveBlur

A pointer-transparent edge overlay whose blur strength increases through overlapping CSS masks.

## Installation

npx shadcn@latest add https://boringui.dev/r/progressive-blur.json

This component is primitive-agnostic — same source under both flavors.

## Scrollable edges

PreviewPreviewCodeCode

Inspect

Research

### Read the surface behind the overlay

Backdrop blur samples live pixels, so gradients, text, and motion keep their character instead of flattening into a screenshot.

Prototype

### Let bands overlap

A soft mask on each blur radius hides the hand-off. The eye reads one continuous increase instead of five separate filters.

Polish

### Finish with the page color

The final transparent-to-surface gradient covers the noisy edge where backdrop-filter can otherwise shimmer during scroll.

Ship

### Keep the overlay non-interactive

The component is decorative and pointer-transparent, so links, text selection, and scroll gestures continue to reach the content.

The overlays sit outside the scroll container, so they remain anchored while the content moves underneath. They are always decorative, aria-hidden, and pointer-transparent.

## Performance profiles

PreviewPreviewCodeCode

Inspect

01
Strategy review

02
Design critique

03
Release notes

04
Team updates

Balanced · 5 layers

LightBalancedDeep

Five layers ending at 10px are the balanced default. Prefer one layer for large or frequently repainted regions; reserve stronger seven-layer profiles for small, opt-in surfaces.

## API Reference

 | Prop | Type | Default | Description

 | position | "top" | "bottom" | "bottom" | Edge where the blur and surface fade become strongest.

 | height | number | string | 160 | Height of the overlay. Numbers are interpreted as pixels.

 | blurAmount | number | 10 | Strongest blur radius in pixels, clamped between 0 and 64.

 | layers | number | 5 | Overlapping blur bands, clamped from 1 to 8. One uses the lightweight variant.

 | backgroundColor | string | "var(--background)" | Surface color blended into the strongest edge to hide filter artifacts.

 | fixed | boolean | false | Positions the overlay against the viewport instead of its nearest ancestor.

 | fade | boolean | true | Adds the transparent-to-surface gradient above the blur bands.

 | className / style | string / ProgressiveBlurStyle | — | Native div styling, including a typed surface-color CSS variable.

## Credits

ProgressiveBlur is informed by Skiper UI's Progressive Blur, including its lightweight single-layer treatment and performance guidance, and by Kenneth Nym's layered CSS technique. Skiper UI credits Devouring Details as the inspiration for its version. This component generates its own overlapping masks, adds bounded performance profiles, and remains pointer-transparent by contract.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
