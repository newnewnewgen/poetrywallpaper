import type { Metadata, Viewport } from "next";
import "@fontsource/courier-prime/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "A poem a day",
  description:
    "One carpe diem poem for each day of the year, set in a typewriter face. Light by day, dark by night.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
