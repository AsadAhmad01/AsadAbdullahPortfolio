import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://asad-abdullah.dev";
const fullName = "Asad Abdullah";
const title = `${fullName} — Senior Android & Flutter Developer | Edge AI · WebRTC · Web3 · eSIM`;
const description =
  "Portfolio of Asad Abdullah — Senior Mobile App Developer with 4+ years building production Android (Kotlin, Jetpack Compose) and Flutter apps. Specialist in Edge AI / On-Device LLM, WebRTC VoIP, Web3 payments, and eSIM provisioning. Based in Lahore, Pakistan.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Android Developer", "Flutter Developer", "Kotlin", "Jetpack Compose",
    "Edge AI", "On-Device LLM", "MediaPipe", "WebRTC", "Web3", "eSIM",
    "GSMA", "Mobile App Developer", "Lahore Pakistan", "RLHF", "RAG",
    "Asad Abdullah", "Senior Mobile Developer",
  ],
  authors: [{ name: fullName, url: "https://github.com/AsadAhmad01" }],
  creator: fullName,
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: `${fullName} Portfolio`,
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: `${fullName} — Mobile App Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0F1E",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  jobTitle: "Senior Mobile App Developer",
  url: siteUrl,
  email: "haalim376@gmail.com",
  telephone: "+92-348-1400801",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/AsadAhmad01",
    "https://linkedin.com/in/asad-abdullah-dev",
    "https://linktr.ee/asad._.abdullah",
  ],
  knowsAbout: [
    "Android Development", "Flutter", "Kotlin", "Edge AI",
    "WebRTC", "Web3", "eSIM", "Jetpack Compose",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-midnight text-white antialiased">{children}</body>
    </html>
  );
}
