Source: https://boringui.dev/docs/dropdown

Dropdown React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Dropdown

Menu-style dropdown with fluid hover, animated backgrounds, and an optional search field inside the popup.

## Installation

npx shadcn@latest add https://boringui.dev/r/dropdown.json

This component is primitive-agnostic — same source under both flavors.

## Basic

PreviewPreviewCodeCode

Inspect

TeamspacesTeamspaces

RecentsRecents

FavoritesFavorites

SharedShared

PrivatePrivate

## Groups

PreviewPreviewCodeCode

Inspect

Account

ProfileProfile

SettingsSettings

Appearance

ThemeTheme

## Triggered menu

PreviewPreviewCodeCode

Inspect

Open menu

## Search and multi-select

PreviewPreviewCodeCode

Inspect

Search languages

## API Reference — Dropdown

 | Prop | Type | Default | Description

 | checkedIndex | number | — | Index of the checked radio-style item.

 | checkedIndices | number[] | — | Checked rows for multi-select popup menus.

 | size | "default" | "compact" | — | Pin the menu to one size-ladder step.

 | children | ReactNode | — | Menu labels, separators, and MenuItem rows.

## API Reference — DropdownMenu / DropdownContent

 | Prop | Type | Default | Description

 | render | ReactElement | — | The trigger element when using DropdownTrigger.

 | side / align / sideOffset | "top" | "bottom" / "start" | "center" | "end" / number | — | Popup placement controls.

 | children | ReactNode | — | Search, empty state, and menu rows.

## API Reference — MenuItem

 | Prop | Type | Default | Description

 | index | number | — | Stable row index used by fluid hover and keyboard navigation.

 | icon / label | IconComponent / string | — | Optional leading icon and visible label.

 | checked | boolean | — | Radio or checkbox state, depending on the popup root.

 | closeOnClick | boolean | true | Keep a popup open for multi-select actions when false.

 | onSelect | () => void | — | Called after an enabled item is selected.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
