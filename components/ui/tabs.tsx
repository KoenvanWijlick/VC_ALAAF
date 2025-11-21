import * as React from "react";
import { cn } from "@/lib/cn";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, defaultTab, onTabChange, className }: TabsProps) {
  const [active, setActive] = React.useState(defaultTab || tabs[0]?.id);

  const selectTab = (id: string) => {
    setActive(id);
    onTabChange?.(id);
  };

  return (
    <div className={cn("ui-tabs", className)}>
      <div className="ui-tablist" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            className={cn("ui-button", "ui-button--ghost")}
            onClick={() => selectTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="ui-tabpanel" role="tabpanel">
        {tabs.find((tab) => tab.id === active)?.content}
      </div>
    </div>
  );
}
