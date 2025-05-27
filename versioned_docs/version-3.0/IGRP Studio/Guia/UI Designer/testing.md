---
id: executar-projeto
title: Executar Projeto Gerado com Next.js
sidebar_position: 5
---

## ▶️ Executar e Testar Projeto Gerado com Next.js

Após construir sua página usando o **IGRP Studio**, você poderá executar o projeto localmente em ambiente Next.js.

---

### 📁 Estrutura do Projeto Gerado

Ao finalizar no Page Builder, o projeto exportado terá a seguinte estrutura típica:

```
src/
└── app/
    └── (generated)/
        ├── page.tsx
        ├── components/
    └── (myapp)/
        ├── types/
        └── functions/
```

Essa estrutura segue o padrão de aplicações Next.js com suporte a rotas e carregamento automático de componentes.

---

### 🧰 Requisitos

- **Node.js** 18+ recomendado
- **pnpm**, **npm** ou **yarn**

---

### 🚀 Executar em Ambiente de Desenvolvimento

1. Acesse a pasta raiz do projeto:

```bash
cd seu-projeto-gerado
```

2. Instale as dependências:

```bash
pnpm install
# ou
npm install
# ou
yarn install
```

3. Execute o servidor local:

```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

4. Abra no navegador:

```
http://localhost:3000
```
Em Caso de pre-visualizar uma pagina especifica acrescenta a esse endereço a `path` definida na sua criaçāo.

```
http://localhost:3000/listadecontribuintes
```
---

### ✅ O que Verificar

- A interface criada deve ser exibida corretamente.
- Ações como botões, inputs e formulários devem funcionar conforme esperado.
- Verifique se as funções definidas no `igrp.studio.ts` (por exemplo em `functions/`) estão integradas corretamente.

---

### 📝 Observação

Essa etapa finaliza o ciclo de geração visual com execução real.  
Você pode agora ajustar, estender e integrar novas funcionalidades à interface criada.
