Source: https://boringui.dev/docs/neat-annotation

NeatAnnotation React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# NeatAnnotation

Hand-drawn arrows, labels, and marker highlights for calling attention to inline content.

## Installation

npx shadcn@latest add https://boringui.dev/r/neat-annotation.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

Release note · 2.4
The release is ready for reviewone final passone final pass.

## Eight directions

PreviewPreviewCodeCode

Inspect

target.nw.nw

target.n.n

target.ne.ne

target.w.w

Direction names describe where the arrow points.

target.e.e

target.sw.sw

target.s.s

target.se.se

## Color and highlight

PreviewPreviewCodeCode

Inspect

neutralneutralneutralamberamberamberbluebluebluegreengreengreenredredredpurplepurplepurplerainbowrainbowrainbow

Leave out note for a marker-only annotation. The rainbow tone pauses automatically when reduced motion is requested.

## Compose annotations

PreviewPreviewCodeCode

Inspect

login flowP2 bugP2 bugassigned to Aliceassigned to Alice

## Custom color and long notes

PreviewPreviewCodeCode

Inspect

Go / no-go

The release candidateConfirm the release notes, migration guide, and rollback steps.Confirm the release notes, migration guide, and rollback steps. is ready.

## Accessibility

Notes are connected to their target with aria-describedby by default. Set decorative only when the annotation repeats information that is already available. For instructions, validation, or status, keep the same meaning in the surrounding visible content instead of relying on the drawing alone.

## API Reference

 | Prop | Type | Default | Description

 | note | string | — | Handwritten note beside the target. Omit it for a highlight-only marker.

 | direction | "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw" | "n" | Compass direction the arrow points toward the annotated target.

 | tone | "neutral" | "amber" | "blue" | "green" | "red" | "purple" | "rainbow" | "neutral" | Built-in color treatment shared by the marker, arrow, and note.

 | color | string | — | Any valid CSS color. Overrides the selected tone color.

 | highlight | boolean | true | Adds a soft marker behind the target. Disable it for pre-styled children.

 | decorative | boolean | false | Hides the note from assistive technology when it adds no meaning.

 | style | NeatAnnotationStyle | — | Native span styles plus typed CSS variables for fine position and typography tuning.

## Credits

Inspired by neat-annotations by Maxim Syabro (@syabro). The original source is MIT licensed; its copyright and license notice are preserved in the component source.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
