import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { cookies } from "next/headers";
import type { Lang } from "@/lib/i18n/messages";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "SignSpark",
  description:
    "Spot unfair terms in your car contract instantly. SignSpark scans your dealership paperwork against real-time state laws to flag hidden fees and compliance risks.",
  icons: {
    icon: "/assets/img/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("signspark.lang")?.value;
  const initialLang: Lang = cookieLang === "es" ? "es" : "en";

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head></head>
      <body>
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
