---
sidebar_position: 1
---

# Instalação

## Configuração do Ambiente Local

### Modificar o Arquivo Hosts

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
- Instale o Docker e o Docker Compose na sua máquina.

## Iniciar o Ambiente

Execute o seguinte comando para iniciar os contêineres:

```bash
docker-compose up --force-recreate
```

**Nota:** No Windows, recomenda-se utilizar o terminal WSL.

## Verificar Serviços em Execução

Verifique se todos os serviços (Keycloak, APIs, PostgreSQL, MinIO) estão em execução:

```bash
docker ps
```

## Acessar ao Provedor de Identidade/Acesso e Serviços

- **Autenticação e Autorização:** [http://keycloak:8080](http://keycloak:8080)
- **Serviço de Gestão de Utilizador:** [http://user-management-api:8081](http://user-management-api:8081)
- **Serviço de Gestão de Aplicação:** [http://app-manager-api:8082](http://app-manager-api:8082)
- **IGRP UI:** [http://igrp-ui:3000](http://igrp-ui:3000)
