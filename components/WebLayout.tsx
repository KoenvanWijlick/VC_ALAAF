import React from "react";
import { AppShell } from "@mantine/core";
import NavbarSimpleContent from "./Navbar/NavbarSimpleContent";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      padding={0}
      header={{ height: 64 }}
      navbar={undefined}
      styles={{
        main: {
          marginTop: 64,
          padding: "0",
        },
      }}
    >
      <AppShell.Header px={0} style={{ background: "transparent", boxShadow: "none" }}>
        <NavbarSimpleContent />
      </AppShell.Header>
      {children}
    </AppShell>
  );
}
