import * as React from "react";
import { cn } from "@/lib/cn";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, className, error, id, ...props }, ref) => {
    const selectId = id || React.useId();
    return (
      <label className="ui-field" htmlFor={selectId}>
        {label && <span>{label}</span>}
        <select
          ref={ref}
          id={selectId}
          className={cn("ui-select", error && "input-error", className)}
          aria-invalid={Boolean(error)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <span className="text-danger" role="alert">
            {error}
          </span>
        )}
      </label>
    );
  }
);

Select.displayName = "Select";
