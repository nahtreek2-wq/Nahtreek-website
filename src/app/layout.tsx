import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SupportWidget } from "@/components/ui/SupportWidget";
import { SITE_URL, EMAIL } from "@/lib/site";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NAHTREEK | Property services & engineering",
    template: "%s | NAHTREEK",
  },
  description:
    "Explore civil engineering and property services with NAHTREEK. Discuss planning, construction, repairs and maintenance.",
  icons: {
    icon: [{ url: "/images/nahtreek-favicon.png", type: "image/png" }],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NAHTREEK",
    url: SITE_URL,
    logo: `${SITE_URL}/images/nahtreek-favicon.png`,
    email: EMAIL,
  };
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <SupportWidget />
      </body>
    </html>
  );
}
