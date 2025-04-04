
export default function ResultCard({ data }) {
  return (
    <div className="mt-6 p-6 bg-gray-50 border rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">{data.title}</h3>
      <p><strong>Profit:</strong> {data.profit}</p>
      <p><strong>Risk Level:</strong> {data.risk}</p>
      <p><strong>Sourcing Tip:</strong> {data.sourcing}</p>
      <p><strong>ScoutBot Score:</strong> {data.score}/10</p>
    </div>
  );
}
