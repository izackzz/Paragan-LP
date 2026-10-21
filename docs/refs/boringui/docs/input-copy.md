Source: https://boringui.dev/docs/input-copy

InputCopy React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# InputCopy

Read-only input with a copy-to-clipboard button and animated check feedback.

## Installation

npx shadcn@latest add https://boringui.dev/r/input-copy.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

npx shadcn@latest add https://boringui.dev/r/input-copy.json

## With Label

PreviewPreviewCodeCode

Inspect

Install commandnpx shadcn@latest add https://boringui.dev/r/input-copy.json

## Button Variant

PreviewPreviewCodeCode

Inspect

npx shadcn@latest add https://boringui.dev/r/input-copy.jsonCopiedCopy

## Left Aligned

PreviewPreviewCodeCode

Inspect

npx shadcn@latest add https://boringui.dev/r/input-copy.json

CopiedCopynpx shadcn@latest add https://boringui.dev/r/input-copy.json

## Disabled

PreviewPreviewCodeCode

Inspect

Invite codeABCD-1234-EFGH

## Copy Callback

PreviewPreviewCodeCode

Inspect

Share linkhttps://boringui.dev/r/input-copy

Copied 0 times

## API Reference

 | Prop | Type | Default | Description

 | value | string | — | The text value to display and copy to clipboard.

 | label | string | — | Optional label displayed above the input.

 | variant | "icon" | "button" | "icon" | Icon-only with tooltip, or button with visible label.

 | align | "right" | "left" | "right" | Position of the copy action relative to the value.

 | onCopy | () => void | — | Callback fired after the value is successfully copied.

 | disabled | boolean | false | Disables the input and copy button.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
