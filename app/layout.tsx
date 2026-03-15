import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
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

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700"],
});

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
    verification: {
        // Add your verification codes when available
        // google: "your-google-verification-code",
        // yandex: "your-yandex-verification-code",
        // bing: "your-bing-verification-code",
    },
    icons: {
        icon: [
            { url: "/favicon.png", type: "image/png", sizes: "512x512" },
            { url: "/favicon.png", type: "image/png", sizes: "32x32" },
        ],
        shortcut: "/favicon.png",
        apple: "/favicon.png",
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
            <body className={poppins.variable}>
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

