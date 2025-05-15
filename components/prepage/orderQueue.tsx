import BottomNav from "../Footer";
import OrderCard from "../OrderCard";

// Placeholder orders
const orders = [
  {
    id: 101,
    items: [
      { nameTH: "ผัดไทย", qty: 1 },
      { nameTH: "ข้าวผัด", qty: 2 },
    ],
    time: "12:01",
  },
  {
    id: 102,
    items: [{ nameTH: "เบอร์เกอร์", qty: 1 }],
    time: "12:05",
  },
  {
    id: 103,
    items: [
      { nameTH: "ข้าวมันไก่", qty: 1 },
      { nameTH: "ผัดไทย", qty: 1 },
    ],
    time: "12:10",
  },
];

export default function OrderQueue() {
  return (
    <div className="min-h-screen bg-brand-gray pt-6 pb-20 px-3 font-prompt">
      <h1 className="text-2xl font-bold text-brand-purple mb-0">คิวออเดอร์</h1>
      <div className="text-base text-gray-500 mb-2">Order Queue</div>
      <p className="text-sm text-gray-600 mb-4">
        แสดงรายการอาหารตามลำดับการสั่ง (FIFO)
        <br />
        <span className="text-xs text-gray-400">
          Orders shown in first-in-first-out order
        </span>
      </p>
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
      <BottomNav />
    </div>
  );
}
