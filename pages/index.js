import InputForm from '../components/InputForm';
import ResultCard from '../components/ResultCard';
import ProfitCalculator from '../components/ProfitCalculator';
import ReportHistory from '../components/ReportHistory';
import AIChatAssistant from '../components/AIChatAssistant';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">ScoutBot Dashboard</h1>
      <InputForm />
      <ResultCard />
      <ProfitCalculator />
      <ReportHistory />
      <AIChatAssistant />
    </main>
  )
}