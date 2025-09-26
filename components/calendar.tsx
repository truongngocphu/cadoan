"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, MapPin, FileText } from "lucide-react"

interface Event {
  id: string
  title: string
  time: string
  location: string
  notes: string
  date: string
}

interface CalendarProps {
  events: Event[]
  onAddEvent: (date: string, event: Omit<Event, "id" | "date">) => void
}

export default function Calendar({ events, onAddEvent }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [showEventForm, setShowEventForm] = useState(false)
  const [eventForm, setEventForm] = useState({
    title: "",
    time: "",
    location: "",
    notes: "",
  })

  const monthNames = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ]

  const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const formatDateKey = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  const getEventsForDate = (dateKey: string) => {
    return events.filter((event) => event.date === dateKey)
  }

  const handleDateClick = (day: number) => {
    const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day)
    setSelectedDate(dateKey)
    setShowEventForm(true)
  }

  const handleSubmitEvent = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedDate && eventForm.title) {
      onAddEvent(selectedDate, eventForm)
      setEventForm({ title: "", time: "", location: "", notes: "" })
      setShowEventForm(false)
      setSelectedDate(null)
    }
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const days = getDaysInMonth(currentDate)
  const today = new Date()
  const isToday = (day: number) => {
    return (
      today.getFullYear() === currentDate.getFullYear() &&
      today.getMonth() === currentDate.getMonth() &&
      today.getDate() === day
    )
  }

  return (
    <div className="bg-card rounded-xl shadow-sm">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <h2 className="heading-secondary text-2xl font-semibold text-card-foreground">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex items-center gap-2">
          <button onClick={() => navigateMonth("prev")} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            Hôm nay
          </button>
          <button onClick={() => navigateMonth("next")} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {dayNames.map((day) => (
            <div key={day} className="p-3 text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            if (day === null) {
              return <div key={index} className="p-3 h-24"></div>
            }

            const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day)
            const dayEvents = getEventsForDate(dateKey)
            const isTodayDate = isToday(day)

            return (
              <div
                key={day}
                onClick={() => handleDateClick(day)}
                className={`p-2 h-24 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${
                  isTodayDate ? "bg-primary/10 border-primary" : "bg-background"
                }`}
              >
                <div className={`text-sm font-medium mb-1 ${isTodayDate ? "text-primary" : "text-foreground"}`}>
                  {day}
                </div>
                <div className="space-y-1">
                  {dayEvents.slice(0, 2).map((event) => (
                    <div key={event.id} className="text-xs p-1 bg-primary/20 text-primary rounded truncate">
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-muted-foreground">+{dayEvents.length - 2} khác</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Event Form Modal */}
      {showEventForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="heading-secondary text-lg font-semibold">Thêm Sự Kiện</h3>
              <button
                onClick={() => {
                  setShowEventForm(false)
                  setSelectedDate(null)
                  setEventForm({ title: "", time: "", location: "", notes: "" })
                }}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitEvent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tên sự kiện *</label>
                <input
                  type="text"
                  value={eventForm.title}
                  onChange={(e) => setEventForm((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Nhập tên sự kiện..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Clock size={16} className="inline mr-1" />
                  Thời gian
                </label>
                <input
                  type="time"
                  value={eventForm.time}
                  onChange={(e) => setEventForm((prev) => ({ ...prev, time: e.target.value }))}
                  className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <MapPin size={16} className="inline mr-1" />
                  Địa điểm
                </label>
                <input
                  type="text"
                  value={eventForm.location}
                  onChange={(e) => setEventForm((prev) => ({ ...prev, location: e.target.value }))}
                  className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Nhập địa điểm..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <FileText size={16} className="inline mr-1" />
                  Ghi chú
                </label>
                <textarea
                  value={eventForm.notes}
                  onChange={(e) => setEventForm((prev) => ({ ...prev, notes: e.target.value }))}
                  className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  rows={3}
                  placeholder="Thêm ghi chú..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowEventForm(false)
                    setSelectedDate(null)
                    setEventForm({ title: "", time: "", location: "", notes: "" })
                  }}
                  className="flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Thêm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
