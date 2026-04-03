import StatsCard from "@/components/StatsCard";
import { getParkingStats } from "@/lib/helpers";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const stats = getParkingStats()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Огляд стоянки</h1>
      <p className="text-gray-500 mb-6">Актуальна статистика паркомісць</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Всього місць" value={stats.total} color="slate" />
        <StatsCard title="Вільних місць" value={stats.available} color="green" />
        <StatsCard title="Зайнятих місць" value={stats.unavailable} color="red" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatsCard title="Категорій паркінгу" value={stats.categoriesCount} color="blue" />
        <StatsCard title="Середня ціна" value={`${stats.avgPrice} грн/год`} color="yellow" />
      </div>
    </div>
  )
}