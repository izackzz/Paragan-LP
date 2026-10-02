'use client';

import * as React from 'react';
import * as Menu from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/icon-map';

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof Menu.Root> & { viewport?: boolean }) {
  return (
    <Menu.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn('group/navigation-menu relative flex items-center', className)}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </Menu.Root>
  );
}

function NavigationMenuList({ className, ...props }: React.ComponentProps<typeof Menu.List>) {
  return (
    <Menu.List
      data-slot="navigation-menu-list"
      className={cn('flex list-none items-center gap-1', className)}
      {...props}
    />
  );
}

function NavigationMenuItem({ className, ...props }: React.ComponentProps<typeof Menu.Item>) {
  return (
    <Menu.Item
      data-slot="navigation-menu-item"
      className={cn('group/menu-item', className)}
      {...props}
    />
  );
}

const navigationMenuTriggerStyle = cva(
  'group inline-flex min-h-11 cursor-pointer items-center justify-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-hover hover:text-foreground focus-visible:outline focus-visible:outline-focus-ring disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-hover data-[state=open]:text-foreground',
);

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Menu.Trigger>) {
  const Chevron = icons['chevron-right'];
  return (
    <Menu.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    >
      {children}
      <Chevron className="size-3.5 rotate-90 transition-transform duration-200 group-data-[state=open]:-rotate-90 motion-reduce:transition-none" />
    </Menu.Trigger>
  );
}

function NavigationMenuContent({ className, ...props }: React.ComponentProps<typeof Menu.Content>) {
  return (
    <Menu.Content
      data-slot="navigation-menu-content"
      className={cn(
        'absolute top-full left-0 z-50 mt-2 w-full rounded-xl border border-border bg-popover p-3 text-popover-foreground group-data-[viewport=true]/navigation-menu:static group-data-[viewport=true]/navigation-menu:mt-0 group-data-[viewport=true]/navigation-menu:border-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:animate-none',
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuLink({ className, ...props }: React.ComponentProps<typeof Menu.Link>) {
  return (
    <Menu.Link
      data-slot="navigation-menu-link"
      className={cn(
        'relative flex flex-col gap-1 rounded-md p-3 text-sm text-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-focus-ring data-[active]:text-primary',
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof Menu.Viewport>) {
  return (
    <div className="absolute top-full left-0 z-50">
      <Menu.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'relative mt-2 navigation-menu-viewport overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground',
          className,
        )}
        {...props}
      />
    </div>
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof Menu.Indicator>) {
  return (
    <Menu.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'absolute top-full z-10 flex h-2 items-end justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="size-2 translate-y-1 rotate-45 bg-border" />
    </Menu.Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
};
