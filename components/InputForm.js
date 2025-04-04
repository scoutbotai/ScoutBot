
import { useState } from 'react';
import ResultCard from './ResultCard';

export default function InputForm() {
  const [asin, setAsin] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        title: 'Sample Product',
        profit: '$12.50',
        risk: 'Low',
        sourcing: 'Check Walmart or contact the brand directly.',
        score: 8.7,
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={asin}
          onChange={(e) => setAsin(e.target.value)}
          placeholder="Enter ASIN or Product Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Analyze
        </button>
      </form>
      {loading && <p className="mt-4 text-sm text-gray-500">Analyzing product...</p>}
      {result && <ResultCard data={result} />}
    </div>
  );
}
