import React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(function Card({ className = "", ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      {...props}
    >
      {props.children}
    </div>
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef(function CardHeader(
  { className = "", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    >
      {props.children}
    </div>
  );
});
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(function CardTitle(
  { className = "", ...props },
  ref
) {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {props.children}
    </h3>
  );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(function CardDescription(
  { className = "", ...props },
  ref
) {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {props.children}
    </p>
  );
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(function CardContent(
  { className = "", ...props },
  ref
) {
  return (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
      {props.children}
    </div>
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(function CardFooter(
  { className = "", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    >
      {props.children}
    </div>
  );
});
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
