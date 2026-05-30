'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false, 
      })

      if (result?.error) {
        setError('Невірний email або пароль')
        setIsLoading(false)
        return
      }

      router.push('/dashboard')
      router.refresh()
    } catch {
      setError('Щось пішло не так')
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
        <div className="text-center mb-6">
          <span className="text-4xl mb-2 inline-block">🅿️</span>
          <h1 className="text-2xl font-bold text-gray-900">Вхід у ParkSmart</h1>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Email 
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded text-gray-900 bg-white transition focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              placeholder="driver@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded text-gray-900 bg-white transition focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-slate-950 text-white py-2.5 rounded font-bold hover:bg-slate-800 transition disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? 'Вхід...' : 'Увійти'}
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-gray-600">
        Немає акаунту?{' '}
          <Link href="/auth/register" className="text-blue-600 font-medium hover:underline">
            Зареєструватися
          </Link>
        </p>
      </div>
    </div>
  )
}