import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryunosuke Yoda (依田隆之介) - Portfolio",
  description: "Ryunosuke Yoda's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
      </html>
  );
}
