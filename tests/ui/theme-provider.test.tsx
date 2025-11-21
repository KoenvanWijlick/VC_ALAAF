import { renderHook, act } from "@testing-library/react";
import type { ReactNode } from "react";
import { ThemeProvider, useTheme } from "@/components/providers/theme-provider";

describe("ThemeProvider", () => {
  it("cycles theme correctly", () => {
    const wrapper = ({ children }: { children: ReactNode }) => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => useTheme(), { wrapper });
    act(() => {
      result.current.cycleTheme();
    });
    expect(["dark", "contrast"]).toContain(result.current.theme);
  });
});
