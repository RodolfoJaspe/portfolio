import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import "../global.css";
import { Analytics } from "./components/analytics";
import { PWARegistration } from "./components/pwa-registration";

export const metadata: Metadata = {
  title: {
    default: "Rodolfo Jaspe",
    template: "%s | Rodolfo Jaspe",
  },
  description: "My developer portfolio site",
  openGraph: {
    title: "Rodolfo Jaspe",
    description: "My developer portfolio site",
    url: "https://rodolfojaspe.com",
    siteName: "Rodolfo Jaspe",
    images: [
      {
        url: "https://rodolfojaspe.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "Rodolfo Jaspe",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Rodolfo Jaspe",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  other: {
    "theme-color": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Rodolfo Jaspe",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <Analytics />
        <PWARegistration />
        {children}
      </body>
    </html>
  );
}
