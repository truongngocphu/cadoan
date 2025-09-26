import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Users, Heart, Music, Calendar, Award, Play } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "1995",
      title: "Thành lập Ca Đoàn",
      description: "Ca Đoàn Augustinô được thành lập với 12 thành viên đầu tiên",
    },
    {
      year: "2000",
      title: "Mở rộng hoạt động",
      description: "Tham gia các hoạt động phụng vụ lớn của giáo xứ",
    },
    {
      year: "2010",
      title: "Kỷ niệm 15 năm",
      description: "Tổ chức đêm nhạc kỷ niệm với sự tham gia của 50 thành viên",
    },
    {
      year: "2020",
      title: "Chuyển đổi số",
      description: "Thích ứng với dịch COVID-19, phát triển hoạt động trực tuyến",
    },
    {
      year: "2024",
      title: "Hiện tại",
      description: "Phục vụ cộng đoàn với 24 thành viên tích cực",
    },
  ]

  const photos = [
    {
      id: 1,
      src: "/vietnamese-catholic-choir-singing-in-church.jpg",
      alt: "Ca đoàn hát trong thánh lễ",
      caption: "Thánh lễ Giáng Sinh 2023",
    },
    {
      id: 2,
      src: "/choir-group-photo-in-traditional-vietnamese-clothi.jpg",
      alt: "Ảnh tập thể ca đoàn",
      caption: "Ảnh kỷ niệm 25 năm thành lập",
    },
    {
      id: 3,
      src: "/choir-practice-session-with-piano.jpg",
      alt: "Buổi tập hát",
      caption: "Tập hát chuẩn bị Phục Sinh",
    },
    {
      id: 4,
      src: "/vietnamese-catholic-church-interior-during-mass.jpg",
      alt: "Phụng vụ trang trọng",
      caption: "Lễ Truyền Chức Linh Mục",
    },
    {
      id: 5,
      src: "/placeholder-vzkis.png",
      alt: "Thành viên trẻ",
      caption: "Thế hệ trẻ ca đoàn",
    },
    {
      id: 6,
      src: "/placeholder-0894i.png",
      alt: "Biểu diễn ngoài trời",
      caption: "Lễ hội cộng đoàn 2024",
    },
  ]

  const videos = [
    {
      id: 1,
      title: "Thánh Ca Giáng Sinh 2023",
      thumbnail: "/christmas-choir-performance-thumbnail.jpg",
      duration: "15:30",
    },
    {
      id: 2,
      title: "Đêm Nhạc Kỷ Niệm 25 Năm",
      thumbnail: "/anniversary-concert-thumbnail.jpg",
      duration: "45:20",
    },
    {
      id: 3,
      title: "Thánh Ca Phục Sinh 2024",
      thumbnail: "/easter-choir-performance-thumbnail.jpg",
      duration: "22:15",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-primary text-3xl md:text-4xl font-bold text-foreground mb-4">Về Ca Đoàn Augustinô</h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Gần 30 năm phục vụ cộng đoàn với tình yêu ca hát phụng vụ và lòng sùng kính Thiên Chúa
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="bg-card rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={24} className="text-primary" />
                </div>
                <h3 className="heading-secondary text-xl font-semibold mb-3">Sứ Mệnh</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Phục vụ Chúa và cộng đoàn qua những bài hát phụng vụ thiêng liêng, góp phần xây dựng đời sống đức tin.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music size={24} className="text-accent-foreground" />
                </div>
                <h3 className="heading-secondary text-xl font-semibold mb-3">Tầm Nhìn</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trở thành ca đoàn tiêu biểu trong việc bảo tồn và phát triển thánh nhạc Công giáo Việt Nam.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-chart-1/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-chart-1" />
                </div>
                <h3 className="heading-secondary text-xl font-semibold mb-3">Giá Trị</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Đoàn kết, tận tâm, và không ngừng học hỏi để phục vụ tốt hơn trong việc ca ngợi Thiên Chúa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="mb-16">
          <h2 className="heading-primary text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Lịch Sử Phát Triển
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="bg-card rounded-lg p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                          {milestone.year}
                        </span>
                        <Calendar size={16} className="text-muted-foreground" />
                      </div>
                      <h3 className="heading-secondary text-lg font-semibold text-card-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="heading-primary text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Bộ Sưu Tập Hình Ảnh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="liturgical-card bg-card rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-card-foreground">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section className="mb-16">
          <h2 className="heading-primary text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Video Biểu Diễn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="liturgical-card bg-card rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-video relative overflow-hidden group cursor-pointer">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play size={24} className="text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-muted rounded-2xl p-12">
          <Award size={48} className="text-primary mx-auto mb-6" />
          <h3 className="heading-secondary text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Tham Gia Ca Đoàn Augustinô
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Nếu bạn có tình yêu với ca hát phụng vụ và muốn phục vụ cộng đoàn, hãy liên hệ với chúng tôi để tìm hiểu
            thêm về cách tham gia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/lien-lac"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            >
              Liên Hệ Ngay
            </a>
            <a
              href="/thu-vien"
              className="inline-flex items-center px-8 py-4 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Xem Thư Viện
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
