Source: https://boringui.dev/docs/color-picker

ColorPicker React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Color Picker

Color picker with HEX, RGB, HSL, and OKLCH formats, alpha channel, optional swatches, and an eyedropper. Available as an inline panel or popover.

## Installation

npx shadcn@latest add https://boringui.dev/r/color-picker.json

This component is primitive-agnostic — same source under both flavors.

## Default

PreviewPreviewCodeCode

Inspect

HEX

#

## Popover

PreviewPreviewCodeCode

Inspect

FillFFFFFF

## With Swatches

PreviewPreviewCodeCode

Inspect

HEX

#

## OKLCH Format

PreviewPreviewCodeCode

Inspect

OKLCH

## Controlled

PreviewPreviewCodeCode

Inspect

HEX

#

Current: #3b82f6

## Removable Trigger

PreviewPreviewCodeCode

Inspect

Fill10B981

## Eyedropper Support

The eyedropper uses the native window.EyeDropper API (Chromium-based browsers). It is automatically hidden in browsers that do not support it.

## ColorPicker Props

 | Prop | Type | Default | Description

 | value | string | — | Controlled color value (any of the supported formats).

 | defaultValue | string | "#ff0000" | Initial color when uncontrolled.

 | onValueChange | (value, parsed) => void | — | Fired on every change. Receives the formatted string and a parsed color object with all formats.

 | format | "hex" | "rgb" | "hsl" | "oklch" | — | Controlled format selection.

 | defaultFormat | "hex" | "rgb" | "hsl" | "oklch" | "hex" | Initial format when uncontrolled.

 | onFormatChange | (format) => void | — | Fired when the user switches format.

 | swatches | string[] | — | Optional preset swatches. When omitted, the strip is hidden.

 | hideEyedropper | boolean | false | Force-hide the eyedropper button (it is automatically hidden in unsupported browsers).

## ColorPickerPopover Props

 | Prop | Type | Default | Description

 | triggerLabel | string | — | Optional label rendered alongside the color tile.

 | triggerLabelPosition | "left" | "right" | "left" | Position of the label relative to the color tile.

 | triggerShowValue | boolean | true | Show the hex value (without alpha) next to the tile.

 | triggerShowRemove | boolean | false | Render an X button on the trigger.

 | onTriggerRemove | () => void | — | Fired when the X button is clicked.

 | triggerClassName | string | — | Custom classes on the trigger button.

 | ...ColorPickerProps | ColorPickerProps | — | All ColorPicker props are forwarded to the panel.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
