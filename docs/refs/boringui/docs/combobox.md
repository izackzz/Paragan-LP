Source: https://boringui.dev/docs/combobox

Combobox React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Combobox

Type to filter a list. One pick, or chips.

## Installation

npx shadcn@latest add https://boringui.dev/r/combobox.json

This component is primitive-agnostic — same source under both flavors.

## Basic

Options live on the root, while ComboboxList renders the rows. Type, then press Enter to choose the highlighted option.

PreviewPreviewCodeCode

Inspect

## With icons

PreviewPreviewCodeCode

Inspect

## Multiple selection

ComboboxChips keeps each selection visible and supports Backspace removal when the query is empty.

PreviewPreviewCodeCode

Inspect

Next.jsAstro

## Create from the query

PreviewPreviewCodeCode

Inspect

Next.js

## States

PreviewPreviewCodeCode

Inspect

Pick a framework to continue.

## API Reference — Combobox

 | Prop | Type | Default | Description

 | items | readonly (string | { value: string; label: string })[] | — | Options. Strings use the same value and label; objects can carry richer row data.

 | multiple | boolean | false | Allow multiple picks; values become string[].

 | value / defaultValue | string | string[] | — | Controlled or initial selection.

 | onValueChange | (value: string | string[]) => void | — | Called when the selection changes.

 | filter | (item, query: string) => boolean | — | Custom matching function; the default is case-insensitive label matching.

 | onCreate | (query: string) => item | void | — | Create a final option from a query that has no exact label match.

 | hideSelected | boolean | false | Multiple mode only: remove selected options from the list.

 | disabled / name / required | boolean / string / boolean | — | Disable the field or expose a form field with native required semantics.

## API Reference — field parts

 | Prop | Type | Default | Description

 | variant | "bordered" | "borderless" | "bordered" | Field surface treatment.

 | icon | IconComponent | — | Leading icon.

 | placeholder | string | "Search…" | Prompt shown while empty.

 | error | string | — | Validation message and aria-invalid state.

 | clearable / size | boolean / "default" | "compact" | — | Reserve a clear affordance and choose a size-ladder step.

## API Reference — content and list

 | Prop | Type | Default | Description

 | children | (item, index: number) => ReactNode | — | Render one item row for each filtered option.

 | side / align / sideOffset | "top" | "bottom" / "start" | "center" | "end" / number | — | Control popup placement relative to the field.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
