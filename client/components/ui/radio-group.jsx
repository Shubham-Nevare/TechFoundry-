'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';

const RadioGroup = RadioGroupPrimitive.Root;

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <span className="block h-2 w-2 rounded-full bg-current" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
