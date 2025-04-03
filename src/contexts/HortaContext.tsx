'use client';

import { Cultura } from '@/types/HortaIA';
import axios from 'axios';
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
  const tipoBusca = param.get('tipo')
const [mes,setMes] = useState<string | null>(mesBusca)
const [tipo,setTipo] = useState<string | null>(tipoBusca)
  useEffect(() => {
    async function fetchHortaData() {
      try {  
        // const response = await fetch(`/api/horta/busca/${mes ? `${mes}`:''}${tipo ? `&${tipo}`:''}`);
        // if (!response.ok) throw new Error('Falha ao carregar dados');
        // const data = await response.json();

        const buscaHotas = axios({
          method: 'get',
          url: `/api/horta/busca`,
          headers: {
            'Content-Type': 'application/json',
          },
          params:{
            mes,
            tipo
          }
        })
        setDataHorta((await buscaHotas).data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar dados');
      } finally {
        setLoading(false);
      }
    }
    console.log(mes)
    console.log(tipo)
   fetchHortaData();
   setMes(mesBusca)
   setTipo(tipoBusca)

  }, [mes,mesBusca,tipoBusca]);

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