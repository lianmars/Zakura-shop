import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZAKURA | ESTÉREO URBANO",
  description: "ZAKURA STREETWEAR / CULTURE / IDENTITY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${jetbrainsMono.variable} antialiased bg-black text-white font-mono`}
      >
        <TopNavBar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
