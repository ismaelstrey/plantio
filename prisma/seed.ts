const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const hortalicas = [
  { nome: 'Alface', descricao: 'Vegetal folhoso adaptado ao clima da Serra Gaúcha' },
  { nome: 'Repolho', descricao: 'Resistente ao frio, ideal para o inverno da região' },
  { nome: 'Cenoura', descricao: 'Raiz que se desenvolve bem em solos bem drenados' },
  { nome: 'Beterraba', descricao: 'Raiz resistente ao frio' },
  { nome: 'Couve', descricao: 'Folhosa resistente ao clima frio' },
  { nome: 'Brócolis', descricao: 'Desenvolve-se bem no clima da região' },
  { nome: 'Rabanete', descricao: 'Ciclo curto, ideal para entressafra' },
  { nome: 'Rúcula', descricao: 'Folhosa que tolera bem o clima local' },
  { nome: 'Espinafre', descricao: 'Ótimo desenvolvimento no inverno' },
  { nome: 'Acelga', descricao: 'Adaptada ao clima subtropical' }
];

const frutiferas = [
  { nome: 'Bergamota', descricao: 'Cítrico tradicional da região Sul' },
  { nome: 'Laranja', descricao: 'Adaptada ao clima subtropical úmido' },
  { nome: 'Pêssego', descricao: 'Frutífera que requer horas de frio' },
  { nome: 'Ameixa', descricao: 'Boa produção no clima local' },
  { nome: 'Figo', descricao: 'Tradicional da região' },
  { nome: 'Caqui', descricao: 'Bem adaptado ao clima' },
  { nome: 'Uva', descricao: 'Cultivar adaptada à região' },
  { nome: 'Maçã', descricao: 'Requer horas de frio para produção' },
  { nome: 'Pera', descricao: 'Variedades adaptadas ao clima local' },
  { nome: 'Mirtilo', descricao: 'Produção em expansão na região' }
];

async function main() {
  // Criar hortaliças
  for (const hortalica of hortalicas) {
    const cultura = await prisma.cultura.create({
      data: {
        ...hortalica,
        tipo: 'hortalica'
      }
    });

    // Períodos de plantio para hortaliças (5 períodos por cultura)
    const periodos = [
      { mesInicio: 2, mesFim: 4, observacoes: 'Plantio de outono' },
      { mesInicio: 5, mesFim: 7, observacoes: 'Plantio de inverno' },
      { mesInicio: 8, mesFim: 10, observacoes: 'Plantio de primavera' },
      { mesInicio: 11, mesFim: 1, observacoes: 'Plantio de verão' },
      { mesInicio: 3, mesFim: 5, observacoes: 'Plantio intermediário' }
    ];

    for (const periodo of periodos) {
      await prisma.periodoPlantio.create({
        data: {
          culturaId: cultura.id,
          ...periodo
        }
      });
    }
  }

  // Criar frutíferas
  for (const frutifera of frutiferas) {
    const cultura = await prisma.cultura.create({
      data: {
        ...frutifera,
        tipo: 'frutifera'
      }
    });

    // Períodos de plantio para frutíferas (5 períodos por cultura)
    const periodos = [
      { mesInicio: 5, mesFim: 7, observacoes: 'Plantio principal' },
      { mesInicio: 7, mesFim: 9, observacoes: 'Plantio tardio' },
      { mesInicio: 3, mesFim: 5, observacoes: 'Plantio antecipado' },
      { mesInicio: 6, mesFim: 8, observacoes: 'Plantio de inverno' },
      { mesInicio: 4, mesFim: 6, observacoes: 'Plantio intermediário' }
    ];

    for (const periodo of periodos) {
      await prisma.periodoPlantio.create({
        data: {
          culturaId: cultura.id,
          ...periodo
        }
      });
    }

    // Podas para frutíferas (5 podas por cultura)
    const podas = [
      { mesInicio: 6, mesFim: 8, tipo: 'Poda de inverno', observacoes: 'Poda drástica no período de dormência' },
      { mesInicio: 9, mesFim: 11, tipo: 'Poda de primavera', observacoes: 'Poda de formação' },
      { mesInicio: 12, mesFim: 2, tipo: 'Poda de verão', observacoes: 'Poda de limpeza' },
      { mesInicio: 3, mesFim: 5, tipo: 'Poda de outono', observacoes: 'Poda de manutenção' },
      { mesInicio: 7, mesFim: 9, tipo: 'Poda de condução', observacoes: 'Poda para controle de crescimento' }
    ];

    for (const poda of podas) {
      await prisma.poda.create({
        data: {
          culturaId: cultura.id,
          ...poda
        }
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });