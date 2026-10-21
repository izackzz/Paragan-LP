Source: https://boringui.dev/docs/toast

Toast React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Toast

Global notifications for confirmations, errors, and actions, with a stack that expands on hover or focus.

## Installation

npx shadcn@latest add https://boringui.dev/r/toast.json

This component is primitive-agnostic — same source under both flavors.

## Basic notifications

PreviewPreviewCodeCode

Inspect

MessageSuccessWarningInfoError

## Stack and expand

PreviewPreviewCodeCode

Inspect

Show a stack

## Action and duration

PreviewPreviewCodeCode

Inspect

Move file

## Promise states

PreviewPreviewCodeCode

Inspect

Save document

## Position and compact size

PreviewPreviewCodeCode

Inspect

Top center

Compact

## Application API

 | Prop | Type | Default | Description

 | Toaster | component | — | Mount one shared viewport near the application root.

 | toast(title, options?) | (ReactNode, ToastOptions) => string | — | Creates a default notification and returns its ID.

 | ToastOptions | description, duration, id, action, dismissible | — | Options shared by the imperative methods. Duration is in milliseconds; 0 keeps the toast open.

 | toast.success / info / warning / error / loading | (title, options?) => string | — | Creates a status notification. Loading notifications remain until updated or dismissed.

 | toast.dismiss(id?) | (id?: string) => void | — | Dismisses one notification or all notifications.

 | toast.update(id, title, options?) | (id, title, options?) => void | — | Updates an existing notification by ID.

 | toast.promise(promise, messages) | Promise<Value> | — | Shows loading and result states while returning the original promise result.

 | position | "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" | "top-center" | Viewport placement.

 | duration | number | 5000 | Default auto-dismiss delay in milliseconds; 0 keeps notifications open.

 | limit | number | 4 | Maximum notifications in the deck. Hover or focus to expand the stack.

 | container | HTMLElement | — | Portal target; defaults to document.body.

 | inline | boolean | false | Places the viewport inside its parent for bounded examples.

 | manager | ToastManager | — | An isolated manager from createBoringToastManager().

Try shared toast APIDismiss all

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
