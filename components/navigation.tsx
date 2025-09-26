"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { href: "/ca-muc-hat-le", label: "Ca Mục Hát Lễ" },
  { href: "/lich-sinh-hoat", label: "Lịch Sinh Hoạt" },
  { href: "/thu-vien", label: "Thư Viện" },
  // { href: "/trang-noi-bo", label: "Trang Nội Bộ" },
  { href: "/ve-ca-doan", label: "Về Ca Đoàn" },
  { href: "/lien-lac", label: "Liên Lạc" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-8 py-4">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                pathname === item.href
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-muted hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between py-4">
          <span className="font-semibold text-primary">Menu</span>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-muted transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
