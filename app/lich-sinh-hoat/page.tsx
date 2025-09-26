"use client"

import { useState } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Calendar from "@/components/calendar"
import { CalendarIcon, Clock, MapPin, FileText } from "lucide-react"

interface Event {
  id: string
  title: string
  time: string
  location: string
  notes: string
  date: string
}

export default function ActivityCalendarPage() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Tập hát Chúa Nhật",
      time: "19:00",
      location: "Phòng nhạc",
      notes: "Tập bài hát cho Chúa Nhật tuần sau",
      date: "2024-12-28",
    },
    {
      id: "2",
      title: "Lễ Giáng Sinh",
      time: "20:00",
      location: "Nhà thờ chính",
      notes: "Thánh lễ đêm Giáng Sinh",
      date: "2024-12-24",
    },
    {
      id: "3",
      title: "Họp ca đoàn",
      time: "18:30",
      location: "Phòng họp",
      notes: "Họp định kỳ tháng 12",
      date: "2024-12-30",
    },
  ])

  const handleAddEvent = (date: string, eventData: Omit<Event, "id" | "date">) => {
    const newEvent: Event = {
      id: Date.now().toString(),
      date,
      ...eventData,
    }
    setEvents((prev) => [...prev, newEvent])
  }

  // Get upcoming events (next 5 events)
  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="heading-primary text-3xl md:text-4xl font-bold text-foreground mb-4">Lịch Sinh Hoạt</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Theo dõi các hoạt động và sự kiện của Ca Đoàn Augustinô. Nhấp vào ngày để thêm sự kiện mới.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Calendar events={events} onAddEvent={handleAddEvent} />
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="heading-secondary text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <CalendarIcon size={20} />
                Sự Kiện Sắp Tới
              </h3>

              {upcomingEvents.length > 0 ? (
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-card-foreground mb-2">{event.title}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarIcon size={14} />
                          {new Date(event.date).toLocaleDateString("vi-VN", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        {event.time && (
                          <div className="flex items-center gap-2">
                            <Clock size={14} />
                            {event.time}
                          </div>
                        )}
                        {event.location && (
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            {event.location}
                          </div>
                        )}
                        {event.notes && (
                          <div className="flex items-start gap-2 mt-2">
                            <FileText size={14} className="mt-0.5" />
                            <span className="text-xs">{event.notes}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">Chưa có sự kiện nào được lên lịch</p>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="heading-secondary text-xl font-semibold text-card-foreground mb-4">Hướng Dẫn</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Nhấp vào bất kỳ ngày nào trên lịch để thêm sự kiện mới</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Các sự kiện sẽ hiển thị dưới dạng nhãn màu trên lịch</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sử dụng nút điều hướng để xem các tháng khác</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
