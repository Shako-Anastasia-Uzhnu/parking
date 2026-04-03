import { Suspense } from 'react'
import { PostSkeleton, StatSkeleton } from '@/components/skeletons/PostSkeleton'

async function FastStats() {
  await new Promise(resolve => setTimeout(resolve, 500))
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-500 text-sm">Всього місць</h3>
        <p className="text-3xl font-bold text-slate-800">200</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-500 text-sm">Вільних місць</h3>
        <p className="text-3xl font-bold text-green-600">87</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-500 text-sm">Виручка сьогодні</h3>
        <p className="text-3xl font-bold text-yellow-600">4 320 ₴</p>
      </div>
    </div>
  )
}

async function SlowPosts() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  const posts = await response.json()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-800">Останні події на стоянці (3 сек)</h2>
      {posts.map(post => (
        <article key={post.id} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-2 text-slate-800">{post.title}</h3>
          <p className="text-gray-600">{post.body}</p>
        </article>
      ))}
    </div>
  )
}

export default function StreamingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-slate-800">Streaming Demo</h1>
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-blue-800">Швидка статистика стоянки з'явиться через 0.5 сек, повільні події через 3 сек. Контент стрімиться поступово!</p>
      </div>

      <Suspense fallback={
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatSkeleton />
          <StatSkeleton />
          <StatSkeleton />
        </div>
      }>
        <FastStats />
      </Suspense>

      <Suspense fallback={
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-64 animate-pulse mb-4"></div>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      }>
        <SlowPosts />
      </Suspense>
    </div>
  )
}