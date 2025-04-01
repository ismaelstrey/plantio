'use client';
import { Main } from '@/components/Main';
import { useState } from 'react';

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];



  return (
    <main className="min-h-screen p-8 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Calendário de Plantio - Igrejinha/RS</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-6 gap-4 mb-6">
            {months.map((month, index) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(index + 1)}
                className={`p-3 rounded-lg text-center transition-colors ${selectedMonth === index + 1
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
              >
                {month}
              </button>
            ))}
          </div>        
            <Main/>    
        </div>
      </div>
    </main>
  );
}