"use client";
import { useState } from "react";

export default function Home() {
    const [success, setSuccess] = useState(false);
    return (
        
        <main className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 p-6">
            <div className="max-w-7xl mx-auto">

                {/* Hero */}
                <section className="glass sparkle rounded-[32px] p-10 mb-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                            ✨ CLASS CLINIC KORAT ✨
                        </h1>

                        <p className="text-gray-600 text-lg">
                            จองคิวนัดหมายเข้ารับบริการความงามและสุขภาพ
                        </p>

                        <div className="inline-flex mt-6 px-6 py-3 rounded-full bg-pink-500 text-white font-medium shadow-lg">
                            🌸 Premium Beauty & Wellness
                        </div>
                    </div>
                </section>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Booking Form */}
                    <section className="lg:col-span-2 glass rounded-[32px] p-8">

                        <h2 className="text-2xl font-bold text-pink-600 mb-6">
                            📅 จองวันและเวลา
                        </h2>

                        <div className="grid md:grid-cols-2 gap-5">

                            <div>
                                <label className="label">เลือกบริการ</label>
                                <select className="input" defaultValue="">
                                    <option value="" disabled>
                                        เลือกบริการ
                                    </option>

                                    <option value="botox">โบท็อกซ์</option>
                                    <option value="filler">ฟิลเลอร์</option>
                                    <option value="laser">เลเซอร์หน้าใส</option>
                                    <option value="vitamin">ฉีดวิตามินผิว</option>
                                    <option value="consult">ปรึกษาแพทย์</option>
                                </select>
                            </div>

                            <div>
                                <label className="label">เลือกแพทย์</label>
                                <select className="input" defaultValue="">
                                    <option value="" disabled>
                                        เลือกแพทย์
                                    </option>

                                    <option value="doctor1">พญ.ชนิดา</option>
                                    <option value="doctor2">นพ.กิตติพงษ์</option>
                                    <option value="doctor3">แพทย์เวร</option>
                                </select>
                            </div>

                            <div>
                                <label className="label">วันที่นัดหมาย</label>
                                <input type="date" className="input" />
                            </div>

                            <div>
                                <label className="label">เวลานัดหมาย</label>
                                <select className="input" defaultValue="">
                                    <option value="" disabled>
                                        เลือกเวลา
                                    </option>
                                    <option>09:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                </select>
                            </div>

                        </div>

                        <h2 className="text-2xl font-bold text-pink-600 mt-10 mb-6">
                            👤 ข้อมูลผู้รับบริการ
                        </h2>

                        <div className="grid md:grid-cols-2 gap-5">

                            <input
                                type="text"
                                placeholder="ชื่อ - นามสกุล"
                                className="input"
                            />

                            <input
                                type="tel"
                                placeholder="เบอร์โทรศัพท์"
                                className="input"
                            />

                            <input
                                type="email"
                                placeholder="อีเมล"
                                className="input"
                            />

                            <input
                                type="text"
                                placeholder="LINE ID"
                                className="input"
                            />

                        </div>

                        <textarea
                            placeholder="รายละเอียดเพิ่มเติม"
                            rows={4}
                            className="input mt-5"
                        />

                        <button
                            className="booking-btn"
                            onClick={() => setSuccess(true)}
                        >
                            ✨ ยืนยันการจองคิว ✨
                        </button>

                    </section>

                    {/* Sidebar */}
                    <aside className="space-y-6">

                        <div className="glass rounded-[32px] p-6 floating">
                            <h3 className="text-xl font-bold text-pink-600 mb-4">
                                🎁 โปรโมชั่น
                            </h3>

                            <div className="space-y-3">

                                <div className="promo-card">
                                    💉 Botox ลดสูงสุด 20%
                                </div>

                                <div className="promo-card">
                                    ✨ Laser ฟรี Premium Mask
                                </div>

                                <div className="promo-card">
                                    🌸 Filler แถมวิตามินผิว
                                </div>

                            </div>
                        </div>

                        <div className="glass rounded-[32px] p-6">
                            <h3 className="text-xl font-bold text-pink-600 mb-4">
                                📍 ข้อมูลคลินิก
                            </h3>

                            <div className="space-y-3 text-gray-700">
                                <p>🏥 Class Clinic Korat</p>
                                <p>📞 062 632 4533</p>
                                <p>📱 LINE Official Account</p>
                                <p>⏰ 09:00 - 20:00 น.</p>
                                <p>🚗 มีที่จอดรถ</p>
                            </div>
                        </div>

                    </aside>

                </div>

            </div>
            {success && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">

      <div className="text-6xl mb-4">
        🎉
      </div>

      <h2 className="text-3xl font-bold text-pink-600 mb-3">
        จองคิวเรียบร้อย
      </h2>

      <p className="text-gray-600 mb-6">
        ทางคลินิกได้รับข้อมูลการนัดหมายของคุณแล้ว
        เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันคิวอีกครั้ง
      </p>

      <button
        
        onClick={() => setSuccess(false)}
        className="px-6 py-3 rounded-xl bg-pink-500 text-white"
      >
        ตกลง
      </button>

    </div>
  </div>
)}
                </main>
      
    );
}
