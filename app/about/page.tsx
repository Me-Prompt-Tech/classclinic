import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-emerald-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-amber-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
                ABOUT US
              </span>

              <h1 className="mt-6 text-4xl font-bold text-emerald-900 md:text-5xl">
                เกี่ยวกับคลินิกของเรา
              </h1>

              <p className="mt-6 text-lg leading-8 text-emerald-800/80">
                เรามุ่งมั่นดูแลสุขภาพผิวและความงามด้วยเทคโนโลยีที่ทันสมัย
                พร้อมทีมแพทย์และผู้เชี่ยวชาญที่มีประสบการณ์
                เพื่อมอบบริการที่ปลอดภัย มีคุณภาพ
                และเหมาะสมกับความต้องการของแต่ละบุคคล
              </p>
            </div>

            <div className="flex justify-center">
              <div className="overflow-hidden rounded-[32px] border-4 border-amber-200 shadow-2xl">
                <Image
                  src="/clinic-about.jpg"
                  alt="คลินิกความงาม"
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* จุดเด่น */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:ring-amber-200">
              <div className="text-5xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                ✨
              </div>

              <h2 className="mt-4 text-xl font-semibold text-emerald-900">
                เทคโนโลยีทันสมัย
              </h2>

              <p className="mt-3 text-gray-600">
                ใช้อุปกรณ์และนวัตกรรมที่ได้มาตรฐาน เพื่อผลลัพธ์ที่มีประสิทธิภาพ
              </p>
            </div>

            <div className="group rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:ring-amber-200">
              <div className="text-5xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                👩‍⚕️
              </div>

              <h2 className="mt-4 text-xl font-semibold text-emerald-900">
                ทีมแพทย์ผู้เชี่ยวชาญ
              </h2>

              <p className="mt-3 text-gray-600">
                ดูแลและให้คำปรึกษาโดยทีมแพทย์และบุคลากรที่มีประสบการณ์
              </p>
            </div>

            <div className="group rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:ring-amber-200">
              <div className="text-5xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                💚
              </div>

              <h2 className="mt-4 text-xl font-semibold text-emerald-900">
                ใส่ใจทุกการดูแล
              </h2>

              <p className="mt-3 text-gray-600">
                ออกแบบการดูแลให้เหมาะกับสภาพผิวและความต้องการของแต่ละบุคคล
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* วิสัยทัศน์ */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            OUR VISION
          </span>

          <h2 className="mt-6 text-3xl font-bold text-emerald-900">
            วิสัยทัศน์ของเรา
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            เราเชื่อว่าความมั่นใจเริ่มต้นจากการดูแลตัวเองอย่างเหมาะสม
            จึงมุ่งมั่นพัฒนาบริการด้านความงามที่ปลอดภัย มีคุณภาพ
            และเข้าถึงได้ เพื่อให้ทุกคนสามารถเผยความงามในแบบของตัวเองได้อย่างมั่นใจ
          </p>
        </div>
      </section>

      {/* ติดต่อเรา */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-amber-300">
            พร้อมให้คำปรึกษา
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
            ติดต่อทีมงานของเราเพื่อรับคำปรึกษาและวางแผนการดูแลที่เหมาะกับคุณ
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:021234567"
              className="rounded-full bg-amber-400 px-8 py-4 font-semibold text-emerald-900 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-amber-300 hover:shadow-xl"
            >
              โทร 02-123-4567
            </a>

            <a
              href="https://line.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-amber-300 px-8 py-4 font-semibold text-amber-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-amber-300 hover:text-emerald-900 hover:shadow-xl"
            >
              ติดต่อผ่าน LINE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}