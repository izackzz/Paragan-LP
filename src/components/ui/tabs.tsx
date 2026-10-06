'use client';

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  createContext,
  useContext,
  forwardRef,
  Children,
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
} from 'react';
import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import type { IconComponent } from '@/lib/icon-context';
import { cn } from '@/lib/utils';
import { springs } from '@/lib/springs';
import { useSurface } from '@/lib/surface-context';
import { surfaceClasses } from '@/lib/surface-classes';
import { useFluidHover as useProximityHover } from '@/hooks/use-fluid-hover';

/* ─────────────────────── Contexts ─────────────────────── */

interface TabsValueOrderContextValue {
  valueOrder: string[];
  setValueOrder: (order: string[]) => void;
  selectedValue: string | undefined;
}

const TabsValueOrderContext = createContext<TabsValueOrderContextValue | null>(null);

interface TabsListContextValue {
  registerTab: (index: number, value: string, el: HTMLElement | null) => void;
  hoveredIndex: number | null;
  selectedValue: string | undefined;
  setOptimisticIdx: (index: number) => void;
}

const TabsListContext = createContext<TabsListContextValue | null>(null);

function useTabsList() {
  const ctx = useContext(TabsListContext);
  if (!ctx) throw new Error('TabItem must be used within a TabsList');
  return ctx;
}

/* ─────────────────────── Tabs (Root) ─────────────────────── */

interface TabsProps extends Omit<
  ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
  'onValueChange' | 'value' | 'defaultValue' | 'onSelect'
> {
  value?: string;
  onValueChange?: (value: string) => void;
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  defaultValue?: string;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ value, onValueChange, selectedIndex, onSelect, defaultValue, children, ...props }, ref) => {
    const [valueOrder, setValueOrder] = useState<string[]>([]);
    const [uncontrolledValue, setUncontrolledValue] = useState<string | undefined>(defaultValue);
    const updateValueOrder = useCallback((order: string[]) => {
      setValueOrder((current) => {
        if (current.length === order.length && current.every((v, i) => v === order[i])) {
          return current;
        }
        return order;
      });
    }, []);

    const resolvedValue =
      value ?? (selectedIndex != null ? valueOrder[selectedIndex] : uncontrolledValue);

    // Base UI passes (value, eventDetails); we only need value.
    const handleValueChange = useCallback(
      (newValue: unknown) => {
        const v = newValue as string;
        if (value === undefined && selectedIndex == null) {
          setUncontrolledValue(v);
        }
        onValueChange?.(v);
        if (onSelect) {
          const idx = valueOrder.indexOf(v);
          if (idx !== -1) onSelect(idx);
        }
      },
      [onValueChange, onSelect, valueOrder, value, selectedIndex],
    );

    return (
      <TabsValueOrderContext.Provider
        value={{
          valueOrder,
          setValueOrder: updateValueOrder,
          selectedValue: resolvedValue,
        }}
      >
        <TabsPrimitive.Root
          ref={ref}
          value={resolvedValue}
          onValueChange={handleValueChange}
          defaultValue={resolvedValue == null ? defaultValue : undefined}
          {...props}
        >
          {children}
        </TabsPrimitive.Root>
      </TabsValueOrderContext.Provider>
    );
  },
);

Tabs.displayName = 'Tabs';

/* ─────────────────────── TabsList ─────────────────────── */

type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  radius?: 'md' | 'none';
  hoverAxis?: 'x' | 'y' | 'xy';
};

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, className, radius = 'md', hoverAxis = 'x', ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseInside, setIsMouseInside] = useState(false);
    const substrate = useSurface();
    const indicatorLevel = Math.min(substrate + 3, 8);
    const valueOrderCtx = useContext(TabsValueOrderContext);
    const [, setOptimisticIdx] = useState<number | null>(null);

    const values = useMemo(
      () =>
        Children.toArray(children)
          .filter(isValidElement)
          .map((child) => (child.props as { value?: string }).value)
          .filter((v): v is string => typeof v === 'string'),
      [children],
    );
    const setValueOrder = valueOrderCtx?.setValueOrder;

    useLayoutEffect(() => {
      setValueOrder?.(values);
    }, [setValueOrder, values]);

    const {
      activeIndex: hoveredIndex,
      setActiveIndex: setHoveredIndex,
      itemRects,
      handlers,
      registerItem,
      measureItems,
    } = useProximityHover(containerRef, { axis: hoverAxis });

    const registerTab = useCallback(
      (index: number, _value: string, el: HTMLElement | null) => {
        registerItem(index, el);
      },
      [registerItem],
    );

    useEffect(() => {
      measureItems();
    }, [measureItems, children]);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      const ro = new ResizeObserver(() => measureItems());
      ro.observe(el);
      return () => ro.disconnect();
    }, [measureItems]);

    const handleMouseMove = useCallback(
      (e: React.MouseEvent) => {
        setIsMouseInside(true);
        handlers.onMouseMove(e);
      },
      [handlers],
    );

    const handleMouseLeave = useCallback(() => {
      setIsMouseInside(false);
      handlers.onMouseLeave();
    }, [handlers]);

    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const selectedValue = valueOrderCtx?.selectedValue;
    const selectedIdx = selectedValue !== undefined ? values.indexOf(selectedValue) : -1;
    const radiusClass = radius === 'none' ? 'rounded-none' : 'rounded-md';

    const activeSelectedIdx = selectedIdx >= 0 ? selectedIdx : null;
    const selectedRect = activeSelectedIdx !== null ? itemRects[activeSelectedIdx] : null;
    const hoverRect = hoveredIndex !== null ? itemRects[hoveredIndex] : null;
    const focusRect = focusedIndex !== null ? itemRects[focusedIndex] : null;
    const isHoveringSelected = hoveredIndex === activeSelectedIdx;
    const isHovering = hoveredIndex !== null && !isHoveringSelected;

    const indexedChildren = Children.map(children, (child, i) => {
      if (isValidElement(child)) {
        return cloneElement(child, { _index: i } as Record<string, unknown>);
      }
      return child;
    });

    return (
      <TabsListContext.Provider
        value={{
          registerTab,
          hoveredIndex,
          selectedValue,
          setOptimisticIdx,
        }}
      >
        <TabsPrimitive.List
          // Match Radix's `activationMode="automatic"` — arrow keys move + activate.
          activateOnFocus
          ref={(node) => {
            (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onFocus={(e) => {
            const trigger = (e.target as HTMLElement).closest('[role="tab"]');
            if (!trigger) return;
            const indexAttr = trigger.getAttribute('data-proximity-index');
            if (indexAttr != null) {
              const idx = Number(indexAttr);
              setHoveredIndex(idx);
              setFocusedIndex((e.target as HTMLElement).matches(':focus-visible') ? idx : null);
            }
          }}
          onBlur={(e) => {
            if (containerRef.current?.contains(e.relatedTarget as Node)) return;
            setFocusedIndex(null);
            if (isMouseInside) return;
            setHoveredIndex(null);
          }}
          className={cn(
            'relative inline-flex items-center gap-0.5 bg-muted p-1 select-none',
            radiusClass,
            className,
          )}
          {...props}
        >
          {/* Active segment indicator */}
          {selectedRect && (
            <motion.div
              className={cn(
                'pointer-events-none absolute',
                surfaceClasses(indicatorLevel),
                radiusClass,
              )}
              initial={false}
              animate={{
                left: selectedRect.left,
                width: selectedRect.width,
                top: selectedRect.top,
                height: selectedRect.height,
                opacity: isHovering ? 0.85 : 1,
              }}
              transition={{
                ...springs.moderate,
                opacity: { duration: 0.08 },
              }}
            />
          )}

          {/* Hover indicator */}
          <AnimatePresence>
            {hoverRect && !isHoveringSelected && selectedRect && (
              <motion.div
                className={cn('pointer-events-none absolute bg-hover', radiusClass)}
                initial={{
                  left: selectedRect.left,
                  width: selectedRect.width,
                  top: selectedRect.top,
                  height: selectedRect.height,
                  opacity: 0,
                }}
                animate={{
                  left: hoverRect.left,
                  width: hoverRect.width,
                  top: hoverRect.top,
                  height: hoverRect.height,
                  opacity: 0.4,
                }}
                exit={
                  !isMouseInside && selectedRect
                    ? {
                        left: selectedRect.left,
                        width: selectedRect.width,
                        top: selectedRect.top,
                        height: selectedRect.height,
                        opacity: 0,
                        transition: {
                          ...springs.moderate,
                          opacity: { duration: 0.06 },
                        },
                      }
                    : { opacity: 0, transition: { duration: 0.06 } }
                }
                transition={{
                  ...springs.fast,
                  opacity: { duration: 0.08 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Focus ring */}
          <AnimatePresence>
            {focusRect && (
              <motion.div
                className={cn(
                  'pointer-events-none absolute z-20 border border-accent-1',
                  radiusClass,
                )}
                initial={false}
                animate={{
                  left: focusRect.left - 2,
                  top: focusRect.top - 2,
                  width: focusRect.width + 4,
                  height: focusRect.height + 4,
                }}
                exit={{ opacity: 0, transition: { duration: 0.06 } }}
                transition={{
                  ...springs.fast,
                  opacity: { duration: 0.08 },
                }}
              />
            )}
          </AnimatePresence>

          {indexedChildren}
        </TabsPrimitive.List>
      </TabsListContext.Provider>
    );
  },
);

TabsList.displayName = 'TabsList';

/* ─────────────────────── TabItem ─────────────────────── */

interface TabItemProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Tab> {
  value: string;
  icon?: IconComponent;
  label: string;
  eyebrow?: string;
  description?: string;
  /** @internal Auto-assigned by TabsList. */
  _index?: number;
}

const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(
  ({ value, icon: Icon, label, eyebrow, description, _index = 0, className, ...props }, ref) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const { registerTab, hoveredIndex, selectedValue, setOptimisticIdx } = useTabsList();

    useEffect(() => {
      registerTab(_index, value, internalRef.current);
      return () => registerTab(_index, value, null);
    }, [_index, value, registerTab]);

    const isSelected = selectedValue === value;
    const isActive = hoveredIndex === _index || isSelected;

    return (
      <TabsPrimitive.Tab
        onClick={() => setOptimisticIdx(_index)}
        ref={(node) => {
          (internalRef as React.MutableRefObject<HTMLElement | null>).current =
            node as HTMLButtonElement | null;
          if (typeof ref === 'function') ref(node as HTMLButtonElement);
          else if (ref)
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node as HTMLButtonElement | null;
        }}
        value={value}
        data-proximity-index={_index}
        className={cn(
          'relative z-10 flex cursor-pointer items-center gap-2 border-none bg-transparent px-3 py-1.5 outline-none',
          className,
        )}
        {...props}
      >
        {eyebrow || description ? (
          <>
            <span className="flex w-full min-w-0 items-center justify-between gap-2">
              <span className="text-caption leading-relaxed text-muted-foreground">{eyebrow}</span>
              {Icon && (
                <Icon
                  strokeWidth={1.5}
                  className={cn(
                    'size-5 shrink-0 transition-[color,stroke-width] duration-80',
                    isActive ? 'text-foreground' : 'text-muted-foreground',
                  )}
                />
              )}
            </span>
            <span
              className={cn(
                'block w-full min-w-0 text-left font-display text-base text-accent-2 transition-all duration-80',
                isActive ? 'text-foreground' : 'text-muted-foreground',
              )}
            >
              {label}
            </span>
            {description && (
              <span className="w-full text-left text-xs leading-relaxed text-muted-foreground">
                {description}
              </span>
            )}
          </>
        ) : (
          <>
            {Icon && (
              <Icon
                strokeWidth={isActive ? 2 : 1.5}
                className={cn(
                  'size-5 transition-all duration-80',
                  isActive ? 'text-foreground' : 'text-muted-foreground',
                )}
              />
            )}
            <span className="block text-sm whitespace-nowrap">
              <span
                className={cn(
                  'block transition-colors duration-80',
                  isSelected ? 'font-semibold' : 'font-normal',
                  isActive ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {label}
              </span>
            </span>
          </>
        )}
      </TabsPrimitive.Tab>
    );
  },
);

TabItem.displayName = 'TabItem';

/* ─────────────────────── TabPanel ─────────────────────── */

interface TabPanelProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Panel> {
  value: string;
}

const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(({ className, ...props }, ref) => {
  return <TabsPrimitive.Panel ref={ref} className={cn('outline-none', className)} {...props} />;
});

TabPanel.displayName = 'TabPanel';

export { Tabs, TabsList, TabItem, TabPanel };
export type { TabsProps, TabsListProps, TabItemProps, TabPanelProps };
