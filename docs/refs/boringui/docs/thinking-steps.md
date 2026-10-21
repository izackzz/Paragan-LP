Source: https://boringui.dev/docs/thinking-steps

ThinkingSteps React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# ThinkingSteps

Chain-of-thought reasoning display with collapsible steps, sequential animation, source badges, and image support.

## Installation

npx shadcn@latest add https://boringui.dev/r/thinking-steps.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

ThinkingThinking

Searched the web

Read 3 sources

Explored 6 filesExplored 6 files

Done

## Minimal

The simplest usage — two dots with no children or extras.

PreviewPreviewCodeCode

Inspect

ThinkingThinking

Ran a command

Done

## Streaming

Steps appear sequentially as they stream in. Active steps show a shimmer effect.

PreviewPreviewCodeCode

Inspect

ThinkingThinking

## Streaming Text

Dots with long descriptions that stream in character by character, simulating LLM output.

PreviewPreviewCodeCode

Inspect

ThinkingThinking

## With Images

Steps can include inline images with optional captions using ThinkingStepImage.

PreviewPreviewCodeCode

Inspect

Vision AgentVision Agent

## Full Example

A 6-step research agent combining sources, details, descriptions, images, and a custom header.

PreviewPreviewCodeCode

Inspect

Research AgentResearch Agent

## API Reference

### ThinkingSteps

 | Prop | Type | Default | Description

 | defaultOpen | boolean | true | Whether the accordion starts expanded (uncontrolled).

 | open | boolean | — | Controlled open state. Use with onOpenChange.

 | onOpenChange | (open: boolean) => void | — | Callback when the open state changes.

 | className | string | — | Additional CSS classes for the root container.

### ThinkingStepsHeader

 | Prop | Type | Default | Description

 | children | ReactNode | "Thinking" | Header label text.

### ThinkingStep

 | Prop | Type | Default | Description

 | icon | IconName | "dot" | Icon name from the icon library.

 | showIcon | boolean | true | Show the icon. When false, displays a small dot instead.

 | label | string | — | Step label text.

 | description | string | — | Optional secondary text below the label.

 | status | "complete" | "active" | "pending" | "complete" | Step state. Pending steps are hidden; active steps show shimmer text.

 | index | number | — | Position index for proximity hover registration.

 | delay | number | 0 | Entrance animation delay in seconds.

 | isLast | boolean | false | Hides the connector line below this step.

### ThinkingStepDetails

 | Prop | Type | Default | Description

 | summary | string | — | Collapsed label text (e.g. "Explored 6 files").

 | details | string[] | — | Shorthand list of detail lines rendered automatically.

 | defaultOpen | boolean | false | Whether the nested accordion starts expanded.

 | children | ReactNode | — | Custom content inside the expanded area.

### ThinkingStepSource

 | Prop | Type | Default | Description

 | color | BadgeColor | "gray" | Badge color from the Tailwind palette.

 | delay | number | 0 | Entrance animation delay in seconds.

 | children | ReactNode | — | Source label text.

### ThinkingStepImage

 | Prop | Type | Default | Description

 | src | string | — | Image URL.

 | alt | string | "" | Alt text for accessibility.

 | caption | string | — | Optional caption below the image.

 | delay | number | 0 | Entrance animation delay in seconds.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
