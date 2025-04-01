import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Busca todas as podas
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const culturaId = searchParams.get('culturaId');

    // Se fornecido culturaId, filtra por cultura específica
    const podas = await prisma.poda.findMany({
      where: culturaId ? { culturaId: Number(culturaId) } : undefined,
      include: {
        cultura: true,
      },
    });

    return NextResponse.json(podas);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar podas' },
      { status: 500 }
    );
  }
}

// POST: Cria uma nova poda
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validação básica dos dados
    if (!data.culturaId || !data.mesInicio || !data.mesFim || !data.tipo) {
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

    const novaPoda = await prisma.poda.create({
      data: {
        culturaId: Number(data.culturaId),
        mesInicio: data.mesInicio,
        mesFim: data.mesFim,
        tipo: data.tipo,
        observacoes: data.observacoes,
      },
      include: {
        cultura: true,
      },
    });

    return NextResponse.json(novaPoda, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao criar poda' },
      { status: 500 }
    );
  }
}

// PUT: Atualiza uma poda existente
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

    const podaAtualizada = await prisma.poda.update({
      where: { id: Number(id) },
      data: updateData,
      include: {
        cultura: true,
      },
    });

    return NextResponse.json(podaAtualizada);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao atualizar poda' },
      { status: 500 }
    );
  }
}

// DELETE: Remove uma poda
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

    await prisma.poda.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: 'Poda removida com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao remover poda' },
      { status: 500 }
    );
  }
}