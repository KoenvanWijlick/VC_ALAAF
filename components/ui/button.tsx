import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  loading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      trailingIcon,
      loading,
      children,
      asChild,
      ...props
    },
    ref
  ) => {
    const sizeClass =
      size === "sm" ? "ui-button--size-sm" : size === "lg" ? "ui-button--size-lg" : undefined;
    const classes = cn("ui-button", `ui-button--${variant}`, sizeClass, className);

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(classes, children.props.className),
        ...props,
      });
    }

    return (
      <button ref={ref} data-variant={variant} className={classes} aria-busy={loading} {...props}>
        {loading && <span className="ui-skeleton" style={{ width: 16, height: 16 }} />}
        {icon}
        <span>{children}</span>
        {trailingIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
