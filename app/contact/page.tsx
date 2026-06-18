import Image from "next/image";

export default function ContractPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] py-10">
      <div className="max-w-6xl mx-auto px-4">
       <div className="bg-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#EFEAE3] overflow-hidden">

          {/* Hero */}
          <div
  className="bg-gradient-to-r from-[#FFFFFF] via-[#F8F4EE] to-[#EFE2CF] p-16 text-center border-b border-[#E8DDD0]"
>
<h1
  className="
    text-6xl md:text-7xl
    font-semibold
    mb-5
    bg-gradient-to-r
    from-[#D9B978]  
    via-[#C9A660]
    to-[#A67D38]
    bg-clip-text
    text-transparent
    drop-shadow-[0_2px_8px_rgba(176,141,87,0.25)]
  "   
>
  Class Clinic Korat
</h1>

  <div className="w-24 h-[2px] bg-[#C9A876] mx-auto mt-6"></div>

  <p className="text-grey-500 text-lg">
    คลินิกความงามและดูแลสุขภาพ
  </p>
</div>

          {/* Contact */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-[#B8924F] tracking-wide mb-6">
              ข้อมูลติดต่อ
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#B8924F]">ชื่อคลินิก</p>
                  <p className="text-gray-600">
                    Class Clinic Korat
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#B8924F]">ที่อยู่</p>
                  <p className="text-gray-600">
                    403 ถนนมิตรภาพ
                    ตำบลในเมือง อำเภอเมืองนครราชสีมา
                    จังหวัดนครราชสีมา 30000
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#B8924F]">เบอร์โทรศัพท์</p>
                  <p className="text-gray-600">
                    062-632-4533
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#B8924F]">เวลาทำการ</p>
                  <p className="text-gray-600">
                    ทุกวัน 11:30 - 20:00 น.
                  </p>
                </div>

                
              </div>

              {/* Google Map */}
              <div>
                <iframe
                  src="https://www.google.com/maps?q=Class+Clinic+Korat&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  className="rounded-2xl border"
                />
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="px-8 pb-8">
           <h2 className="text-2xl font-semibold text-[#B8924F] tracking-wide mb-6">
              รูปภาพคลินิก
            </h2>
            
           <div className="grid md:grid-cols-3 gap-6">
  
  {/* รูปที่ 1 */}
  <div className="relative h-72 overflow-hidden rounded-3xl cursor-pointer bg-white
    transition-all duration-500
    hover:-translate-y-4
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]">

    <Image
      src="/image/Pic.jpg"
      alt="Clinic"
      fill
      className="object-cover transition-transform duration-500 hover:scale-110"
    />
  </div>

  {/* รูปที่ 2 */}
  <div className="relative h-72 overflow-hidden rounded-3xl cursor-pointer bg-white
    transition-all duration-500
    hover:-translate-y-4
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]">

    <Image
      src="/image/class.jpg"
      alt="Clinic"
      fill
      className="object-cover transition-transform duration-500 hover:scale-110"
    />
  </div>

  {/* รูปที่ 3 */}
  <div className="relative h-72 overflow-hidden rounded-3xl cursor-pointer bg-white
    transition-all duration-500
    hover:-translate-y-4
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]">

    <Image
      src="/image/mm.jpg"
      alt="Clinic"
      fill
      className="object-cover transition-transform duration-500 hover:scale-110"
    />
  </div>

</div>
          </div>

          {/* Contract */}
          <div className="border-t p-8">
            <h2 className="text-2xl font-semibold text-[#B8924F] mb-6">
              สัญญาการให้บริการ
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                1. ผู้รับบริการตกลงเข้ารับบริการตามเงื่อนไขของคลินิก
              </p>

              <p>
                2. คลินิกจะให้บริการโดยแพทย์และบุคลากรที่ได้รับอนุญาต
              </p>

              <p>
                3. ผลลัพธ์อาจแตกต่างกันในแต่ละบุคคล
              </p>

              <p>
                4. ผู้รับบริการยินยอมให้เก็บข้อมูลเพื่อการรักษา
              </p>
            </div>

           
          </div>

        </div>
      </div>
    </main>
  );
}