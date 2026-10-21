Source: https://boringui.dev/docs/input-message

InputMessage React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# InputMessage

Chat-style message composer with an auto-resizing textarea, flexible left/right action slots, and a built-in send button on a Surface-2 substrate.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/input-message.json

Installs the Base UI flavor. Switch in the right panel.

## Playground

PreviewPreviewCodeCode

Inspect

Make my input box feel less stiff

Why is every other input box so stiff?Tab
Suggested prompt: Why is every other input box so stiff?. Press Tab to fill the composer with it.

What can I build with BoringUI?

How are the springs behind these animations tuned?

Install the InputMessage component in my project

Draft a short message for my team

## Basic

PreviewPreviewCodeCode

Inspect

## Suggestions

PreviewPreviewCodeCode

Inspect

Why is every other input box so stiff?Tab
Suggested prompt: Why is every other input box so stiff?. Press Tab to fill the composer with it.

What can I build with BoringUI?

How are the springs behind these animations tuned?

Install the InputMessage component in my project

Draft a short message for my team

## Attachments

PreviewPreviewCodeCode

Inspect

## Queued messages

PreviewPreviewCodeCode

Inspect

## Left Slot Only

PreviewPreviewCodeCode

Inspect

## Right Slot Only

PreviewPreviewCodeCode

Inspect

Sonnet 4.6

## Send Handler

PreviewPreviewCodeCode

Inspect

## Disabled

PreviewPreviewCodeCode

Inspect

This composer is disabled

## API Reference

 | Prop | Type | Default | Description

 | size | "default" | "compact" | from SizeProvider | Step on the size ladder (see /docs/sizes). Wins over the surrounding SizeProvider.

 | value | string | — | Controlled textarea value.

 | onValueChange | (value: string) => void | — | Called with the new value on every textarea change.

 | onSend | (value: string, files: File[], meta?: { queuedId?: string }) => void | — | Fires on Enter (without Shift) or send-button click. Receives the trimmed value and the currently-attached files. Skipped when the value is empty and no files are attached.

 | placeholder | string | "Ask me anything…" | Placeholder shown when the value is empty. While a file is being dragged over the component (and attachments are enabled), the placeholder swaps to “Drop files here to add to chat”.

 | leftSlot | ReactNode | (ctx) => ReactNode | — | Content rendered in the bottom-left action area. May be a render-fn that receives `{ openFilePicker, files }` — `openFilePicker(acceptOverride?)` opens the native file picker (optionally scoped to a subset of accept types, e.g. `"image/*"`).

 | rightSlot | ReactNode | (ctx) => ReactNode | — | Content rendered in the bottom-right action area, before the built-in send button. Same render-fn shape as `leftSlot`.

 | disabled | boolean | false | Disables the textarea, send button, and drag-and-drop.

 | minRows | number | 1 | Minimum visible rows before the textarea grows.

 | maxRows | number | 8 | Maximum visible rows before the textarea starts to scroll.

 | clickToFocus | boolean | true | When true, clicking anywhere on the surrounding container (outside of buttons / links / inputs) focuses the textarea.

 | sendLabel | string | "Send" | Accessible label for the send button.

 | files | File[] | — | Controlled list of attached files. Pair with `onFilesChange` to enable drag-and-drop and the file-picker slot helper. When omitted, attachment behavior is disabled.

 | onFilesChange | (files: File[]) => void | — | Called when files are added (drag-drop or picker) or removed via the preview tile’s × button. Duplicate drops of the same file (same name + size + lastModified) are silently de-duplicated.

 | accept | string | "image/png,image/jpeg,application/pdf" | Accepted MIME types as a comma-separated string. Used by both the file picker and the drag-and-drop filter.

 | maxFiles | number | — | Maximum number of attached files. Extra files beyond this limit are dropped.

 | filePreviewSize | number | 80 | Side length (in pixels) of each preview tile. Images use object-cover; PDFs render the first page via pdfjs; other types fall back to a centered icon. A theme-aware inset outline keeps light media edges visible.

 | textareaProps | TextareaHTMLAttributes | — | Extra props forwarded to the underlying textarea (value, onChange, onKeyDown, disabled and placeholder are controlled by the component).

 | status | "idle" | "streaming" | — | Assistant response state. When "streaming", the send button becomes a Stop control (empty draft) or a Queue action (non-empty draft). On the streaming→idle edge the next queued message auto-dispatches via onSend. Leave undefined for the legacy send-immediately behavior.

 | onStop | () => void | — | Fires when the Stop control is pressed (streaming + empty draft). Halt the current response and set status to "idle" — that edge immediately dispatches the next queued message.

 | queue | QueuedMessage[] | — | Controlled queue of pending messages, rendered as reorderable rows above the textarea. Double-click (or Enter/F2) edits a row back into the composer; the × (or Delete) removes it; drag — or Alt+↑/↓ — reorders. Requires status to be controlled.

 | onQueueChange | (queue: QueuedMessage[]) => void | — | Called whenever the queue changes — enqueue, edit, delete, reorder, or auto-dispatch. Each QueuedMessage is { id, text, files }.

 | showQueue | boolean | true | Render the built-in reorderable queue rows above the textarea. Set to false to suppress them and render the queue yourself (e.g. as full-width rows above the composer) — enqueue and auto-dispatch still run.

 | history | string[] | [] | Previously-sent messages, oldest first. With the textarea focused, ArrowUp (caret on the first line) recalls the previous message and walks backward; ArrowDown (caret on the last line) walks forward toward the in-progress draft. Editing or sending exits history mode.

 | placeholderSuggestion | string | — | Suggested prompt rendered as the placeholder (with a Tab keycap) while the draft is empty. Pressing Tab fills it into the composer — it doesn't send. Takes precedence over placeholder. Shift+Tab still moves focus backward, and once the draft is non-empty Tab resumes normal focus traversal.

 | suggestions | string[] | — | Suggested prompts listed under the action bar while the draft is empty. ArrowDown moves a highlight into the list (focus stays in the textarea, tracked via aria-activedescendant), ArrowUp walks back up and out, Enter or click fills the highlighted prompt into the composer. Escape drops the highlight; typing collapses the list. While nothing is highlighted the first row shows a ↓ hint in the slot where the highlighted row shows ↵.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
