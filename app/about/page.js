import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🅿️</div>
          <h1 className="text-4xl font-bold mb-4">Автостоянка ParkSmart</h1>
          <p className="text-lg opacity-80 max-w-xl mx-auto">
            Охоронювана цілодобова стоянка в центрі міста — надійне місце для вашого автомобіля.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-14 space-y-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🏢 Про стоянку</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Автостоянка <strong>ParkSmart</strong> працює з 2015 року та є однією з найбільших охоронюваних стоянок міста.
            Ми пропонуємо зручне та безпечне паркування для легкових автомобілів, мікроавтобусів та мотоциклів.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Територія стоянки повністю огороджена, обладнана системою відеоспостереження та цілодобовою охороною.
            На в'їзді встановлено автоматичний шлагбаум із системою розпізнавання номерних знаків.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">📋 Основні показники</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "200", label: "Паркомісць", icon: "🚗" },
              { value: "24/7", label: "Режим роботи", icon: "🕐" },
              { value: "2015", label: "Рік заснування", icon: "📅" },
              { value: "8", label: "Камер відеонагляду", icon: "📹" },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">💳 Тарифи</h2>
          <div className="space-y-4">
            {[
              { type: "Погодинне паркування", price: "30 грн / година", icon: "⏱️" },
              { type: "Добовий абонемент", price: "150 грн / доба", icon: "📆" },
              { type: "Місячний абонемент", price: "1 800 грн / місяць", icon: "🗓️" },
              { type: "Мотоцикл / скутер", price: "15 грн / година", icon: "🏍️" },
            ].map((tariff) => (
              <div key={tariff.type} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tariff.icon}</span>
                  <span className="text-gray-700 font-medium">{tariff.type}</span>
                </div>
                <span className="text-yellow-600 font-bold">{tariff.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">✅ Інфраструктура</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Цілодобова охорона",
              "Система відеоспостереження",
              "Автоматичний шлагбаум",
              "Освітлення по всій території",
              "Розмічені паркомісця",
              "Місця для людей з інвалідністю",
              "Пожежна безпека",
              "Зона для мотоциклів",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-600">
                <span className="text-yellow-500 font-bold">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📍 Розташування та графік</h2>
          <div className="space-y-3 text-gray-600">
            <p>📍 <strong>Адреса:</strong> м. Київ, вул. Хрещатик, 22</p>
            <p>🕐 <strong>Графік роботи:</strong> Цілодобово, без вихідних</p>
            <p>📞 <strong>Телефон адміністратора:</strong> +38 (044) 123-45-67</p>
          </div>
        </div>
      </div>

      <div className="text-center pb-14">
        <Link
          href="/"
          className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
        >
          ← Повернутись на головну
        </Link>
      </div>
    </div>
  );
}