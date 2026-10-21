Source: https://boringui.dev/docs

React component documentation - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# BoringUI component documentation

Install shadcn-compatible React components and learn why their interactions feel different.

### Motion that communicates

Every transition makes a state change legible. Background merges show contiguous items, proximity hover reveals your target before you click. Nothing moves for decoration — motion is information.

### Hover as preview

Interactions start before the click. Proximity highlights show where your action will land, font weight shifts give buttons a tactile quality. The interface responds to intention, not just contact.

### Spring physics, not durations

Springs replace fixed durations. If a user reverses mid-transition, the animation adapts instead of restarting. Three presets — fast, moderate, slow — cover every use case while keeping motion consistent.

### Drop-in compatible

Built on shadcn/ui with Radix and Base UI primitive flavors. Your existing theme and tokens apply automatically. One CLI command to install — dependencies resolve themselves.

## Installation

1Add the registry to your project:

npx shadcn@latest registry add @boringui

2Install any component:

npx shadcn@latest add @boringui/button

Or install directly without adding the registry:

npx shadcn@latest add https://boringui.dev/r/button.json

Dependencies and shared utilities are resolved automatically. Font weight animations require the Inter variable font.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
