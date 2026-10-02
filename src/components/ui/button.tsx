'use client';

import { forwardRef, isValidElement, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import type { IconComponent } from '@/lib/icon-context';
import { cn } from '@/lib/utils';
import { useShape } from '@/lib/shape-context';

const buttonVariants = cva(
  [
    'group relative isolate inline-flex items-center justify-center outline-none cursor-pointer',
    'text-box-trim-both text-box-edge-cap-alphabetic',
    'transition-colors duration-80',
    'disabled:opacity-50 disabled:pointer-events-none',
    'focus-visible:ring-2 focus-visible:ring-focus-ring',
  ],
  {
    variants: {
      variant: {
        primary: 'text-primary-foreground',
        secondary: 'text-background',
        tertiary: 'border border-foreground-4 text-foreground',
        platinum: 'text-platinum-foreground',
        shiny: 'shiny-cta text-foreground',
      },
      size: {
        sm: 'h-8 px-3 text-sm gap-1',
        md: 'h-10 px-4 text-base gap-1.5',
        lg: 'h-11 px-5 text-lg gap-2',
        'icon-sm': 'h-8 w-8 p-0 [&_svg]:h-3.5 [&_svg]:w-3.5',
        icon: 'h-9 w-9 p-0 [&_svg]:h-4 [&_svg]:w-4',
        'icon-lg': 'h-10 w-10 p-0 [&_svg]:h-5 [&_svg]:w-5',
      },
      iconLeft: { true: '' },
      iconRight: { true: '' },
    },
    compoundVariants: [
      { size: 'sm', iconLeft: true, className: 'pl-2' },
      { size: 'md', iconLeft: true, className: 'pl-3' },
      { size: 'lg', iconLeft: true, className: 'pl-4' },
      { size: 'sm', iconRight: true, className: 'pr-2' },
      { size: 'md', iconRight: true, className: 'pr-3' },
      { size: 'lg', iconRight: true, className: 'pr-4' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

interface ButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'>,
    VariantProps<typeof buttonVariants> {
  /** When true, the given single React-element child becomes the rendered element (slot-style). */
  asChild?: boolean;
  loading?: boolean;
  leadingIcon?: IconComponent;
  trailingIcon?: IconComponent;
  /** Force the visual pressed/held state. Useful when the button drives an
   *  external open piece of UI (a popover, dropdown, etc.) so it reads as
   *  engaged while the menu is showing. */
  active?: boolean;
}

const bgVariants: Record<string, string> = {
  primary: 'bg-primary group-hover:bg-primary/90 group-active:bg-primary/80',
  secondary: 'bg-foreground group-hover:bg-foreground/90 group-active:bg-foreground/80',
  tertiary: 'bg-border group-hover:bg-muted group-active:bg-accent',
  platinum: 'button-primary-platinum',
};

const activeBgVariants: Record<string, string> = {
  primary: 'bg-primary/80',
  secondary: 'bg-foreground/80',
  tertiary: 'bg-muted',
  platinum: 'button-primary-platinum',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      active = false,
      disabled,
      children: child,
      ...props
    },
    ref,
  ) => {
    const isIconOnly = size === 'icon' || size === 'icon-sm' || size === 'icon-lg';
    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;
    const shape = useShape();
    const shiny = variant === 'shiny';
    const bgClass = active
      ? activeBgVariants[variant ?? 'primary']
      : bgVariants[variant ?? 'primary'];

    // asChild parity: Base UI's `render` prop accepts a single element and
    // clones it. When asChild is true and children is a valid element, route
    // through render so the user's element becomes the outer tag.
    const renderProp =
      asChild && isValidElement<{ children?: ReactNode }>(child) ? child : undefined;
    const children = renderProp ? renderProp.props.children : child;

    return (
      <ButtonPrimitive
        // Base UI's `ButtonPrimitive` forwards to an HTMLButtonElement;
        // keep the public ref type narrow so consumers see the right type.
        ref={ref as React.Ref<HTMLButtonElement>}
        render={renderProp}
        nativeButton={!asChild}
        className={cn(
          buttonVariants({
            variant,
            size,
            iconLeft: !isIconOnly && !!LeadingIcon,
            iconRight: !isIconOnly && !!TrailingIcon,
          }),
          shape.button,
          shiny && 'h-auto rounded-full',
          className,
        )}
        disabled={disabled || loading}
        data-size={size ?? 'md'}
        {...props}
      >
        {!shiny && (
          <span
            aria-hidden
            className={cn(
              'absolute inset-0 rounded-inherit transition-transform duration-80 group-active:scale-95',
              bgClass,
            )}
          />
        )}
        <span
          className={cn(
            'relative inline-flex items-center justify-center gap-2',
            shiny && 'shiny-cta-content',
          )}
        >
          {loading ? (
            <>
              <span className="flex items-center justify-center gap-2 opacity-0">
                {LeadingIcon && !isIconOnly && <LeadingIcon size={iconSize} strokeWidth={2} />}
                {children}
                {TrailingIcon && !isIconOnly && <TrailingIcon size={iconSize} strokeWidth={2} />}
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M 12 12 C 14 8.5 19 8.5 19 12 C 19 15.5 14 15.5 12 12 C 10 8.5 5 8.5 5 12 C 5 15.5 10 15.5 12 12 Z"
                    stroke="currentColor"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    pathLength="100"
                    className="button-spinner-path"
                  />
                </svg>
              </span>
            </>
          ) : isIconOnly ? (
            <span className="[&_svg]:icon-stroke [&_svg]:transition-[stroke-width] [&_svg]:duration-80 group-hover:[&_svg]:stroke-2">
              {children}
            </span>
          ) : (
            <>
              {LeadingIcon && (
                <LeadingIcon
                  size={iconSize}
                  strokeWidth={1.5}
                  className="transition-[stroke-width] duration-80 group-hover:stroke-2"
                />
              )}
              <span>{children}</span>
              {TrailingIcon && (
                <TrailingIcon
                  size={iconSize}
                  strokeWidth={1.5}
                  className="transition-[stroke-width] duration-80 group-hover:stroke-2"
                />
              )}
            </>
          )}
        </span>
      </ButtonPrimitive>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
