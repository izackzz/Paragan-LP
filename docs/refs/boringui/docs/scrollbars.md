Source: https://boringui.dev/docs/scrollbars

Scrollbars - BoringUI design system
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Scrollbars

A scrollbar that stays out of the way but never disappears, over shadcn's scroll-fade as the baseline edge treatment — restyled to the shape system, with native scroll physics on touch.

## Installation

npx shadcn@latest add https://boringui.dev/r/scroll-area.json

Installs the ScrollArea component with the shape-system scrollbar and the scroll-fade edge treatment.

## The problem

macOS hides the scrollbar until you start scrolling, so a clipped list gives no sign it has more below. And the moment it does appear, it's the grey OS default sitting on top of your design. You either get no affordance or the wrong one.

PreviewPreviewCodeCode

Inspect

v1.23.0 — maintenance release

v1.22.0 — maintenance release

v1.21.0 — maintenance release

v1.20.0 — maintenance release

v1.19.0 — maintenance release

v1.18.0 — maintenance release

v1.17.0 — maintenance release

v1.16.0 — maintenance release

v1.15.0 — maintenance release

v1.14.0 — maintenance release

v1.13.0 — maintenance release

v1.12.0 — maintenance release

v1.11.0 — maintenance release

v1.10.0 — maintenance release

v1.9.0 — maintenance release

v1.8.0 — maintenance release

v1.7.0 — maintenance release

v1.6.0 — maintenance release

v1.5.0 — maintenance release

v1.4.0 — maintenance release

v1.3.0 — maintenance release

v1.2.0 — maintenance release

v1.1.0 — maintenance release

v1.0.0 — maintenance release

❌ MacOS scrollbar — hide until you scroll + clipped list without signifier

v1.23.0 — maintenance release

v1.22.0 — maintenance release

v1.21.0 — maintenance release

v1.20.0 — maintenance release

v1.19.0 — maintenance release

v1.18.0 — maintenance release

v1.17.0 — maintenance release

v1.16.0 — maintenance release

v1.15.0 — maintenance release

v1.14.0 — maintenance release

v1.13.0 — maintenance release

v1.12.0 — maintenance release

v1.11.0 — maintenance release

v1.10.0 — maintenance release

v1.9.0 — maintenance release

v1.8.0 — maintenance release

v1.7.0 — maintenance release

v1.6.0 — maintenance release

v1.5.0 — maintenance release

v1.4.0 — maintenance release

v1.3.0 — maintenance release

v1.2.0 — maintenance release

v1.1.0 — maintenance release

v1.0.0 — maintenance release

✅ BoringUI — refined scrollbars on hover + fade

## The scrollbar

The thumb rests narrow and low-contrast, then widens and darkens on hover so it stays quiet until you reach for it. Press R to see the radius follow the shape system. On touch-primary devices the whole thing steps aside for native overflow scrolling, where platform physics beat any custom scrollbar.

BoringUI uses the Base UI implementation with the same public API as the upstream variants. Scrollbar machinery adapted from Lina.

## The fade

The baseline edge treatment is shadcn's scroll-fade, vendored as a CSS utility in globals.css. A mask dissolves the content toward the edges that have more to scroll, and a scroll-driven animation keeps the true start and end crisp. Drop scroll-fade (or scroll-fade-x) on the viewport and it rides under the scrollbar — no JavaScript.

PreviewPreviewCodeCode

Inspect

v1.23.0 — maintenance release

v1.22.0 — maintenance release

v1.21.0 — maintenance release

v1.20.0 — maintenance release

v1.19.0 — maintenance release

v1.18.0 — maintenance release

v1.17.0 — maintenance release

v1.16.0 — maintenance release

v1.15.0 — maintenance release

v1.14.0 — maintenance release

v1.13.0 — maintenance release

v1.12.0 — maintenance release

v1.11.0 — maintenance release

v1.10.0 — maintenance release

v1.9.0 — maintenance release

v1.8.0 — maintenance release

v1.7.0 — maintenance release

v1.6.0 — maintenance release

v1.5.0 — maintenance release

v1.4.0 — maintenance release

v1.3.0 — maintenance release

v1.2.0 — maintenance release

v1.1.0 — maintenance release

v1.0.0 — maintenance release

## Examples

### Horizontal

A row wider than its container, faded with the x variant.

PreviewPreviewCodeCode

Inspect

January

February

March

April

May

June

July

August

September

October

November

December

### Double overflow

A table taller and wider than its box. orientation="both" adds both scrollbars and the corner.

PreviewPreviewCodeCode

Inspect

 | City | January | February | March | April | May | June | July | August | September | October | November | December

 | Amsterdam | 877 | 988 | 199 | 310 | 421 | 532 | 643 | 754 | 865 | 976 | 187 | 298

 | Berlin | 236 | 384 | 532 | 680 | 828 | 976 | 224 | 372 | 520 | 668 | 816 | 964

 | Copenhagen | 495 | 680 | 865 | 150 | 335 | 520 | 705 | 890 | 175 | 360 | 545 | 730

 | Dublin | 754 | 976 | 298 | 520 | 742 | 964 | 286 | 508 | 730 | 952 | 274 | 496

 | Helsinki | 113 | 372 | 631 | 890 | 249 | 508 | 767 | 126 | 385 | 644 | 903 | 262

 | Lisbon | 372 | 668 | 964 | 360 | 656 | 952 | 348 | 644 | 940 | 336 | 632 | 928

 | London | 631 | 964 | 397 | 730 | 163 | 496 | 829 | 262 | 595 | 928 | 361 | 694

 | Madrid | 890 | 360 | 730 | 200 | 570 | 940 | 410 | 780 | 250 | 620 | 990 | 460

 | Oslo | 249 | 656 | 163 | 570 | 977 | 484 | 891 | 398 | 805 | 312 | 719 | 226

 | Paris | 508 | 952 | 496 | 940 | 484 | 928 | 472 | 916 | 460 | 904 | 448 | 892

 | Prague | 767 | 348 | 829 | 410 | 891 | 472 | 953 | 534 | 115 | 596 | 177 | 658

 | Stockholm | 126 | 644 | 262 | 780 | 398 | 916 | 534 | 152 | 670 | 288 | 806 | 424

 | Vienna | 385 | 940 | 595 | 250 | 805 | 460 | 115 | 670 | 325 | 880 | 535 | 190

 | Warsaw | 644 | 336 | 928 | 620 | 312 | 904 | 596 | 288 | 880 | 572 | 264 | 856

 | Zurich | 903 | 632 | 361 | 990 | 719 | 448 | 177 | 806 | 535 | 264 | 893 | 622

## API reference

### ScrollArea

 | Prop | Type | Default | Description

 | orientation | "vertical" | "horizontal" | "both" | "vertical" | Which axes get scrollbars.

 | viewportClassName | string | — | Classes for the inner scrolling viewport — where the scroll-fade utility goes.

 | className | string | — | Classes for the outer container — set the height/width constraint here.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
