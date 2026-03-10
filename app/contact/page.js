export const metadata = {
  title: "Контакти",
  description: "Зв'яжіться з автостоянкою ParkSmart",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Контакти</h1>
          <p className="text-lg opacity-90">Ми завжди раді вас бачити</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">📋 Наші контакти</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">📍</div>
                  <div>
                    <p className="font-semibold text-slate-800">Адреса</p>
                    <p className="text-gray-500">м. Київ, вул. Хрещатик, 22</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">📞</div>
                  <div>
                    <p className="font-semibold text-slate-800">Телефон</p>
                    <p className="text-gray-500">+38 (044) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">📧</div>
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <p className="text-gray-500">info@parksmart.ua</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                  <div>
                    <p className="font-semibold text-slate-800">Графік роботи</p>
                    <p className="text-gray-500">Цілодобово, без вихідних</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">✉️ Напишіть нам</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Ім'я</label>
                  <input
                    type="text"
                    disabled
                    placeholder="Ваше ім'я"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-400 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    disabled
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-400 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Повідомлення</label>
                  <textarea
                    disabled
                    rows="4"
                    placeholder="Ваше повідомлення..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-400 cursor-not-allowed resize-none"
                  />
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 text-yellow-700 text-sm">
                  🔧 Форма зворотного зв'язку буде активована пізніше.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}