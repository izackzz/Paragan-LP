Source: https://boringui.dev/docs/skill

BoringUI skill for coding agents
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# /boring-ui skill

Gives your coding agent the components and the craft behind them, then puts both to work on your project.

## Installation

One prompt for your coding agent: it installs the skill, then audits your project with it.

Copy prompt

## What it does

- Read your stack
To understand your project.

- Suggest 2 to 5 upgrades
Ranked by what your users will notice.

- Align your UI
Installs what fits, matches the rest.

- Keep components current
Compares updates while preserving your changes.

## What it knows

The craft behind every component, distilled from its implementation and code comments: exact values, interaction rules, edge cases, and why each detail matters. Once the BoringUI components are in place, your agent uses this knowledge to apply the final layer of craft to your interface, from typography and spacing to motion and feedback.

## Examples

What your agent writes on its own, next to what it writes with the skill.

### Tabs

Active labels get heavier without shifting neighboring tabs.

OverviewActivitySettings

❌ Generic AI output

OverviewOverviewActivityActivitySettingsSettings

✅ With the skill

### Menu

One highlight follows your pointer smoothly between menu items.

Inbox12Drafts3Sent48Archive210Trash7

❌ Generic AI output

InboxInbox12DraftsDrafts3SentSent48ArchiveArchive210TrashTrash7

✅ With the skill

### Copy field

Hover and click anywhere on the text to copy.

npx skills add https://github.com/MaybeMonad/vaexu/tree/main/apps/boring-ui/skills/boring-ui --skill boring-ui -g -yCopy

❌ Generic AI output

npx skills add https://github.com/MaybeMonad/vaexu/tree/main/apps/boring-ui/skills/boring-ui --skill boring-ui -g -y

✅ With the skill

### Button press

Button surfaces inset by 1px per side without scaling the label.

SkipContinue

❌ Generic AI output

SkipContinue

✅ With the skill

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
