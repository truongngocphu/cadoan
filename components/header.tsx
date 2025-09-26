"use client"
import { useState } from "react"

export default function Header() {
  const [lang, setLang] = useState<"vi" | "en">("vi")

  const toggleLang = () => {
    setLang(lang === "vi" ? "en" : "vi")
  }

  return (
    <header className="header-gradient border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
              <span className="text-primary font-bold text-lg md:text-xl">
                <img src="https://v0-ca-doan-website-git-main-truongngocphus-projects.vercel.app/logo.png" alt="Logo" />
              </span>
            </div>
          </div>

          {/* Main Title + Language Switch */}
          <div className="flex-1 text-center px-4">
            {lang === "vi" ? (
              <>
                <h1 className="header-title heading-primary text-secondary-foreground text-xl md:text-3xl lg:text-4xl font-bold">
                  CA ĐOÀN AUGUSTINÔ
                </h1>
                <p className="text-sm md:text-base text-secondary-foreground/80 mt-1 font-medium">
                  GIÁO XỨ ĐỨC MẸ HẰNG CỨU GIÚP
                </p>
                <p className="text-xs md:text-sm text-secondary-foreground/70 mt-1">
                  GARLAND, TEXAS
                </p>
              </>
            ) : (
              <>
                <h1 className="header-title heading-primary text-secondary-foreground text-xl md:text-3xl lg:text-4xl font-bold">
                  AUGUSTINE CHOIR
                </h1>
                <p className="text-sm md:text-base text-secondary-foreground/80 mt-1 font-medium">
                  OUR LADY OF PERPETUAL HELP PARISH
                </p>
                <p className="text-xs md:text-sm text-secondary-foreground/70 mt-1">
                  GARLAND, TEXAS
                </p>
              </>
            )}

            {/* Language Toggle Button */}
            <div className="mt-3">
              <button
                onClick={toggleLang}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
              >
                {lang === "vi" ? (
                  <>
                    <span role="img" aria-label="US flag">🇺🇸</span> English
                  </>
                ) : (
                  <>
                    <span role="img" aria-label="Vietnam flag">🇻🇳</span> Tiếng Việt
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Saint Augustine Image */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
              <img
                src="/Thanh_augustino.png"
                alt="Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
