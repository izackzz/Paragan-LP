'use client';

import { forwardRef, isValidElement, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import type { IconComponent } from '@/lib/icon-context';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'group relative isolate inline-flex items-center justify-center outline-none cursor-pointer text-box-trim-both text-box-edge-cap-alphabetic transition-colors duration-80 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-xl',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
        secondary:
          'bg-surface-1 border border-transparent text-foreground hover:text-background font-medium outline-offset-1 shadow-[0_0px_0rem_2px_var(--border)] hover:bg-foreground/90 hover:translate-y-px transition-all duration-500 ease-in-out',
        tertiary:
          'bg-border border border-foreground-4 text-foreground hover:bg-muted hover:bg-accent',
        platinum:
          'button-primary-platinum text-platinum-foreground hover:brightness-110 hover:brightness-90',
        'shiny-1':
          'shiny-01 overflow-hidden border border-transparent text-foreground font-medium outline-offset-1 shadow-[0_0px_0rem_2px_var(--shiny-cta-highlight),inset_0_0ex_0rem_0px_color-mix(in_srgb,var(--shiny-cta-highlight)_0%,transparent)] hover:translate-y-px transition-[--gradient-angle-offset,--gradient-percent,--gradient-shine] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]',
        'shiny-2':
          'shiny-02 overflow-hidden border border-transparent text-foreground font-medium outline-offset-1 shadow-[0_0px_0rem_2px_var(--shiny-cta-highlight),inset_0_0ex_0rem_0px_color-mix(in_srgb,var(--shiny-cta-highlight)_0%,transparent)] active:translate-y-px transition-[--gradient-angle-offset,--gradient-percent,--gradient-shine] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]',
        'shiny-secondary':
          'shiny-secondary overflow-hidden border border-transparent text-foreground font-medium outline-offset-1 shadow-[0_0px_0rem_2px_var(--shiny-cta-highlight),inset_0_0ex_0rem_0px_color-mix(in_srgb,var(--shiny-cta-highlight)_0%,transparent)] active:translate-y-px transition-[--gradient-angle-offset,--gradient-percent,--gradient-shine] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]',
      },
      size: {
        sm: 'px-4 py-3 text-sm gap-1 [&_svg]:size-3.5 has-[>.button-leading]:pl-2 has-[>.button-trailing]:pr-2',
        md: 'px-5 py-3 text-base gap-1.5 [&_svg]:size-4 has-[>.button-leading]:pl-3 has-[>.button-trailing]:pr-3',
        lg: 'px-8 py-4 text-lg gap-2 [&_svg]:size-5 has-[>.button-leading]:pl-4 has-[>.button-trailing]:pr-4',
        'icon-sm':
          'h-8 w-8 p-0 [&_svg]:size-3.5 [&_.button-leading]:hidden [&_.button-trailing]:hidden',
        icon: 'h-9 w-9 p-0 [&_svg]:size-4 [&_.button-leading]:hidden [&_.button-trailing]:hidden',
        'icon-lg':
          'h-10 w-10 p-0 [&_svg]:size-5 [&_.button-leading]:hidden [&_.button-trailing]:hidden',
      },
      active: { true: '', false: '' },
    },
    compoundVariants: [
      { variant: 'primary', active: true, className: 'bg-primary/80' },
      { variant: 'secondary', active: true, className: 'bg-foreground/80' },
      { variant: 'tertiary', active: true, className: 'bg-muted' },
      { variant: 'platinum', active: true, className: 'brightness-90' },
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
            active,
          }),
          className,
        )}
        disabled={disabled || loading}
        data-size={size ?? 'md'}
        {...props}
      >
        {loading ? (
            <>
              <span className="flex items-center justify-center gap-2 opacity-0">
                {LeadingIcon && (
                  <LeadingIcon className="button-icon button-leading" strokeWidth={2} />
                )}
                {children}
                {TrailingIcon && (
                  <TrailingIcon className="button-icon button-trailing" strokeWidth={2} />
                )}
              </span>
            </>
          ) : (
            <>
              {LeadingIcon && (
                <LeadingIcon
                  strokeWidth={1.5}
                  className="button-icon button-leading transition-[stroke-width] duration-80 group-hover:stroke-2"
                />
              )}
              <span className="z-10">{children}</span>
              {TrailingIcon && (
                <TrailingIcon
                  strokeWidth={1.5}
                  className="button-icon button-trailing transition-[stroke-width] duration-80 group-hover:stroke-2"
                />
              )}
            </>
          )}
      </ButtonPrimitive>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
