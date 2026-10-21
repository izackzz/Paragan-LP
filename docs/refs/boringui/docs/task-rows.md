Source: https://boringui.dev/docs/task-rows

TaskRows React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# TaskRows

Live agent task status for running, failed, and completed work.

## Installation

npx shadcn@latest add https://boringui.dev/r/task-rows.json

This component is primitive-agnostic — same source under both flavors.

## Preview

CapsulesCapsulesListList

PreviewPreviewCodeCode

Inspect

Verified vendor records12 suppliersCompleted

2Build reorder task list7 SKUs

3Draft supplier emails2 messages

## Source

Adapted from slev12397/beautiful-ui under the MIT License. Commercial icons were replaced and demo analytics were removed; attribution remains bundled with the component foundation.

## API Reference

 | Prop | Type | Default | Description

 | variant | "Capsules" | "List" | "Capsules" | Task row presentation.

 | demo | boolean | false | Plays the staged task lifecycle.

 | onTaskToggle | (taskKey: string, expanded: boolean) => void | — | Reports task disclosure changes.

 | onStatusChange | (taskKey: string, status: TaskRowStatus) => void | — | Reports task lifecycle changes.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
