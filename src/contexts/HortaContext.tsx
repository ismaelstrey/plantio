'use client';

import { Cultura } from '@/types/HortaIA';
import {  useSearchParams } from 'next/navigation';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface PlantaData  extends Cultura{
  
}

interface HortaContextData {
  dataHorta: PlantaData[];
  loading: boolean;
  error: string | null;
}

const HortaContext = createContext<HortaContextData>({} as HortaContextData);

export function HortaProvider({ children }: { children: ReactNode }) {
  const [dataHorta, setDataHorta] = useState<PlantaData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const param = useSearchParams()
  const mesBusca = param.get('mes')
const [mes,setMes] = useState<string | null>(mesBusca)
 

  console.log()

  useEffect(() => {
    async function fetchHortaData() {
      try {
        // TODO: Substituir URL pela sua API real
        const response = await fetch(`/api/horta/${mes ? `${mes}`: ''}`);
        if (!response.ok) throw new Error('Falha ao carregar dados');
        const data = await response.json();
        setDataHorta(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar dados');
      } finally {
        setLoading(false);
      }
    }
    console.log(mes)
   fetchHortaData();
   setMes(mesBusca)

  }, [mes,mesBusca]);

//   console.log(dataHorta) // Adicione esta linha para debugar a variáve

  return (
    <HortaContext.Provider value={{ dataHorta, loading, error }}>
      {children}
    </HortaContext.Provider>
  );
}

export function useHorta() {
  const context = useContext(HortaContext);
  if (!context) {
    throw new Error('useHorta deve ser usado dentro de um HortaProvider');
  }
  return context;
}