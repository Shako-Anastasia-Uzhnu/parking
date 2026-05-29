import StatsCard from "@/components/StatsCard";
import { getSpotStats } from "@/lib/helpers";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const stats = await getSpotStats();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Огляд</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Всього паркомісць" value={stats.total} color="amber" />
        <StatsCard title="Вільні місця" value={stats.available} color="green" />
        <StatsCard title="Середня ціна" value={`${stats.avgPrice} грн`} color="blue" />
      </div>
    </div>
  )
}