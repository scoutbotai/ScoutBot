
import { useState } from 'react'
import ResultCard from './ResultCard'

export default function InputForm() {
  const [asin, setAsin] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    setTimeout(() => {
      setResult({
        title: 'Sample Product',
        profit: '$12.50',
        risk: 'Low',
        sourcing: 'Check Walmart or contact the brand directly.',
        score: 8.7,
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={asin}
          onChange={(e) => setAsin(e.target.value)}
          placeholder="Enter ASIN or Product Name"
          className="p-3 border border-gray-300 rounded-l w-2/3"
        />
        <button
          type="submit"
          className="p-3 bg-orange-500 text-white rounded-r hover:bg-orange-600"
        >
          Analyze
        </button>
      </form>
      {loading && <p>Analyzing product...</p>}
      {result && <ResultCard data={result} />}
    </>
  )
}
