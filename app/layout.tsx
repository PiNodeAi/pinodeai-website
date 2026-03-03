import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/ui/back-to-top";
import { companyName, companyTagline } from "@/lib/constants";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: `${companyName} - ${companyTagline}`,
        template: `%s | ${companyName}`,
    },
    description:
        "PiNodeAI provides cutting-edge AI solutions, cloud infrastructure, web development, and digital transformation services to help businesses thrive in the digital age.",
    keywords: [
        "AI solutions",
        "machine learning",
        "cloud infrastructure",
        "web development",
        "mobile apps",
        "digital transformation",
    ],
    authors: [{ name: companyName }],
    creator: companyName,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://pinodeai.com",
        siteName: companyName,
        title: `${companyName} - ${companyTagline}`,
        description:
            "Transforming Ideas into Intelligent Solutions with AI, Cloud, and Modern Development",
    },
    twitter: {
        card: "summary_large_image",
        title: `${companyName} - ${companyTagline}`,
        description:
            "Transforming Ideas into Intelligent Solutions with AI, Cloud, and Modern Development",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={poppins.variable}>
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

