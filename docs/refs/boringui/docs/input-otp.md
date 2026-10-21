Source: https://boringui.dev/docs/input-otp

InputOTP React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# InputOTP

A composable one-time-code input with native editing and form behavior.

## Installation

npx shadcn@latest add https://boringui.dev/r/input-otp.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

## Grouping

PreviewPreviewCodeCode

Inspect

–

## Controlled Form

PreviewPreviewCodeCode

Inspect

Verify
Use 482731 for this example.

## Disabled, Read-only, and Compact

PreviewPreviewCodeCode

Inspect

4

8

2

7

3

1

## API Reference — InputOTP

 | Prop | Type | Default | Description

 | maxLength | number | 6 | Code length and automatic slot count.

 | value | string | — | Controlled code value. Omit it to use defaultValue or internal state.

 | defaultValue | string | "" | Initial value for uncontrolled use.

 | onChange | (value: string) => void | — | Called with the complete current code after edits.

 | onComplete | (value: string) => void | — | Called whenever an edit changes the code to a complete value.

 | disabled | boolean | false | Disables the native input and dims the slots.

 | readOnly | boolean | false | Keeps the code focusable and selectable without editing.

 | invalid | boolean | false | Applies the error treatment and aria-invalid state.

 | success | boolean | false | Applies the verified success treatment.

 | name | string | — | Native form field name.

 | required | boolean | — | Native required validation for form submission.

 | autoComplete | "one-time-code" | string | "one-time-code" | Native autocomplete hint for verification codes.

 | inputMode | "numeric" | "text" | string | "numeric" | Native keyboard hint; numeric mode enables the default numeric filter.

 | size | "default" | "compact" | — | Follows the shared size context, or pins this control to a step.

 | filter | "numeric" | "none" | "numeric" unless inputMode="text" | Normalizes Unicode digits and filters non-digits, or preserves free-form text.

 | "aria-label" | string | "One-time code" | Accessible name for the single native input.

## API Reference — Slot Parts

 | Prop | Type | Default | Description

 | InputOTPGroup | children | — | Groups adjacent slots into one visual run.

 | InputOTPSlot | index: number | — | Displays the character at this zero-based position.

 | InputOTPSeparator | children? | en dash | Decorative separator between slot groups.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
