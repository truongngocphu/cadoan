"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from "react"

type Lang = "vi" | "en"

interface LanguageContextProps {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi")

  // lưu ngôn ngữ vào localStorage
  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null
    if (stored) setLang(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  const toggleLang = () => {
    setLang(lang === "vi" ? "en" : "vi")
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
