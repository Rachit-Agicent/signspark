"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  // Modal
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white py-2 fixed top-0 z-10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-4 lg:px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/img/logo/logo.png"
              alt="Logo"
              className="h-14 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/#home"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/#pocket"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              {t("nav.pocket")}
            </Link>
            <Link
              href="/#about"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/#work"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              {t("nav.work")}
            </Link>
            <Link
              href="/#faq"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              {t("nav.faq")}
            </Link>
            <Link
              onClick={() => setOpen(true)}
              href=""
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              {t("nav.contact")}
            </Link>
            <Link
              href="/#footer"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              {t("nav.legal")}
            </Link>
          </nav>

          {/* Language + Mobile menu */}
          <div className="flex items-center gap-3">
            {/* Language menu (desktop) */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setLangMenuOpen((v) => !v)}
                className="flex items-center gap-1.5 text-sm font-medium text-black px-2 py-1 rounded-md"
                aria-haspopup="menu"
                aria-expanded={langMenuOpen}
              >
                <Globe size={20} className="text-black" />
                <span>{lang === "es" ? t("lang.spanish") : t("lang.english")}</span>
              </button>

              {langMenuOpen ? (
                <div
                  className="absolute right-0 mt-2 w-40 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden z-20"
                  role="menu"
                >
                  <button
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                      lang === "en" ? "font-semibold" : "font-medium"
                    }`}
                    onClick={() => {
                      setLang("en");
                      setLangMenuOpen(false);
                    }}
                    role="menuitem"
                  >
                    {t("lang.english")}
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                      lang === "es" ? "font-semibold" : "font-medium"
                    }`}
                    onClick={() => {
                      setLang("es");
                      setLangMenuOpen(false);
                    }}
                    role="menuitem"
                  >
                    {t("lang.spanish")}
                  </button>
                </div>
              ) : null}
            </div>

            {/* Mobile hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-black hover:bg-white/40"
                >
                  {mobileOpen ? <X size={25} /> : <Menu size={25} />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 pt-12"
                style={{
                  background:
                    "linear-gradient(160deg, #ede9f6 0%, #d6cef0 100%)",
                }}
              >
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>

                {/* Mobile Logo */}
                <div className="flex items-center gap-2 mb-8 px-2">
                  <img
                    src="/assets/img/logo/logo.png"
                    alt="Logo"
                    className="h-14 w-auto"
                  />
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-1">
                  <Link
                    href="/#home"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-medium text-[#424242] rounded-md transition-color"
                  >
                    {t("nav.home")}
                  </Link>
                  <Link
                    href="/#pocket"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-medium text-[#424242] rounded-md transition-color"
                  >
                    {t("nav.pocket")}
                  </Link>
                  <Link
                    href="/#about"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-medium text-[#424242] rounded-md transition-color"
                  >
                    {t("nav.about")}
                  </Link>
                  <Link
                    href="/#work"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-medium text-[#424242] rounded-md transition-color"
                  >
                    {t("nav.work")}
                  </Link>
                  <Link
                    href="/#faq"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-medium text-[#424242] rounded-md transition-color"
                  >
                    {t("nav.faq")}
                  </Link>
                  <Link
                    onClick={() => setOpen(true)}
                    href="/#contact"
                    className="px-3 py-2 text-lg font-[500] text-[#424242] rounded-md transition-color"
                  >
                    {t("nav.contact")}
                  </Link>
                  <Link
                    href="/#footer"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-[500] text-[#424242] rounded-md transition-color"
                  >
                    {t("nav.legal")}
                  </Link>
                </nav>

                {/* Mobile Language */}
                <div className="mt-2 px-4">
                  <div className="flex items-center gap-3">
                    <Globe size={16} />
                    <button
                      onClick={() => setLang("en")}
                      className={`text-lg font-medium ${
                        lang === "en" ? "text-[#5B2DC5]" : "text-[#424242]"
                      }`}
                    >
                      {t("lang.english")}
                    </button>
                    <span className="text-[#B0B0B0]">/</span>
                    <button
                      onClick={() => setLang("es")}
                      className={`text-lg font-medium ${
                        lang === "es" ? "text-[#5B2DC5]" : "text-[#424242]"
                      }`}
                    >
                      {t("lang.spanish")}
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <ContactModal open={open} setOpen={setOpen} />
    </>
  );
}
