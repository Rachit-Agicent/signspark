"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Lang, Messages } from "@/lib/i18n/messages";
import { messages } from "@/lib/i18n/messages";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "signspark.lang";
const COOKIE_KEY = "signspark.lang";

function writeLangCookie(lang: Lang) {
  // 1 year, site-wide
  document.cookie = `${COOKIE_KEY}=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

function makeT(lang: Lang, dict: Messages) {
  return (key: string) => dict[key] ?? messages.en[key] ?? key;
}

export function I18nProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    writeLangCookie(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => {
    const dict = messages[lang];
    return { lang, setLang, t: makeT(lang, dict) };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}

