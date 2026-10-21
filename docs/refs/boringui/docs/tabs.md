Source: https://boringui.dev/docs/tabs

Tabs React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Tabs

Segmented control tabs with sliding active indicator, proximity hover, and spring animations.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/tabs.json

Installs the Base UI flavor. Switch in the right panel.

## Basic

PreviewPreviewCodeCode

Inspect

LibraryLibraryRecentsRecentsFavoritesFavoritesSettingsSettings

Library content.

## With Icons

PreviewPreviewCodeCode

Inspect

LibraryLibraryRecentsRecentsFavoritesFavoritesSettingsSettings

Library content.

## Controlled

PreviewPreviewCodeCode

Inspect

LibraryLibraryRecentsRecentsFavoritesFavorites

Library content.

Active: library

## API Reference — Tabs

 | Prop | Type | Default | Description

 | value | string | — | Controlled active tab value. Takes precedence over selectedIndex.

 | onValueChange | (value: string) => void | — | Called when the active tab changes.

 | selectedIndex | number | — | Index-based controlled alternative.

 | onSelect | (index: number) => void | — | Called with the new index when the active tab changes.

 | defaultValue | string | — | Default active tab for uncontrolled usage.

 | children | ReactNode | — | TabsList and TabPanel children.

## API Reference — TabsList

 | Prop | Type | Default | Description

 | children | ReactNode | — | TabItem children.

 | className | string | — | Additional CSS classes for the container.

## API Reference — TabItem

 | Prop | Type | Default | Description

 | value | string | — | Unique value identifying this tab.

 | icon | IconComponent | — | Optional leading icon.

 | label | string | — | Text label for the tab.

## API Reference — TabPanel

 | Prop | Type | Default | Description

 | value | string | — | Must match a TabItem value.

 | children | ReactNode | — | Panel content, rendered when the matching tab is active.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
