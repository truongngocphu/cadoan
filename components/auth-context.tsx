"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  username: string
  name: string
  role: "member" | "leader" | "admin"
  isTemporaryPassword: boolean
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data - in a real app this would come from a database
const mockUsers = [
  {
    id: "1",
    username: "catrung",
    password: "augustino2024",
    name: "Nguyễn Văn An",
    role: "leader" as const,
    isTemporaryPassword: false,
  },
  {
    id: "2",
    username: "doantrung",
    password: "augustino2024",
    name: "Trần Thị Bình",
    role: "leader" as const,
    isTemporaryPassword: false,
  },
  {
    id: "3",
    username: "thanhvien1",
    password: "temp123",
    name: "Lê Văn Cường",
    role: "member" as const,
    isTemporaryPassword: true,
  },
  {
    id: "4",
    username: "thanhvien2",
    password: "temp456",
    name: "Phạm Thị Dung",
    role: "member" as const,
    isTemporaryPassword: true,
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("choir-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const foundUser = mockUsers.find((u) => u.username === username && u.password === password)

    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        username: foundUser.username,
        name: foundUser.name,
        role: foundUser.role,
        isTemporaryPassword: foundUser.isTemporaryPassword,
      }
      setUser(userData)
      localStorage.setItem("choir-user", JSON.stringify(userData))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("choir-user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
