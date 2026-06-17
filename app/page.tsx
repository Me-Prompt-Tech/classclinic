
    export default function HomePage() {
      return (
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            <div className="container mx-auto px-6 py-24 text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                คลาสคลินิกโคราช
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
                ดูแลสุขภาพด้วยมาตรฐานทางการแพทย์ที่ทันสมัย
                พร้อมทีมแพทย์และบุคลากรผู้เชี่ยวชาญ
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
                  นัดหมายออนไลน์
                </button>
                <button className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-600">
                  ติดต่อเรา
                </button>
              </div>
            </div>
          </section>
    
          {/* Services */}
          <section className="container mx-auto px-6 py-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                บริการของเรา
              </h2>
              <p className="mt-3 text-gray-600">
                ให้บริการด้านสุขภาพแบบครบวงจร
              </p>
            </div>
    
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
                <div className="mb-4 text-4xl">🩺</div>
                <h3 className="mb-2 text-xl font-semibold">
                  ตรวจสุขภาพทั่วไป
                </h3>
                <p className="text-gray-600">
                  ตรวจวินิจฉัยและให้คำปรึกษาโดยแพทย์ผู้เชี่ยวชาญ
                </p>
              </div>
    
              <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
                <div className="mb-4 text-4xl">💉</div>
                <h3 className="mb-2 text-xl font-semibold">
                  ฉีดวัคซีน
                </h3>
                <p className="text-gray-600">
                  วัคซีนสำหรับเด็กและผู้ใหญ่ตามมาตรฐานสาธารณสุข
                </p>
              </div>
    
              <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
                <div className="mb-4 text-4xl">❤️</div>
                <h3 className="mb-2 text-xl font-semibold">
                  ดูแลโรคเรื้อรัง
                </h3>
                <p className="text-gray-600">
                  ติดตามและดูแลสุขภาพอย่างต่อเนื่อง
                </p>
              </div>
            </div>
          </section>
    
          {/* About */}
          <section className="bg-gray-50 py-20">
            <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  เกี่ยวกับคลาสคลินิกโคราช
                </h2>
                <p className="mb-4 text-gray-600">
                  คลินิกของเรามุ่งเน้นการดูแลสุขภาพแบบองค์รวม
                  ด้วยเทคโนโลยีทางการแพทย์ที่ทันสมัย
                  และทีมงานที่มีประสบการณ์
                </p>
                <p className="text-gray-600">
                  พร้อมให้บริการอย่างอบอุ่น ใส่ใจ และเข้าถึงได้สำหรับทุกคน
                </p>
              </div>
    
              <div className="flex h-80 items-center justify-center rounded-2xl bg-blue-100">
                <span className="text-lg text-blue-700">
                  รูปภาพคลินิก
                </span>
              </div>
            </div>
          </section>
    
          {/* Contact */}
          <section className="container mx-auto px-6 py-20">
            <div className="rounded-3xl bg-blue-600 p-10 text-center text-white">
              <h2 className="mb-4 text-3xl font-bold">
                นัดหมายเข้ารับบริการ
              </h2>
              <p className="mb-8">
                เปิดให้บริการทุกวัน 08:00 - 20:00 น.
              </p>
    
              <div className="flex flex-col items-center justify-center gap-3 text-lg">
                <p>📞 044-xxx-xxx</p>
                <p>📍 นครราชสีมา</p>
                <p>✉️ contact@classclinickorat.com</p>
              </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="border-t py-6">
            <div className="container mx-auto px-6 text-center text-gray-500">
              © 2026 คลาสคลินิกโคราช. All Rights Reserved.
            </div>
          </footer>
        </main>
      );
    }
 