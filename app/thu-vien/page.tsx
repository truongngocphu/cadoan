import Header from "@/components/header"
import Navigation from "@/components/navigation"
import LibraryTree, { libraryData } from "@/components/library-tree"
import { BookOpen, Search, Filter } from "lucide-react"

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="heading-primary text-3xl md:text-4xl font-bold text-foreground mb-4">Thư Viện</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Kho tàng bài hát phụng vụ được tổ chức theo năm phụng vụ A, B, C và các mùa phụng vụ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Search and Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="heading-secondary text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Search size={18} />
                Tìm Kiếm
              </h3>
              <input
                type="text"
                placeholder="Tìm bài hát..."
                className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Filters */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="heading-secondary text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Filter size={18} />
                Bộ Lọc
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Năm Phụng Vụ</label>
                  <select className="w-full p-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Tất cả</option>
                    <option value="year-a">Năm A</option>
                    <option value="year-b">Năm B</option>
                    <option value="year-c">Năm C</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mùa Phụng Vụ</label>
                  <select className="w-full p-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Tất cả</option>
                    <option value="advent">Mùa Vọng</option>
                    <option value="christmas">Giáng Sinh</option>
                    <option value="ordinary">Quanh Năm</option>
                    <option value="lent">Mùa Chay</option>
                    <option value="easter">Phục Sinh</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Loại File</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-input" />
                      <span className="text-sm">PDF</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-input" />
                      <span className="text-sm">MP3</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-input" />
                      <span className="text-sm">Video</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="heading-secondary text-lg font-semibold text-card-foreground mb-4">Chú Thích</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>PDF - Bản nhạc</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>MP3 - File âm thanh</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Video - Hướng dẫn hát</span>
                </div>
              </div>
            </div>
          </div>

          {/* Library Tree */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl shadow-sm">
              <div className="p-6 border-b border-border">
                <h2 className="heading-secondary text-2xl font-semibold text-card-foreground flex items-center gap-2">
                  <BookOpen size={24} />
                  Cây Thư Mục Phụng Vụ
                </h2>
              </div>
              <div className="p-6">
                <LibraryTree items={libraryData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
