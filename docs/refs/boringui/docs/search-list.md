Source: https://boringui.dev/docs/search-list

SearchList React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# SearchList

Command search with instant filtering, keyboard focus, and an empty state.

## Installation

npx shadcn@latest add https://boringui.dev/r/search-list.json

This component is primitive-agnostic — same source under both flavors.

## Preview

PreviewPreviewCodeCode

Inspect

Forecast summer demandFind waffle cone suppliersCompare seasonal flavorsDraft flavor launch planCheck cold-chain status

5 results available

## Source

Adapted from slev12397/beautiful-ui under the MIT License. Commercial icons were replaced and demo analytics were removed; attribution remains bundled with the component foundation.

## API Reference

 | Prop | Type | Default | Description

 | items | readonly string[] | — | Searchable options.

 | query | string | — | Controlled search value.

 | defaultQuery | string | "" | Initial query.

 | placeholder | string | — | Input placeholder.

 | onQueryChange | (query: string) => void | — | Reports query changes.

 | onSelect | (item: string) => void | — | Handles option selection.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
