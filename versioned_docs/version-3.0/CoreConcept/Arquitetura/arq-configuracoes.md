---
sidebar_position: 3
---

#  Configurações  padrão

Nossa framework é altamente configurável e permite personalizar a arquitetura conforme necessário.

## Plataforma IGRP Docker Compose

### Configuração de Hosts Locais
Antes de iniciar os contêineres, é necessário especificar os nomes de host na sua máquina local para que o DNS local os resolva, caso contrário, você não poderá usá-los. Isso pode ser feito modificando o arquivo hosts na sua máquina, que varia dependendo do SO.
Adicione as seguintes entradas ao seu arquivo de hosts em `/etc/hosts` se for no Linux ou `C:\Windows\System32\drivers\etc\hosts` no Windows para configurar os domínios locais:

Essas entradas irão mapear os domínios para o endereço `127.0.0.1` (localhost), permitindo que o acesso os serviços locais pelos nomes fornecidos.

````127.0.0.1 keycloak
127.0.0.1 igrp-ui
127.0.0.1 user-management-api
127.0.0.1 app-manager-api
127.0.0.1 minio 
````

### Configuração do Keycloak

### Configuração MinIO

### Configuração do App Manager

### Configuração do servidor de e-mail 

### Configuração de frontend IGRP

### Configuração do App Manager

### Configuração de gerenciamento de usuários



