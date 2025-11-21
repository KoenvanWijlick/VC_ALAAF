import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, error, id, ...props }, ref) => {
    const inputId = id || React.useId();
    return (
      <label className="ui-field" htmlFor={inputId}>
        {label && <span>{label}</span>}
        <input
          ref={ref}
          id={inputId}
          className={cn("ui-input", error && "input-error", className)}
          aria-invalid={Boolean(error)}
          aria-describedby={hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {hint && (
          <span id={`${inputId}-hint`} className="text-muted">
            {hint}
          </span>
        )}
        {error && (
          <span className="text-danger" role="alert">
            {error}
          </span>
        )}
      </label>
    );
  }
);

Input.displayName = "Input";
