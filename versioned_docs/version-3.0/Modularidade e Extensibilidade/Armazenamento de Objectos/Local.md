---
sidebar_position: 3
---

# Local (extensão possível)

A integração com o sistema de ficheiros local pode ser útil em ambientes de desenvolvimento ou em instalações *on-premise*.

## Implementação

- Criar um `LocalStorageAdapter` que implemente a interface de armazenamento
- Operações baseadas em `java.nio.file` e `java.io`

## Properties

```properties
STORAGE_TYPE=local
LOCAL_STORAGE_PATH=/opt/igrpapp/storage
```
> Nota: Implementar um sistema de controlo de quotas ou validação de espaço disponível pode ser útil neste cenário.