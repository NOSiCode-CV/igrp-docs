---
sidebar_position: 1
---

# Instalação

Este guia fornece instruções rápidas para configurar e executar o ambiente de testes do **IGRP Horizon** usando **Docker Compose**. O ambiente inclui **Serviço de Gestão de Utilizadores**, **Serviço de Gestão de Aplicações**, **Serviço de Autenticação e Autorização** e **Serviço de Armazenamento de Objectos**.


## Configuração do ficheiro Hosts

Adicione as seguintes entradas ao arquivo hosts do seu sistema:

```plaintext
127.0.0.1 keycloak
127.0.0.1 igrp-ui
127.0.0.1 user-management-api
127.0.0.1 app-manager-api
127.0.0.1 minio
```

- **MacOS/Apple:** Modificar o arquivo hosts no MacOS
- **Windows:** Modificar o arquivo hosts no Windows
- **Linux:** Modificar o arquivo hosts no Linux

## Instalar Pré-requisitos

- **Windows:** Instale o WSL para utilizar comandos Linux no Windows.
- **Software Necessário:** Instale o **Docker**  com o plugin **Docker Compose** na sua máquina.
- **Memória**: 8GB RAM
- **Processador**: 12th Gen Intel Core i5


## Repositório
**Clonar o repositório do projeto:**
```bash
	https://github.com/NOSiCode-CV/igrp-platform-docker-compose
```

## Iniciar o Ambiente

Execute o seguinte comando para iniciar os contêineres:
> **Nota:** Certifique-se de que o Docker e o plugin Compose estão instalados antes de executar os comandos.
```bash
docker-compose up --force-recreate
```
ou 

```bash
docker compose up --force-recreate
```

## Verificar Serviços em Execução

Verifique se todos os serviços (Keycloak, APIs, PostgreSQL, MinIO) estão em execução:

```bash
docker ps
```
## Acesso aos Serviços
- **Autenticação e Autorização**: `http://keycloak:8080`
- **Armazenamento de Objectos**: `http://minio:9000`
- **Serviço de Gestão de Utilizadores**: `http://user-management-api:8081`
- **Serviço de Gestão de Aplicações**: `http://app-manager-api:8082`
- **IGRP UI**: `http://igrp-ui:3000`