Source: https://boringui.dev/docs/slot-text

SlotText React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# SlotText

Per-character text roll animation for short labels, statuses, and commands.

## Installation

npx shadcn@latest add https://boringui.dev/r/slot-text.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

## Direction

PreviewPreviewCodeCode

Inspect

Toggle

## Timing

PreviewPreviewCodeCode

Inspect

Toggle

## API Reference

 | Prop | Type | Default | Description

 | text | string | — | The rendered text. Changing this value rolls the characters into place.

 | direction | "up" | "down" | "down" | "down" enters from above. "up" enters from below.

 | stagger | number | 35 | Delay between characters in milliseconds.

 | duration | number | 240 | Per-character animation duration in milliseconds.

 | skipUnchanged | boolean | true | Keeps matching characters still when the text changes.

## Credits

SlotText adapts the character-slot animation model from Danilaa1/slot-text, released under the MIT License by Daniel Belyi.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
