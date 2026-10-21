Source: https://boringui.dev/docs/accordion

Accordion React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Accordion

Collapsible sections with animated expand/collapse and proximity hover in grouped mode.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/accordion.json

Installs the Base UI flavor. Switch in the right panel.

## Standalone

A single collapsible item with its own hover state.

PreviewPreviewCodeCode

Inspect

What is this component?What is this component?

A collapsible accordion with animated expand/collapse and spring-animated chevron.

## Single Expand

Multiple items with proximity hover — only one can be expanded at a time.

PreviewPreviewCodeCode

Inspect

Getting StartedGetting Started

Install the component and import it into your project. The accordion supports both single and multiple expand modes.

StylingStyling

AccessibilityAccessibility

AnimationAnimation

## Multi Expand

Multiple items with proximity hover — several can be expanded at once.

PreviewPreviewCodeCode

Inspect

First SectionFirst Section

Multiple items can be expanded at the same time.

Second SectionSecond Section

Third SectionThird Section

Each item operates independently in multiple mode.

## API Reference — Accordion / AccordionGroup

 | Prop | Type | Default | Description

 | type | "single" | "multiple" | "single" | Whether one or multiple items can be expanded.

 | collapsible | boolean | true | Allow collapsing all items when type is single.

 | defaultValue | string | string[] | — | Initially expanded item value(s).

 | value | string | string[] | — | Controlled expanded value(s).

 | onValueChange | (value) => void | — | Callback when expanded state changes.

## API Reference — AccordionItem

 | Prop | Type | Default | Description

 | value | string | — | Unique identifier for this item.

 | index | number | — | Position index for proximity hover. Required inside AccordionGroup, omit for standalone.

 | disabled | boolean | false | Whether this item is disabled.

## API Reference — AccordionTrigger

 | Prop | Type | Default | Description

 | children | ReactNode | — | Trigger label content.

## API Reference — AccordionContent

 | Prop | Type | Default | Description

 | children | ReactNode | — | Collapsible content.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
