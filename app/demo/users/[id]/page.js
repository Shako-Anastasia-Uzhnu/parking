import { notFound } from 'next/navigation'

const users = {
  '1': { id: 1, name: 'Олексій Ткаченко', role: 'Адміністратор' },
  '2': { id: 2, name: 'Марія Коваль', role: 'Оператор' },
  '3': { id: 3, name: 'Дмитро Савченко', role: 'Охоронець' },
}

export default async function UserPage({ params }) {
  const { id } = await params
  const user = users[id]

  if (!user) notFound()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{user.name}</h1>
        <p className="text-gray-500">Роль: <strong>{user.role}</strong></p>
        <p className="text-gray-400 text-sm mt-1">ID: {user.id}</p>
      </div>
    </div>
  )
}