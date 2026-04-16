"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaApple, FaGooglePlay, FaLock } from "react-icons/fa";
import { FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Clipboard,
  RefreshCw,
  Zap,
  CheckCircle,
  ShieldCheck,
  Clock,
  ChevronUp,
  Plus,
  X,
} from "lucide-react";
import ContactModal from "@/components/ContactModal";
import PocketNegotiator from "@/components/PocketNegotiator";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Banner() {
  const { t } = useI18n();

  const features = [
    {
      title: t("home.feature1.title"),
      desc: t("home.feature1.desc"),
      img: "/assets/img/feature/feature1.png",
      border: "border-[#E5844A]",
      shadow: "shadow-[0px_0px_32px_0px_#FFD2B7]",
    },
    {
      title: t("home.feature2.title"),
      desc: t("home.feature2.desc"),
      img: "/assets/img/feature/feature2.png",
      border: "border-[#6A40AC]",
      shadow: "shadow-[0px_0px_32px_0px_#D8C0FF]",
    },
    {
      title: t("home.feature3.title"),
      desc: t("home.feature3.desc"),
      img: "/assets/img/feature/feature3.png",
      border: "border-[#489F74]",
      shadow: "shadow-[0px_0px_32px_0px_#30B37236]",
    },
    {
      title: t("home.feature4.title"),
      desc: t("home.feature4.desc"),
      img: "/assets/img/feature/feature4.png",
      border: "border-[#2577D6]",
      shadow: "shadow-[0px_0px_32px_0px_#D3E7FF]",
    },
  ];

  const blogs = [
    {
      img: "/assets/img/blog/blog1.png",
      category: t("blog.category.scams"),
      time: `5 ${t("blog.minReadShort")}`,
      title: t("home.blog.card1.title"),
      desc: t("home.blog.card1.desc"),
      link: "/blog/dirty-dozen-hidden-fees",
      color: "green",
      btn: t("home.blog.readGuide"),
    },
    {
      img: "/assets/img/blog/blog2.png",
      category: t("blog.category.negotiation"),
      time: `7 ${t("blog.minReadShort")}`,
      title: t("home.blog.card2.title"),
      desc: t("home.blog.card2.desc"),
      link: "/blog/ai-scripts-saved-2400",
      color: "green",
      btn: t("home.blog.seeScripts"),
    },
    {
      img: "/assets/img/blog/blog03.png",
      category: t("blog.category.negotiation"),
      time: `4 ${t("blog.minReadShort")}`,
      title: t("home.blog.card3.title"),
      desc: t("home.blog.card3.desc"),
      link: "/blog/msrp-myth",
      color: "green",
      btn: t("home.blog.readMore"),
    },
  ];

  // FAQ
  const faqs = [
    {
      id: "01",
      question: t("home.faq.q1"),
      answer: t("home.faq.a1"),
    },
    {
      id: "02",
      question: t("home.faq.q2"),
      answer: t("home.faq.a2"),
    },
    {
      id: "03",
      question: t("home.faq.q3"),
      answer: t("home.faq.a3"),
    },
    {
      id: "04",
      question: t("home.faq.q4"),
      answer: t("home.faq.a4"),
    },
    {
      id: "05",
      question: t("home.faq.q5"),
      answer: t("home.faq.a5"),
    },
    {
      id: "06",
      question: t("home.faq.q6"),
      answer: t("home.faq.a6"),
    },
  ];

  // Faq
  const [openId, setOpenId] = useState<string | null>("01");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Modal
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Banner */}
      <section
        id="home"
        className="bg-[url('/assets/img/banner/banner-bg.png')] bg-cover bg-no-repeat bg-center pt-12 pb-12 lg:pt-[40px] lg:pb-[33px] mt-[80px] min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
      >
        {/* Container */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-4 lg:px-4 h-full">
          {/* Changed to flex-col for mobile, lg:flex-row for desktop */}
          <div className="flex flex-col lg:flex-row items-center h-full gap-12 lg:gap-8">
            {/* Left Column (Text) */}
            <div className="w-full lg:w-1/2 xl:w-7/12 flex flex-col justify-center order-2 lg:order-1">
              {/* Section Title */}
              <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                <h6 className="text-[#FFB870] bg-black rounded-full px-8 py-2 text-xs sm:text-sm md:text-base font-bold inline-flex items-center gap-2 max-w-fit">
                  <Image
                    src="/assets/img/icon/shield.png"
                    alt="Shield Icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span>{t("home.hero.badge")}</span>
                </h6>

                <h1 className="text-white text-3xl sm:text-4xl lg:text-[39px] font-bold leading-tight  mt-6">
                  {t("home.hero.h1")}
                </h1>
              </div>

              {/* Descriptions */}
              <div className="animate-in fade-in slide-in-from-left-8 duration-700 delay-150">
                <p className="text-white text-xl sm:text-2xl mt-4">
                  {t("home.hero.line1")}
                </p>
                <p className="text-white/90 font-normal text-base sm:text-lg my-3 lg:pr-10">
                  {t("home.hero.p1")}
                </p>
                <p className="text-white font-normal text-lg sm:text-xl my-3">
                  {t("home.hero.p2.prefix")}{" "}
                  <span className="text-[#D73A00] font-bold">$1,400+</span>
                  {` ${t("home.hero.p2.suffix")}`}
                </p>
              </div>

              {/* Buttons Area */}
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 mt-6">
                {/* Coming Soon Button */}
                <button className="w-full sm:w-auto bg-[#FE5200AB] px-10 py-3 rounded-full text-white font-bold tracking-widest text-sm uppercase transition-all duration-200 hover:opacity-90 active:scale-95 shadow-[0px_3px_14px_0px_#D73A00,0px_3px_2px_0px_#952800]">
                  {t("home.hero.comingSoon")}
                </button>

                {/* See Pro Features Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto px-10 py-6 rounded-full text-white font-semibold text-base sm:text-[18px] border-2 border-white/70 bg-white/10 hover:bg-white/20 hover:text-white transition-all"
                >
                  <Link href="/pro-features">{t("home.hero.proFeatures")}</Link>
                </Button>
              </div>

              {/* App Download Buttons */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 sm:gap-4 mt-10 animate-in fade-in slide-in-from-left-8 duration-700 delay-500">
                <Link
                  href="#!"
                  className="flex items-center gap-2 sm:pr-6 sm:border-r border-white/30 text-white hover:text-[#FFB870] transition-colors"
                >
                  <FaApple className="text-3xl" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase leading-tight">
                      Download on the
                    </span>
                    <span className="text-base font-semibold leading-tight">
                      App Store
                    </span>
                  </div>
                </Link>

                <Link
                  href="#!"
                  className="flex items-center gap-2 text-white hover:text-[#FFB870] transition-colors sm:pl-2"
                >
                  <FaGooglePlay className="text-3xl" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase leading-tight">
                      GET IT ON
                    </span>
                    <span className="text-base font-semibold leading-tight">
                      Google Play
                    </span>
                  </div>
                </Link>
              </div>

              {/* Bottom Trust Text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 sm:divide-x-2 sm:divide-white/30 mt-10">
                <div className="flex items-center sm:pr-2">
                  <Shield size={20} className="text-[#7ED077]" />
                  <p className="text-white/90 text-sm px-2 m-0">
                    {t("home.hero.trust.states")}
                  </p>
                </div>

                <div className="flex items-center sm:px-4">
                  <FileSearch size={20} className="text-[#FFD469]" />
                  <p className="text-white/90 text-sm px-2 m-0">
                    {t("home.hero.trust.contracts")}{" "}
                    <span className="hidden xl:inline">
                      {t("home.hero.trust.poweredBy")}
                    </span>
                  </p>
                </div>

                <div className="flex items-center sm:pl-4">
                  <FaLock size={20} className="text-[#FFD469]" />
                  <p className="text-white/90 text-sm px-2 m-0">
                    {t("home.hero.trust.noDataShared")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className="w-full lg:w-1/2 xl:w-5/12 order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-700">
              <Image
                src="/assets/img/banner/banner.png"
                alt="SignSpark App Interface"
                width={600}
                height={700}
                className="w-3/4 sm:w-1/2 lg:w-full max-w-md lg:max-w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature-top */}
      <section className="bg-[#F4F1FA] py-8 border-b border-[#D0DAE3]">
        <div className="mx-auto max-w-7xl  px-4 sm:px-4 lg:px-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2">
            {/* Left Column (Replaces col-lg-5) */}
            <div className="w-full lg:w-5/12">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Left Feature Icon (Replaces col-sm-3) */}
                <div className="w-24 sm:w-1/4 flex-shrink-0">
                  <div className="w-full p-[15px] bg-[#7D6EDA30] flex items-center justify-center rounded-[10px]">
                    <Image
                      src="/assets/img/about/feature-icon1.png"
                      alt={t("home.featureTop.iconAlt")}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Left Feature Text (Replaces col-sm-9) */}
                <div className="w-full sm:w-3/4 text-center sm:text-left">
                  <h5 className="text-[16px] text-[#544898] font-bold mb-2">
                    {t("home.featureTop.title")}
                  </h5>
                  <p className="text-[#869BB2] text-justify sm:text-left lg:border-r-2 border-[#D0DAE3] lg:pr-2 mt-1">
                    {t("home.featureTop.desc.before")}{" "}
                    <span className="text-[#544898]">
                      {" "}
                      {t("home.featureTop.desc.highlight")}{" "}
                    </span>{" "}
                    {t("home.featureTop.desc.after")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Replaces col-lg-7) */}
            <div className="w-full lg:w-7/12">
              {/* 3-Column Grid for the feature icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#7D6EDA30] w-[70px] h-[70px] flex justify-center items-center rounded-full mb-[10px]">
                    <Image
                      src="/assets/img/about/feature-icon2.png"
                      alt={t("home.featureTop.pill1Alt")}
                      width={35}
                      height={35}
                      className="object-contain"
                    />
                  </div>
                  <h5 className="text-[14px] text-[#544898] font-semibold">
                    {t("home.featureTop.pill1")}
                  </h5>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#7D6EDA30] w-[70px] h-[70px] flex justify-center items-center rounded-full mb-[10px]">
                    <Image
                      src="/assets/img/about/feature-icon3.png"
                      alt={t("home.featureTop.pill2Alt")}
                      width={35}
                      height={35}
                      className="object-contain"
                    />
                  </div>
                  <h5 className="text-[16px] text-[#544898] font-bold">
                    {t("home.featureTop.pill2")}
                  </h5>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#7D6EDA30] w-[70px] h-[70px] flex justify-center items-center rounded-full mb-[10px]">
                    <Image
                      src="/assets/img/about/feature-icon4.png"
                      alt={t("home.featureTop.pill3Alt")}
                      width={35}
                      height={35}
                      className="object-contain"
                    />
                  </div>
                  <h5 className="text-[16px] text-[#544898] font-bold ">
                    {t("home.featureTop.pill3")}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PocketNegotiator */}
      <PocketNegotiator />

      {/* About */}
      <section className="w-full py-20" id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-4">
              {/* Label */}
              <p className="text-lg font-bold tracking-widest uppercase text-[#5C2CC6]">
                {t("home.about.kicker")}
              </p>

              {/* Heading */}
              <h2 className="text-4xl sm:text-[44px] font-extrabold text-black leading-tight">
                {t("home.about.title.prefix")}{" "}
                <span className="text-[#5C2CC6]">
                  {t("home.about.title.accent")}
                </span>
              </h2>

              {/* Body paragraphs */}
              <p className="text-[#5A5A5A] text-lg leading-relaxed">
                {t("home.about.p1")}
              </p>
              <p className="text-black text-lg leading-relaxed font-medium">
                {t("home.about.p2")}
              </p>
              <p className="text-[#5A5A5A] text-lg leading-relaxed">
                {t("home.about.p3")}
              </p>

              {/* Feature pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-0.5 shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-bold text-black text-lg">
                      {t("home.about.pill1.title")}
                    </p>
                    <p className="text-black text-sm mt-0.5">
                      {t("home.about.pill1.desc")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-0.5 shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-bold text-black text-lg">
                      {t("home.about.pill2.title")}
                    </p>
                    <p className="text-black text-sm mt-0.5">
                      {t("home.about.pill2.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN — Card ── */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-8 flex flex-col gap-6">
              {/* Card header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg text-[#9A9A9A] font-medium mb-1">
                    {t("home.about.card.kicker")}
                  </p>
                  <h3 className="text-2xl font-extrabold text-black">
                    {t("home.about.card.title")}
                  </h3>
                  <p className="text-sm text-[#9A9A9A] mt-1">
                    {t("home.about.card.subtitle")}
                  </p>
                </div>
                <div className="bg-purple-100 rounded-xl p-3 shrink-0">
                  <Zap className="text-[#5B2DC5]" size={22} />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                <div
                  className="rounded-xl border border-purple-100 p-4 text-center 
bg-[linear-gradient(180deg,rgba(187,118,219,0.2)_0%,rgba(255,255,255,0.2)_100%)] 
shadow-[0px_1px_5px_0px_#00000040]"
                >
                  <p className="text-2xl font-extrabold text-slate-900">100%</p>
                  <p className="text-lg text-[#5A5757] mt-1">
                    {t("home.about.card.stat.accuracy")}
                  </p>
                </div>
                <div
                  className="rounded-xl border border-purple-100 p-4 text-center 
  bg-[linear-gradient(180deg,rgba(118,183,219,0.2)_0%,rgba(255,255,255,0.2)_100%)] 
  shadow-[0px_1px_5px_0px_#00000040]"
                >
                  <p className="text-2xl font-extrabold text-slate-900">50</p>
                  <p className="text-lg text-[#5A5757] mt-1">
                    {t("home.about.card.stat.states")}
                  </p>
                </div>

                <div
                  className="rounded-xl border border-purple-100 p-4 text-center 
  bg-[linear-gradient(180deg,rgba(125,219,118,0.2)_0%,rgba(255,255,255,0.2)_100%)] 
  shadow-[0px_1px_5px_0px_#00000040]"
                >
                  <p className="text-2xl font-extrabold text-slate-900">100%</p>
                  <p className="text-lg text-[#5A5757] mt-1">
                    {t("home.about.card.stat.private")}
                  </p>
                </div>
              </div>

              {/* Feature rows */}
              <div className="flex flex-col gap-3">
                {/* Row 1 */}
                <div className="flex items-start gap-4 rounded-xl border border-[#E1E1E1] p-4">
                  <div className="bg-purple-100 rounded-lg p-2 shrink-0">
                    <Shield className="text-[#5B2DC5]" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm">
                      {t("home.about.card.row1.title")}
                    </p>
                    <p className="text-black text-sm mt-0.5 leading-relaxed">
                      {t("home.about.card.row1.desc")}
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-start gap-4 rounded-xl border border-[#E1E1E1]  p-4">
                  <div className="bg-purple-100 rounded-lg p-2 shrink-0">
                    <Zap className="text-[#5B2DC5]" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm">
                      {t("home.about.card.row2.title")}
                    </p>
                    <p className="text-black text-sm mt-0.5 leading-relaxed">
                      {t("home.about.card.row2.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 text-center">
          {/* Label */}
          <p className="text-lg font-semibold tracking-widest text-[#5C2CC6] uppercase">
            {t("home.mission.kicker")}
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-black">
            {t("home.mission.title.prefix")}{" "}
            <span className="text-[#5C2CC6]">{t("home.mission.title.accent")}</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-[#5A5A5A] text-lg mx-auto">
            {t("home.mission.subtitle")}
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            {/* Card 1 */}
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="px-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-[#5B2DC5] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <h3 className="font-semibold text-lg text-gray-900">
                  {t("home.mission.card1.title")}
                </h3>

                <p className="text-[#5A5A5A] mt-2 text-lg leading-relaxed">
                  {t("home.mission.card1.desc")}
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="px-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-[#5B2DC5] mb-4">
                  <Clipboard className="w-6 h-6" />
                </div>

                <h3 className="font-semibold text-lg text-gray-900">
                  {t("home.mission.card2.title")}
                </h3>

                <p className="text-[#5A5A5A] mt-2 text-lg leading-relaxed">
                  {t("home.mission.card2.desc")}
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="px-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-[#5B2DC5] mb-4">
                  <RefreshCw className="w-6 h-6" />
                </div>

                <h3 className="font-semibold text-lg text-gray-900">
                  {t("home.mission.card3.title")}
                </h3>

                <p className="text-[#5A5A5A] mt-2 text-lg leading-relaxed">
                  {t("home.mission.card3.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 bg-[#f9fafb]" id="feature">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
          {/* Section Title */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-lg font-semibold tracking-widest text-[#5C2CC6] uppercase">
              {t("home.features.kicker")}
            </p>

            <h2 className="text-4xl font-extrabold mt-3 text-slate-900">
              {t("home.features.title.prefix")}{" "}
              <span className="text-[#5C2CC6]">
                {t("home.features.title.accent")}
              </span>
              .
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              {t("home.features.subtitle")}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={` py-6 px-4 bg-white rounded-xl border ${feature.border} ${feature.shadow}`}
              >
                <CardContent className="p-0">
                  {/* Icon */}
                  <div className="flex mb-4">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={60}
                      height={60}
                      className="h-[60px] w-auto"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-black">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-lg text-black mt-2 leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-4">
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-lg font-semibold tracking-widest text-[#5C2CC6] uppercase">
              {t("home.work.kicker")}
            </p>

            <h2 className="text-4xl font-extrabold text-black mt-3">
              {t("home.work.title.prefix")}{" "}
              <span className="text-[#5C2CC6]">{t("home.work.title.accent")}</span>
            </h2>

            <p className="text-[#5A5A5A] mt-4 text-lg">
              {t("home.work.subtitle")}
            </p>
          </div>

          {/* Process Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/img/about/process.png"
              alt="Process"
              width={900}
              height={400}
              className="w-full max-w-4xl h-auto"
            />
          </div>

          {/* Coming Soon */}
          <div className="mx-w-7xl mx-auto flex justify-center mt-5">
            <div className="relative text-center inline-block mx-auto">
              <p
                className="text-[40px] font-medium 
  bg-[linear-gradient(180deg,#A27AFF_25.58%,#4117A1_87.79%)] 
  bg-clip-text text-transparent"
              >
                {t("home.work.comingSoon")}
              </p>

              <img
                src="/assets/img/icon/process-bg-btn.png"
                alt="shadow"
                className="absolute left-[-10%] top-[-104%] h-[150px] w-full z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-4">
          <div
            className="relative w-full rounded-2xl overflow-hidden px-6 py-16 flex flex-col items-center text-center"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, #2d2460 0%, #1a1330 50%, #1c1212 100%)",
            }}
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {t("home.cta.title")}
            </h2>

            {/* Subtext */}
            <p className="mt-3 text-lg  text-[#BFBFBF] font-light">
              {t("home.cta.subtitle")}
            </p>

            {/* Coming Soon */}
            <p
              className="mt-10 text-3xl sm:text-4xl tracking-[0.35em] font-light uppercase 
  bg-[linear-gradient(180deg,#EAEAEA_25.58%,#979797_87.79%)] 
  bg-clip-text text-transparent"
            >
              {t("home.cta.comingSoon")}
            </p>

            {/* App Store Badges */}
            <div className="mt-10 flex items-center gap-4 flex-wrap justify-center">
              {/* Apple App Store */}
              <Link href="#" className="flex items-center gap-2  px-4 py-2">
                {/* Apple icon */}
                <FaApple size={30} className="text-white" />

                <div className="text-left">
                  <p className="text-white/60 text-[12px] leading-none">
                    {t("home.cta.downloadOn")}
                  </p>
                  <p className="text-white text-lg font-semibold leading-tight">
                    App Store
                  </p>
                </div>
              </Link>

              {/* Google Play */}
              <Link href="#" className="flex items-center gap-2 ">
                {/* Play icon (colorful triangle) */}
                <FaGooglePlay size={30} className="text-white" />

                <div className="text-left">
                  <p className="text-white/60 text-[12px] leading-none">
                    {t("home.cta.getItOn")}
                  </p>
                  <p className="text-white text-lg font-semibold leading-tight">
                    Google Play
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 bg-[#F5F1FF75]" id="process-blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-lg font-semibold tracking-widest text-[#5C2CC6] uppercase">
              {t("home.blog.kicker")}
            </p>

            <h2 className="text-4xl font-extrabold text-black mt-3">
              {t("home.blog.title.prefix")}{" "}
              <span className="text-[#5C2CC6]">{t("home.blog.title.accent")}</span>
            </h2>

            <p className="text-[#5A5A5A] mt-4 text-lg">
              {t("home.blog.subtitle")}
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card
                key={index}
                className="border-none  overflow-hidden bg-transparent gap-0"
              >
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={500}
                  height={260}
                  className="w-full h-[260px] object-cover rounded-xl"
                />

                <CardContent className="p-4">
                  {/* Auth */}
                  <div className="flex justify-between mb-3">
                    <span
                      className={`px-4 py-1 text-sm rounded-full ${
                        blog.color === "red"
                          ? "bg-[#F8E4E4] text-[#C43737]"
                          : "bg-[#E4F8EF] text-[#01864A]"
                      }`}
                    >
                      {blog.category}
                    </span>

                    <span className="text-sm text-[#858585] flex items-center gap-1">
                      <Clock size={14} /> {blog.time}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-[18px] font-semibold text-[#544898] leading-snug">
                    {blog.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[#858585] mt-2 min-h-[140px] text-[16px] text-justify">
                    {blog.desc}
                  </p>

                  {/* Read More */}
                  <Link
                    href={blog.link}
                    className={`mt-4 text-lg inline-block font-semibold ${
                      blog.color === "red" ? "text-[#C43737]" : "text-[#01864A]"
                    }`}
                  >
                    {blog.btn}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-16 " id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
          {/* Header */}
          <p className="text-lg font-semibold tracking-widest text-[#544898] uppercase mb-3">
            {t("home.faq.kicker")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
            {t("home.faq.title")}
          </h2>
          <p className="text-[#272727] mb-10 text-lg">
            {t("home.faq.subtitle")}
          </p>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* FAQ Accordion */}
            <div className="flex-1 flex flex-col gap-3">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`border rounded-2xl transition-all duration-300  ${
                      isOpen
                        ? "border-gray-200 shadow-md bg-white"
                        : "border-gray-100 bg-white hover:border-[#D1C1FF]"
                    }`}
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-2xl cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4 ">
                        <span
                          className={`text-sm font-semibold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                            isOpen
                              ? "bg-violet-100 text-[#544898]"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {faq.id}
                        </span>
                        <span
                          className={`text-xl font-semibold transition-colors duration-200 ${
                            isOpen ? "text-gray-900" : "text-gray-700"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <span
                        className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-blue-100 text-[#663AD0] rotate-0"
                            : "bg-gray-50 text-[#663AD0]"
                        }`}
                      >
                        {isOpen ? (
                          <X size={16} strokeWidth={2.5} />
                        ) : (
                          <Plus size={16} strokeWidth={2.5} />
                        )}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-5 pb-5 text-[#414D60] text-lg leading-relaxed pl-[4.5rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Card */}
            <div className="lg:w-72 xl:w-100 flex-shrink-0">
              <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-500 p-8 flex flex-col items-center text-center text-white ">
                <h3 className="text-2xl font-semibold mb-5">
                  {t("home.faq.haveQuestion")}
                </h3>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold text-xl py-3 px-6 rounded-xl  active:scale-95 transition-all duration-150"
                >
                  <img
                    src="assets/img/about/feature-icon1.png"
                    alt="Logo"
                    className="h-8 w-auto"
                  />
                  {t("home.faq.contactUs")}
                </button>
                <p className="mt-4 text-white text-lg">
                  {t("home.faq.instantAnswer")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-lg hover:bg-violet-700 active:scale-95 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} strokeWidth={2.5} />
        </button>
      </section>

      <ContactModal open={open} setOpen={setOpen} />
    </>
  );
}
