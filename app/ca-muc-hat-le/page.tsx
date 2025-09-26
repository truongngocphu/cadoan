import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Calendar, Music } from "lucide-react"

// Sample data - in a real app this would come from a database
const liturgicalSongs = [
  {
    id: 1,
    date: "2024-12-25",
    liturgicalSeason: "Giáng Sinh",
    occasion: "Lễ Giáng Sinh",
    songs: [
      { title: "Đêm Thánh Vô Cùng", composer: "Truyền thống", type: "Nhập lễ" },
      { title: "Vinh Danh Chúa Trên Trời", composer: "Lm. Nguyễn Duy", type: "Vinh danh" },
      { title: "Lạy Chiên Con Thiên Chúa", composer: "Truyền thống", type: "Hiệp lễ" },
      { title: "Tình Yêu Cao Cả", composer: "Lm. Xuân Ly", type: "Kết thúc" },
    ],
  },
  {
    id: 2,
    date: "2024-12-24",
    liturgicalSeason: "Mùa Vọng",
    occasion: "Đêm Giáng Sinh",
    songs: [
      { title: "Hãy Đến Cùng Chúa Giêsu", composer: "Lm. Nguyễn Duy", type: "Nhập lễ" },
      { title: "Vinh Danh Thiên Chúa", composer: "Truyền thống", type: "Vinh danh" },
      { title: "Thánh, Thánh, Thánh", composer: "Lm. Xuân Ly", type: "Thánh thánh thánh" },
      { title: "Chiên Con Thiên Chúa", composer: "Truyền thống", type: "Hiệp lễ" },
    ],
  },
  {
    id: 3,
    date: "2024-12-22",
    liturgicalSeason: "Mùa Vọng",
    occasion: "Chúa Nhật IV Mùa Vọng",
    songs: [
      { title: "Hãy Mở Lòng Ra", composer: "Lm. Nguyễn Duy", type: "Nhập lễ" },
      { title: "Lạy Chúa Xin Thương", composer: "Truyền thống", type: "Xin thương" },
      { title: "Alleluia Mùa Vọng", composer: "Lm. Xuân Ly", type: "Alleluia" },
      { title: "Dâng Lên Chúa", composer: "Lm. Nguyễn Duy", type: "Dâng lễ" },
    ],
  },
  {
    id: 4,
    date: "2024-12-15",
    liturgicalSeason: "Mùa Vọng",
    occasion: "Chúa Nhật III Mùa Vọng",
    songs: [
      { title: "Chúa Đến Rồi", composer: "Lm. Xuân Ly", type: "Nhập lễ" },
      { title: "Xin Thương Xót Chúng Con", composer: "Truyền thống", type: "Xin thương" },
      { title: "Chúa Phán Cùng Con", composer: "Lm. Nguyễn Duy", type: "Alleluia" },
      { title: "Lòng Con Hướng Về Chúa", composer: "Lm. Xuân Ly", type: "Hiệp lễ" },
    ],
  },
]

const getSongTypeColor = (type: string) => {
  const colors: { [key: string]: string } = {
    "Nhập lễ": "bg-primary/10 text-primary",
    "Xin thương": "bg-accent/10 text-accent-foreground",
    "Vinh danh": "bg-chart-1/10 text-chart-1",
    Alleluia: "bg-chart-2/10 text-chart-2",
    "Dâng lễ": "bg-chart-3/10 text-chart-3",
    "Thánh thánh thánh": "bg-chart-4/10 text-chart-4",
    "Hiệp lễ": "bg-chart-5/10 text-chart-5",
    "Kết thúc": "bg-muted text-muted-foreground",
  }
  return colors[type] || "bg-muted text-muted-foreground"
}

const getSeasonColor = (season: string) => {
  const colors: { [key: string]: string } = {
    "Mùa Vọng": "text-purple-600 bg-purple-50",
    "Giáng Sinh": "text-red-600 bg-red-50",
    "Quanh Năm": "text-green-600 bg-green-50",
    "Mùa Chay": "text-purple-800 bg-purple-100",
    "Phục Sinh": "text-yellow-600 bg-yellow-50",
  }
  return colors[season] || "text-gray-600 bg-gray-50"
}

export default function LiturgicalSongsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="heading-primary text-3xl md:text-4xl font-bold text-foreground mb-4">Ca Mục Hát Lễ</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Danh sách các bài hát phụng vụ được sắp xếp theo thời gian, từ gần nhất đến xa nhất.
          </p>
        </div>

        {/* Songs List */}
        <div className="space-y-6">
          {liturgicalSongs.map((liturgy) => (
            <div key={liturgy.id} className="liturgical-card bg-card rounded-xl p-6 shadow-sm">
              {/* Liturgy Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} />
                    <span className="font-medium">
                      {new Date(liturgy.date).toLocaleDateString("vi-VN", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getSeasonColor(liturgy.liturgicalSeason)}`}
                  >
                    {liturgy.liturgicalSeason}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{liturgy.occasion}</span>
                </div>
              </div>

              {/* Songs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {liturgy.songs.map((song, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <Music size={16} className="text-primary flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-card-foreground truncate">{song.title}</h4>
                        <p className="text-sm text-muted-foreground">{song.composer}</p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2 ${getSongTypeColor(song.type)}`}
                    >
                      {song.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm">
            Xem Thêm Ca Mục Cũ
          </button>
        </div>
      </main>
    </div>
  )
}
