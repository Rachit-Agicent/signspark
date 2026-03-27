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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "es">("es");

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
              Home
            </Link>
            <Link
              href="/#pocket"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              Pocket Negotiator
            </Link>
            <Link
              href="/#about"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              About us
            </Link>
            <Link
              href="/#work"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              "How it works
            </Link>
            <Link
              href="/#faq"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              FAQ
            </Link>
            <Link
              onClick={() => setOpen(true)}
              href=""
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              Contact
            </Link>
            <Link
              href="/#footer"
              className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
            >
              Legal
            </Link>
          </nav>

          {/* Language + Mobile menu */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-black px-2 py-1 rounded-md "
            >
              <Globe size={20} className="text-black" />
              <span>{lang === "es" ? "Español" : "English"}</span>
            </button>

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
                    className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
                  >
                    Home
                  </Link>
                  <Link
                    href="/#pocket"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
                  >
                    Pocket Negotiator
                  </Link>
                  <Link
                    href="/#about"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
                  >
                    About us
                  </Link>
                  <Link
                    href="/#work"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
                  >
                    "How it works
                  </Link>
                  <Link
                    href="/#faq"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
                  >
                    FAQ
                  </Link>
                  <Link
                    onClick={() => setOpen(true)}
                    href="/#contact"
                    className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/#footer"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-lg font-medium text-black rounded-md transition-color"
                  >
                    Legal
                  </Link>
                </nav>

                {/* Mobile Language */}
                <div className="mt-6 px-4">
                  <button
                    onClick={() => setLang(lang === "en" ? "es" : "en")}
                    className="flex items-center gap-2 text-sm font-medium text-black"
                  >
                    <Globe size={16} />
                    <span>{lang === "es" ? "Español" : "English"}</span>
                  </button>
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
