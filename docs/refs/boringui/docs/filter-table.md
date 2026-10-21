Source: https://boringui.dev/docs/filter-table

FilterTable React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# FilterTable

Status filters that reorganize live data without losing context.

## Installation

npx shadcn@latest add https://boringui.dev/r/filter-table.json

This component is primitive-agnostic — same source under both flavors.

## Preview

PreviewPreviewCodeCode

Inspect

AllAll5To doTo do2In ProgressIn Progress2CompletedCompleted1

Showing 5 of 5 tasks

Tasks grouped by workflow status
 | Task name | Date | Status | Advisor

 | Restock mango sorbet | Dec 03 | To do | Mango Moon Gelato

 | Churn black sesame | Sep 22 | In Progress | Kumo Creamery

 | Print summer menu | Jan 02 | To do | Coral Coast Sorbet

 | Taste-test batch 42 | Nov 08 | In Progress | Maple Orbit

 | Order waffle cones | Apr 14 | Completed | Aurora Scoops

## Source

Adapted from slev12397/beautiful-ui under the MIT License. Commercial icons were replaced and demo analytics were removed; attribution remains bundled with the component foundation.

## API Reference

 | Prop | Type | Default | Description

 | rows | FilterTableRow[] | — | Task rows to display.

 | filter | FilterTableFilter | — | Controlled status filter.

 | defaultFilter | FilterTableFilter | "all" | Initial uncontrolled filter.

 | onFilterChange | (filter: FilterTableFilter) => void | — | Reports filter changes.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
