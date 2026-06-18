export default function HomePage() {
  return (
    // เปลี่ยนโทนสีพื้นหลังหลักให้เป็นสีครีมนวลตาแบบในภาพ ref1.jpg
    <main className="min-h-screen bg-[#FAF7F2] text-[#4A443C] font-serif antialiased selection:bg-[#E6DEC9]">
      
      {/* 1. Premium Navigation Bar (ถอดแบบระยะห่างและเส้นใต้มาจากภาพ) */}
      

      {/* 2. Hero Section (ปรับโครงสร้างหัวข้อใหญ่ ผ้าม่านพริ้วๆ และปุ่มกรอบเหลี่ยมตาม ref1.jpg) */}
<section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2] py-32 text-center">
  {/* เลียนแบบลวดลายใบไม้สีทองจางๆ บรรยากาศนุ่มนวลแบบในรูปภาพ */}
  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#EFEAE0] via-transparent to-transparent" />
  
  <div className="container relative mx-auto px-6">
    
    {/* หัวข้อใหญ่ปรับปรุงใหม่: เพิ่มลูกเล่นมินิมอลด้วยอักษรเอียงและสีไฮไลต์บางเบา */}
    <h1 className="mb-6 text-4xl font-light tracking-[0.2em] text-[#332F2B] sm:text-5xl md:text-6xl uppercase select-none">
  {/* ซับไตเติลด้านบนสุด */}
  <span className="block text-xs tracking-[0.4em] text-[#B4975A] font-sans font-medium mb-4 md:mb-6">
    THE PREMIER
  </span>
  
  {/* ตัวอักษรเท่ากันหมด พร้อมเงาฟุ้งแบบมินิมอล */}
  <span className="font-serif block text-transparent bg-clip-text bg-gradient-to-r from-[#332F2B] via-[#655A4F] to-[#332F2B] drop-shadow-[0_2px_8px_rgba(180,151,90,0.18)]">
    CLASS
    <span className="mx-3 text-[#B4975A] inline-block font-sans font-extralight opacity-60">|</span>
    <span className="text-[#9C8453] drop-shadow-[0_4px_12px_rgba(156,132,83,0.25)]">CLINIC</span>
  </span>
</h1>
    
    <p className="mx-auto mb-12 max-w-xl font-sans text-sm tracking-widest leading-relaxed text-[#787065] font-light">
      Crafting Timeless Medical Innovations & Comprehensive Healthcare.
    </p>
    
    {/* ปุ่ม View Portfolio สี่เหลี่ยมผืนผ้าขอบทองแบนราบสุดคลาสสิกตามในรูปภาพ */}
    <button className="border border-[#B4975A] bg-white/60 px-8 py-3 text-[10px] font-medium tracking-[0.3em] text-[#332F2B] uppercase transition duration-300 hover:bg-[#B4975A] hover:text-white">
      View Services
    </button>
  </div>
</section>

     {/* 3. Arch Gallery Section (รูปทรงประตูโค้งสไตล์อิตาลีจาก ref1.jpg พร้อมรูปภาพด้านในจากโฟลเดอร์ public) */}
<section className="bg-[#FAF7F2] px-6 pb-28">
  <div className="container mx-auto">
    <div className="mb-14 text-center">
      <h2 className="font-sans text-xs tracking-[0.25em] text-[#B4975A] uppercase">Improves Your Lifestyle Center.</h2>
    </div>
    
    {/* แกลเลอรีรูปทรง Arch ประตูโค้งเรียงตัวกัน 3 บล็อกใหญ่ตามภาพ */}
    <div className="grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
      
      {/* โค้งที่ 1 - Diagnostics */}
      <div className="relative group aspect-[3/4] rounded-t-full border border-[#E6DEC9] bg-[#F3EFE7] p-4 flex flex-col justify-end items-center shadow-sm overflow-hidden transition duration-300 hover:border-[#B4975A]/60">
        {/* รูปภาพพื้นหลังดึงจาก public - ตัดขอบโค้งมนตามรูปทรงกรอบพอดี */}
        <img 
          src="/diagnostics.jpg" // เปลี่ยนชื่อไฟล์ให้ตรงกับในโฟลเดอร์ public ของคุณ
          alt="Diagnostics" 
          className="absolute inset-0 w-full h-full object-cover rounded-t-full transition duration-500 group-hover:scale-105"
        />
        {/* เลเยอร์ Gradient บังด้านล่างรูปภาพ เพื่อให้ตัวอักษรสีเทา/ครีม อ่านง่ายไม่กลืนไปกับรูป */}
        <div className="absolute inset-0 rounded-t-full bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/30 to-transparent"></div>
        
        {/* ข้อความ (อยู่ชั้นบนสุดด้วย z-10) */}
        <span className="relative z-10 mb-4 text-xs tracking-[0.2em] text-[#787065] uppercase font-medium">Diagnostics</span>
      </div>

      {/* โค้งที่ 2 (ตัวกลางที่เด่นที่สุดในรูปภาพ) - Wellness Center */}
      <div className="relative group aspect-[3/4] rounded-t-full border border-[#B4975A]/40 bg-white p-4 flex flex-col justify-end items-center shadow-md overflow-hidden transition duration-300 hover:border-[#B4975A]">
        {/* รูปภาพพื้นหลังดึงจาก public - ตัดขอบโค้งมนตามรูปทรงกรอบพอดี */}
        <img 
          src="/wellness center.jpg" // เปลี่ยนชื่อไฟล์ให้ตรงกับในโฟลเดอร์ public ของคุณ
          alt="Wellness Center" 
          className="absolute inset-0 w-full h-full object-cover rounded-t-full transition duration-500 group-hover:scale-105"
        />
        {/* เลเยอร์ Gradient บังด้านล่างรูปภาพ เพื่อให้ตัวอักษรสีเข้ม อ่านง่ายไม่กลืนไปกับรูป */}
        <div className="absolute inset-0 rounded-t-full bg-gradient-to-t from-white via-white/30 to-transparent"></div>
        
        {/* ข้อความ (อยู่ชั้นบนสุดด้วย z-10) */}
        <span className="relative z-10 mb-4 text-xs tracking-[0.2em] font-medium text-[#332F2B] uppercase">Wellness Center</span>
      </div>

      {/* โค้งที่ 3 - Prevention */}
      <div className="relative group aspect-[3/4] rounded-t-full border border-[#E6DEC9] bg-[#F3EFE7] p-4 flex flex-col justify-end items-center shadow-sm overflow-hidden transition duration-300 hover:border-[#B4975A]/60">
        {/* รูปภาพพื้นหลังดึงจาก public - ตัดขอบโค้งมนตามรูปทรงกรอบพอดี */}
        <img 
          src="/prevention.jpg" // เปลี่ยนชื่อไฟล์ให้ตรงกับในโฟลเดอร์ public ของคุณ
          alt="Prevention" 
          className="absolute inset-0 w-full h-full object-cover rounded-t-full transition duration-500 group-hover:scale-105"
        />
        {/* เลเยอร์ Gradient บังด้านล่างรูปภาพ เพื่อให้ตัวอักษรสีเทา/ครีม อ่านง่ายไม่กลืนไปกับรูป */}
        <div className="absolute inset-0 rounded-t-full bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/30 to-transparent"></div>
        
        {/* ข้อความ (อยู่ชั้นบนสุดด้วย z-10) */}
        <span className="relative z-10 mb-4 text-xs tracking-[0.2em] text-[#787065] uppercase font-medium">Prevention</span>
      </div>

    </div>
  </div>
</section>

      {/* 4. Services Section (ถอดแบบบล็อกข้อความกลาง ไอคอนสีทองเรียบหรูด้านล่าง) */}
      <section id="services" className="bg-[#FAF7F2] py-24 border-t border-[#E6DEC9]/40">
  <div className="container mx-auto px-6 text-center max-w-3xl">
    <h2 className="text-3xl font-light tracking-[0.15em] text-[#332F2B] md:text-4xl">
      Crafting Timeless Health.
    </h2>
    <p className="mt-4 font-sans text-xs tracking-widest leading-relaxed text-[#787065] font-light">
      We are your premium medical center - providing international healthcare standards and comprehensive solutions for your long-term vitality.
    </p>

    {/* แถวไอคอน 3 คอลัมน์ที่ลายเส้นบางเฉียบและสะอาดตาตามต้นฉบับ ref1.jpg */}
    <div className="mt-20 grid gap-12 sm:grid-cols-3 font-sans text-center">
      
      {/* บริการ 1 - Strategy */}
      <div className="flex flex-col items-center group">
        {/* ไอคอน Stethoscope & Chart (หูฟังแพทย์+วิเคราะห์แผนงาน) ลายเส้นบาง 1px */}
        <div className="mb-5 text-[#B4975A] transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <h3 className="text-sm font-medium tracking-[0.15em] text-[#332F2B] uppercase">Strategy</h3>
        <p className="mt-3 text-[11px] tracking-wide text-[#787065] font-light max-w-[200px] leading-relaxed">
          ตรวจสุขภาพทั่วไป วางแผนการตรวจวิเคราะห์จำเพาะบุคคลอย่างแม่นยำ
        </p>
      </div>

      {/* บริการ 2 - Identity */}
      <div className="flex flex-col items-center group">
        {/* ไอคอน Medical Shield / Seal (การปกป้องและตัวตนเฉพาะบุคคล) ลายเส้นบาง 1px */}
        <div className="mb-5 text-[#B4975A] transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        </div>
        <h3 className="text-sm font-medium tracking-[0.15em] text-[#332F2B] uppercase">Identity</h3>
        <p className="mt-3 text-[11px] tracking-wide text-[#787065] font-light max-w-[200px] leading-relaxed">
          ฉีดวัคซีนป้องกันตามมาตรฐาน จัดสรรตารางวัคซีนเฉพาะคุณ
        </p>
      </div>

      {/* บริการ 3 - Experience */}
      <div className="flex flex-col items-center group">
        {/* ไอคอน Heart with Pulse Line (หัวใจและเส้นชีพจรที่นุ่มนวล) ลายเส้นบาง 1px */}
        <div className="mb-5 text-[#B4975A] transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
        <h3 className="text-sm font-medium tracking-[0.15em] text-[#332F2B] uppercase">Experience</h3>
        <p className="mt-3 text-[11px] tracking-wide text-[#787065] font-light max-w-[200px] leading-relaxed">
          ดูแลและควบคุมกลุ่มโรคเรื้อรัง มอบประสบการณ์การดูแลที่อุ่นใจ
        </p>
      </div>

    </div>
  </div>
</section>

      {/* 5. About & Testimonials (ถอดแบบบล็อกล่างสุดที่มีกรอบประตูโค้งขนาดใหญ่ครอบรูปบุคคล) */}
      <section id="contact" className="bg-[#FAF7F2] py-24 border-t border-[#E6DEC9]/40">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-12">
            
          {/* ฝั่งซ้าย: รูปทรง Arch ขนาดใหญ่ครอบภาพบุคคลแบบใน ref1.jpg */}
<div className="md:col-span-5 flex justify-center">
  <div className="w-full max-w-[320px] aspect-[3/4] rounded-t-full border border-[#B4975A]/40 bg-white p-3 shadow-md">
    {/* เพิ่ม overflow-hidden เพื่อให้รูปภาพที่อยู่ด้านในถูกตัดโค้งตามกรอบ Arch */}
    <div className="w-full h-full rounded-t-full border border-[#E6DEC9]/50 overflow-hidden relative">
      <img 
        src="/medical.jpg" // 👈 เปลี่ยนเป็นชื่อไฟล์รูปภาพของคุณที่อยู่ในโฟลเดอร์ public (เช่น "/team.jpg")
        alt="Medical Team"
        className="w-full h-full object-cover rounded-t-full" 
        // object-cover จะช่วยขยายรูปให้เต็มพื้นที่กรอบพอดี โดยที่หน้าคนไม่เบี้ยวครับ
      />
    </div>
  </div>
</div>

            {/* ฝั่งขวา: คำนิยม / ข้อมูลติดต่อ ฟอนต์ลายมือหรือตัวเอนบางๆ ลักชัวรี */}
            <div className="md:col-span-7 text-center md:text-left">
              <h4 className="font-sans text-xs tracking-[0.25em] text-[#B4975A] uppercase mb-4">Testimonials & Contact</h4>
              <p className="text-xl font-light italic leading-relaxed text-[#332F2B] mb-6 font-sans">
                "การดูแลสุขภาพไม่ใช่เรื่องชั่วคราว แต่เป็นของขวัญที่ยั่งยืน คลาสคลินิกโคราชพร้อมดูแลคุณในทุกช่วงเวลาของชีวิตด้วยมาตรฐานความปลอดภัยสูงสุด"
              </p>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#787065] mb-8 font-sans">
                — Class Clinic Executive Team
              </div>

              {/* ส่วนข้อมูลติดต่อจัดเรียงเรียบง่ายลักชัวรี */}
             <div className="grid gap-6 border-t border-[#E6DEC9] pt-8 font-sans text-xs tracking-wider text-[#615A52] sm:grid-cols-3">
  {/* เบอร์โทรศัพท์ */}
  <div className="flex flex-col items-center justify-center gap-2 md:items-start md:justify-start">
    <div className="text-[#B4975A]">
      {/* ไอคอนโทรศัพท์สไตล์มินิมอล เส้นบาง 1px */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622a10.114 10.114 0 015.535-3.85c1.32-.286 2.659.186 3.42 1.298l1.411 2.043c.536.776.38 1.834-.356 2.427l-.768.618a2.45 2.45 0 00-.606 2.464 8.62 8.62 0 004.757 4.757 2.45 2.45 0 002.464-.606l.618-.768a1.763 1.763 0 012.427-.356l2.043 1.411c1.112.761 1.585 2.101 1.298 3.42a10.114 10.114 0 01-3.85 5.535c-1.397.905-3.235.918-4.757-.156l-1.326-.935a21.178 21.178 0 01-7.371-7.371l-.935-1.326c-1.074-1.522-1.061-3.36-.156-4.757z" />
      </svg>
    </div>
    <span className="font-light text-[#332F2B]">044-xxx-xxx</span>
  </div>

  {/* สถานที่ตั้ง */}
  <div className="flex flex-col items-center justify-center gap-2 border-y border-[#E6DEC9]/40 py-4 sm:border-y-0 sm:border-x sm:border-[#E6DEC9]/40 sm:py-0 md:items-start md:justify-start md:px-6">
    <div className="text-[#B4975A]">
      {/* ไอคอนหมุดลายเส้นบางเฉียบ */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
      </svg>
    </div>
    <span className="font-light text-[#332F2B]">นครราชสีมา</span>
  </div>

  {/* อีเมล */}
  <div className="flex flex-col items-center justify-center gap-2 md:items-start md:justify-start">
    <div className="text-[#B4975A]">
      {/* ไอคอนจดหมายทรงสี่เหลี่ยมผืนผ้าแบบคลาสสิก */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615m19.5 0v0A2.25 2.25 0 0019.5 4.5" />
      </svg>
    </div>
    <span className="text-[11px] font-light text-[#332F2B] break-all tracking-normal">contact@classclinickorat.com</span>
  </div>
</div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Footer (เรียบง่าย ตัวหนังสือเล็กๆ กระจายตัว พร้อมไอคอนโซเชียลมีเดียตามภาพ) */}
      <footer className="border-t border-[#E6DEC9]/40 bg-[#FAF7F2] py-10 font-sans">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-8 text-[10px] tracking-[0.2em] text-[#918679] uppercase sm:flex-row">
          <div>
            © 2026 CLASS CLINIC KORAT. ALL RIGHTS RESERVED.
          </div>
          {/* ล้อตามปุ่มโซเชียลมุมขวาของ ref1.jpg */}
          <div className="flex gap-6 text-xs text-[#615A52]">
            <a href="#" className="hover:text-[#B4975A]">fb</a>
            <a href="#" className="hover:text-[#B4975A]">tw</a>
            <a href="#" className="hover:text-[#B4975A]">ig</a>
          </div>
        </div>
      </footer>
    </main>
  );
}