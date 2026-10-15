import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Lang = "en" | "gr";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return (stored as Lang) || "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
