import Image from "next/image";
import { Noto_Serif_Thai, Sarabun } from "next/font/google";

const headingFont = Noto_Serif_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Sarabun({
  subsets: ["thai"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export default function AboutPage() {
  return (
    <main
      className={`${bodyFont.variable} ${headingFont.variable} relative min-h-screen overflow-hidden bg-[#fbf7f2] font-[family:var(--font-body)]`}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/to.webp"
          alt="พื้นหลังคลินิก"
          fill
          priority
          className="object-cover"
        />

        {/* ปรับให้ภาพพื้นหลังชัดขึ้น */}
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]" />
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-medium tracking-[0.15em] text-amber-800 shadow-sm">
                ABOUT US
              </span>

              <h1 className="mt-6 font-[family:var(--font-heading)] text-4xl font-semibold tracking-wide text-stone-800 md:text-5xl">
                เกี่ยวกับคลินิกของเรา
              </h1>

              <p className="mt-6 text-lg leading-8 text-stone-600">
                เรามุ่งมั่นดูแลสุขภาพผิวและความงามด้วยเทคโนโลยีที่ทันสมัย
                พร้อมทีมแพทย์และผู้เชี่ยวชาญที่มีประสบการณ์
                เพื่อมอบบริการที่ปลอดภัย มีคุณภาพ และหรูหราในแบบที่คุณมั่นใจ
              </p>
            </div>

            <div className="flex justify-center">
              <div className="overflow-hidden rounded-[32px] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(180,140,80,0.25)]">
                <Image
                  src="/to.webp"
                  alt="คลินิกความงาม"
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* จุดเด่น */}
<section className="py-16">
  <div className="container mx-auto px-6">
    <div className="grid gap-8 md:grid-cols-3">

      {/* เทคโนโลยี */}
      <div className="group overflow-hidden rounded-3xl bg-white/90 shadow-lg backdrop-blur-sm ring-1 ring-amber-100 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:ring-amber-300">
        <div className="overflow-hidden">
          <Image
            src="/vo.png"
            alt="เทคโนโลยีทันสมัย"
            width={400}
            height={250}
            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="p-8 text-center">
          <h2 className="font-[family:var(--font-heading)] text-xl font-semibold text-stone-800">
            เทคโนโลยีทันสมัย
          </h2>

          <p className="mt-4 leading-7 text-stone-600">
            ใช้อุปกรณ์และนวัตกรรมที่ได้มาตรฐาน เพื่อผลลัพธ์ที่มีประสิทธิภาพและปลอดภัย
          </p>
        </div>
      </div>

      {/* ทีมแพทย์ */}
      <div className="group overflow-hidden rounded-3xl bg-white/90 shadow-lg backdrop-blur-sm ring-1 ring-amber-100 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:ring-amber-300">
        <div className="overflow-hidden">
          <Image
            src="/bn.jpg"
            alt="ทีมแพทย์ผู้เชี่ยวชาญ"
            width={400}
            height={250}
            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="p-8 text-center">
          <h2 className="font-[family:var(--font-heading)] text-xl font-semibold text-stone-800">
            ทีมแพทย์ผู้เชี่ยวชาญ
          </h2>

          <p className="mt-4 leading-7 text-stone-600">
            ดูแลโดยทีมแพทย์และบุคลากรที่มีประสบการณ์ พร้อมให้คำแนะนำอย่างใกล้ชิด
          </p>
        </div>
      </div>

      {/* ใส่ใจทุกการดูแล */}
      <div className="group overflow-hidden rounded-3xl bg-white/90 shadow-lg backdrop-blur-sm ring-1 ring-amber-100 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:ring-amber-300">
        <div className="overflow-hidden">
          <Image
            src="/kk.png"
            alt="ใส่ใจทุกการดูแล"
            width={400}
            height={250}
            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="p-8 text-center">
          <h2 className="font-[family:var(--font-heading)] text-xl font-semibold text-stone-800">
            ใส่ใจทุกการดูแล
          </h2>

          <p className="mt-4 leading-7 text-stone-600">
            ออกแบบการรักษาเฉพาะบุคคล เพื่อให้เหมาะกับสภาพผิวและความต้องการของแต่ละคน
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* Vision */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-amber-100 bg-white/90 p-10 text-center shadow-xl backdrop-blur-sm">
            <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-medium tracking-[0.15em] text-amber-800">
              OUR VISION
            </span>

            <h2 className="mt-6 font-[family:var(--font-heading)] text-3xl font-semibold tracking-wide text-stone-800">
              วิสัยทัศน์ของเรา
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              เราเชื่อว่าความมั่นใจเกิดจากการดูแลตัวเองอย่างพอดี
              เราจึงมุ่งสร้างประสบการณ์ความงามที่หรูหรา อ่อนโยน และปลอดภัย
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[36px] border border-[#d6b98c]/40 bg-gradient-to-br from-[#fffaf3]/90 via-[#f8f1e7]/85 to-[#e8d6bf]/80 p-10 text-center shadow-[0_20px_60px_rgba(101,67,33,0.18)] backdrop-blur-md">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#f2d3a1]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#8b5e3c]/10 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-block rounded-full border border-[#d6b98c] bg-white/70 px-4 py-2 text-sm font-medium tracking-[0.25em] text-[#8b5e3c] backdrop-blur-sm">
                CONTACT US
              </span>

              <h2 className="mt-5 font-[family:var(--font-heading)] text-3xl font-semibold tracking-wide text-[#5b3a29] md:text-4xl">
                พร้อมให้คำปรึกษา
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[#7a5b47]">
                ติดต่อทีมงานของเราเพื่อรับคำปรึกษาและวางแผนการดูแลที่เหมาะกับคุณ
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:021234567"
                  className="rounded-full bg-gradient-to-r from-[#8b5e3c] to-[#6f4a30] px-8 py-4 font-semibold text-white shadow-lg shadow-[#8b5e3c]/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                >
                  โทร 02-123-4567
                </a>

                <a
                  href="https://line.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#c8a27a] bg-white/60 px-8 py-4 font-semibold text-[#8b5e3c] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#8b5e3c] hover:text-white hover:shadow-xl"
                >
                  ติดต่อผ่าน LINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}