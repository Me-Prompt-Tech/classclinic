export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            คลาสคลินิกโคราช
          </a>
  
          {/* Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              หน้าแรก
            </a>
  
            <a
              href="/services"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              บริการ
            </a>
  
            <a
              href="/about"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              เกี่ยวกับเรา
            </a>
  
            <a
              href="/contact"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              ติดต่อ
            </a>
          </nav>
  
          {/* CTA */}
          <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">
            <a href="/booking"> นัดหมาย</a>
            
          </button>
        </div>
      </header>
    );
  }