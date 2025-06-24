import UserIcon from '@/assets/user_icon_2.png'

export default function Sidebar() {
    return (
        <aside className="w-1/5 bg-white shadow-sm min-h-screen border-r shrink-0 z-50">
          <div>
            <div className="flex items-center space-x-2 bg-cyan-500 h-16 justify-center">
              <span className="font-bold text-xl text-white">VNEPS</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-teal-800">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img src={UserIcon} alt="logo" className="w-full h-full object-cover" />
              </div>
              <div className="text-sm font-medium text-white">Quản lý người dùng</div>
            </div>
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded text-sm"
              >
                <span>Quản lý hoạt động tham gia</span>
              </a>
            </nav>
          </div>
        </aside>
    )
}