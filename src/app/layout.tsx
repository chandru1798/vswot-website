import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyCtaButton } from "@/components/ui/StickyCtaButton";
import { PageTransition } from "@/components/animations/PageTransition";
import { createMetadata, organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: undefined,
  description:
    "Vswot is a premium digital marketing agency specializing in Website Design, SEO, Performance Marketing (Google & Meta Ads), Social Media, and Content Marketing that drives measurable growth.",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [
    organizationSchema(),
    websiteSchema(),
    localBusinessSchema(),
  ];

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c5ff2" />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <PageTransition>
            <main id="main-content">{children}</main>
          </PageTransition>
          <Footer />
          <WhatsAppButton />
          <StickyCtaButton />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#1a1a2e",
                color: "#f0f0f8",
                border: "1px solid #2a2a40",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
