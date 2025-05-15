"use client";
type OrderProps = {
  id: number;
  items: { nameTH: string; qty: number }[];
  time: string;
};

export default function OrderCard({ order }: { order: OrderProps }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 font-prompt">
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg text-brand-purple">
          #{order.id.toString().padStart(3, "0")}
        </span>
        <span className="text-xs text-gray-400">{order.time}</span>
      </div>
      <ul className="mt-1 text-base">
        {order.items.map((item, idx) => (
          <li key={idx} className="flex gap-2">
            <span>• {item.nameTH}</span>
            {item.qty > 1 && (
              <span className="text-brand-purple font-semibold">
                x{item.qty}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
