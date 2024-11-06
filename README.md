# React TypeScript Blog

Este é um projeto de blog frontend construído com **React**, **TypeScript** e **Vite**. O frontend consome uma API do **Strapi** hospedada em outro repositório no GitHub. O objetivo deste projeto é criar uma interface de blog simples e funcional, permitindo a exibição de postagens, navegação entre artigos e integração com a API do Strapi para gerenciamento de conteúdo.

## Tecnologias utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build super rápida para desenvolvimento com React e TypeScript.
- **React Router**: Biblioteca para navegação entre páginas do blog.
- **Tailwind CSS**: Framework de CSS para estilização responsiva e flexível.
- **Axios**: Cliente HTTP para fazer requisições à API do Strapi.
- **MSW** (Mock Service Worker): Para mockar respostas da API durante os testes (caso necessário).

## Funcionalidades

- Exibição de uma lista de postagens.
- Visualização de detalhes de cada postagem.
- Navegação entre páginas usando React Router.
- Integração com a API do Strapi para exibir os dados do blog.

## Como rodar localmente

Para rodar este projeto em seu ambiente local, siga os passos abaixo:

### 1. Clonar o repositório


Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/react-ts-blog.git
cd react-ts-blog
```

### 2. Instalar as dependências

npm install

### 3. Variáveis de ambiente

VITE_STRAPI_API_URL=https://sua-api-strapi-url.com

### 4. Rodar o projeto

npm run dev

O projeto estará disponível em http://localhost:5173
