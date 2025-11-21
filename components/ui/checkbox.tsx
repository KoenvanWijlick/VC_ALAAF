import * as React from "react";
import { cn } from "@/lib/cn";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || React.useId();
    return (
      <label className={cn("ui-field", "ui-checkbox-field")} htmlFor={checkboxId}>
        <input
          ref={ref}
          id={checkboxId}
          type="checkbox"
          className={cn("ui-checkbox", className)}
          {...props}
        />
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
