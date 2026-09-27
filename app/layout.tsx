import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SafeRepo Fixture: Critical Density",
  description: "Maximum density fixture for stress-testing SafeRepo scanner ingestion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
