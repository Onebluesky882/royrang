import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Royrang กินอะไรดี - ไอเดียอาหารที่คุณต้องลอง</title>
      <meta
        name="description"
        content="ค้นหาไอเดียเมนูอาหาร หรือสุ่มเมนูที่น่ากิน สำหรับคนไม่รู้จะกินอะไรดี กับ Royrang เว็บกินอะไรดี"
      />
      <meta property="og:title" content="Royrang กินอะไรดี" />
      <meta
        property="og:description"
        content="ไอเดียเมนูอาหารมากมาย พร้อมฟีเจอร์สุ่มเมนูและร้านอาหารใกล้คุณ"
      />
      <meta
        property="og:image"
        content="https://royrang.vercel.app/og-image.jpg"
      />
      <meta property="og:url" content="https://royrang.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
