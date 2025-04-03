---
sidebar_position: 1
---

# MinIO (implementado por defeito)

## Arquitetura

## Adapter dedicado
Implementado especificamente para MinIO

## Integração
Utilização da API oficial MinIO (compatível com S3)

## Funções principais
- Criação de buckets  
- Upload e download de ficheiros  
- Listagem e eliminação de objetos  
- Gestão de "pastas" lógicas (via prefixos)


## Considerações Técnicas

- A comunicação com o MinIO é realizada via API REST ou SDK (ex: `minio-java`)
- A autenticação e configuração (`endpoint`, credenciais, `bucket`) devem ser definidas em ficheiros `.env` ou `application.properties`

### Exemplo de configuração (`.env` ou `application.properties`)

```properties
STORAGE_TYPE=minio
MINIO_ENDPOINT=http://minio:9000
MINIO_ACCESS_KEY=admin
MINIO_SECRET_KEY=password
```

## Boas Práticas
- **Consistência de Interface**: Todos os adapters devem seguir a mesma assinatura de métodos, garantindo que o código principal não precisa de saber qual o provedor em uso.
- **Abstração via Configuração**: A seleção do adapter deve ser feita dinamicamente via variável de ambiente (`STORAGE_TYPE`).
- **Gestão de Erros**: Os adapters devem lançar exceções claras em caso de falha (ex: ficheiro inexistente, falha de autenticação).
- **Estrutura de pastas lógicas**: Usa prefixos nos nomes dos objetos para simular pastas e manter organização nos buckets.
