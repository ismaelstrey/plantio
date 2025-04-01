import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET(  request: NextRequest, { params }: { params: Promise<{ busca: string }> }) {
  const {busca} = await params;
console.log(busca)
  // Simula um delay para demonstrar o loading state
  await new Promise(resolve => setTimeout(resolve, 500));

  const numeroMesAtual = new Date().getMonth() + 1; // O mês começa em 0, então adicionamos 1

  // console.log(numeroMesAtual);

  const hortalicias = await prisma.cultura.findMany({
    where: {
      periodos: {
        some: {
          mesInicio: {
            lte: Number(busca) ||numeroMesAtual,
          }
        },
      },
    },include: {
      periodos: true,

    
    }
  });
  return NextResponse.json(hortalicias);
}