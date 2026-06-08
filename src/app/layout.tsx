import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ryunosuke Yoda",
  alternateName: "依田 隆之介",
  jobTitle: "Software Engineer",
  url: siteUrl,
  image: siteUrl ? `${siteUrl}/takoyaki.png` : undefined,
  email: "mailto:takoyakidath@gmail.com",
  sameAs: [
    "https://github.com/takoyakidath",
    "https://twitter.com/takoyakidath",
  ],
};

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Ryunosuke Yoda (依田隆之介) - Portfolio",
  description: "Ryunosuke Yoda's Portfolio",
  openGraph: {
    title: "Ryunosuke Yoda (依田隆之介) - Portfolio",
    description: "Ryunosuke Yoda's Portfolio",
    url: siteUrl,
    siteName: "Ryunosuke Yoda - Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryunosuke Yoda (依田隆之介) - Portfolio",
    description: "Ryunosuke Yoda's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Script id="person-jsonld" type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
