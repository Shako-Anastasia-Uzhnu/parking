import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero секція */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🅿️</div>
          <h1 className="text-5xl font-bold mb-4">
            ParkSmart
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Розумна система управління автостоянкою — зручний облік місць, клієнтів та оплати в режимі реального часу.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition text-lg">
              Розпочати роботу
            </button>
            <Link
              href="/about"
              className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition text-lg"
            >
              Про нас
            </Link>
          </div>
        </div>
      </section>
    
      <section className="bg-slate-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-yellow-400">200+</p>
              <p className="text-gray-300 mt-1">Паркомісць</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-400">24/7</p>
              <p className="text-gray-300 mt-1">Режим роботи</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-400">1500+</p>
              <p className="text-gray-300 mt-1">Клієнтів</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Можливості системи
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

           
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-yellow-400">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Карта паркінгу в реальному часі</h3>
              <p className="text-gray-600">
                Візуальна карта стоянки з відображенням вільних та зайнятих місць. Оновлюється автоматично при кожному заїзді або виїзді.
              </p>
            </div>

            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-yellow-400">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Автоматичний розрахунок оплати</h3>
              <p className="text-gray-600">
                Система автоматично розраховує вартість паркування на основі часу перебування. Підтримка різних тарифів та абонементів.
              </p>
            </div>

            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-yellow-400">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Звітність та аналітика</h3>
              <p className="text-gray-600">
                Детальні звіти про завантаженість стоянки, доходи та статистику по клієнтах. Допомагає приймати обґрунтовані рішення.
              </p>
            </div>

            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-slate-700">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Облік транспортних засобів</h3>
              <p className="text-gray-600">
                База даних автомобілів клієнтів з номерними знаками. Швидкий пошук та ідентифікація транспорту на в'їзді.
              </p>
            </div>

          
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-slate-700">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Сповіщення та нагадування</h3>
              <p className="text-gray-600">
                Автоматичні сповіщення клієнтам про закінчення часу паркування або абонементу. SMS та email-нотифікації.
              </p>
            </div>

            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-slate-700">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Безпека та контроль доступу</h3>
              <p className="text-gray-600">
                Управління шлагбаумами, відеоспостереження та журнал всіх подій на стоянці. Захист майна клієнтів.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Готові автоматизувати вашу стоянку?</h2>
          <p className="text-slate-700 text-lg mb-8">
            Почніть використовувати ParkSmart вже сьогодні — просто та зручно.
          </p>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition text-lg">
            Спробувати безкоштовно
          </button>
        </div>
      </section>

      
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 ParkSmart | Курс "Основи обробки та передачі інформації"
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Шако Анастасія, 3 курс
          </p>
        </div>
      </footer>

    </div>
  )
}