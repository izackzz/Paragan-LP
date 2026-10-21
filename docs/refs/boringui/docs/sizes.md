Source: https://boringui.dev/docs/sizes

Sizes - BoringUI design system
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# Sizes

Two component sizes: a 36px default and a 28px compact. PressS to toggle on the website.

## Installation

npx shadcn@latest add https://boringui.dev/r/size-context.json

Installs the size-context lib: SizeProvider, the useSize and useTypeScale hooks, and the token maps behind both steps.

## The principle

An interface reads as one product when its controls share a sizing rhythm. A button next to a select next to a tab should land on the same height.

Each size scales text, icons, and padding together.

Compact is for dense, data-heavy tools; default is the right call for everything else.

PreviewPreviewCodeCode

Inspect

Default · 36px

TableTable

SearchSearch

New

36px

Compact · 28px

TableTable

SearchSearch

New

28px

## Typography scale

Type follows the ladder. Compact drops each role one notch, so a dense screen keeps the same hierarchy at a smaller size.

Default

 | Size | Sample | Role

 | 28px | Fluid FunctionalismDisplay | h1

 | 16px | Create teamspaceTitle | h2

 | 14px | Weekly design reviewSubtitle | h3

 | 13px | The quick brown fox jumps over the lazy dogBody | p

 | 12px | Last updated 4 minutes agoCaption | small

Compact

 | Size | Sample | Role

 | 24px | Fluid FunctionalismDisplay | h1

 | 15px | Create teamspaceTitle | h2

 | 13px | Weekly design reviewSubtitle | h3

 | 12px | The quick brown fox jumps over the lazy dogBody | p

 | 11px | Last updated 4 minutes agoCaption | small

## Compact regions

Density is a region decision, not a per-control one. Wrap the region in aSizeProvider and everything inside follows — menus included, since React context crosses portals.

DefaultDefaultCompactCompact

Last updatedNew

Last updatedLast updated

CreatedCreated

NameName

The menu inherits
the region's step

## Token reference

The table, measured live: hover a control below and every number in the readout is a token from this table. Flip the step and the element re-measures under your cursor.

DefaultDefaultCompactCompact

New project

DesignDesign

EngineeringEngineering

 | Token | Applies to | Default | Compact

 | control | Controls and rows — shared so menu rows line up with their trigger | h-9 · 36px | h-7 · 28px

 | segmentItem + segmentPad | Segmented tabs inside their padded list | 28px + 4px = 36px | 24px + 2px = 28px

 | text | Labels inside controls | 13px | 12px

 | icon | Leading/trailing icons, checkbox square, radio circle | 16px | 14px

 | px / itemPx | Control / row horizontal padding | 12px / 8px | 10px / 6px

 | gap | Icon-to-label and control-to-control gap | 8px | 4px

## SizeProvider props

 | Prop | Type | Default | Description

 | size | "default" | "compact" | — | Controlled variant — pins every control in the subtree to one step.

 | defaultSize | "default" | "compact" | "default" | Uncontrolled initial variant, switchable via useSizeContext().setSize.

## Component size prop

 | Prop | Type | Default | Description

 | size | "default" | "compact" | from provider | Per-component override on Button, Badge, Select, Tabs, TabsSubtle, Dropdown, DropdownMenu, CheckboxGroup, RadioGroup, InputGroup, InputCopy, InputMessage, Table, Switch, Slider, Accordion, AccordionGroup, AskUserQuestions, Card, ChatMessage, ColorPicker, ThinkingIndicator, and ThinkingSteps. Wins over the surrounding SizeProvider.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
