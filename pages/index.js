
import InputForm from '../components/InputForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-slate-800 font-sans">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">ScoutBot</h1>
        <div>
          <button className="text-sm text-orange-500 hover:underline mr-4">Login</button>
          <button className="text-sm bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600">Sign Up</button>
        </div>
      </header>
      <main className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Analyze an Amazon Product</h2>
        <InputForm />
      </main>
    </div>
  );
}
