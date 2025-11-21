import * as React from "react";
import { cn } from "@/lib/cn";

export interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, onCheckedChange, label, className, ...props }, ref) => {
    const [internal, setInternal] = React.useState(Boolean(checked));
    const isControlled = typeof checked === "boolean";
    const value = isControlled ? checked! : internal;

    React.useEffect(() => {
      if (isControlled) {
        setInternal(checked!);
      }
    }, [isControlled, checked]);

    const toggle = () => {
      const next = !value;
      if (!isControlled) setInternal(next);
      onCheckedChange?.(next);
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={value}
        className={cn("ui-switch", className)}
        data-checked={value}
        onClick={toggle}
        ref={ref}
        {...props}
      >
        <span className="ui-switch__thumb" />
        {label && <span className="sr-only">{label}</span>}
      </button>
    );
  }
);

Switch.displayName = "Switch";
