import { StatSkeleton } from '@/components/skeletons/PostSkeleton'

export default function Loading() {
  return (
    <div>
      <div className="h-10 bg-gray-200 rounded w-48 mb-2 animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded w-64 mb-6 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatSkeleton />
        <StatSkeleton />
        <StatSkeleton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatSkeleton />
        <StatSkeleton />
      </div>
    </div>
  )
}