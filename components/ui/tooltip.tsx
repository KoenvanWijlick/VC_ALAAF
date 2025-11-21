"use client";

import * as React from "react";
import { createPortal } from "react-dom";

export interface TooltipProps {
  label: string;
  children: React.ReactElement;
}

export function Tooltip({ label, children }: TooltipProps) {
  const [visible, setVisible] = React.useState(false);
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLElement | null>(null);

  const child = React.cloneElement(children, {
    ref: (node: HTMLElement) => {
      ref.current = node;
      const { ref: childRef } = children as any;
      if (typeof childRef === "function") childRef(node);
      else if (childRef) childRef.current = node;
    },
    onMouseEnter: (event: React.MouseEvent<HTMLElement>) => {
      children.props.onMouseEnter?.(event);
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setCoords({ x: rect.left + rect.width / 2, y: rect.top });
      setVisible(true);
    },
    onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
      children.props.onMouseLeave?.(event);
      setVisible(false);
    },
    onFocus: (event: React.FocusEvent<HTMLElement>) => {
      children.props.onFocus?.(event);
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setCoords({ x: rect.left + rect.width / 2, y: rect.top });
      setVisible(true);
    },
    onBlur: (event: React.FocusEvent<HTMLElement>) => {
      children.props.onBlur?.(event);
      setVisible(false);
    },
    "aria-describedby": visible ? `tooltip-${label}` : undefined,
  });

  return (
    <>
      {child}
      {visible &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="tooltip"
            className="ui-tooltip"
            id={`tooltip-${label}`}
            style={{ top: coords.y - 12, left: coords.x }}
          >
            {label}
          </div>,
          document.body
        )}
    </>
  );
}
