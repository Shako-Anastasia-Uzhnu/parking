'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewSpotPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Нове місце:", formData);
    router.push("/dashboard/spots");
  };

  return (
    <div>
      <Link href="/dashboard/spots" className="text-slate-700 hover:underline mb-4 inline-block">
        ← Назад до списку
      </Link>

      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Додати нове місце</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Назва *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Наприклад: Місце C1"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Категорія *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-yellow-500"
              >
                <option value="">Оберіть категорію</option>
                <option value="Легкові">Легкові</option>
                <option value="Преміум">Преміум</option>
                <option value="Мото">Мото</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Ціна (грн/год) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="Наприклад: 30"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-yellow-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Опис</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Опис паркомісця..."
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-yellow-400 text-slate-900 px-6 py-3 rounded hover:bg-yellow-300 font-bold"
            >
              Створити
            </button>
            <Link
              href="/dashboard/spots"
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded hover:bg-gray-300 font-bold inline-block"
            >
              Скасувати
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}