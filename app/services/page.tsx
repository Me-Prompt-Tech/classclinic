import Image from "next/image";

export default function ServicePage() {
  return (
    // เปลี่ยนพื้นหลังหลักเป็นสี Off-White / Cream อ่อนๆ สไตล์มินิมอล
    <div className="bg-[#FAF7F2] min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-800 bg-clip-text text-transparent tracking-wide">
              OUR SERVICES
            </h2>

            {/* เส้นคั่นปรับให้บางและดูซอฟต์ลง */}
            <div className="w-16 h-[1.5px] bg-[#D4AF37]/60 mx-auto mb-6"></div>

            <p className="text-gray-400 font-medium tracking-wide text-sm md:text-base uppercase">
              Premium Beauty Treatments For Your Confidence
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 1. Botox */}
            <div className="bg-white border border-[#EAE6DF] rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#C5A059] mb-3 flex items-center gap-2">
                  <span>💉</span> Botox (ลดริ้วรอย)
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  ปรับรูปหน้าให้เรียวสวย เติมความอ่อนเยาว์อย่างเป็นธรรมชาติ บ่งบอกความเป็นคุณ
                </p>
              </div>
              <div className="overflow-hidden rounded-xl aspect-[4/3]">
                <img src="./image/01.webp" alt="Botox" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* 2. Filler */}
            <div className="bg-white border border-[#EAE6DF] rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#C5A059] mb-3 flex items-center gap-2">
                  <span>✨</span> Filler
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  เติมเต็มใบหน้า คาง ปาก และร่องลึก ให้ใบหน้าดูอิ่มฟูและสมส่วนอย่างเป็นธรรมชาติ
                </p>
              </div>
              <div className="overflow-hidden rounded-xl aspect-[4/3]">
                <img src="./image/02.jpg" alt="Filler" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* 3. Laser */}
            <div className="bg-white border border-[#EAE6DF] rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#C5A059] mb-3 flex items-center gap-2">
                  <span>🌟</span> Laser Treatment
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  ฟื้นฟูสภาพผิวอย่างล้ำลึก ลดรอยสิว จุดด่างดำ และช่วยกระชับรูขุมขนให้เรียบเนียน
                </p>
              </div>
              <div className="overflow-hidden rounded-xl aspect-[4/3]">
                <img src="./image/03.jpg" alt="Laser Treatment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* 4. Meso */}
            <div className="bg-white border border-[#EAE6DF] rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#C5A059] mb-3 flex items-center gap-2">
                  <span>💎</span> Meso Therapy
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  ผลักวิตามินและสารอาหารเข้าสู่ผิวโดยตรง เพิ่มความกระจ่างใส ฉ่ำวาว และชุ่มชื้น
                </p>
              </div>
              <div className="overflow-hidden rounded-xl aspect-[4/3]">
                <img src="./image/04.jpg" alt="Meso Therapy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* 5. Thread Lift */}
            <div className="bg-white border border-[#EAE6DF] rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#C5A059] mb-3 flex items-center gap-2">
                  <span>👑</span> Thread Lift
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  ยกกระชับผิวหน้าที่หย่อนคล้อย ปรับกรอบหน้าให้คมชัดขึ้นทันทีโดยไม่ต้องผ่าตัด
                </p>
              </div>
              <div className="overflow-hidden rounded-xl aspect-[4/3]">
                <img src="./image/05.webp" alt="Thread Lift" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* 6. Hair Removal */}
            <div className="bg-white border border-[#EAE6DF] rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#C5A059] mb-3 flex items-center gap-2">
                  <span>💖</span> Hair Removal
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  กำจัดขนด้วยเลเซอร์มาตรฐานสากล ให้ผิวเนียนเรียบ น่าสัมผัส มั่นใจได้เต็มที่
                </p>
              </div>
              <div className="overflow-hidden rounded-xl aspect-[4/3]">
                <img src="./image/07.webp" alt="Hair Removal" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}