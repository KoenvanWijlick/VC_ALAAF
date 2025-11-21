import * as React from "react";
import { cn } from "@/lib/cn";

export interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | undefined>(undefined);

export interface RadioGroupProps {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function RadioGroup({
  name,
  value,
  defaultValue,
  onChange,
  children,
  className,
}: RadioGroupProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const currentValue = value ?? internal;

  const handleChange = React.useCallback(
    (next: string) => {
      if (onChange) onChange(next);
      setInternal(next);
    },
    [onChange]
  );

  return (
    <div role="radiogroup" className={className}>
      <RadioGroupContext.Provider value={{ name, value: currentValue, onChange: handleChange }}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
}

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
}

export function Radio({ label, description, className, ...props }: RadioProps) {
  const context = React.useContext(RadioGroupContext);
  if (!context) {
    throw new Error("Radio must be used within RadioGroup");
  }

  const checked = context.value === props.value;
  const handleChange = () => context.onChange?.(props.value as string);

  return (
    <label className={cn("ui-field", className)}>
      <input
        {...props}
        type="radio"
        className="ui-radio"
        name={context.name}
        checked={checked}
        onChange={handleChange}
      />
      <span>{label}</span>
      {description && <small className="text-muted">{description}</small>}
    </label>
  );
}
