import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Link from "next/link"
import { Calendar, Music, BookOpen, Users, Mail, Lock } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Music,
      title: "Ca Mục Hát Lễ",
      description: "Danh sách bài hát phụng vụ được cập nhật thường xuyên",
      href: "/ca-muc-hat-le",
      color: "text-primary",
    },
    {
      icon: Calendar,
      title: "Lịch Sinh Hoạt",
      description: "Theo dõi các hoạt động và sự kiện của ca đoàn",
      href: "/lich-sinh-hoat",
      color: "text-accent",
    },
    {
      icon: BookOpen,
      title: "Thư Viện",
      description: "Kho tàng bài hát phụng vụ theo năm A, B, C",
      href: "/thu-vien",
      color: "text-primary",
    },
    {
      icon: Lock,
      title: "Trang Nội Bộ",
      description: "Dành riêng cho thành viên ca đoàn",
      href: "/trang-noi-bo",
      color: "text-muted-foreground",
    },
    {
      icon: Users,
      title: "Về Ca Đoàn",
      description: "Lịch sử và thông tin về Ca Đoàn Augustinô",
      href: "/ve-ca-doan",
      color: "text-accent",
    },
    {
      icon: Mail,
      title: "Liên Lạc",
      description: "Thông tin liên hệ và kết nối với các ca đoàn khác",
      href: "/lien-lac",
      color: "text-primary",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="heading-primary text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Chào Mừng Đến Với
            <span className="block text-primary mt-2">Ca Đoàn Augustinô</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cùng nhau ca ngợi Chúa qua những bài hát phụng vụ thiêng liêng, xây dựng cộng đoàn đức tin mạnh mẽ tại Giáo
            Xứ Đức Mẹ Hằng Cứu Giúp.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="liturgical-card group p-8 rounded-xl bg-card hover:bg-muted/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className={`p-4 rounded-full bg-muted group-hover:bg-background transition-colors ${feature.color}`}
                >
                  <feature.icon size={32} />
                </div>
                <h3 className="heading-secondary text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Link>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center bg-muted rounded-2xl p-12">
          <h3 className="heading-secondary text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Tham Gia Cùng Chúng Tôi
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Ca Đoàn Augustinô luôn chào đón những tâm hồn yêu mến ca hát phụng vụ. Hãy liên hệ với chúng tôi để tìm hiểu
            thêm về các hoạt động.
          </p>
          <Link
            href="/lien-lac"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm"
          >
            Liên Hệ Ngay
          </Link>
        </section>
      </main>
    </div>
  )
}
