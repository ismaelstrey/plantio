export interface Periodo {
    id: number;
    culturaId: number;
    mesInicio: number; // 1-12
    mesFim: number;    // 1-12
    observacoes: string;
    createdAt: string; // ou Date se for converter para objeto Date
    updatedAt: string; // ou Date se for converter para objeto Date
  }
  
  export interface Cultura {
    id: number;
    nome: string;
    tipo: string;
    descricao: string;
    createdAt: string; // ou Date
    updatedAt: string; // ou Date
    periodos: Periodo[];
  }

  
  export interface Poda {
    id: number;
    culturaId: number;
    mesInicio: number;
    mesFim: number;
    tipo: string;
    observacoes: string;
    createdAt: string;
    updatedAt: string;
    cultura: Cultura;
  }

