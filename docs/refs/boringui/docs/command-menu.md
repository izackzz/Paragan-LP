Source: https://boringui.dev/docs/command-menu

CommandMenu React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# CommandMenu

1 field over every action. Type, arrow, Enter.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/command-menu.json

Installs the Base UI flavor. Switch in the right panel.

## Playground

PreviewPreviewCodeCode

Inspect

AllAllActionsActionsGo toGo toHelpHelp

Suggestions

CalendarToday

New fileBlank document⌘N

SettingsAccount and workspace⌘,

Actions

Search everywhereFiles, people, messages⌘⇧F

Toggle dark modeSystem, light, or dark⌘⇧L

Copy linkTo this page⌘⇧C

Invite peopleSend an email invite

Export as PDFPro plan

Go to

Home

Inbox3 unread

Starred

RecentLast 7 days

Help

Documentation

What's newRelease notes

Contact supportReply within a day

Select↑↓Run↵

Open as a dialog⌘K

## Basic

Type to filter, press ↓ ↑ to move, Enter to run. Rows come from items, grouped by group.

PreviewPreviewCodeCode

Inspect

Actions

New file

Search everywhere

Toggle dark mode

Copy link

Invite people

Export as PDF

Go to

Home

Inbox

Calendar

Starred

Recent

Settings

Help

Documentation

What's new

Contact support

## Descriptions, shortcuts, disabled rows

3 more fields per row: description, shortcut caps, and disabled, which the arrows skip. Type clipboard: keywords match too.

PreviewPreviewCodeCode

Inspect

Actions

New fileBlank document⌘N

Search everywhereFiles, people, messages⌘⇧F

Toggle dark modeSystem, light, or dark⌘⇧L

Copy linkTo this page⌘⇧C

Invite peopleSend an email invite

Export as PDFPro plan

Go to

Home

Inbox3 unread

CalendarToday

Starred

RecentLast 7 days

SettingsAccount and workspace⌘,

Help

Documentation

What's newRelease notes

Contact supportReply within a day

## Suggestions

3 suggested rows lead until you type 1 letter, then the groups take over.

PreviewPreviewCodeCode

Inspect

Recent

CalendarToday

New fileBlank document⌘N

SettingsAccount and workspace⌘,

Actions

Search everywhereFiles, people, messages⌘⇧F

Toggle dark modeSystem, light, or dark⌘⇧L

Copy linkTo this page⌘⇧C

Invite peopleSend an email invite

Export as PDFPro plan

Go to

Home

Inbox3 unread

Starred

RecentLast 7 days

Help

Documentation

What's newRelease notes

Contact supportReply within a day

## Tabs

Click a tab or press ← →, then derive items from the value. Children hug the row's end: put CommandMenuFilters there to share the line.

PreviewPreviewCodeCode

Inspect

AllAllActionsActionsGo toGo toHelpHelp

Actions

New fileBlank document⌘N

Search everywhereFiles, people, messages⌘⇧F

Toggle dark modeSystem, light, or dark⌘⇧L

Copy linkTo this page⌘⇧C

Invite peopleSend an email invite

Export as PDFPro plan

Go to

Home

Inbox3 unread

CalendarToday

Starred

RecentLast 7 days

SettingsAccount and workspace⌘,

Help

Documentation

What's newRelease notes

Contact supportReply within a day

## Filters

A frameless compact row under the field: drop borderless Selects or ghost Buttons in.

PreviewPreviewCodeCode

Inspect

Actions

New fileBlank document⌘N

Search everywhereFiles, people, messages⌘⇧F

Toggle dark modeSystem, light, or dark⌘⇧L

Copy linkTo this page⌘⇧C

Invite peopleSend an email invite

Export as PDFPro plan

Go to

Home

Inbox3 unread

CalendarToday

Starred

RecentLast 7 days

SettingsAccount and workspace⌘,

Help

Documentation

What's newRelease notes

Contact supportReply within a day

## Dialog and trigger shortcut

Press ⌘P anywhere on this page: this demo binds its own combo, and the default ⌘K opens the playground above. A pick or Escape closes it.

PreviewPreviewCodeCode

Inspect

Open⌘POpen, no shortcut

## Footer hints

4 hints at most, following the menu: ← → with tabs, Esc in a dialog. Pass hints for your own.

PreviewPreviewCodeCode

Inspect

AllAllActionsActionsGo toGo toHelpHelp

Suggestions

CalendarToday

New fileBlank document⌘N

SettingsAccount and workspace⌘,

Actions

Search everywhereFiles, people, messages⌘⇧F

Toggle dark modeSystem, light, or dark⌘⇧L

Copy linkTo this page⌘⇧C

Invite peopleSend an email invite

Export as PDFPro plan

Go to

Home

Inbox3 unread

Starred

RecentLast 7 days

Help

Documentation

What's newRelease notes

Contact supportReply within a day

Select↑↓Run↵

## Custom rows

1 CommandMenuItem per row from renderItem: children replace the label, the icon and caps stay.

PreviewPreviewCodeCode

Inspect

Actions

New fileActions⌘N

Search everywhereActions⌘⇧F

Toggle dark modeActions⌘⇧L

Copy linkActions⌘⇧C

Invite peopleActions

Export as PDFActions

Go to

HomeGo to

InboxGo to

CalendarGo to

StarredGo to

RecentGo to

SettingsGo to⌘,

Help

DocumentationHelp

What's newHelp

Contact supportHelp

## API Reference: Item data

 | Prop | Type | Default | Description

 | value | string | — | Unique id. The row's key and what aria-activedescendant points at.

 | label | string | — | The row's text.

 | description | string | — | Text after the label, at its size, 1 contrast step lower.

 | icon | IconComponent | — | Leading icon.

 | shortcut | string | — | Caps at the trailing edge, e.g. "mod+p" or "⌘P". Display only.

 | keywords | string[] | — | Extra terms the filter matches besides label and description.

 | group | string | — | Heading the row lists under. Groups keep first-appearance order; ungrouped rows form an unlabelled section.

 | disabled | boolean | false | Listed and greyed; the arrows and the pointer skip it.

 | onSelect | () => void | — | Runs when the row is picked, before the root's onSelect.

## API Reference: CommandMenu

 | Prop | Type | Default | Description

 | items | CommandMenuItemData[] | — | The actions. Keep the array stable: the highlight resets to the first row when the rows change.

 | onSelect | (item) => void | — | Runs when a row is picked, after the item's own onSelect.

 | filter | (item, query: string) => boolean | — | Match an item against the query. Default: every word of the query appears in label, description, or keywords.

 | query | string | — | Controlled query.

 | defaultQuery | string | "" | Initial query.

 | onQueryChange | (query: string) => void | — | Called on every keystroke.

 | suggestions | string[] | — | Values listed first, under suggestionsLabel, while nothing is typed. A suggested row leaves its own group.

 | suggestionsLabel | string | "Suggestions" | Heading of the suggestions section.

 | closeOnSelect | boolean | true | Inside CommandMenuDialog, a pick closes the dialog.

 | size | "default" | "compact" | — | Pins field and rows to one size step. Omitted, both follow the SizeProvider.

## API Reference: CommandMenuDialog

 | Prop | Type | Default | Description

 | open | boolean | — | Controlled open state.

 | defaultOpen | boolean | false | Initial open state.

 | onOpenChange | (open: boolean) => void | — | Called when the dialog opens or closes, including from the shortcut.

 | shortcut | string | null | "mod+k" | The combo that toggles the dialog from anywhere: "mod" is ⌘ on a Mac and Ctrl elsewhere, joined with "+" to alt, shift, and one key. null binds nothing.

 | title | string | "Command menu" | The dialog's name for screen readers.

 | description | string | "Search for a command to run." | Read after the title.

 | modal | boolean | true | Traps focus and locks page scroll while open.

 | container | HTMLElement | null | — | Portal target, to scope the dialog to a region.

 | className | string | — | Merged onto the panel. Anchored 12dvh from the top, sized by its rows up to min(440px, 76dvh).

## API Reference: CommandMenuInput

 | Prop | Type | Default | Description

 | placeholder | string | "Type a command or search…" | Shown while nothing is typed.

 | icon | IconComponent | null | search | Leading icon. null drops it.

## API Reference: CommandMenuTabs

 | Prop | Type | Default | Description

 | tabs | { value: string; label: string; icon?: IconComponent }[] | — | 1 subtle tab each.

 | value | string | — | The selected tab's value.

 | onValueChange | (value: string) => void | — | Called on a pick. Derive items from the value.

## API Reference: CommandMenuList

 | Prop | Type | Default | Description

 | renderItem | (item, index: number) => ReactNode | — | Custom rows: return a CommandMenuItem per visible item. Default renders one from the item's data.

 | children | ReactNode | — | Static children, e.g. CommandMenuEmpty.

## API Reference: CommandMenuItem

 | Prop | Type | Default | Description

 | value | string | — | Which item this row is. Its data fills the row; props below override it.

 | label | string | — | Overrides the item's label.

 | description | string | — | Overrides the item's description.

 | icon | IconComponent | — | Overrides the item's icon.

 | shortcut | string | — | Overrides the item's shortcut caps.

 | disabled | boolean | — | Overrides the item's disabled state.

 | onSelect | () => void | — | Overrides the item's onSelect.

 | children | ReactNode | — | Replaces the label and description. The icon and caps stay.

## API Reference: CommandMenuFooter

 | Prop | Type | Default | Description

 | hints | { label: string; keys: string | string[] }[] | — | Replaces the default hints. A keys list draws 1 cap per entry.

 | children | ReactNode | — | Replaces the hints with your own content.

## API Reference: CommandMenuShortcut

 | Prop | Type | Default | Description

 | keys | string | string[] | — | The combo, in the trigger syntax ("mod+shift+p") or pre-formatted ("⌘⇧P"). A list draws 1 cap per entry. Modifiers draw as symbols on a Mac and words elsewhere.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
