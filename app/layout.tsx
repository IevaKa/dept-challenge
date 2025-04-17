import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dept Agency",
  description:
    "A selection of projects that pioneer tech and marketing to help brands stay ahead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="description"
        content="A selection of projects that pioneer tech and marketing to help brands stay ahead."
      />
      <Head>
        <link
          rel="preload"
          as="image"
          href="/images/hero.webp"
          imageSrcSet="/images/hero.webp"
          imageSizes="100vw"
        />
      </Head>
      <body className={`${montserrat.className} relative`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
