Source: https://boringui.dev/docs/typography

Typography - BoringUI design system
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Typography

Bold rules that create consistency across the whole component library.

## Installation

npx shadcn@latest add https://boringui.dev/r/typography.json

Installs the shared type scale and prose stylesheet. Wrap rendered Markdown in .typeset; add .typeset-compact for compact spacing and text.

Typography is hard. Every style you add makes it clunkier, so building this page was mostly cutting and refactoring until only the essential rules remained. Those rules power every component in the library, and each one is simple. Defining them and applying them on every surface is what makes it hard. Good rules hold every kind of component, and every component holds to them. Enjoy!

## 5 rules

- 5 styles for the whole site, from page titles to captions.
- 3 weights: regular for text, semibold for headings and selected items, bold for page titles.
- 2 text colors: foreground and muted.
- 1 font family: Inter Variable 4.0.
- 1 paragraph style.

## 5 no-gos

- No uppercase: hierarchy comes from size and weight.
- No letter-spacing: handled with Inter's optical sizing.
- No eyebrows: a section starts with its title.
- No difference with markdown: it uses the same styles and colors as everything else.
- No opacity for text: it's foreground or muted, never a faded step of them.

## The scale

5 styles, each a size and a line height. PressSfor compact.

StyleSampleFont sizeLine heightWeight

DisplayPage titles28px34px700opsz 25

TitleSection titles16px22px550opsz 18

SubtitleSub-headings and card titles14px20px550opsz 18

BodyLabels, menu items, and paragraphs13px20px400opsz 14

CaptionDescriptions and meta rows12px16px400opsz 14

## Markdown

Markdown gets the same 5 styles, to-dos and tables included.

Type # for a heading, - for a list, [] for a to-do, > for a quote.

Inspect

# Getting started with BoringUI

Flavors Radix and Base UI · Stack React and Tailwind v4 · License MIT

## Setup

- 
Install the type scale and the markdown styles

- 
Add a dropdown and a dialog

- 
Move every list to fluid hover

- 
Sidebar

- 
Command menu

- 
Switch dense screens to compact

## How it moves

Every component animates with 3 spring speeds, and hover glides to the item under your cursor instead of blinking. A label turns semibold without moving its neighbors, since fontWeights pairs each weight with an optical size. The motion page has every value.

No component invents its own timing, so everything moves at the same pace.

### What you get

- 
Components in 2 flavors

- 
Radix

- 
Base UI

- 
A size ladder of 36px and 28px rows

- 
A skill for your coding agent

### Spring speeds

 | 
Speed
 | 
Duration
 | 
Used for

 | 
fast
 | 
0.08s
 | 
Hover, tooltips, focus rings

 | 
moderate
 | 
0.16s
 | 
Dropdowns and tabs

 | 
slow
 | 
0.24s
 | 
Dialogs and drawers

## Install

Each piece installs with the shadcn CLI. We planned to ship one big bundle ship one item per component, so you only add what you use:

# One component
npx shadcn@latest add https://boringui.dev/r/dropdown.json

# The skill for your coding agent
npx skills add https://github.com/MaybeMonad/vaexu/tree/main/apps/boring-ui/skills/boring-ui --skill boring-ui -g -y

### Next steps

- 
Read the craft notes for each component

- 
Install the skill

- 
Let it read your stack

- 
Fix what it flags

- 
Ship it

Found a bug? Open an issue on GitHub.

## Spacing

Space only goes above a block, so streaming text never shifts.

 | Gap | Default | Compact

 | Above display and title | 24px | 16px

 | Above subtitle | 20px | 12px

 | Below display, title, and subtitle | 8px | 4px

 | Between body blocks | 12px | 8px

 | Above caption | 8px | 4px

 | Between list items | 4px | 4px

 | Around a divider | 24px | 16px

## 5 tweaks

Small details that keep text still, snug in its box, and evenly wrapped.

### Weight without reflow

Each weight carries its own optical size, so semibold labels keep their width. Idea from @lochieaxon.

Open the settings dialogOpen the settings dialogOpen the settings dialog

❌Weight only

Open the settings dialogOpen the settings dialogOpen the settings dialog

✅Weight + optical size

### Steady numbers

Changing numbers usetabular-numsso every digit is the same width and the words after them hold still.

Installed 10 of 48 components

❌Proportional digits

Installed 10 of 48 components

✅Tabular digits
Pause count

### Trimmed labels

Labels usetext-box: trim-both cap alphabeticso the padding you set is the space you see. Idea from @jakubkrehel.

Draft saved

❌Untrimmed

Draft saved

✅Trimmed

### Balanced headings

Headings usetext-wrap: balanceso their lines come out even.

Give every component the same motion

❌wrap leaves a short last line

Give every component the same motion

✅balance evens the lines

### Pretty paragraphs

Paragraphs usetext-wrap: prettyso none ends on a lone word.

Hover glides from item to item instead of blinking, so the highlight always sits under your cursor.

❌wrap leaves one word alone

Hover glides from item to item instead of blinking, so the highlight always sits under your cursor.

✅pretty brings a word down to join it

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
