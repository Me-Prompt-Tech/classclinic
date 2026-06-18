'use client'; // ใส่ไว้เพื่อให้รองรับ Next.js App Router (Client Component)

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // ลูกเล่น: เมื่อเลื่อนหน้าจอลงมา Navbar จะเปลี่ยนความโปร่งใสให้ดูหรูหราขึ้น
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white/95 backdrop-blur-sm" 
          // หรือปรับเป็น bg-transparent ได้ถ้าหน้าแรกของพี่มีรูป Banner บังอยู่ด้านบนสุดครับ
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8 md:py-5 transition-all duration-500">
        
        {/* LOGO - ดีไซน์หรูหรา สไตล์ Serif ผสมผสานความ Minimal */}
        <a href="/" className="group flex flex-col items-start tracking-widest">
          <span className="font-serif text-2xl font-light text-gray-900 transition-colors duration-300 group-hover:text-amber-700">
            CLASS <span className="italic font-normal text-amber-600">CLINIC</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mt-[-2px] transition-all duration-300 group-hover:tracking-[0.4em] group-hover:text-amber-500">
            Aesthetic & Wellness
          </span>
        </a>

        {/* MENU - มินิมอล มีลูกเล่นเส้นใต้วิ่งตอน Hover */}
        <nav className="hidden items-center gap-10 md:flex">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative py-2 text-sm font-medium tracking-wide text-gray-600 transition-colors duration-300 hover:text-gray-950 group"
            >
              {item}
              {/* ลูกเล่นเส้นใต้ขยายออกซ้ายขวา */}
              <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-amber-600 transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA BUTTON - ปุ่ม Booking แบบ Luxury Minimal เรียบหรูดูแพง */}
        <div className="hidden md:block">
          <a
            href="/booking"
            className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden text-xs font-semibold tracking-widest text-amber-700 uppercase border border-amber-600/50 rounded-none transition-all duration-500 hover:text-white group"
          >
            {/* ลูกเล่นสีพื้นหลังวิ่งจากซ้ายไปขวาเมื่อ Hover */}
            <span className="absolute inset-0 w-0 h-full bg-amber-700 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative z-10">Make Appointment</span>
          </a>
        </div>

        {/* Mobile Menu Button (สำหรับแสดงผลบนมือถือ) */}
        <button className="block md:hidden text-gray-700 hover:text-amber-600 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </div>
  );
}