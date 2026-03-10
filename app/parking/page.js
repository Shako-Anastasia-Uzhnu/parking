import ParkingFilter from "@/components/ParkingFilter";

export default function ParkingPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Паркінг</h1>
          <p className="text-lg opacity-90">Оберіть зручне місце для вашого автомобіля</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <ParkingFilter />
        </div>
      </section>
    </div>
  );
}