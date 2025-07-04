'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(function TooltipContent(props, ref) {
  const { className = '', side = 'top', align = 'center', children, ...rest } = props;
  return (
    <TooltipPrimitive.Content
      ref={ref}
      side={side}
      align={align}
      className={`z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 ${className}`}
      {...rest}
    >
      {children}
    </TooltipPrimitive.Content>
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const Tooltip = ({ children, ...props }) => (
  <TooltipProvider>
    <TooltipRoot {...props}>{children}</TooltipRoot>
  </TooltipProvider>
);

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
