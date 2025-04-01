<div align="center">

# 🌱 HORTA - Sistema de Gerenciamento de Plantio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)

<p align="center">
  <img src="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/dark-theme/info.svg" alt="Info"/>
  Sistema moderno para gerenciamento e organização de plantio
</p>

</div>

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Começando](#-começando)
- [Estrutura do Banco de Dados](#-estrutura-do-banco-de-dados)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

## 🌿 Sobre o Projeto

O HORTA é um sistema de gerenciamento de plantio desenvolvido com tecnologias modernas para auxiliar no controle e organização de cultivos. Com uma interface intuitiva e recursos poderosos, o sistema permite o acompanhamento detalhado de suas plantações.

## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework React para produção
- **Prisma** - ORM moderno para banco de dados
- **Tailwind CSS** - Framework CSS utilitário
- **TypeScript** - Superset JavaScript com tipagem
- **SQLite** - Banco de dados relacional

## ✨ Funcionalidades

- 📱 Interface responsiva e moderna
- 🗃️ Gerenciamento de cultivos
- 📊 Acompanhamento de crescimento
- 🌡️ Monitoramento de condições
- 📅 Calendário de plantio
- 📝 Registro de atividades

## 🏁 Começando

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/horta.git

# Entre no diretório
cd horta

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute as migrações do banco de dados
npx prisma migrate dev

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🗄️ Estrutura do Banco de Dados

```mermaid
erDiagram
    PLANTA ||--o{ PLANTIO : possui
    PLANTIO ||--o{ ATIVIDADE : registra
    PLANTA {
        string nome
        string especie
        int tempoColheita
        string instrucoes
    }
    PLANTIO {
        date dataPlantio
        string localizacao
        string status
    }
    ATIVIDADE {
        date data
        string tipo
        string descricao
    }
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Por favor, leia o guia de contribuição antes de submeter alterações.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📬 Contato

Se você tiver alguma dúvida sobre este projeto, sinta-se à vontade para entrar em contato:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)

---

<div align="center">
Feito com 💚 pela equipe HORTA
</div>
