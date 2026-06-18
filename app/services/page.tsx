import Image from "next/image";

export default function ServicePage() {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black uppercase mb-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent drop-shadow-lg">
              OUR SERVICES
            </h2>

            <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mb-6"></div>

            <p className="text-gray-500 text-lg">
              Premium Beauty Treatments For Your Confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Botox */}
            <div className="bg-white border border-[#F3E5AB] rounded-[30px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              {/* <div className="text-5xl mb-5"></div>
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                Botox
              </h3>
              <p className="text-gray-600 leading-relaxed">
                💉 ลดริ้วรอย ปรับรูปหน้าให้เรียวสวย ดูอ่อนเยาว์อย่างเป็นธรรมชาติ
                <div className="text-5xl mb-5">✨</div>
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                Filler
              </h3>
              <p className="text-gray-600 leading-relaxed">
                เติมเต็มใบหน้า คาง ปาก และร่องลึก ให้ใบหน้าดูสมส่วน
              </p> */}
              <div className="grid grid-cols-[auto_1fr] items-centen gap-3 rounded-xl slate-200 bg-white p-4">
                {/* col 1: Emoji */}
                <div className="text-3xl leading-none">
                </div>

                {/* col 2: Title + subTitle */}
                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold text-[#D4AF37]" mb-3>
                    💉ลดลิ้วรอย
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    ปรับรูปหน้าให้เรียวสวย ดูอ่อนเยาว์อย่างเป็นธรรมชาติ
                  </p>
                </div>
              </div>
              <img src="./image/01.webp" alt="" />

            </div>


            {/* Filler */}
            <div className="bg-white border border-[#F3E5AB] rounded-[30px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-5"></div>
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                ✨Filler
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                     เติมเต็มใบหน้า คาง ปาก และร่องลึก ให้ใบหน้าดูสมส่วน
              </p>
              <img src="./image/02.jpg" alt="" />
            </div>

            {/* Laser */}
            <div className="bg-white border border-[#F3E5AB] rounded-[30px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-5"></div>
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                🌟Laser Treatment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ฟื้นฟูผิว ลดรอยสิว จุดด่างดำ และกระชับรูขุมขน
              </p>
              <img src="./image/03.jpg" alt="" />
            </div>

            {/* Meso */}
            <div className="bg-white border border-[#F3E5AB] rounded-[30px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-5"></div>
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                💎Meso Therapy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                เติมวิตามินสู่ผิวโดยตรง เพิ่มความกระจ่างใสและชุ่มชื้น
              </p>
              <img src="./image/04.jpg" alt="" />
            </div>

            {/* Thread Lift */}
            <div className="bg-white border border-[#F3E5AB] rounded-[30px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-5"></div>
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                👑Thread Lift
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ยกกระชับใบหน้า ปรับกรอบหน้าให้ชัดขึ้นโดยไม่ต้องผ่าตัด
              </p>
              <img src="./image/05.webp" alt="" />
            </div>

            {/* Hair Removal */}
            <div className="bg-white border border-[#F3E5AB] rounded-[30px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-5"></div>
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                💖Hair Removal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                กำจัดขนด้วยเลเซอร์ ผิวเนียนเรียบ มั่นใจทุกสัมผัส
              </p>
              <img src="./image/07.webp" alt="" />
            </div>

          </div>
        </div>
      </section>
    </div>

  );
}
