"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/components/auth-context"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Lock, User, Eye, EyeOff, AlertTriangle, Users, Calendar, Music, Settings } from "lucide-react"

export default function InternalPage() {
  const { user, login, logout, isLoading } = useAuth()
  const [loginForm, setLoginForm] = useState({ username: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")

    const success = await login(loginForm.username, loginForm.password)
    if (!success) {
      setLoginError("Tên đăng nhập hoặc mật khẩu không đúng")
    }
  }

  const handleLogout = () => {
    logout()
    setLoginForm({ username: "", password: "" })
    setLoginError("")
  }

  // Login Form
  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Navigation />

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-xl shadow-sm p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock size={24} className="text-primary" />
                </div>
                <h1 className="heading-primary text-2xl font-bold text-card-foreground mb-2">Trang Nội Bộ</h1>
                <p className="text-muted-foreground">Dành riêng cho thành viên Ca Đoàn Augustinô</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tên đăng nhập</label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      type="text"
                      value={loginForm.username}
                      onChange={(e) => setLoginForm((prev) => ({ ...prev, username: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Nhập tên đăng nhập"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mật khẩu</label>
                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginForm.password}
                      onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
                      className="w-full pl-10 pr-12 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Nhập mật khẩu"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {loginError && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Đang đăng nhập..." : "Đăng Nhập"}
                </button>
              </form>

              {/* Demo Accounts */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-sm text-foreground mb-2">Tài khoản demo:</h3>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>
                    Ca trưởng: <code>catrung</code> / <code>augustino2024</code>
                  </div>
                  <div>
                    Đoàn trưởng: <code>doantrung</code> / <code>augustino2024</code>
                  </div>
                  <div>
                    Thành viên: <code>thanhvien1</code> / <code>temp123</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Member Dashboard
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="heading-primary text-3xl md:text-4xl font-bold text-foreground mb-2">
              Chào mừng, {user.name}
            </h1>
            <p className="text-muted-foreground">
              {user.role === "leader" ? "Ban lãnh đạo" : "Thành viên"} Ca Đoàn Augustinô
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            Đăng Xuất
          </button>
        </div>

        {/* Temporary Password Warning */}
        {user.isTemporaryPassword && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
            <AlertTriangle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-1">Mật khẩu tạm thời</h3>
              <p className="text-yellow-700 text-sm">
                Bạn đang sử dụng mật khẩu tạm thời. Vui lòng liên hệ ban lãnh đạo để đổi mật khẩu mới.
              </p>
            </div>
          </div>
        )}

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users size={20} className="text-primary" />
              </div>
              <h3 className="heading-secondary text-lg font-semibold">Thành Viên</h3>
            </div>
            <p className="text-2xl font-bold text-foreground mb-2">24</p>
            <p className="text-sm text-muted-foreground">Thành viên hiện tại</p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Calendar size={20} className="text-accent-foreground" />
              </div>
              <h3 className="heading-secondary text-lg font-semibold">Sự Kiện</h3>
            </div>
            <p className="text-2xl font-bold text-foreground mb-2">3</p>
            <p className="text-sm text-muted-foreground">Sự kiện tuần này</p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-chart-1/10 rounded-lg">
                <Music size={20} className="text-chart-1" />
              </div>
              <h3 className="heading-secondary text-lg font-semibold">Bài Hát</h3>
            </div>
            <p className="text-2xl font-bold text-foreground mb-2">156</p>
            <p className="text-sm text-muted-foreground">Bài hát trong thư viện</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h3 className="heading-secondary text-xl font-semibold text-card-foreground mb-4">Thông Báo Nội Bộ</h3>
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-1">Tập hát đặc biệt - Lễ Giáng Sinh</h4>
                <p className="text-sm text-muted-foreground mb-2">Thứ 7, 23/12/2024 - 19:00</p>
                <p className="text-sm text-foreground">Tập hát các bài Giáng Sinh. Tất cả thành viên có mặt.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-1">Họp ca đoàn tháng 12</h4>
                <p className="text-sm text-muted-foreground mb-2">Chủ nhật, 30/12/2024 - 18:30</p>
                <p className="text-sm text-foreground">Đánh giá hoạt động năm 2024 và kế hoạch 2025.</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h3 className="heading-secondary text-xl font-semibold text-card-foreground mb-4">Tài Liệu Nội Bộ</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Settings size={16} className="text-primary" />
                <span className="text-foreground">Quy định ca đoàn</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Users size={16} className="text-primary" />
                <span className="text-foreground">Danh sách thành viên</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Calendar size={16} className="text-primary" />
                <span className="text-foreground">Lịch phục vụ</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Music size={16} className="text-primary" />
                <span className="text-foreground">Bài hát mới</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
