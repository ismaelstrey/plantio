import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';



export async function GET(  request: NextRequest) {


const searchParams = request.nextUrl.searchParams;
const mes = await searchParams.get("mes")?.trim()|| undefined;
const tipo = searchParams.get("tipo") || undefined;
const filtros: any = {};
if (mes) filtros.mes = mes;
if (tipo) filtros.tipo = tipo;
  const numeroMesAtual = new Date().getMonth() + 1; // O mês começa em 0, então adicionamos 1
  const mesInicio = mes ? Number(mes) : numeroMesAtual

console.log("Mesatual",numeroMesAtual)
console.log("Inicio",mesInicio)


  const hortalicias = await prisma.cultura.findMany({
    where: {
      tipo,
      periodos: {
        some: {
          mesInicio
        },
      },
    },include: {
      periodos: true,

    
    }
  });
  return NextResponse.json(hortalicias);
}