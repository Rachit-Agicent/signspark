import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "SignSpark",
  description:
    "Spot unfair terms in your car contract instantly. SignSpark scans your dealership paperwork against real-time state laws to flag hidden fees and compliance risks.",
  icons: {
    icon: "/assets/img/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head></head>
      <body>
        <div className="full-wrap">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
