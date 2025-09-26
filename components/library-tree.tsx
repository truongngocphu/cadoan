"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, Folder, FolderOpen, FileText, Music, Video, Download } from "lucide-react"

interface LibraryItem {
  id: string
  name: string
  type: "folder" | "song"
  children?: LibraryItem[]
  files?: {
    pdf?: string
    mp3?: string
    video?: string
  }
  composer?: string
  description?: string
}

interface LibraryTreeProps {
  items: LibraryItem[]
  level?: number
}

const libraryData: LibraryItem[] = [
  {
    id: "year-a",
    name: "Năm A",
    type: "folder",
    children: [
      {
        id: "year-a-advent",
        name: "Mùa Vọng",
        type: "folder",
        children: [
          {
            id: "song-1",
            name: "Hãy Mở Lòng Ra",
            type: "song",
            composer: "Lm. Nguyễn Duy",
            description: "Bài hát nhập lễ Chúa Nhật I Mùa Vọng",
            files: { pdf: "/songs/hay-mo-long-ra.pdf", mp3: "/songs/hay-mo-long-ra.mp3" },
          },
          {
            id: "song-2",
            name: "Chúa Đến Rồi",
            type: "song",
            composer: "Lm. Xuân Ly",
            description: "Bài hát dâng lễ Chúa Nhật II Mùa Vọng",
            files: { pdf: "/songs/chua-den-roi.pdf", mp3: "/songs/chua-den-roi.mp3", video: "/songs/chua-den-roi.mp4" },
          },
        ],
      },
      {
        id: "year-a-christmas",
        name: "Giáng Sinh",
        type: "folder",
        children: [
          {
            id: "song-3",
            name: "Đêm Thánh Vô Cùng",
            type: "song",
            composer: "Truyền thống",
            description: "Bài hát truyền thống đêm Giáng Sinh",
            files: {
              pdf: "/songs/dem-thanh-vo-cung.pdf",
              mp3: "/songs/dem-thanh-vo-cung.mp3",
              video: "/songs/dem-thanh-vo-cung.mp4",
            },
          },
        ],
      },
      {
        id: "year-a-ordinary",
        name: "Quanh Năm",
        type: "folder",
        children: [
          {
            id: "song-4",
            name: "Lạy Chúa Con Tin",
            type: "song",
            composer: "Lm. Nguyễn Duy",
            description: "Bài hát tín thác",
            files: { pdf: "/songs/lay-chua-con-tin.pdf", mp3: "/songs/lay-chua-con-tin.mp3" },
          },
        ],
      },
      {
        id: "year-a-lent",
        name: "Mùa Chay",
        type: "folder",
        children: [
          {
            id: "song-5",
            name: "Lạy Chúa Xin Thương",
            type: "song",
            composer: "Truyền thống",
            description: "Bài hát xin thương mùa chay",
            files: { pdf: "/songs/lay-chua-xin-thuong.pdf", mp3: "/songs/lay-chua-xin-thuong.mp3" },
          },
        ],
      },
      {
        id: "year-a-easter",
        name: "Phục Sinh",
        type: "folder",
        children: [
          {
            id: "song-6",
            name: "Alleluia Phục Sinh",
            type: "song",
            composer: "Lm. Xuân Ly",
            description: "Bài hát Alleluia mùa Phục Sinh",
            files: {
              pdf: "/songs/alleluia-phuc-sinh.pdf",
              mp3: "/songs/alleluia-phuc-sinh.mp3",
              video: "/songs/alleluia-phuc-sinh.mp4",
            },
          },
        ],
      },
    ],
  },
  {
    id: "year-b",
    name: "Năm B",
    type: "folder",
    children: [
      {
        id: "year-b-advent",
        name: "Mùa Vọng",
        type: "folder",
        children: [
          {
            id: "song-7",
            name: "Người Đến Trong Danh Chúa",
            type: "song",
            composer: "Lm. Nguyễn Duy",
            description: "Bài hát chào mừng Chúa đến",
            files: { pdf: "/songs/nguoi-den-trong-danh-chua.pdf", mp3: "/songs/nguoi-den-trong-danh-chua.mp3" },
          },
        ],
      },
    ],
  },
  {
    id: "year-c",
    name: "Năm C",
    type: "folder",
    children: [
      {
        id: "year-c-ordinary",
        name: "Quanh Năm",
        type: "folder",
        children: [
          {
            id: "song-8",
            name: "Tình Yêu Cao Cả",
            type: "song",
            composer: "Lm. Xuân Ly",
            description: "Bài hát về tình yêu Thiên Chúa",
            files: {
              pdf: "/songs/tinh-yeu-cao-ca.pdf",
              mp3: "/songs/tinh-yeu-cao-ca.mp3",
              video: "/songs/tinh-yeu-cao-ca.mp4",
            },
          },
        ],
      },
    ],
  },
  {
    id: "special-feasts",
    name: "Lễ Đặc Biệt",
    type: "folder",
    children: [
      {
        id: "song-9",
        name: "Kính Mừng Maria",
        type: "song",
        composer: "Truyền thống",
        description: "Bài hát kính Đức Mẹ",
        files: { pdf: "/songs/kinh-mung-maria.pdf", mp3: "/songs/kinh-mung-maria.mp3" },
      },
      {
        id: "song-10",
        name: "Thánh Ca Augustinô",
        type: "song",
        composer: "Lm. Nguyễn Duy",
        description: "Bài hát tôn vinh Thánh Augustinô",
        files: {
          pdf: "/songs/thanh-ca-augustino.pdf",
          mp3: "/songs/thanh-ca-augustino.mp3",
          video: "/songs/thanh-ca-augustino.mp4",
        },
      },
    ],
  },
]

export default function LibraryTree({ items, level = 0 }: LibraryTreeProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["year-a", "year-b", "year-c", "special-feasts"]),
  )

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        return <FileText size={16} className="text-red-500" />
      case "mp3":
        return <Music size={16} className="text-green-500" />
      case "video":
        return <Video size={16} className="text-blue-500" />
      default:
        return <FileText size={16} className="text-gray-500" />
    }
  }

  return (
    <div className="space-y-1">
      {items.map((item) => (
        <div key={item.id}>
          {item.type === "folder" ? (
            <div>
              <button
                onClick={() => toggleExpanded(item.id)}
                className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
                style={{ paddingLeft: `${level * 20 + 8}px` }}
              >
                {expandedItems.has(item.id) ? (
                  <ChevronDown size={16} className="text-muted-foreground" />
                ) : (
                  <ChevronRight size={16} className="text-muted-foreground" />
                )}
                {expandedItems.has(item.id) ? (
                  <FolderOpen size={16} className="text-primary" />
                ) : (
                  <Folder size={16} className="text-primary" />
                )}
                <span className="font-medium text-foreground">{item.name}</span>
              </button>
              {expandedItems.has(item.id) && item.children && <LibraryTree items={item.children} level={level + 1} />}
            </div>
          ) : (
            <div
              className="p-3 rounded-lg hover:bg-muted/30 transition-colors border border-transparent hover:border-border"
              style={{ marginLeft: `${level * 20 + 8}px` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                  {item.composer && <p className="text-sm text-muted-foreground mb-1">Tác giả: {item.composer}</p>}
                  {item.description && <p className="text-sm text-muted-foreground mb-3">{item.description}</p>}

                  {/* File Links */}
                  {item.files && (
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(item.files).map(([fileType, url]) => (
                        <a
                          key={fileType}
                          href={url}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs font-medium hover:bg-muted/80 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getFileIcon(fileType)}
                          {fileType.toUpperCase()}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                  <Download size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// Export the library data for use in the page
export { libraryData }
