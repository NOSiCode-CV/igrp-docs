---
sidebar_position: 1
---

# API REST

A API REST é gerada automaticamente pelo Spring Engine, que utiliza TypeScript e Handlebars para a criação dinâmica de aplicações Spring. A estrutura da API é modular, permitindo a divisão em componentes independentes, o que facilita a manutenção e a adição de novas funcionalidades.

## Estrutura de Diretórios

- **\_\_test\_\_/**: Contém os testes unitários e de integração.
- **public/templates/**: Armazena os templates Handlebars usados para gerar os arquivos da aplicação.
- **src/**: Diretório principal com o código fonte da aplicação.
  - **src/interfaces/**: Define as interfaces e tipos usados no projeto.
  - **src/modules/**: Implementa os módulos principais da aplicação.
  - **src/utils/**: Contém funções utilitárias que suportam o funcionamento geral da aplicação.

## Módulo Base API

O módulo **Base API** é responsável por gerar a estrutura básica da aplicação, incluindo diretórios e arquivos fundamentais como `pom.xml`, `application.properties`, e `Dockerfile`. A função `newApi()` automatiza a criação de uma nova API, garantindo que o diretório de saída esteja vazio e que a configuração seja válida.

**Exemplo de criação da aplicação:**
```java
const apiConfig: ApiConfig = {
  type: 'baseApi',
  apiName: 'api-rest',
  group: 'Entity',
  artifact: plataform,
  description: 'API-TEST',
};