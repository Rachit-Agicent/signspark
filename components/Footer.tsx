"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLock,
} from "react-icons/fa";
import ContactModal from "./ContactModal";

const productLinks = [
  { label: "Free Fairness Scan", href: "/#home" },
  { label: "SignSpark Pro", href: "/#feature" },
  { label: "How it works", href: "/#work" },
  { label: "FAQ", href: "/#faq" },
];

const resourceLinks = [
  { label: "Car Buying Guide", href: "#" },
  { label: "Negotiation Scripts", href: "/#pocket" },
  { label: "About Us", href: "/#about" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Data Security", href: "#" },
];

export default function Footer() {
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
                  Spark Clarity Before you sign
                </p>
                <p className="text-lg text-[#EDEDED] mt-2 leading-relaxed">
                  Building trust in car buying by empowering buyers with
                  AI-powered contract clarity, fee fairness insights, and
                  negotiation guidance—before signing.
                </p>
              </div>
            </div>

            {/* Product links */}
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold text-white">Product</p>
              <ul className="flex flex-col gap-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-lg text-[#EDEDED] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources links */}
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold text-white">Resources</p>
              <ul className="flex flex-col gap-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-lg text-[#EDEDED] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li
                  onClick={() => setOpen(true)}
                  className="text-lg text-[#EDEDED] hover:text-white transition-colors cursor-pointer"
                >
                  Contact Support
                </li>
              </ul>
            </div>

            {/* Legal links */}
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold text-white">Legal</p>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-lg text-[#EDEDED] hover:text-white transition-colors"
                    >
                      {link.label}
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
              Powered by Community Data from{" "}
              <Link
                href="https://d3qo2gpyfxf2wz.cloudfront.net"
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
                256-Bit Bank Level Encryption
              </span>
            </div>

            {/* Copyright */}
            <p className="text-lg text-white">
              © 2026 SignSpark AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ContactModal open={open} setOpen={setOpen} />
    </>
  );
}
