---
sidebar_position: 5
---

# Designer de Modelos

O Projecto Spring permite a criação e configuração de modelos, CRUDs, controladores e DTOs de forma automatizada. Abaixo, detalhamos cada componente:


## Criação de Módulos

Organize a aplicação em **módulos**, de acordo com os domínios do negócio.

![Criação de módulo](img/novo-modelo.png)

### Para criar um módulo:
1. Clicar em `Novo Módulo`
2. Introduzir o nome (ex: `pessoa`)
3. Guardar o módulo

![Criação de módulo](img/novo-modelo-desc.png)

## Definição de DTOs (Data Transfer Objects)

Crie os **DTOs** responsáveis por transportar dados entre as camadas da aplicação.
![Criação de módulo](img/novo-dto.png

### Exemplo:
- DTO: `PessoaRequest`
- Campos:
  - `nome` (string)
  - `idade` (string)
  - `nif` (string)

![Criação de módulo](img/novo-dto-desc.png)


### Configurar validações:
- `Required`, `Email`, `MinLength`, `MaxLength`, entre outros

![Definição de DTO](img/novo-dto-propriedade.png)


## Definição de Endpoints e Ações

Configure os **endpoints REST** e associe as respetivas ações.

### Exemplo:
- Endpoint: `Pessoa`
  - Base path: `/pessoas`
  - Ações:
    - `criarPessoa` (POST)
    - `obterPessoaPorId` (GET)

![Definição de Endpoints](img/novo-endpoint.png)


### Configurações para cada ação:
- Método HTTP (`GET`, `POST`, ...)
- Parâmetros e corpo da requisição
- Tipo de conteúdo: `application/json`
- Esquema de resposta

![Definição de Endpoints](img/novo-endpoint-desc.png)


## Implementação Automática

O IGRP Studio gera automaticamente:

- **Controladores** com base nos endpoints definidos
- Implementações de **Commands e Queries** seguindo o padrão **CQRS**:
  - `Command` para criar pessoa
  - `Query` para obter pessoa
  - Handlers correspondentes

![Código gerado: Controladores](img/implementacao-controlador-code.png)
![Código gerado: Commands e Queries](img/implementacao-controlador-code.png)


## Modelagem de Entidades

Crie o **modelo de domínio** através de schemas.

### Exemplo: Entidade `Pessoa`
- Campos:
  - `id` (integer, chave primária)
  - `nome` (string)
  - `idade` (string)
  - `nif` (string)
- Configurações:
  - Nome da tabela
  - Auditoria
  - Revisão

O IGRP Studio gera automaticamente:
- Classe da entidade
- Repositórios JPA

![Modelagem de Entidades](img/implementa-controlador-code_cria-pessoa.png)


## Configuração do Banco de Dados

As configurações da base de dados são definidas em ficheiros de propriedades.

### Ficheiros principais:
- `application-development.properties`
- `.env` com variáveis de ambiente

![Configuração da BD](img/env.png)


## Módulo Shared

O projeto inclui um módulo especial: `shared`, criado automaticamente.

### Função:
Contém **código reutilizável**, comum a vários domínios (ex: utilitários, constantes, exceções).

![Representação do Módulo Shared](img/shared-studio.png)

## Eliminar
Descrição: Permite remover qualquer recurso anteriormente criado (endpoint, modelo, DTO, etc.).

> **Importante**: Garantir que não há dependências ativas antes da remoção.

![Remoção de modelo de pedido](img/remover-demo-modelo-pedido.png)


## Considerações Finais
A estrutura criada pelo IGRP Studio respeita os princípios de:
- **Domain-Driven Design (DDD)**
- **Clean Architecture**
- **Separação de responsabilidades**
- **Automação com boas práticas**