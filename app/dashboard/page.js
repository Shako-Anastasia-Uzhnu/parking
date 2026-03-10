export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Огляд стоянки</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-bold">Всього місць</h3>
          <p className="text-4xl font-bold text-slate-800 mt-2">200</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-bold">Вільних місць</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">87</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-bold">Виручка сьогодні</h3>
          <p className="text-4xl font-bold text-yellow-600 mt-2">4 320 ₴</p>
        </div>
      </div>
    </div>
  );
}