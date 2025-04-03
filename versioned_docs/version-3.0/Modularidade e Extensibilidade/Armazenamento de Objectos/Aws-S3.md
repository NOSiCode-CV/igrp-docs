---
sidebar_position: 2
---

# AWS S3 (extensão possível)

Para integrar o armazenamento com o Amazon S3, deverás:

- Criar uma nova classe `AwsS3Adapter`
- Implementar a interface de armazenamento definida pela plataforma
- Utilizar o SDK oficial da AWS (`aws-java-sdk-s3`)
- Configurar as credenciais de acesso e o nome do bucket

## Pontos Técnicos Importantes

- A AWS usa **regiões** (ex: `us-east-1`), certifica-te de que o bucket e as credenciais estão configurados para a região correta.
- O SDK da AWS suporta **criptografia**, **versionamento** e **políticas IAM** – funcionalidades úteis a considerar.

## `properties`

```properties
STORAGE_TYPE=aws
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=us-east-1
AWS_BUCKET_NAME=IGRP-storage
```
>💡 Dica: Usa políticas restritivas no IAM da AWS para limitar o acesso aos recursos S3 apenas à aplicação.