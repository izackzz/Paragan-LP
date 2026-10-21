Source: https://boringui.dev/docs/tabs-subtle

TabsSubtle React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# TabsSubtle

Tab navigation with smooth pill animations.

## Installation

npx shadcn@latest add https://boringui.dev/r/tabs-subtle.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

TeamspacesTeamspacesRecentsRecentsFavoritesFavoritesSharedShared

Teamspaces content goes here.

## With Icons

PreviewPreviewCodeCode

Inspect

TeamspacesTeamspacesRecentsRecentsFavoritesFavoritesSharedShared

Teamspaces content goes here.

## Active Label

PreviewPreviewCodeCode

Inspect

TeamspacesTeamspaces

Teamspaces content goes here.

## API Reference — TabsSubtle

 | Prop | Type | Default | Description

 | selectedIndex | number | — | Index of the currently selected tab.

 | onSelect | (index: number) => void | — | Called when a tab is selected.

 | idPrefix | string | — | Prefix for ARIA IDs linking tabs to panels.

 | activeLabel | boolean | false | When true, only the selected tab shows its text label. Requires icons on tabs.

 | children | ReactNode | — | TabsSubtleItem children.

## API Reference — TabsSubtleItem

 | Prop | Type | Default | Description

 | icon | IconComponent | — | Icon displayed in the tab.

 | label | string | — | Text label for the tab.

 | index | number | — | Position index within the tab list.

 | leadingContent | ReactNode | — | Status marker or other content before the label.

 | trailingContent | ReactNode | — | Count or badge after the label.

## API Reference — TabsSubtlePanel

 | Prop | Type | Default | Description

 | index | number | — | Index of this panel.

 | selectedIndex | number | — | Currently selected tab index.

 | idPrefix | string | — | Must match the TabsSubtle idPrefix.

 | children | ReactNode | — | Panel content, only rendered when selected.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
