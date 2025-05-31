---
title: Components
sidebar_position: 5
---

# 🧱 Componentes

Este seçǎo apresenta todos os componentes disponíveis no `IGRP Studio`, incluindo:

- Componentes nativos (TextInput, Button, Card, etc.)
- Componentes customizados registrados pelo utilizador



## ✨ Como usar os componentes

Todos os componentes podem ser usados no modo visual (drag & drop), com personalização de propriedades via painel lateral, ou por código.

> 💡 Use a aba **Custom Code** para condicionar visibilidade, aplicar estados, e lidar com lógica dinâmica.



## 🧩 Componentes Nativos

> Esta seção será completada à medida que os componentes forem documentados individualmente.

### 🔤 `TextInput`

```tsx
<TextInput label="Nome" name="username" required />
```

# 🧩 Componentes Customizados

Componentes customizados permitem que você crie elementos reutilizáveis com lógica e estilo próprios, integrados ao sistema visual como qualquer outro componente nativo.

[Custom Code - Configuração](/IGRP%20Studio/Guia/UI%20Designer/custom-code#%EF%B8%8F-registro-de-configuração--igrpstudiots) para aprender como registar o seu component.



## ✅ Criar um Componente

Crie um novo componente no diretório `components/custom/`.

```tsx
// components/custom/MyCustomCard.tsx
export default function MyCustomCard({ title, content }) {
  return (
    <div className="rounded border p-4 shadow bg-white">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
```