import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET(  request: NextRequest, { params }: { params: Promise<{ busca: string }> }) {
  const {busca} = await params;
console.log(busca)
const searchParams = request.nextUrl.searchParams;
const mes = searchParams.get("mes")?.trim()|| undefined;
const tipo = searchParams.get("tipo") || undefined;
const filtros: any = {};
if (mes) filtros.mes = mes;
if (tipo) filtros.tipo = tipo;
  const numeroMesAtual = new Date().getMonth() + 1; // O mês começa em 0, então adicionamos 1

  const hortalicias = await prisma.cultura.findMany({
    where: {
      tipo,
      periodos: {
        some: {
          mesInicio: {
            lte: Number(mes) ||numeroMesAtual,
          }
        },
      },
    },include: {
      periodos: true,

    
    }
  });
  return NextResponse.json(hortalicias);
}