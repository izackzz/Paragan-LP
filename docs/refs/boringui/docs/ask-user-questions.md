Source: https://boringui.dev/docs/ask-user-questions

AskUserQuestions React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# AskUserQuestions

Stepped human-in-the-loop questions and approvals with single or multi-select, inline 'other' input, optional skip, and controlled navigation.

## Installation

npx shadcn@latest add https://boringui.dev/r/ask-user-questions.json

This component is primitive-agnostic — same source under both flavors.

## Example

PreviewPreviewCodeCode

Inspect

Question 1 of 8

### How do you plan to use BoringUI?

Designer Prototyping flows and pages1

Engineer Shipping production UI2

PM Aligning the team on patterns3

Founder Bootstrapping a product4

Skip

## Approval flow

PreviewPreviewCodeCode

Inspect

Question 1 of 3

### How many flavors should we launch?

Three Core line1

Five Full case2

Just one hero3

4

Skip

## Multiple questions

PreviewPreviewCodeCode

Inspect

Question 1 of 4

### What's your role?

Designer Visual / interaction1

Engineer Frontend / backend2

PM Product / program3

Researcher User / market research4

Skip

## Multi-select

PreviewPreviewCodeCode

Inspect

Question 1 of 3

### Which features should we prioritize?

Dark mode System-aware theme switching1

Accessibility Screen-reader and keyboard support2

Performance Faster initial load3

Translations Multi-language support4

Skip

Continue⌃↵

## With other

PreviewPreviewCodeCode

Inspect

Question 1 of 3

### What's blocking you most right now?

Scope Too much on the plate1

Review Waiting on feedback2

Infra Tooling slows me down3

4

Skip

## Skippable

PreviewPreviewCodeCode

Inspect

Question 1 of 3

### How long have you been using the product?

Less than a week Just getting started1

A few months Comfortable with basics2

Over a year Power user3

Skip

## Stacked layout

PreviewPreviewCodeCode

Inspect

Question 1 of 8

### Which starting template fits your project?

Marketing sitePolished landing page with hero, features grid, pricing table, and a footer. Best when you need to ship a story-driven page fast.1

AI chat appFull conversation UI with InputMessage, ThinkingSteps, and message bubbles wired up. Ideal for assistants and copilots.2

Admin dashboardSidebar shell, sortable data tables, and form-heavy detail views. Built for back-office tools and operational apps.3

Onboarding flowStepped intake using AskUserQuestions with a progress indicator and inline validation. Great for setup wizards.4

Skip

## Controlled

PreviewPreviewCodeCode

Inspect

Question 1 of 4

### What's your role?

Designer Visual / interaction1

Engineer Frontend / backend2

PM Product / program3

Researcher User / market research4

Skip

## API Reference — AskUserQuestions

 | Prop | Type | Default | Description

 | questions | AskUserQuestion[] | — | Ordered list of questions to ask. 2–5 options per question is recommended.

 | currentIndex | number | — | Controlled index of the active question.

 | defaultCurrentIndex | number | 0 | Initial question index (uncontrolled mode).

 | onCurrentIndexChange | (index: number) => void | — | Called when the active question changes.

 | answers | Record<string, AskUserAnswer> | — | Controlled answers map keyed by question id.

 | defaultAnswers | Record<string, AskUserAnswer> | — | Initial answers (uncontrolled mode).

 | onAnswersChange | (answers: Record<string, AskUserAnswer>) => void | — | Called whenever any answer changes.

 | onComplete | (answers: Record<string, AskUserAnswer>) => void | — | Called after the last question is answered or submitted.

 | onSkip | (questionId: string, index: number) => void | — | Called when the user clicks Skip on a question.

 | skipLabel | string | "Skip" | Label for the skip control in the header.

## API Reference — AskUserQuestion

 | Prop | Type | Default | Description

 | id | string | — | Stable identifier used to key the answer. Falls back to position.

 | title | string | — | Question text shown above the options.

 | options | AskUserOption[] | — | 2–5 options to choose from.

 | multiSelect | boolean | false | Allow multiple options to be selected. Adds a Next button at the bottom.

 | allowOther | boolean | false | Render an always-visible inline text input for free-form answers.

 | otherPlaceholder | string | "Describe in your own words…" | Placeholder for the Other input.

 | skippable | boolean | true | Show the Skip control in the header.

 | nextLabel | string | — | Label for the Next button in multi-select mode. Defaults to 'Next' or 'Finish'.

 | layout | "inline" | "stacked" | "inline" | Row layout. 'stacked' places the description on its own line under the title — use when descriptions are long enough to wrap.

## API Reference — AskUserOption

 | Prop | Type | Default | Description

 | id | string | — | Stable identifier returned in the answer. Falls back to position.

 | title | string | — | Bold leading label for the option.

 | description | string | — | Secondary muted text shown after the title.

## API Reference — AskUserAnswer

 | Prop | Type | Default | Description

 | questionId | string | — | Id of the question this answer belongs to.

 | selectedIds | string[] | — | Selected option ids. Length 0–1 in single-select, 0–N in multi-select.

 | otherText | string | — | Free-form text from the Other input, if any.

 | skipped | boolean | — | True when the user skipped the question.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
