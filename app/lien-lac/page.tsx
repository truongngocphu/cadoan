import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Mail, Phone, MapPin, Clock, ExternalLink, Users, Music } from "lucide-react"

export default function ContactPage() {
  const leadership = [
    {
      role: "Ca Trưởng",
      name: "Nguyễn Văn An",
      email: "catrung.augustino@gmail.com",
      phone: "(972) 555-0123",
      description: "Điều phối hoạt động ca đoàn và phụng vụ",
    },
    {
      role: "Đoàn Trưởng",
      name: "Trần Thị Bình",
      email: "doantrung.augustino@gmail.com",
      phone: "(972) 555-0124",
      description: "Quản lý hành chính và tổ chức sự kiện",
    },
  ]

  const otherChoirs = [
    {
      name: "Ca Đoàn Cecilia - Houston",
      parish: "Giáo Xứ Thánh Giuse",
      website: "https://cecilia-houston.org",
      description: "Ca đoàn lớn nhất tại Houston với 40+ thành viên",
    },
    {
      name: "Ca Đoàn Thánh Tâm - Dallas",
      parish: "Giáo Xứ Thánh Tâm Chúa Giêsu",
      website: "https://thanhtam-dallas.org",
      description: "Chuyên về thánh nhạc cổ điển và hiện đại",
    },
    {
      name: "Ca Đoàn Fatima - Austin",
      parish: "Giáo Xứ Đức Mẹ Fatima",
      website: "https://fatima-austin.org",
      description: "Nổi tiếng với các bài hát dân gian tôn giáo",
    },
    {
      name: "Ca Đoàn Anrê - San Antonio",
      parish: "Giáo Xứ Thánh Anrê",
      website: "https://andre-sanantonio.org",
      description: "Ca đoàn trẻ với phong cách hiện đại",
    },
  ]

  const schedules = [
    {
      day: "Thứ Bảy",
      time: "19:00 - 21:00",
      activity: "Tập hát hàng tuần",
      location: "Phòng nhạc giáo xứ",
    },
    {
      day: "Chúa Nhật",
      time: "08:30 - 12:00",
      activity: "Phụng vụ thánh lễ",
      location: "Nhà thờ chính",
    },
    {
      day: "Thứ Tư đầu tháng",
      time: "19:30 - 21:00",
      activity: "Họp ca đoàn",
      location: "Phòng họp",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-primary text-3xl md:text-4xl font-bold text-foreground mb-4">Liên Lạc</h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Kết nối với Ca Đoàn Augustinô và các ca đoàn khác trong cộng đoàn Công giáo Việt Nam
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Parish Information */}
            <section className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="heading-secondary text-2xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
                <MapPin size={24} />
                Thông Tin Giáo Xứ
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Giáo Xứ Đức Mẹ Hằng Cứu Giúp</h3>
                    <p className="text-muted-foreground">
                      1234 Main Street
                      <br />
                      Garland, TX 75040
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <span className="text-foreground">(972) 494-8888</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <span className="text-foreground">info@ducmehangcuugiup.org</span>
                </div>
              </div>
            </section>

            {/* Leadership Contact */}
            <section className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="heading-secondary text-2xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
                <Users size={24} />
                Ban Lãnh Đạo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {leadership.map((leader) => (
                  <div key={leader.role} className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-1">{leader.role}</h3>
                    <p className="text-lg font-medium text-primary mb-2">{leader.name}</p>
                    <p className="text-sm text-muted-foreground mb-3">{leader.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-muted-foreground" />
                        <a href={`mailto:${leader.email}`} className="text-sm text-primary hover:underline">
                          {leader.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-muted-foreground" />
                        <a href={`tel:${leader.phone}`} className="text-sm text-foreground">
                          {leader.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Other Choirs */}
            <section className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="heading-secondary text-2xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
                <Music size={24} />
                Ca Đoàn Khác
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherChoirs.map((choir) => (
                  <div
                    key={choir.name}
                    className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground mb-1">{choir.name}</h3>
                    <p className="text-sm text-primary mb-2">{choir.parish}</p>
                    <p className="text-sm text-muted-foreground mb-3">{choir.description}</p>
                    <a
                      href={choir.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Xem website
                      <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Schedule */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="heading-secondary text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Clock size={20} />
                Lịch Sinh Hoạt
              </h3>
              <div className="space-y-4">
                {schedules.map((schedule, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-foreground">{schedule.day}</span>
                      <span className="text-sm text-primary">{schedule.time}</span>
                    </div>
                    <p className="text-sm text-foreground mb-1">{schedule.activity}</p>
                    <p className="text-xs text-muted-foreground">{schedule.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="heading-secondary text-xl font-semibold text-card-foreground mb-4">Liên Hệ Nhanh</h3>
              <div className="space-y-3">
                <a
                  href="mailto:catrung.augustino@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Mail size={16} className="text-primary" />
                  <span className="text-foreground">Gửi email</span>
                </a>
                <a
                  href="tel:(972)555-0123"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Phone size={16} className="text-primary" />
                  <span className="text-foreground">Gọi điện</span>
                </a>
                <a
                  href="/lich-sinh-hoat"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Clock size={16} className="text-primary" />
                  <span className="text-foreground">Xem lịch</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="heading-secondary text-xl font-semibold text-card-foreground mb-4">Kết Nối</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <span className="text-foreground">Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">YT</span>
                  </div>
                  <span className="text-foreground">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
