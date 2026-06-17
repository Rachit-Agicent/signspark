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
  robots: "index, follow",
  authors: [
    {
      name: "SignSpark",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://signspark.com/",
    title: "SignSpark",
    description:
      "Spot unfair terms in your car contract instantly. SignSpark scans your dealership paperwork against real-time state laws to flag hidden fees and compliance risks.",
    images: [
      {
        url: "assets/img/og_default_meta_image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "signspark.com",
    title: "SignSpark - Identify Unfair Terms in Your Car Contract",
    description:
      "Spot unfair terms in your car contract instantly. SignSpark scans your dealership paperwork against real-time state laws to flag hidden fees and compliance risks.",
    images: ["assets/img/og_default_meta_image.png"],
  },
  other: {
    "revisit-after": "1 days",
    copyright: "SignSpark, All right reserved 2026.",
    publisher: "SignSpark",
    "twitter:url": "https://signspark.com/",
  },
  canonical: "https://signspark.com/",
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
        {/* FAQ Schema */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Will the dealership get mad if I use this?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Transparency isn't rude; it's smart. Our Fairness Report gives you professional, data-backed facts so you can ask confident questions without being aggressive. Most users find dealers back down quickly when shown the data.",
                },
              },
              {
                "@type": "Question",
                name: "How much money can I actually save?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On average, users save between $1,500 and $4,000 on their vehicle purchase. The exact amount depends on the make, model, and current market conditions in your area.",
                },
              },
              {
                "@type": "Question",
                name: "Is my data contract data 100% private?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Your data is encrypted end-to-end and never shared with third parties, including dealerships. We take your privacy seriously.",
                },
              },
              {
                "@type": "Question",
                name: "Does this work for Leases and Used Cars?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Our platform supports new car purchases, used vehicles, and lease agreements. We analyze all deal types to ensure you get a fair price.",
                },
              },
              {
                "@type": "Question",
                name: "I'm at the dealership right now, Is it fast enough?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — results are generated in under 60 seconds. Just upload your contract or enter the deal details and you'll have a full Fairness Report before you sign anything.",
                },
              },
              {
                "@type": "Question",
                name: "Do I have to pay if my deal is already fair?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You only pay for the full report if you choose to unlock it. The initial summary showing whether your deal is fair or not is completely free.",
                },
              },
            ],
          })}
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
