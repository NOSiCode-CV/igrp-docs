---
sidebar_position: 9
---

# Testes

Os testes são essenciais para garantir o funcionamento correto da aplicação. O Spring Engine inclui testes para verificar a criação de APIs, modelos, controladores e funcionalidades CRUD. Estes testes garantem que o sistema funciona corretamente em várias circunstâncias e cumpre os requisitos estabelecidos.

## 1. Criar um Novo Modelo
Verificar que o sistema consegue gerar corretamente um novo modelo a partir de uma configuração válida.

**Processo:**
- É fornecido um ficheiro de configuração de modelo (`ModelConfig`) com um nome e um conjunto de atributos.
  - A função de geração de modelos é executada.
  - É validado que o ficheiro do modelo é corretamente gerado no diretório esperado com o conteúdo apropriado.

**Resultado Esperado:**
O modelo é criado com sucesso na API, e todos os atributos especificados são refletidos no ficheiro gerado.

## 2. Adicionar Operações CRUD
Garantir que o sistema consegue adicionar operações CRUD a um modelo existente.

**Processo:**
- É utilizado um modelo previamente gerado como base.
- A funcionalidade para adicionar operações CRUD é executada, gerando um repositório associado ao modelo.
- É validado que o repositório inclui os métodos CRUD solicitados e é guardado no local apropriado.

**Resultado Esperado:**
Um repositório que estende `CrudRepository` é criado, contendo todos os métodos CRUD necessários, e é corretamente armazenado no sistema.

## 3. Adicionar Relações Entre Modelos
Validar que o sistema consegue estabelecer relações entre diferentes modelos existentes.

**Processo:**
- São criados vários modelos que representam diferentes entidades.
- A configuração de um modelo é atualizada para incluir relações (`@OneToOne`, `@OneToMany`, `@ManyToMany`) com outros modelos.
- O modelo é gerado novamente com as relações incluídas.
- É verificado que as relações são corretamente refletidas no código gerado.

**Resultado Esperado:**
As relações entre modelos são configuradas e refletidas apropriadamente no código gerado, cumprindo as expectativas de design.

## 4. Controladores
Verificam se os controladores estão gerando os endpoints corretamente e se as respostas estão de acordo como esperado.

- **Criação de um Novo Controlador:**
Testar que o controlador é gerado corretamente a partir do contexto fornecido e que o ficheiro resultante é guardado no local esperado.

- **Geração da Interface de Serviço:**
Verificar que a interface de serviço é criada corretamente com os métodos declarados e é guardada no diretório especificado.

- **Guardar o Ficheiro de Configuração:**
Garantir que o ficheiro de configuração do controlador é guardado no diretório `.studio/controllers`, validando que a configuração está correta e completa.