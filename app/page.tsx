import { Metadata } from "next";

export const metadata: Metadata = {
  title: "royrang กินอะไรดี | แนะนำเมนูอาหาร สุ่มเมนูเด็ด สร้างเมนูอร่อย",
  description:
    "ไม่รู้จะกินอะไร? ให้ royrang แนะนำเมนูอาหารเด็ดจากหลากหลายประเภท พร้อมระบบสุ่มเมนูและค้นหาร้านอาหารอร่อยใกล้คุณ ทั้งง่ายและอร่อยในคลิกเดียว!",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf8f3] font-sans text-[#3b2f2f]">
      <header className="bg-[#fffaf3] shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#9b6b3d]">🍜 royrang</h1>
          <nav className="space-x-4 text-sm text-[#6e5847]">
            <a href="#" className="hover:text-[#9b6b3d] transition">
              หน้าแรก
            </a>
            <a href="#" className="hover:text-[#9b6b3d] transition">
              สุ่มเมนู
            </a>
            <a href="#" className="hover:text-[#9b6b3d] transition">
              เมนูของฉัน
            </a>
            <a href="#" className="hover:text-[#9b6b3d] transition">
              ร้านใกล้ฉัน
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-10 px-4">
        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-[#7d5234]">
            ไม่รู้จะกินอะไรใช่ไหม?
          </h2>
          <p className="text-[#5f4632] text-lg">
            เราช่วยคุณเลือกเมนูอร่อยๆ ได้ทันที ทั้งเมนูจากใจ
            หรือสุ่มเมนูสุดสร้างสรรค์
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#9b6b3d] mb-2">
              🍽️ สุ่มเมนูอาหาร
            </h3>
            <p className="text-[#6e5847]">
              ให้เราช่วยเลือกเมนูจากหลายหมวดหมู่ ทั้งไทย ญี่ปุ่น เกาหลี
              อิตาเลียน และอีกมากมาย
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#9b6b3d] mb-2">
              👨‍🍳 สร้างเมนูเฉพาะคุณ
            </h3>
            <p className="text-[#6e5847]">
              เลือกวัตถุดิบ และสไตล์ที่คุณชอบ
              แล้วเราจะสร้างเมนูเฉพาะตัวให้คุณทันที
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#9b6b3d] mb-2">
              📍 ค้นหาร้านอาหารใกล้คุณ
            </h3>
            <p className="text-[#6e5847]">
              ระบบค้นหาร้านอาหารอัตโนมัติ พร้อมเมนูยอดฮิตและเส้นทางไปยังร้าน
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#9b6b3d] mb-2">
              🌟 เมนูแนะนำประจำวัน
            </h3>
            <p className="text-[#6e5847]">
              รวมเมนูเด็ดจากผู้ใช้งาน royrang ที่คุณห้ามพลาด!
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#fff6eb] text-center py-4 mt-10 text-sm text-[#9b6b3d]">
        © 2025 royrang — กินอะไรดี วันนี้เราเลือกให้คุณ
      </footer>
    </div>
  );
}
