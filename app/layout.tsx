import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/ui/back-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import {
    companyName,
    companyTagline,
    companyDescription,
    siteUrl,
    defaultOgImageUrl,
} from "@/lib/constants";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: `${companyName} - ${companyTagline}`,
        template: `%s | ${companyName}`,
    },
    description: companyDescription,
    keywords: [
        "AI solutions",
        "machine learning",
        "cloud infrastructure",
        "web development",
        "mobile apps",
        "digital transformation",
        "eCommerce",
        "Shopify Plus",
        "Adobe Experience Manager",
        "WordPress",
        "product engineering",
        "PieNodeAi",
    ],
    authors: [{ name: companyName, url: siteUrl }],
    creator: companyName,
    publisher: companyName,
    applicationName: companyName,
    referrer: "origin-when-cross-origin",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteUrl,
        siteName: companyName,
        title: `${companyName} - ${companyTagline}`,
        description: companyDescription,
        images: [
            {
                url: defaultOgImageUrl,
                width: 1200,
                height: 630,
                alt: `${companyName} - ${companyTagline}`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${companyName} - ${companyTagline}`,
        description: companyDescription,
        images: [defaultOgImageUrl],
        creator: "@pinodeai",
        site: "@pinodeai",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
            { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
            { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
            { url: "/favicon-64x64.png", type: "image/png", sizes: "64x64" },
            { url: "/favicon-128x128.png", type: "image/png", sizes: "128x128" },
            { url: "/favicon-512x512.png", type: "image/png", sizes: "512x512" },
        ],
        shortcut: "/favicon-32x32.png",
        apple: "/favicon-128x128.png",
    },
    manifest: "/manifest.json",
    category: "technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta
                    name="google-site-verification"
                    content="sUZlRiUkIwLR5vU6hayP5g2hO23oe0qsX_dZwNfIlgI"
                />
            </head>
            <body>
                <JsonLd />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex min-h-screen flex-col">
                        <Navbar />
                        <main className="flex-1">{children}</main>
                        <Footer />
                        <BackToTop />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

