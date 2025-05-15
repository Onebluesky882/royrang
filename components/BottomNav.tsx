"use client";
import { ShoppingCart, Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navs = [
  {
    to: "/menu",
    title: "เมนูอาหาร",
    icon: <MenuIcon size={24} />,
  },
  {
    to: "/queue",
    title: "คิวออเดอร์",
    icon: <ShoppingCart size={24} />,
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-10 flex justify-around px-2 py-1 md:hidden">
      {navs.map((item) => (
        <Link
          key={item.to}
          href={item.to}
          className={`flex flex-col items-center justify-center px-3 py-2 rounded transition-all ${
            pathname === item.to
              ? "text-brand-purple font-semibold"
              : "text-gray-500"
          } hover:bg-gray-100`}
        >
          {item.icon}
          <span className="text-xs mt-1">{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
