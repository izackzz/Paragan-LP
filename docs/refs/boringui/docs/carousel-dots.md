Source: https://boringui.dev/docs/carousel-dots

CarouselDots React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# CarouselDots

Dots for a carousel, static or on autoplay.

## Installation

npx shadcn@latest add https://boringui.dev/r/carousel-dots.json

This component is primitive-agnostic — same source under both flavors.

## Static

Hover a dot to see its click area, then click it. The highlight glides from dot to dot.

PreviewPreviewCodeCode

Inspect

Inbox

## Autoplay

Add autoplay and the pill fills, then the next slide comes in. Hover the slide to pause. Reduced motion turns the timer off.

PreviewPreviewCodeCode

Inspect

Inbox

## API Reference

 | Prop | Type | Default | Description

 | count | number | — | How many dots to show.

 | value | number | — | Index of the current dot.

 | onValueChange | (index: number) => void | — | Called with a clicked dot's index, and with the next index each time autoplay finishes a slide.

 | autoplay | boolean | { duration?, paused?, loop? } | — | The current pill fills over duration (default 3000ms), then the next slide comes in. paused holds the fill; loop (default true) wraps to the first slide. Omit for a static, solid pill.

 | progress | number | MotionValue<number> | — | Drive the fill yourself, 0 to 1, when something else owns the clock. Takes precedence over autoplay.

 | getLabel | (index: number) => string | "Go to slide N" | Accessible name for each dot.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
