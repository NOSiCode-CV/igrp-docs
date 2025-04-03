---
sidebar_position: 2
---
# Segurança 

O IGRP oferece uma política de segurança própria, assegurando que as melhores práticas sejam seguidas de forma individual em cada microserviço. Além disso, a comunicação entre os microserviços é protegida, utilizando criptografia e autenticação para garantir a integridade e a confidencialidade dos dados.

## Política de Segurança

Para garantir a segurança dos nossos sistemas, adotamos as seguintes práticas:

- **Autenticação**: Utilizamos **OAuth2** para autenticação entre microserviços.
- **Segurança de API Gateway**: O API Gateway valida e verifica os tokens de autenticação.
- **Encriptação**: A comunicação entre microserviços é sempre encriptada com HTTPS.
- **Proteção contra Ataques**:A comunicação entre microserviços é protegida por criptografia **TLS/SSL**.


## Relatando uma vulnerabilidade

Por favor, **NÃO** registre um problema público para relatar uma vulnerabilidade de segurança. Em vez disso, envie seu relatório de forma privada para *igrpweb@nosi.cv*. Assim, podemos garantir que a vulnerabilidade seja compartilhada de maneira responsável com as partes afetadas. 
Agradecemos pela colaboração!
