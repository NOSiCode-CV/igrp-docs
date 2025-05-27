---
sidebar_position: 1
---

# Gestāo de Páginas

## Visão Geral

Interface central para gerenciamento de todas as páginas do projeto, permitindo criação, edição e organização.

![Preview da Lista de Páginas](../img/ui-list-pages.png)

## Funcionalidades

### 📝 Criar Nova Página

Para adicionar uma nova página à sua aplicação:

1. Clique em **"Criar Nova Página"** no topo da interface do Studio.

2. Preencha os campos do modal:

   - **Page Title**:  
     Um título amigável que será exibido no Studio, facilitando a identificação da página.

   - **Page Name**:  
     Corresponde ao nome do componente React gerado. Use nomes em formato `camelCase` ou `PascalCase`.

   - **Path** (obrigatório):  
     URL amigável da rota da página.  
     Sugerido usar o nome da página, mas o utilizador pode definir conforme preferir.  
     Exemplo:  
     - `/docs/[[...slug]]`  
     - `/(auth)/todo-list`

   - **Force Dynamic**:  
     Quando ativado, a página será processada totalmente no client-side.  
     Ideal para páginas que precisam responder dinamicamente a eventos, sem recarregar o servidor.

3. Clique em **"Save"** para confirmar a criação da nova página.


> ✅ A página será adicionada à estrutura do projeto e estará disponível para edição no page builder.


![Modal de criação de página](../img/ui-new-page.png)

### 📄 Adição de Componentes

Durante a edição de uma página no construtor visual, você pode:

1. **Adicionar novos componentes** através do menu lateral de componentes disponíveis.
2. **Arrastar e soltar** os componentes já adicionados para reorganizar a ordem na interface.
3. **Configurar cada componente** individualmente, clicando sobre ele para abrir a barra lateral com as abas:
   - **Props** (Propriedades)
   - **Styles** (Estilos)
   - **Interaction** (Interações)
4. Clicar em **"Save"** para salvar e publicar a estrutura da página no projeto.



### 🗑️ Eliminar Página

Para remover uma página do projeto:

- Clique na opção **"Delete"** no menu da página.
- A página será **permanentemente excluída** da aplicação.

> ⚠️ Esta ação não pode ser desfeita. Certifique-se de que deseja realmente excluir a página antes de confirmar.

