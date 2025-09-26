"use client"
import { useState } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Calendar from "@/components/calendar"
import { CalendarIcon, Music } from "lucide-react"

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

interface Song {
  type: string
  title: string
  composer: string
}

interface SongEvent {
  id: string
  date: string
  liturgicalSeason: string
  occasion: string
  songs: Song[]
}

// Calendar cần type Event
interface Event {
  id: string
  date: string
  title: string
  time: string
  location: string
  notes: string
}


// --- Page Component ---
export default function LiturgicalCalendarPage() {
  const [selectedEvent, setSelectedEvent] = useState<SongEvent | null>(null)

  const calendarEvents: Event[] = liturgicalSongs.map(e => ({
    id: e.id.toString(),
    date: e.date,
    title: e.liturgicalSeason,
    time: "",
    location: "",
    notes: ""
  }))

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="heading-primary text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lịch Ca Mục Hát Lễ
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nhấp vào ngày trên lịch để xem chi tiết các ca mục phụng vụ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Calendar
              events={calendarEvents}
              onDayClick={(date) => {
                const matchedEvent = liturgicalSongs.find(e => e.date === date)
                setSelectedEvent(matchedEvent || null)
              }}
            />
          </div>

          <div className="space-y-6">
            {selectedEvent ? (
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="heading-secondary text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <CalendarIcon size={20} />
                  {new Date(selectedEvent.date).toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                </h3>
                <p className="text-sm text-muted-foreground mb-2 font-semibold">{selectedEvent.liturgicalSeason}</p>
                <p className="text-sm text-muted-foreground mb-4">{selectedEvent.occasion}</p>

                <div className="space-y-3">
                  {selectedEvent.songs.map((song, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-2 flex-1">
                        <Music size={16} className="text-primary flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-card-foreground truncate">{song.title}</h4>
                          <p className="text-sm text-muted-foreground">{song.composer}</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2 bg-primary/10 text-primary">{song.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-xl p-6 shadow-sm text-center text-muted-foreground">
                Nhấp vào một ngày trên lịch để xem chi tiết ca mục.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
