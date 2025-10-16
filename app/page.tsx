export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
        Welcome to AUEVENT Online Registration
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl">
        ระบบลงทะเบียนอัตโนมัติ เพื่อการจัดการงานอีเวนต์อย่างมีประสิทธิภาพ  
        เชื่อมต่อข้อมูลได้รวดเร็ว ปลอดภัย และใช้งานง่าย  
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          ลงทะเบียนเข้าร่วมงาน
        </a>
        <a
          href="#"
          className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition"
        >
          ดูรายละเอียดเพิ่มเติม
        </a>
      </div>
    </main>
  );
}
