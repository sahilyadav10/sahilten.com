import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/generic/Navbar";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { PostHogProvider } from "@/context/PosthogContext";

export const metadata: Metadata = {
  title: `Software Engineer | Sahil | ${new Date().getFullYear()}`,
  description:
    "Sahil Yadav is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.",
  metadataBase: new URL("https://sahilten.com/"),
  openGraph: {
    title: "Sahil Yadav",
    description:
      "Sahil Yadav is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.",
    url: "https://sahilten.com/",
    type: "website",
    images: [
      {
        url: "/metadata-og-standard.png", // Standard OG image
        width: 1200,
        height: 630,
        alt: "Sahil Yadav is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.",
      },
      {
        url: "/metadata-og-fallback.png", // Alternative OG image
        width: 600,
        height: 315,
        alt: "Sahil Yadav is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Yadav",
    description:
      "Sahil Yadav is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.",
    creator: "Sahil Yadav",
    images: [
      "/metadata-twitter.png", // Standard Twitter image
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/mask-icon.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

const openSans = Open_Sans({
  weight: ["400", "700", "500", "600"],
  subsets: ["latin"],
  variable: "--font-openSans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body className="w-full md:mx-auto my-5 md:max-w-4xl xl:max-w-5xl pt-16">
        <PostHogProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </PostHogProvider>
        <script
          src="//code.tidio.co/4l4pmifrvyelxsyxtdnctqib5o8vcygr.js"
          async
        ></script>
      </body>
    </html>
  );
}
