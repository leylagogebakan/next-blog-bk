import React from "next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Blog",
  description: "My Dev Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    // appearance={{ // 修改 sign-in/sign-up 页面式样
    //   elements: {
    //     formButtonPrimary: "bg-primary", // continue/submit按钮 背景色
    //     footerActionLink: "text-primary hover:text-error", // 最后一行 sign-up/sign-in 链接的式样
    //   },
    // }}
    >
      <html lang="zh-CN" suppressHydrationWarning>
        <body className={inter.className}>
          <NextTopLoader />
          <ThemeProvider
            value={{ light: "garden", dark: "night" }}
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
