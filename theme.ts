"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "'Inter', sans-serif",
  headings: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: "600",
  },
  primaryColor: "blue",
  defaultRadius: "md",
  colors: {
    // VC-alaaf brand colors
    navy: [
      "#e6f0f9",
      "#cce1f3",
      "#99c3e7",
      "#66a5db",
      "#3387cf",
      "#0069c3",
      "#002856", // Primary navy
      "#002045",
      "#001834",
      "#001023",
    ],
    cyan: [
      "#e5f7fd",
      "#cceffb",
      "#99dff7",
      "#66cff3",
      "#33bfef",
      "#00afeb",
      "#0093d0", // Secondary cyan
      "#006fa0",
      "#004b70",
      "#002740",
    ],
  },
  components: {
    Paper: {
      defaultProps: {
        shadow: "sm",
        radius: "md",
        p: "md",
      },
    },
  },
});
