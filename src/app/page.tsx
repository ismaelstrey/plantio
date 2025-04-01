
import { Main } from '@/components/Main';
import { Meses } from '@/components/Meses';


export default function Home() {




  return (
    <main className="min-h-screen p-8 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Calendário de Plantio - Igrejinha/RS</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
    <Meses/>
            <Main/>    
        </div>
      </div>
    </main>
  );
}