import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import type { Lang } from "@/lib/i18n/messages";
import Script from "next/script";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "SignSpark",
  description:
    "Spot unfair terms in your car contract instantly. SignSpark scans your dealership paperwork against real-time state laws to flag hidden fees and compliance risks.",
  icons: {
    icon: "/assets/img/favicon.svg",
  },
  verification: {
    google: "-UhY7F7GJBwmLypzW3huqPSP1QObDEUy8_hPxtYHfWA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLang: Lang = "en";

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head></head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3J6LFT613C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3J6LFT613C');
          `}
        </Script>
        <I18nProvider initialLang={initialLang}>
          <div className="full-wrap">
            <Header />

            {children}

            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
