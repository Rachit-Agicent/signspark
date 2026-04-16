"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLock,
} from "react-icons/fa";
import ContactModal from "./ContactModal";
import { useI18n } from "@/lib/i18n/I18nProvider";

const productLinks = [
  { key: "footer.product.freeScan", href: "/#home" },
  { key: "footer.product.pro", href: "/#feature" },
  { key: "footer.product.howItWorks", href: "/#work" },
  { key: "footer.product.faq", href: "/#faq" },
  { key: "footer.product.about", href: "/#about" },
];

const resourceLinks = [
  { key: "footer.resources.guide", href: "/blog/dirty-dozen-hidden-fees" },
  { key: "footer.resources.scripts", href: "/blog/ai-scripts-saved-2400" },
];

const legalLinks = [
  { key: "footer.legal.privacy", href: "/privacy-policy" },
  { key: "footer.legal.terms", href: "/terms-conditions" },
  { key: "footer.legal.security", href: "/data-security" },
];

export default function Footer() {
  const { t } = useI18n();
  const router = useRouter();

  // Modal
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-black text-white" id="footer">
        {/* Main footer content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-4 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
            {/* Brand column */}
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img
                  src="/assets/img/footer/logo.png"
                  alt="Logo"
                  className="h-15 w-auto"
                />
              </div>

              {/* Tagline */}
              <div>
                <p className="text-xl font-bold text-white">
                  {t("footer.tagline.title")}
                </p>
                <p className="text-lg text-[#EDEDED] mt-2 leading-relaxed">
                  {t("footer.tagline.desc")}
                </p>
              </div>
            </div>

            {/* Product links */}
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold text-white">
                {t("footer.product")}
              </p>
              <ul className="flex flex-col gap-3">
                {productLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(link.href);
                      }}
                      className="text-lg text-[#EDEDED] hover:text-white transition-colors"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources links */}
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold text-white">
                {t("footer.resources")}
              </p>
              <ul className="flex flex-col gap-3">
                {resourceLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(link.href);
                      }}
                      className="text-lg text-[#EDEDED] hover:text-white transition-colors"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
                <li
                  onClick={() => setOpen(true)}
                  className="text-lg text-[#EDEDED] hover:text-white transition-colors cursor-pointer"
                >
                  {t("footer.contactSupport")}
                </li>
              </ul>
            </div>

            {/* Legal links */}
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold text-white">
                {t("footer.legal")}
              </p>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(link.href);
                      }}
                      className="text-lg text-[#EDEDED] hover:text-white transition-colors"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="block sm:flex justify-between mt-5">
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-1">
              <Link href="#" className="text-white transition-colors">
                <FaTwitter size={25} />
              </Link>
              <Link href="#" className="text-white transition-colors">
                <FaFacebook size={25} />
              </Link>
              <Link href="#" className="text-white transition-colors">
                <FaInstagram size={25} />
              </Link>
              <Link href="#" className="text-white transition-colors">
                <FaLinkedin size={25} />
              </Link>
            </div>
            <p className="text-lg text-white mt-2">
              {t("footer.poweredBy")}{" "}
              <Link
                href="https://carbuyinsight.org/"
                target="_blank"
                className="text-[#FF8A44]  underline underline-offset-2"
              >
                CarBuyInsight
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Encryption badge */}
            <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2">
              <FaLock size={15} className="text-[#5B2DC5]" />
              <span className="text-lg text-slate-300">
                {t("footer.encryption")}
              </span>
            </div>

            {/* Copyright */}
            <p className="text-lg text-white">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>

      <ContactModal open={open} setOpen={setOpen} />
    </>
  );
}
