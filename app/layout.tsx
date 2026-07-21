import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.vercel.app"), // Replace with your actual domain

  title: {
    default: "Saad Ali | MERN Stack Developer",
    template: "%s | Saad Ali",
  },

  description:
    "Portfolio of Saad Ali, a MERN Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and TypeScript. Explore my projects, skills, and contact information.",

  keywords: [
    "Saad Ali",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "Full Stack Developer",
    "Portfolio",
  ],

  authors: [{ name: "Saad Ali" }],
  creator: "Saad Ali",

  openGraph: {
    title: "Saad Ali | MERN Stack Developer",
    description:
      "Explore the portfolio of Saad Ali featuring modern MERN Stack projects and web development skills.",
    url: "https://YOUR-DOMAIN.vercel.app",
    siteName: "Saad Ali Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saad Ali Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saad Ali | MERN Stack Developer",
    description:
      "Portfolio of Saad Ali showcasing React, Next.js, Node.js, Express, and MongoDB projects.",
    images: ["/og-image.png"],
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
    <html lang="en" data-theme="portfolio">
      <body className={geist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}