"use client"   // ← thêm dòng này ở đầu file

import { useState } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import { Calendar, Music } from "lucide-react"

// Sample data - trong thực tế sẽ lấy từ DB
const liturgicalSongs = [
{
  id: 1,
  date: "2025-09-28",
  liturgicalSeason: "Chúa Nhật Thường Niên 26C",
  occasion: "Chủ Đề: Chấp nhận khốn khó vì cuộc sống đời đời.",
  songs: [
    { type: "Nhập lễ", title: "B.72 Cửa Công Chính", composer: "Truyền thống" },
    { type: "Bộ lễ", title: "Ca Lên Đi 2 | MNĐT1", composer: "Truyền thống" },
    { type: "Đáp ca", title: "Tv-145 | Mp3", composer: "Truyền thống" },
    { type: "AL & XPÂ", title: "Trong đáp ca (Mẫu số 1 D)", composer: "Truyền thống" },
    { type: "Dâng lễ", title: "B.187 Những Người Đó", composer: "Truyền thống" },
    { type: "Hiệp lễ", title: "B.143 Chúa Sẽ Đền Bù", composer: "Truyền thống" },
    { type: "Kết lễ", title: "B.326 Lạy Mẹ Xin", composer: "Truyền thống" }
  ]
},
{
  id: 2,
  date: "2025-10-05",
  liturgicalSeason: "Chúa Nhật Thường Niên 27C",
  occasion: "Chủ Đề: Sức mạnh của niềm tin.",
  songs: [
    { type: "Nhập lễ", title: "B.98 Về Nơi Đây", composer: "Truyền thống" },
    { type: "Bộ lễ", title: "Ca Lên Đi 2 | MNĐT1", composer: "Truyền thống" },
    { type: "Đáp ca", title: "Tv-94 | Mp3", composer: "Truyền thống" },
    { type: "AL & XPÂ", title: "Trong đáp ca (Mẫu số 1 D)", composer: "Truyền thống" },
    { type: "Dâng lễ", title: "B.265 Xin Ban Thêm Lòng Tin", composer: "Truyền thống" },
    { type: "Hiệp lễ", title: "B.141 Con Hướng Về Chúa", composer: "Truyền thống" },
    { type: "Kết lễ", title: "B.320 Nữ Vương Mân Côi", composer: "Truyền thống" }
  ]
},
{
  id: 3,
  date: "2025-10-11",
  liturgicalSeason: "Lễ Thánh Giêrađô",
  occasion: "Chủ Đề: Lễ Thánh Giêrađô.",
  songs: [
    { type: "Nhập lễ", title: "Lễ Thánh Gierado", composer: "Truyền thống" },
    { type: "Bộ lễ", title: "Ca Lên Đi 2 & MNĐT 1", composer: "Truyền thống" },
    { type: "Đáp ca", title: "Tv-15 | Mp3", composer: "Truyền thống" },
    { type: "AL & XPÂ", title: "Alleluia Ga 12, 26", composer: "Truyền thống" },
    { type: "Dâng lễ", title: "Có Một Tình Yêu", composer: "Truyền thống" },
    { type: "Hiệp lễ", title: "Về Bên Chúa", composer: "Truyền thống" },
    { type: "Kết lễ", title: "Tạ Ơn Chúa Với Mẹ", composer: "Truyền thống" }
  ]
},
{
  id: 24,
  date: "2025-10-12",
  liturgicalSeason: "Chúa Nhật Thường Niên 28C",
  occasion: "Chủ Đề: Sống Tri Ân và Cảm Tạ.",
  songs: [
    { type: "Nhập lễ", title: "B.65 Chung Lời Cảm Tạ", composer: "Truyền thống" },
    { type: "Bộ lễ", title: "Ca Lên Đi 2 | MNĐT 1", composer: "Truyền thống" },
    { type: "Đáp ca", title: "Tv-97 | Mp3", composer: "Truyền thống" },
    { type: "AL & XPÂ", title: "Trong đáp ca (Mẫu số 1 D)", composer: "Truyền thống" },
    { type: "Dâng lễ", title: "B.115 Chẳng Biết Lấy Gì", composer: "Truyền thống" },
    { type: "Hiệp lễ", title: "B.224 Tạ Ơn Trời", composer: "Truyền thống" },
    { type: "Kết lễ", title: "B.311 Lời Mẹ Nhắn Nhủ", composer: "Truyền thống" }
  ]
},
{
  id: 25,
  date: "2025-10-19",
  liturgicalSeason: "Chúa Nhật Thường Niên 29C",
  occasion: "Chủ Đề: Vững Lòng Trông Cậy; Khánh Nhật Truyền Giáo.",
  songs: [
    { type: "Nhập lễ", title: "B.90 Tôi Muốn Hát", composer: "Truyền thống" },
    { type: "Bộ lễ", title: "Ca Lên Đi 2 | MNĐT 1", composer: "Truyền thống" },
    { type: "Đáp ca", title: "Tv-120 | Mp3", composer: "Truyền thống" },
    { type: "AL & XPÂ", title: "Trong đáp ca (Mẫu số 1 D)", composer: "Truyền thống" },
    { type: "Dâng lễ", title: "B.178 Trông Cậy Chúa", composer: "Truyền thống" },
    { type: "Hiệp lễ", title: "B.181 Nguồn Trợ Lực Đời Tôi", composer: "Truyền thống" },
    { type: "Kết lễ", title: "B.277 Lời Nguyện Truyền Giáo", composer: "Truyền thống" }
  ]
},
{
  id: 26,
  date: "2025-10-26",
  liturgicalSeason: "Chúa Nhật Thường Niên 30C",
  occasion: "Chủ Đề: Sống Khiêm Hạ.",
  songs: [
    { type: "Nhập lễ", title: "B.82 Ngàn Dân Ơi", composer: "Truyền thống" },
    { type: "Bộ lễ", title: "Ca Lên Đi 2 | MNĐT 1", composer: "Truyền thống" },
    { type: "Đáp ca", title: "Tv-33 | Mp3", composer: "Truyền thống" },
    { type: "AL & XPÂ", title: "Trong đáp ca (Mẫu số 1 D)", composer: "Truyền thống" },
    { type: "Dâng lễ", title: "B.266 Có Gì Để Dâng", composer: "Truyền thống" },
    { type: "Hiệp lễ", title: "Biết Chúa Biết Con", composer: "Truyền thống" },
    { type: "Kết lễ", title: "B.324 Hoa Mân Côi", composer: "Truyền thống" }
  ]
},
{
  id: 27,
  date: "2025-07-12T15:30:00",
  liturgicalSeason: "Lễ Cưới: Trần Khanh & Nguyễn Đào",
  occasion: "Chủ Đề: Bí Tích Hôn Phối",
  songs: [
    { type: "Nhập lễ", title: "P-Hôm Nay Hân Hoan", composer: "Truyền thống" },
    { type: "Bộ lễ", title: "Ca Lên Đi 2 | MNĐT1", composer: "Truyền thống" },
    { type: "Đáp ca", title: "Tv-127", composer: "Truyền thống" },
    { type: "AL & XPÂ", title: "F-22", composer: "Truyền thống" },
    { type: "Dâng lễ", title: "F-29 Khi Hoa Nở Miền Cana", composer: "Truyền thống" },
    { type: "Hiệp lễ", title: "F-15 Nguyện Cầu Cho Nhau", composer: "Truyền thống" },
    { type: "Cha Mẹ", title: "F-28 Tình Cha Nghĩa Mẹ", composer: "Truyền thống" },
    { type: "Đức Mẹ", title: "F-30 Dâng Mẹ Đời Hôn Nhân", composer: "Truyền thống" },
    { type: "Kết lễ", title: "F-20 Diễm Tình Ca 3", composer: "Truyền thống" }
  ]
},
{
  id: 28,
  date: "2025-07-13",
  liturgicalSeason: "Chúa Nhật Thường Niên 15C",
  occasion: "Chủ Đề: Đối xử nhân hậu với tha nhân.",
  songs: [
    { type: "Nhập lễ", title: "B-84 Nhập Lễ 2", composer: "Truyền thống" },
    { type: "Bộ lễ", title: "Ca Lên Đi 2 | MNĐT1", composer: "Truyền thống" },
    { type: "Đáp ca", title: "Tv-68 | Mp3", composer: "Truyền thống" },
    { type: "AL & XPÂ", title: "Trong đáp ca (Mẫu số 1 D)", composer: "Truyền thống" },
    { type: "Dâng lễ", title: "B-187 Những Người Đó", composer: "Truyền thống" },
    { type: "Hiệp lễ", title: "B-142 Có Bao Giờ", composer: "Truyền thống" },
    { type: "Kết lễ", title: "B-162 Đâu Có Tình Yêu Thương", composer: "Truyền thống" }
  ]
}
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
  const [showPast, setShowPast] = useState(false)
  const today = new Date()

  // Sắp xếp sự kiện: chưa tới trước, đã qua sau
  const sortedEvents = liturgicalSongs
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      const isPastA = dateA < today
      const isPastB = dateB < today

      if (isPastA && !isPastB) return 1
      if (!isPastA && isPastB) return -1
      return dateA.getTime() - dateB.getTime()
    })
    .filter((ev) => showPast || new Date(ev.date) >= today)

  // Tìm sự kiện sắp tới gần nhất
  const nextEvent = sortedEvents.find(ev => new Date(ev.date) >= today)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="heading-primary text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ca Mục Hát Lễ
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Danh sách các bài hát phụng vụ được sắp xếp theo sự kiện sắp tới.
          </p>
        </div>

        {/* Songs List */}
        <div className="space-y-6">
          {sortedEvents.map((liturgy) => {
            const isNext = nextEvent?.id === liturgy.id
            return (
              <div
                key={liturgy.id}
                className={`liturgical-card rounded-xl p-6 shadow-sm ${
                  isNext
                    ? "bg-yellow-50 border-2 border-yellow-400"
                    : new Date(liturgy.date) < today
                    ? "opacity-70"
                    : "bg-card"
                }`}
              >
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
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getSeasonColor(
                        liturgy.liturgicalSeason
                      )}`}
                    >
                      {liturgy.liturgicalSeason}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {liturgy.occasion}
                    </span>
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
                          <h4 className="font-semibold text-card-foreground truncate">
                            {song.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {song.composer}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2 ${getSongTypeColor(
                          song.type
                        )}`}
                      >
                        {song.type}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Ghi chú nếu là sự kiện đã qua */}
                {new Date(liturgy.date) < today && (
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    Đây là ca mục của sự kiện đã qua.
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* Load More Button */}
        {!showPast && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowPast(true)}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Xem Thêm Ca Mục Cũ
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
