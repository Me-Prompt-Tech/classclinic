
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass rounded-3xl px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-bold gradient-text"
          >
            ✨ CLASS CLINIC KORAT
          </Link>

          <nav className="hidden md:flex gap-8">

            <Link href="/" className="menu-link">
              หน้าแรก
            </Link>

            <Link href="/services" className="menu-link">
              บริการ
            </Link>

            <Link href="/about" className="menu-link">
              เกี่ยวกับเรา
            </Link>

            <Link href="/contact" className="menu-link">
              ติดต่อ
            </Link>

          </nav>

          <Link
            href="/booking"
            className="
              bg-gradient-to-r
              from-pink-500
              via-fuchsia-500
              to-purple-500
              text-white
              px-6
              py-3
              rounded-2xl
              font-semibold
              shadow-lg
              hover:scale-105
              transition
            "
          >
            ✨ จองคิวเลย
          </Link>

        </div>
      </div>
    </header>
  );
}