import { NextResponse } from 'next/server';
import { Type } from '@/components/Main/Section';

export async function GET() {
  // Simula um delay para demonstrar o loading state
  await new Promise(resolve => setTimeout(resolve, 500));

  const data = [
    {
      title: 'Hortaliças para Plantar',
      tipo: Type.HORTALICAS,
      children: 'Alface, Cenoura, Beterraba, Rúcula, Couve'
    },
    {
      title: 'Frutíferas para Plantar',
      tipo: Type.FRUTIFERAS,
      children: 'Laranjeira, Limoeiro, Macieira, Pessegueiro'
    },
    {
      title: 'Época de Poda',
      tipo: Type.PODA,
      children: 'Poda de formação em árvores jovens, poda de limpeza em árvores adultas'
    }
  ];

  return NextResponse.json(data);
}