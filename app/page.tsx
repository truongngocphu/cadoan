"use client"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Link from "next/link"
import { Calendar, Music, BookOpen, Users, Mail } from "lucide-react"
import { useLanguage } from "@/components/LanguageContext"

export default function HomePage() {
  const { lang } = useLanguage()

  const features = lang === "vi"
    ? [
        { icon: Music, title: "Ca Mục Hát Lễ", description: "Danh sách bài hát phụng vụ được cập nhật thường xuyên", href: "/ca-muc-hat-le" },
        { icon: Calendar, title: "Lịch Sinh Hoạt", description: "Theo dõi các hoạt động và sự kiện của ca đoàn", href: "/lich-sinh-hoat" },
        { icon: BookOpen, title: "Thư Viện", description: "Kho tàng bài hát phụng vụ theo năm A, B, C", href: "/thu-vien" },
        { icon: Users, title: "Về Ca Đoàn", description: "Lịch sử và thông tin về Ca Đoàn Augustinô", href: "/ve-ca-doan" },
        { icon: Mail, title: "Liên Lạc", description: "Thông tin liên hệ và kết nối với các ca đoàn khác", href: "/lien-lac" },
      ]
    : [
        { icon: Music, title: "Liturgical Songs", description: "Regularly updated list of liturgical hymns", href: "/ca-muc-hat-le" },
        { icon: Calendar, title: "Schedule", description: "Follow choir activities and events", href: "/lich-sinh-hoat" },
        { icon: BookOpen, title: "Library", description: "Collection of hymns for Liturgical Years A, B, C", href: "/thu-vien" },
        { icon: Users, title: "About the Choir", description: "History and information about Augustine Choir", href: "/ve-ca-doan" },
        { icon: Mail, title: "Contact", description: "Get in touch and connect with other choirs", href: "/lien-lac" },
      ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Hero */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {lang === "vi" ? "Chào Mừng Đến Với" : "Welcome To"}
            <span className="block text-primary mt-2">
              {lang === "vi" ? "Ca Đoàn Augustinô" : "Augustine Choir"}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {lang === "vi"
              ? "Cùng nhau ca ngợi Chúa qua những bài hát phụng vụ thiêng liêng, xây dựng cộng đoàn đức tin mạnh mẽ tại Giáo Xứ Đức Mẹ Hằng Cứu Giúp."
              : "Together we praise the Lord through sacred hymns, building a strong faith community at Our Lady of Perpetual Help Parish."}
          </p>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((f) => (
            <Link key={f.href} href={f.href} className="p-8 rounded-xl bg-card hover:bg-muted/50 transition">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-muted">{<f.icon size={32} />}</div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p>{f.description}</p>
              </div>
            </Link>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center bg-muted rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            {lang === "vi" ? "Tham Gia Cùng Chúng Tôi" : "Join Us"}
          </h3>
          <p className="mb-8 max-w-2xl mx-auto leading-relaxed">
            {lang === "vi"
              ? "Ca Đoàn Augustinô luôn chào đón những tâm hồn yêu mến ca hát phụng vụ. Hãy liên hệ với chúng tôi để tìm hiểu thêm."
              : "The Augustine Choir always welcomes those who love liturgical singing. Contact us to learn more."}
          </p>
          <Link href="/lien-lac" className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90">
            {lang === "vi" ? "Liên Hệ Ngay" : "Contact Now"}
          </Link>
        </section>
      </main>
    </div>
  )
}
