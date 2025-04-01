'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Meses (){
    const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const router = useRouter();
    const handleMonthChange = (month: number) => {
      setSelectedMonth(month);
      router.push(`/?mes=${month}`);
    };
    return(
        <div className="grid grid-cols-6 gap-4 mb-6">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => handleMonthChange(index + 1)}
            className={`p-3 rounded-lg text-center transition-colors ${selectedMonth === index + 1
              ? 'bg-green-600 text-white'
              : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
          >
            {month}
          </button>
        ))}
      </div>    
    )
}