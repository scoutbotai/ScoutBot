
export default function ResultCard({ data }) {
  return (
    <div className="bg-white shadow-md rounded p-6 max-w-xl">
      <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
      <p><strong>Profit:</strong> {data.profit}</p>
      <p><strong>Risk Level:</strong> {data.risk}</p>
      <p><strong>Sourcing Tip:</strong> {data.sourcing}</p>
      <p><strong>ScoutBot Score:</strong> {data.score}/10</p>
    </div>
  )
}
