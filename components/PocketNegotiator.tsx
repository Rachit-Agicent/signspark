"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay, FaLock } from "react-icons/fa";
import {
  ScanLine,
  TrendingUp,
  Handshake,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const steps = [
  {
    id: 0,
    label: "Scan Contracts in Seconds",
    icon: ScanLine,
    image: "/assets/img/app/app01.png",
  },
  {
    id: 1,
    label: "Get a Fairness Score Instantly",
    icon: TrendingUp,
    image: "/assets/img/app/app02.png",
  },
  {
    id: 2,
    label: "Know Exactly What to Negotiate",
    icon: Handshake,
    image: "/assets/img/app/app03.png",
  },
];

export default function PocketNegotiator() {
  // Negotiator
  const [phase, setPhase] = useState<"intro" | "tabs">("intro");
  const [activeTab, setActiveTab] = useState(0);

  // Show app4
  useEffect(() => {
    const t = setTimeout(() => {
      setPhase("tabs");
      setActiveTab(0);
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  // Auto-cycle
  useEffect(() => {
    if (phase !== "tabs") return;
    const interval = setInterval(() => setActiveTab((p) => (p + 1) % 3), 2500);
    return () => clearInterval(interval);
  }, [phase]);

  const currentImage =
    phase === "intro" ? "/assets/img/app/app0.png" : steps[activeTab].image;

  return (
    <section className="w-full bg-white py-16 " id="pocket">
      <div className="max-w-7xl px-4 sm:px-4 lg:px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — Phone Image */}
        <div>
          <div className="block lg:hidden mb-6">
            <p className="text-lg font-semibold  text-[#5C2CC6] uppercase">
              Negotiate with Confidence
            </p>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Your Pocket <span className="text-[#5C2CC6]">Negotiator.</span>
            </h1>
          </div>
          <div className="flex justify-center relative">
            <div className="relative w-full h-[700px]">
              <Image
                key={currentImage}
                src={currentImage}
                alt="App screen"
                fill
                className="object-contain object-top transition-opacity duration-500"
                priority
              />
            </div>
          </div>
        </div>
        {/* RIGHT — Content */}
        <div className="flex flex-col gap-3">
          <div className="hidden lg:block mb-6">
            <p className="text-lg font-semibold  text-[#5C2CC6] uppercase">
              Negotiate with Confidence
            </p>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Your Pocket <span className="text-[#5C2CC6]">Negotiator.</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-[#5A5A5A] text-lg leading-relaxed">
            Arm yourself with real-time AI analysis. Scan contracts, spot hidden
            fees, and negotiate with confidence—right at the dealership desk.
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-3 mt-5">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = phase === "tabs" && activeTab === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setPhase("tabs");
                    setActiveTab(step.id);
                  }}
                  className="flex items-center gap-4 text-left group focus:outline-none"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-[#5B2DC5] border-[#5B2DC5] shadow-md shadow-[#626060]"
                        : "bg-white border-[#626060] "
                    }`}
                  >
                    <Icon
                      size={22}
                      className={isActive ? "text-white" : "text-[#626060]"}
                    />
                  </div>

                  {/* Label */}
                  <span
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      isActive ? "text-[#5B2DC5]" : "text-[#626060]"
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-5">
            <button className="flex items-center gap-2 bg-[#5B2DC5]  text-white px-5 py-3 rounded-xl text-lg transition-all active:scale-95 shadow-md shadow-violet-200">
              <FaApple className="text-3xl" /> App Store
            </button>
            <button className="flex items-center gap-2 bg-[#5B2DC5]  text-white  px-5 py-3 rounded-xl text-lg transition-all active:scale-95 shadow-md shadow-violet-200">
              <FaGooglePlay className="text-3xl" />
              Play Store
            </button>
          </div>

          {/* Trust */}
          <div className="flex flex-col gap-1.5 mt-4">
            <p className="flex items-center gap-2 text-sm text-[#757474]">
              <ShieldCheck size={13} className="text-[#00C247]" />
              100% Secure &amp; Private. Your data is never shared.
            </p>
            <p className="flex items-center gap-2 text-sm text-[#757474]">
              <MapPin size={13} className="text-[#5B2DC5]" />
              Helping car buyers across all 50 states.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
