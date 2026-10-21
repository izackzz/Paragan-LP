Source: https://boringui.dev/docs/banner

Banner React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Banner

A status message: 1 colored icon, a title, an optional description and up to 3 actions.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/banner.json

Installs the Base UI flavor. Switch in the right panel.

## Playground

PreviewPreviewCodeCode

Inspect

Inter is missing its opsz axis

Labels shift when their weight changes. Load the variable font file with its optical-size axis.

Show the fixRead the guide

## Statuses

5 statuses, 2 contrasts. Low colors only the icon; high washes the whole banner.

PreviewPreviewCodeCode

Inspect

Low contrast

Default

Info

Success

Warning

Error

High contrast

Default

Info

Success

Warning

Error

## Actions

3 variants. Primary sits at the edge next to a one-line title, and leads under a description.

PreviewPreviewCodeCode

Inspect

Enjoying BoringUI?

Star on GitHubShareLater

The registry has new components

Run the install command again to pull the latest versions.

Copy commandWhat's newLater

## Fixed

variant="fixed" runs edge to edge under your header. Scroll the content: the bar stays put. Press ✕: it closes and the content slides up.

PreviewPreviewCodeCode

Inspect

Registry maintenance tonight at 22:00 UTC

Details

## Custom icon

icon swaps in any icon, drawn in the status color.

PreviewPreviewCodeCode

Inspect

3 new components since your last visit

## API Reference: Banner

 | Prop | Type | Default | Description

 | status | "default" | "info" | "success" | "warning" | "error" | "default" | Sets the color and the icon.

 | contrast | "low" | "high" | "low" | low colors only the icon. high tints the whole banner.

 | variant | "inline" | "fixed" | "inline" | fixed spans the full width and sticks to the top.

 | icon | IconComponent | — | Replaces the status icon.

 | dismissible | boolean | false | Shows a ✕ button.

 | onDismiss | () => void | — | Called when the ✕ is pressed.

 | dismissLabel | string | "Dismiss" | Label read by screen readers for the ✕.

 | open | boolean | — | Controls visibility. Without it, the ✕ hides the banner.

 | size | "default" | "compact" | from SizeProvider | Default or compact.

## API Reference: Parts

 | Prop | Type | Default | Description

 | BannerTitle | part | — | The message.

 | BannerDescription | part | — | Optional text under the title.

 | BannerActions | part | — | Up to 3 BannerAction. Primary sits at the edge, or first under a description.

## API Reference: BannerAction

 | Prop | Type | Default | Description

 | variant | "primary" | "secondary" | "ghost" | "secondary" | The button style.

 | href | string | — | Renders a link instead of a button.

 | external | boolean | false | Opens the link in a new tab.

 | onClick | (event) => void | — | Called on click.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
