"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { companyName } from "@/lib/constants";
import Button from "@/components/ui/button";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <svg
                            width="400"
                            height="120"
                            viewBox="0 0 400 120"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-20 w-auto text-primary-600 dark:text-primary-400"
                            role="img"
                            aria-label={`${companyName} logo`}
                        >
                            <defs>
                                <linearGradient
                                    id="modernGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
                                </linearGradient>
                            </defs>

                            <g transform="translate(30, 30)">
                                <circle
                                    cx="30"
                                    cy="30"
                                    r="28"
                                    fill="none"
                                    stroke="url(#modernGradient)"
                                    strokeWidth="4"
                                />
                                <path
                                    d="M 30 30 L 30 2 A 28 28 0 0 1 53 17 Z"
                                    fill="currentColor"
                                    opacity="0.8"
                                />
                                <path
                                    d="M 30 30 L 53 17 A 28 28 0 0 1 53 43 Z"
                                    fill="currentColor"
                                    opacity="0.6"
                                />
                                <path
                                    d="M 30 30 L 53 43 A 28 28 0 0 1 30 58 Z"
                                    fill="currentColor"
                                    opacity="0.25"
                                />
                                <circle cx="30" cy="30" r="8" fill="currentColor" />
                            </g>

                            <text
                                x="100"
                                y="70"
                                fontFamily="'Helvetica Neue', Arial, sans-serif"
                                fontSize="36"
                                fontWeight="300"
                                fill="currentColor"
                            >
                                Pie<tspan fontWeight="600">Node</tspan>
                                <tspan fill="#6C5CE7" fontWeight="600">
                                    AI
                                </tspan>
                            </text>
                        </svg>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400",
                                    pathname === link.href
                                        ? "text-primary-600 dark:text-primary-400"
                                        : "text-gray-700 dark:text-gray-300"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </button>
                        )}

                        <Link href="/contact" className="hidden md:block">
                            <Button size="sm">Get Started</Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="border-t border-gray-200 py-4 dark:border-gray-800 md:hidden">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-base font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400",
                                        pathname === link.href
                                            ? "text-primary-600 dark:text-primary-400"
                                            : "text-gray-700 dark:text-gray-300"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/contact" className="pt-2">
                                <Button size="sm" className="w-full">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

