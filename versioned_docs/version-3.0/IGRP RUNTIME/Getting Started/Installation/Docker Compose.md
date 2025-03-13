---
sidebar_position: 1
---

# Docker Compose

 ### Instalação do Docker Desktop e  Docker Compose

 - **Windows**
    - Para obter informações detalhadas sobre a instalação do Docker Compose no Windows,, consulte a [documentação oficial do Docker Compose](https://docs.docker.com/desktop/setup/install/windows-install/). Este guia fornece as instruções completas para instalar e configurar o Docker Compose em sistemas Windows.
 - **MacOS**:
     - Para obter informações detalhadas sobre a instalação do Docker Compose no MacOS, consulte a [documentação oficial do Docker Compose](  https://docs.docker.com/desktop/setup/install/mac-install/). Este guia fornece as instruções completas para instalar e configurar o Docker Compose em sistemas baseados no MacOS.

 - **Linux**:
    - Para obter informações detalhadas sobre a instalação do Docker Compose no Linux, consulte a [documentação oficial do Docker Compose](https://docs.docker.com/compose/install/linux/). Este guia fornece as instruções completas para instalar e configurar o Docker Compose em sistemas baseados no Linux.

  - Verificar a instalação  do docker e docker compose
``` 
docker --version
```
```
docker-compose --version 
```

### Configuração do Docker Compose

Para configurar o **Docker Compose** para o seu ambiente, siga os passos abaixo.

1. **Crie o arquivo `docker-compose.yml`:**
   
   No diretório raiz do seu projeto, crie um arquivo chamado `docker-compose.yml`. O arquivo deve conter as definições para os serviços que você deseja rodar, como Keycloak, PostgreSQL, MinIO, APIs, etc.

   Estrutura Básica do arquivo `docker-compose.yml`:

   ```yaml
   version: "3.8"
   services:
     keycloak:
       image: jboss/keycloak:latest
       ports:
         - "8080:8080"
       environment:
         - KEYCLOAK_USER=admin
         - KEYCLOAK_PASSWORD=admin

     postgres:
       image: postgres:latest
       environment:
         - POSTGRES_USER=admin
         - POSTGRES_PASSWORD=admin
         - POSTGRES_DB= db-name
       ports:
         - "5432:5432"

     minio:
       image: minio/minio:latest
       environment:
         - MINIO_ACCESS_KEY=admin
         - MINIO_SECRET_KEY=admin
       ports:
         - "9000:9000"
       command: server /data

     app-manager-api:
       image: app-manager-api:latest
       ports:
         - "8082:8082"
     user-management-api:
       image: user-management-api:latest
       ports:
         - "8081:8081"

     igrp-ui:
       image: igrp-ui:latest
       ports:
         - "3000:3000"
### Configuração de Hosts Locais
Antes de iniciar os contêineres, é necessário especificar os nomes de host na sua máquina local para que o DNS local os resolva, caso contrário, para poder usá-los. Isso pode ser feito modificando o arquivo hosts na sua máquina, **este processo pode variar dependendo do sistema operacional:**.

Deve proceder a configuração da entradas abaixo para mapear os domínios para o endereço `127.0.0.1` (localhost), permitindo que o acesso os serviços locais pelos nomes fornecidos.

````127.0.0.1 keycloak
127.0.0.1 igrp-ui
127.0.0.1 user-management-api
127.0.0.1 app-manager-api
127.0.0.1 minio 
````

- **Windows**:
    - No sistema operativo Windows adicione as seguintes entradas ao seu arquivo de hosts navegue até  `C:\Windows\System32\drivers\etc\hosts` para os  dominios locais.

Mais detalhes para diferentes versões consulte :[Configuração de Hosts Locais Windows](https://docs.rackspace.com/docs/modify-your-hosts-file#windows)´

- **MacOS/Apple**:
    - No sistema operativo da MacOS/Apple adicione as seguintes entradas ao seu arquivo de hosts em `/etc/hosts`  para os  dominios locais. No seu computador, selecione Aplicativos > Utilitários > Terminal para abrir uma janela do Terminal ````sudo nano /private/etc/hosts````.

Mais detalhes para diferentes versões MacOS consulte:[Configuração de Hosts Locais MacOS/Apple](https://docs.rackspace.com/docs/modify-your-hosts-file#macos-x-versions-100-through-1012)

- **Linux**:
    - Para o sistema operativo Linux adicione as seguintes entradas ao seu arquivo de hosts em `/etc/hosts` para os  dominios locais. Abra uma janela do Terminal e digite o seguinte comando para abrir o arquivo hosts em um editor de texto ````sudo nano /etc/hosts ````

Mais detalhes para diferentes versões consulte: [Configuração de Hosts Locais Linux](https://docs.rackspace.com/docs/modify-your-hosts-file#linux)

### Pré-requisitos

1. **Somente para Windows:** Instale o WSL para usar comandos Linux dentro do Windows.
2. Instale o Docker e o Docker Compose na sua máquina.

### Iniciar o Ambiente

Execute o seguinte comando para iniciar os containers. No caso de usuários do **Windows**, é recomendado usar o terminal WSL:

 - Iniciar os containers com Docker Compose:

  ````
  docker-compose up
  ````
-  Recriar os containers com Docker Compose `docker-compose.yml`:

````
docker-compose up --force-recreate
````
- Verificar se os containers estão em execução
````
docker-compose logs
````

### Verificar Serviços em Execução 
 - Garantir que todos os serviços estejam funcionando:
   - Keycloak
   - APIs 
   - PostgreSQL
   - MinIO

```` 
docker ps
````
### Acessar Keycloak e APIs

- Acesse o **Keycloak** em [http://keycloak:8080](http://keycloak:8080)
- **API de Gerenciamento de Usuários** em [http://user-management-api:8081](http://user-management-api:8081)
- **API do Gerenciador de Aplicativos** em [http://app-manager-api:8082](http://app-manager-api:8082)
- Abra a **Interface de Usuário** em [http://igrp-ui:3000](http://igrp-ui:3000)




