import { Headset, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  // Get current time and date
  const now = new Date()
  const timeString = now.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
  const dateString = now.toLocaleDateString("vi-VN", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      {/* Left Navigation */}
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-sm font-medium text-teal-800 hover:text-teal-900">
          Trang chủ
        </a>
        <a href="#" className="text-sm font-medium text-teal-800 hover:text-teal-900">
          Bài viết
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center text-sm font-medium text-teal-800 hover:text-teal-900 p-0 h-auto">
              Phân hệ nghiệp vụ
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-white">
            <DropdownMenuItem>Quản lý người dùng</DropdownMenuItem>
            <DropdownMenuItem>Quản lý sản phẩm</DropdownMenuItem>
            <DropdownMenuItem>Báo cáo</DropdownMenuItem>
            <DropdownMenuItem>Cài đặt</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Center Search */}
        <div className="flex-1 flex justify-center">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 rounded-none border-gray-500 hover:border-gray-500">
            <Headset className="h-4 w-4" />
          </Button>
        </div>

        {/* Time and Date */}
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">{timeString}</div>
          <div className="text-xs text-gray-500">{dateString}</div>
        </div>

        {/* Notification Bell */}
        <Bell className="h-4 w-4 cursor-pointer" />

        {/* User Info */}
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">KH011812409</div>
          <div className="text-xs text-gray-500">admin</div>
        </div>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
