import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Busca todas as culturas
export async function GET() {
  try {
    // Busca todas as culturas no banco de dados
    const culturas = await prisma.cultura.findMany({
      include: {
        periodos: true,
        podas: true,
      },
    });

    // Retorna as culturas encontradas
    return NextResponse.json(culturas);
  } catch (error) {
    // Em caso de erro, retorna status 500 e mensagem de erro
    return NextResponse.json(
      { error: 'Erro ao buscar culturas' },
      { status: 500 }
    );
  }
}

// POST: Cria uma nova cultura
export async function POST(request: Request) {
  try {
    // Extrai os dados do corpo da requisição
    const data = await request.json();

    // Cria uma nova cultura no banco de dados
    const novaCultura = await prisma.cultura.create({
      data: {
        nome: data.nome,
        tipo: data.tipo,
        descricao: data.descricao,
      },
    });

    // Retorna a cultura criada
    return NextResponse.json(novaCultura, { status: 201 });
  } catch (error) {
    // Em caso de erro, retorna status 500 e mensagem de erro
    return NextResponse.json(
      { error: 'Erro ao criar cultura' },
      { status: 500 }
    );
  }
}

// PUT: Atualiza uma cultura existente
export async function PUT(request: Request) {
  try {
    // Extrai os dados do corpo da requisição
    const data = await request.json();
    const { id, ...updateData } = data;

    // Atualiza a cultura no banco de dados
    const culturaAtualizada = await prisma.cultura.update({
      where: { id: Number(id) },
      data: updateData,
    });

    // Retorna a cultura atualizada
    return NextResponse.json(culturaAtualizada);
  } catch (error) {
    // Em caso de erro, retorna status 500 e mensagem de erro
    return NextResponse.json(
      { error: 'Erro ao atualizar cultura' },
      { status: 500 }
    );
  }
}

// DELETE: Remove uma cultura
export async function DELETE(request: Request) {
  try {
    // Extrai o ID da URL
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID não fornecido' },
        { status: 400 }
      );
    }

    // Remove a cultura do banco de dados
    await prisma.cultura.delete({
      where: { id: Number(id) },
    });

    // Retorna sucesso
    return NextResponse.json(
      { message: 'Cultura removida com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    // Em caso de erro, retorna status 500 e mensagem de erro
    return NextResponse.json(
      { error: 'Erro ao remover cultura' },
      { status: 500 }
    );
  }
}