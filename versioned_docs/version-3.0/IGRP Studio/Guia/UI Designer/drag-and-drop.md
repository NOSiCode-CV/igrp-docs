---
sidebar_position: 3
---

# drag-and-drop

Os componentes utilizados no `igrp studio` permitem a construção visual de interfaces dinâmicas e funcionais. Eles possuem suporte a ações como **adicionar**, **editar**, **clonar**, **remover** e **mover**, além de configuração de **bindings** para integração lógica entre inputs e tabelas.

---

### 🔁 Ações Disponíveis nos Componentes

Cada componente da interface pode ser:

- 📝 **Editado** → Abre um _sidebar_ com abas de propriedades.
- ❌ **Removido**
- 📋 **Clonado**
- 🔀 **Movido** por _drag & drop_ entre diferentes componentes.

---

### ⚙️ Sidebar de Edição

Ao editar um componente, uma **sidebar lateral** é aberta com **três abas principais**:

1. **Props** – Propriedades específicas do componente
2. **Styles** – Configurações visuais (margens, fontes, cores etc.)
3. **Interaction** – Eventos e interações (onClick, onChange, etc.)

---

### 📥 Binding de Componentes

Bindings permitem a ligação de dados entre a interface e o backend.

| Tipo de Componente | Binding Disponível          | Finalidade                              |
|--------------------|-----------------------------|------------------------------------------|
| `form`             | `binding.config`            | Liga os campos de entrada com a lógica |
| `table`            | `binding.columns`           | Define como as colunas recebem dados   |

> 📌 O **binding** é essencial para que os inputs possam se comunicar com os objetos de configuração gerados em arquivos `.ts`.

---

### ➕ Adição de Componentes (Dropzones)

#### Dentro de Formulários, containar, section, etc
- Os componentes podem ser adicionados diretamente por _drag & drop_.

#### Dentro de Tabelas (`table`)
- Permite adicionar componentes a partir da tabela.
- O botão `Add Component` é exibido sobre a tabela, abrindo uma **popover** para seleção.
- Caso for adicionado um `Actions Column` é exibido sobre a columna um `Add Component`, abrindo uma **modal** para adicianr diversos components suportados.

---

### 📦 Tipos de Componentes Disponíveis para Drop

- Form Elements (`Text`, `Number`, `Date`, `Checkbox`,`Radio`)
- Basic Elements (`Dropdown`, `Separator`, `Card`,`Charts`)
- Structure (`Flex`, `Grid`, `Fragment`,`Container`)

---

### 🧪 Exemplo Visual – Fluxo de drag-and-drop

```mermaid
table LR
    A[Usuário drag-and-drop o componnet do  "Widget palete"]
    B[Por defeito é criado com dois children (table columns, table filters)]
    C[Ao fazer o hover um popover é exibida com tipos de componentes]
    D[Usuário seleciona um componente]
    E[Componente é adicionado na estrutura visual]
     F[Usuário edita via Sidebar (Props, Styles, Interaction)]

    A --> B --> C --> D --> E --> F

