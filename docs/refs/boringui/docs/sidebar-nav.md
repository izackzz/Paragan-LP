Source: https://boringui.dev/docs/sidebar-nav

SidebarNav React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# SidebarNav

Collapsible workspace and chat navigation with gliding hover states.

## Installation

npx shadcn@latest add https://boringui.dev/r/sidebar-nav.json

This component is primitive-agnostic — same source under both flavors.

## Preview

PreviewPreviewCodeCode

Inspect

Creamery Ops

New chatHomeInvite users3/10

Chats

Supplier recordsUrgent to-dos this morningFlavor page ticketWorkload summaryOff-board a supplierBatch restock functionPropose flavor editsSubway surfing

Upgrade

## Source

Adapted from slev12397/beautiful-ui under the MIT License. Commercial icons were replaced and demo analytics were removed; attribution remains bundled with the component foundation.

## API Reference

 | Prop | Type | Default | Description

 | activeTitle | string | null | — | Controlled active chat title.

 | activeNav | string | — | Controlled primary navigation key.

 | recents | SidebarRecent[] | — | Recent chat entries.

 | fill | boolean | false | Fills available height.

 | footerLabel | string | "Upgrade" | Footer CTA label.

 | onNavigate | (key: string) => void | — | Handles navigation.

 | onPick | (id: string, label: string, prompt?: string) => void | — | Handles a recent chat selection.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
