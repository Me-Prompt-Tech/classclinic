"use client";
import { useState } from "react";

export default function Home() {
    const [success, setSuccess] = useState(false);

    return (<main className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#FFFDF9] to-[#F5EEE3] py-10 px-6"> <div className="max-w-7xl mx-auto">



        {/* HERO */}
        <section className="glass p-14 mb-10 text-center">

            <h1
                className=" text-6xl md:text-[7rem] font-semibold tracking-[0.04em] gradient-text leading-none"
            >
                CLASS CLINIC KORAT
            </h1>

            <p className="uppercase tracking-[0.3em] text-[#B8924F] text-sm md:text-base mb-3">
                Luxury Aesthetic & Wellness Center
            </p>

            <p className="text-gray-500 text-lg">
                จองคิวนัดหมายเข้ารับบริการความงาม
            </p>

            <div
  className="
  inline-flex
  mt-8
  px-14
  py-5
  rounded-full
  text-white
  font-semibold
  tracking-wide
  bg-gradient-to-r
  from-[#D9B978]
  via-[#C9A660]
  to-[#A67D38]
  shadow-xl
"
>
  Premium Beauty & Wellness
</div>
            <div className="absolute inset-0 pointer-events-none">
                <div className="hero-glow"></div>
            </div>
            <div className="hero-star left-20">✦</div>
<div className="hero-star right-20">✦</div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">

            {/* BOOKING */}
            <section className="lg:col-span-2 glass p-8">

                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[1px] bg-[#B8924F]" />
                    <h2 className="text-2xl font-semibold text-[#8B6A35]">
                        จองวันและเวลา
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">

                    <div>
                        <label className="label">เลือกบริการ</label>
                        <select className="input" defaultValue="">
                            <option value="" disabled>เลือกบริการ</option>
                            <option>โบท็อกซ์</option>
                            <option>ฟิลเลอร์</option>
                            <option>เลเซอร์หน้าใส</option>
                            <option>ฉีดวิตามินผิว</option>
                            <option>ปรึกษาแพทย์</option>
                        </select>
                    </div>

                    <div>
                        <label className="label">เลือกแพทย์</label>
                        <select className="input" defaultValue="">
                            <option value="" disabled>เลือกแพทย์</option>
                            <option>พญ.ชนิดา</option>
                            <option>นพ.กิตติพงษ์</option>
                            <option>แพทย์เวร</option>
                        </select>
                    </div>

                    <div>
                        <label className="label">วันที่นัดหมาย</label>
                        <input type="date" className="input" />
                    </div>

                    <div>
                        <label className="label">เวลานัดหมาย</label>
                        <select className="input" defaultValue="">
                            <option value="" disabled>เลือกเวลา</option>
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

                <div className="flex items-center gap-4 mt-12 mb-8">
                    <div className="w-12 h-[1px] bg-[#B8924F]" />
                    <h2 className="text-2xl font-semibold text-[#8B6A35]">
                        ข้อมูลผู้รับบริการ
                    </h2>
                </div>

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
                    ยืนยันการจองคิว
                </button>

            </section>

            {/* SIDEBAR */}
            <aside className="space-y-6">

                <div className="glass p-6">

                    <h3 className="text-xl font-semibold text-[#8B6A35] mb-5">
                        โปรโมชั่น
                    </h3>

                    <div className="space-y-3">

                        <div className="promo-card">
                            Botox ลดสูงสุด 20%
                        </div>

                        <div className="promo-card">
                            Laser ฟรี Premium Mask
                        </div>

                        <div className="promo-card">
                            Filler แถมวิตามินผิว
                        </div>

                    </div>

                </div>

                <div className="glass p-6">

                    <h3 className="text-xl font-semibold text-[#8B6A35] mb-5">
                        ข้อมูลคลินิก
                    </h3>

                    <div className="space-y-3 text-gray-700">

                        <p>Class Clinic Korat</p>
                        <p>062-632-4533</p>
                        <p>LINE Official Account</p>
                        <p>09:00 - 20:00 น.</p>
                        <p>Free Parking Available</p>

                    </div>

                </div>

            </aside>

        </div>
    </div>

        {success && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                <div className="bg-white rounded-[32px] p-10 max-w-md w-full text-center shadow-2xl">

                    <h2 className="text-3xl font-semibold text-[#8B6A35] mb-4">
                        จองคิวเรียบร้อย
                    </h2>

                    <p className="text-gray-600 mb-8">
                        ทางคลินิกได้รับข้อมูลการนัดหมายของคุณแล้ว
                        เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันคิวอีกครั้ง
                    </p>

                    <button
                        onClick={() => setSuccess(false)}
                        className="px-8 py-3 rounded-xl bg-[#B8924F] hover:bg-[#A67D38] text-white transition"
                    >
                        ตกลง
                    </button>

                </div>

            </div>
        )}
    </main>

    );
}
