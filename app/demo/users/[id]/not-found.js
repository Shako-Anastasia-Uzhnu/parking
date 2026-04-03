import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">👤</div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Користувача не знайдено</h2>
        <p className="text-gray-500 mb-8">Співробітника стоянки з таким ID не існує</p>
        <Link href="/demo/users/1" className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700">
          До користувача #1
        </Link>
      </div>
    </div>
  )
}