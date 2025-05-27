---
sidebar_position: 1
---

# SPRING BOOT 

# Criar Aplicação Backend Spring Boot com IGRP Studio

Este guia apresenta um passo a passo para criar uma aplicação backend baseada em Spring Boot utilizando o ambiente de desenvolvimento **IGRP Studio**. O processo segue princípios de **Domain-Driven Design (DDD)** e **Clean Architecture**.


## Passo 1: Gerenciamento de Workspaces

O primeiro passo no IGRP Studio é criar e gerir os **workspaces**, que organizam os projetos de desenvolvimento.

![Interface de gestão de Workspaces](img/gerenciamento-workspaces.png)

### Funcionalidades:
- Visualizar, criar e pesquisar workspaces existentes
- Aceder às configurações

### Para criar um novo workspace:
- **Nome do workspace**
- **Slug** (identificador único)
- **Descrição**
- **Localização** no sistema de ficheiros

![Configuração do Projeto](img/criar-workspace.png)

## Passo 2: Criação e Configuração do Projeto

Com o workspace criado, o próximo passo é configurar um **novo projeto backend**.

![Configuração do Projeto](img/workspace-projecto.png)

### Etapas da configuração:
1. **Informações do Projeto**
   - Nome
   - Descrição
   - Tipo: `Backend`

![Configuração do Projeto](img/novo-projecto.png)

2. **Framework**
   - Selecionar `Spring Boot`

![Configuração do Projeto](img/novo-projecto-framework.png)

3. **Configuração Técnica**
   - Nome do projeto
   - Grupo (ex: `cv.igrp`)
   - Artefato
   - Versão do IGRP Core
   - Estrutura: `Domain-Driven Design (DDD)`
   - Base de dados: `PostgreSQL`
   - Opções adicionais:
     - Observabilidade
     - Revisão de entidades
     - Suporte a `GraalVM`

![Configuração do Projeto](img/novo-projecto-configure.png)
![Configuração do Projeto](img/novo-projecto-resume.png)

## Passo 3: Criação de Módulos

Organize a aplicação em **módulos**, de acordo com os domínios do negócio.

![Criação de módulo](img/novo-modelo.png)

### Para criar um módulo:
1. Clicar em `Novo Módulo`
2. Introduzir o nome (ex: `pessoa`)
3. Guardar o módulo

![Criação de módulo](img/novo-modelo-desc.png)

## Passo 4: Definição de DTOs (Data Transfer Objects)

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


## Passo 5: Definição de Endpoints e Ações

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


## Passo 9: Configuração do Banco de Dados

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


## Considerações Finais

A estrutura criada pelo IGRP Studio respeita os princípios de:
- **Domain-Driven Design (DDD)**
- **Clean Architecture**
- **Separação de responsabilidades**
- **Automação com boas práticas**

