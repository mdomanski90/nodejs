import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


export const metadata: Metadata = {
  title: "md",
  description: "121980",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body><ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}>
        {children}
      </ThemeProvider></body>
      </html>
  );
}