import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Busca todos os períodos de plantio
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const culturaId = searchParams.get('culturaId');

    // Se fornecido culturaId, filtra por cultura específica
    const periodos = await prisma.periodoPlantio.findMany({
      where: culturaId ? { culturaId: Number(culturaId) } : undefined,
      include: {
        cultura: true,
      },
    });

    return NextResponse.json(periodos);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar períodos de plantio' },
      { status: 500 }
    );
  }
}

// POST: Cria um novo período de plantio
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validação básica dos dados
    if (!data.culturaId || !data.mesInicio || !data.mesFim) {
      return NextResponse.json(
        { error: 'Dados incompletos' },
        { status: 400 }
      );
    }

    // Validação dos meses (1-12)
    if (data.mesInicio < 1 || data.mesInicio > 12 || data.mesFim < 1 || data.mesFim > 12) {
      return NextResponse.json(
        { error: 'Meses devem estar entre 1 e 12' },
        { status: 400 }
      );
    }

    const novoPeriodo = await prisma.periodoPlantio.create({
      data: {
        culturaId: Number(data.culturaId),
        mesInicio: data.mesInicio,
        mesFim: data.mesFim,
        observacoes: data.observacoes,
      },
      include: {
        cultura: true,
      },
    });

    return NextResponse.json(novoPeriodo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao criar período de plantio' },
      { status: 500 }
    );
  }
}

// PUT: Atualiza um período de plantio existente
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) {
      return NextResponse.json(
        { error: 'ID não fornecido' },
        { status: 400 }
      );
    }

    // Validação dos meses (1-12)
    if (updateData.mesInicio && (updateData.mesInicio < 1 || updateData.mesInicio > 12)) {
      return NextResponse.json(
        { error: 'Mês de início deve estar entre 1 e 12' },
        { status: 400 }
      );
    }

    if (updateData.mesFim && (updateData.mesFim < 1 || updateData.mesFim > 12)) {
      return NextResponse.json(
        { error: 'Mês de fim deve estar entre 1 e 12' },
        { status: 400 }
      );
    }

    const periodoAtualizado = await prisma.periodoPlantio.update({
      where: { id: Number(id) },
      data: updateData,
      include: {
        cultura: true,
      },
    });

    return NextResponse.json(periodoAtualizado);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao atualizar período de plantio' },
      { status: 500 }
    );
  }
}

// DELETE: Remove um período de plantio
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID não fornecido' },
        { status: 400 }
      );
    }

    await prisma.periodoPlantio.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: 'Período de plantio removido com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao remover período de plantio' },
      { status: 500 }
    );
  }
}