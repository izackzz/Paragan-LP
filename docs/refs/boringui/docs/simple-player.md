Source: https://boringui.dev/docs/simple-player

SimplePlayer React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# SimplePlayer

A focused React video player with lazy loading, glass controls, and accessible playback interactions.

## Installation

npx shadcn@latest add https://boringui.dev/r/simple-player.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

## Full controls

PreviewPreviewCodeCode

Inspect

0:00

## Keyboard

Focus the player and press Space, Enter, or K to toggle playback.

The progress and volume sliders retain native keyboard behavior, including arrow, Home, and End keys.

## API Reference

 | Prop | Type | Default | Description

 | src | string | — | Video URL. Attached lazily as the player approaches the viewport.

 | aspectRatio | CSSProperties['aspectRatio'] | "16 / 9" | CSS aspect ratio used by the player shell.

 | controls | boolean | false | Shows volume, Picture-in-Picture, and fullscreen controls.

 | showTime | boolean | false | Shows elapsed/remaining time, or a scrub tooltip without the control tray.

 | pauseOnOverlayClick | boolean | false | Toggles playback when the non-control video surface is clicked.

 | preloadMargin | string | "360px 0px" | IntersectionObserver root margin for lazy source loading.

 | defaultVolume | number | 1 | Initial volume from 0 to 1.

 | label | string | "Video player" | Accessible name for the player group.

 | autoPlay | boolean | true | Starts playback when browser autoplay policy permits it.

 | loop | boolean | true | Loops the video.

 | muted | boolean | true | Initial muted state. Muted playback is required by most autoplay policies.

## Credits

SimplePlayer adapts the visual language and interaction model of SimplePlayer by Grizz. The original source is MIT licensed; its copyright and permission notice are preserved in the component source.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
