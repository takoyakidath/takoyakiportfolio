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

const title = "Ryunosuke Yoda (依田隆之介) - Portfolio";
const description =
  "千葉県出身のフルスタックエンジニア・依田隆之介(Ryunosuke Yoda / takoyakidath)のポートフォリオサイト。Next.js・TypeScript・Kubernetesなどを用いた制作実績(EarthRader, Triplewin)やスキル、経歴を紹介しています。";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Ryunosuke Yoda",
    "依田隆之介",
    "takoyakidath",
    "Fullstack Engineer",
    "Software Engineer",
    "ポートフォリオ",
    "Portfolio",
    "Next.js",
    "TypeScript",
    "Kubernetes",
  ],
  authors: [{ name: "Ryunosuke Yoda", url: siteUrl }],
  creator: "Ryunosuke Yoda",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Ryunosuke Yoda - Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
