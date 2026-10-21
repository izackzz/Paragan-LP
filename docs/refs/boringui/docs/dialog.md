Source: https://boringui.dev/docs/dialog

Dialog React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Dialog

Modal dialog with smooth enter/exit animations and overlay — three widths, the largest a canvas for a sidebar.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/dialog.json

Installs the Base UI flavor. Switch in the right panel.

## Basic

PreviewPreviewCodeCode

Inspect

Open dialog

## Sizes

Use sm for a confirmation, lg for a form, and xl for a layout of its own.

PreviewPreviewCodeCode

Inspect

SmallLargeExtra large

## Controlled

PreviewPreviewCodeCode

Inspect

Open controlled dialog

## API Reference — Dialog

 | Prop | Type | Default | Description

 | open / defaultOpen | boolean | — | Controlled or initial open state.

 | onOpenChange | (open: boolean) => void | — | Called when the dialog opens or closes.

 | modal | boolean | true | Trap focus and lock page scrolling while open.

## API Reference — DialogTrigger / DialogClose

 | Prop | Type | Default | Description

 | render | ReactElement | — | The element that becomes the trigger.

 | asChild | boolean | false | Compose the trigger or close control onto its child.

## API Reference — DialogContent

 | Prop | Type | Default | Description

 | size | "sm" | "lg" | "xl" | "sm" | 400, 540, or 880px surfaces; xl is intended for a layout of its own.

 | container | HTMLElement | null | — | Optional portal target for bounded overlays.

 | children | ReactNode | — | The dialog's accessible header, body, and footer.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
