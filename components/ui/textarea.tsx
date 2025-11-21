import * as React from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, rows = 4, ...props }, ref) => {
    const textareaId = id || React.useId();
    return (
      <label className="ui-field" htmlFor={textareaId}>
        {label && <span>{label}</span>}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn("ui-textarea", error && "input-error", className)}
          aria-invalid={Boolean(error)}
          {...props}
        />
        {error && (
          <span className="text-danger" role="alert">
            {error}
          </span>
        )}
      </label>
    );
  }
);

Textarea.displayName = "Textarea";
