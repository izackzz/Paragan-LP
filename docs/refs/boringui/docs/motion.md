Source: https://boringui.dev/docs/motion

Motion - BoringUI design system
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Motion

Three spring speeds, and exits always move a little faster than entrances. Pick a speed and wire new motion into one shared pattern.

## Installation

npx shadcn@latest add https://boringui.dev/r/springs.json

Installs the springs lib — fast, moderate, and slow presets for shared system motion.

## Three speeds

System motion starts with one of three springs in lib/springs. Hover states and small toggles use fast. Dropdowns and tabs use moderate. Dialogs and drawers use slow. New motion should use these shared timings; legacy CSS-only fades can migrate without changing their behavior. moderateis critically damped — it lands exactly with no overshoot, so it also carries panels and sheets that must settle precisely (the mobile drawer, the merged selection backgrounds).

PreviewPreviewCodeCode

Inspect

fast0.08s · bounce 0hover, fades

moderate0.16s · bounce 0dropdowns, tabs

slow0.24s · bounce 0.12dialogs, drawers

Click a track (or replay) to fire all three springs.

## Slow in, faster out

Both modals open on spring.slow. The only difference is the close: the left exits on the same spring.slow, the right on spring.slow.exit — one tier faster. Toggle the left one first. That slight drag on the way out is exactly what you're trying to avoid.

PreviewPreviewCodeCode

Inspect

Toggle modal❌ Same exit time — drags on the way out

Toggle modal✅ Faster exit — gone a tier quicker

Toggle one, then the other — both open on spring.slow; only the close differs.

## All tokens

Click a track to see it. The ball enters right on the spring, then returns left on the exit tween. Everything lives in lib/springs — duration values belong there, not scattered through component code.

fast→ spring.fast 0.08s← spring.fast.exit 0.06s

Hover & focus ringsCheckboxRadioTooltipTable rowsCard proximityInput copySliderSelectColor pickerAccordion

moderate→ spring.moderate 0.16s bounce 0← spring.moderate.exit 0.12s

DropdownTabs indicatorSwitch thumbChat bubblesMobile drawerSidebarSelection merge / split

slow→ spring.slow 0.24s bounce 0.12← spring.slow.exit 0.16s

DialogAsk-user questionsThinking steps

### Reduced motion

All springs respect the OS setting. Wrap the app tree in <MotionConfig reducedMotion="user"> and when the user turns on reduced motion, the position changes drop out and only the opacity fades remain.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
