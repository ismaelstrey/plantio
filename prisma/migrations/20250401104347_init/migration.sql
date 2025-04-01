-- CreateTable
CREATE TABLE "Cultura" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PeriodoPlantio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "culturaId" INTEGER NOT NULL,
    "mesInicio" INTEGER NOT NULL,
    "mesFim" INTEGER NOT NULL,
    "observacoes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PeriodoPlantio_culturaId_fkey" FOREIGN KEY ("culturaId") REFERENCES "Cultura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Poda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "culturaId" INTEGER NOT NULL,
    "mesInicio" INTEGER NOT NULL,
    "mesFim" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "observacoes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Poda_culturaId_fkey" FOREIGN KEY ("culturaId") REFERENCES "Cultura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
