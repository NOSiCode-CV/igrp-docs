---
sidebar_position: 4
---

# Roadmap

O IGRP Horizon busca modernizar a plataforma IGRP com uma abordagem baseada em micro serviços, escalabilidade, segurança e automação. A implementação será feita de forma incremental, dividida em etapas _"waves"_, com entregas planeadas e abertas à comunidade.

### 🎯 Principais Objetivos

- **Arquitetura baseada em micro serviços**: Modularização para escalabilidade e manutenção facilitada.
- **Containers e orquestração**: Uso de _Docker_ e _Kubernetes_ para implantação eficiente.
- **Integração contínua e entrega contínua (CI/CD)**: Automação do desenvolvimento.
- **Segurança**: Implementação de autenticação, autorização e criptografia.
- **Monitoramento e rastreamento**: Ferramentas para identificar problemas e otimizar desempenho.
- **Escalabilidade**: Suporte para cargas de trabalho dinâmicas.
- **Uso de _frameworks_ modernos**: Tecnologias como _Spring Boot_ para desenvolvimento atualizado.

### ⚙️ Metodologia
O desenvolvimento será incremental, com entregas rápodas (_quick wins_), dividido em _waves_ quinzenais. Uma nova versão _headless_ será criada paralelamente. O código será publicado gradualmente em repositórios públicos para colaboração.

### 📅 _Waves_

**_Wave 1 - SOLID Principles_**

- Melhorias na estrutura do código e modularização.
- Separação do IGRP Core do IGRP Studio.
- Publicação de pacotes no Maven Central e imagens no _Docker Hub_.
- Criação de um repositório de pacotes para e-Gov.

**_Wave 2 - REST API Integration_**

- Desenvolvimento orientado a serviços, com uso de APIs REST.
- Geração de código cliente para consumir APIs OpenAPI 3.0.
- Integração com o PDEX para descoberta de serviços públicos e privados.

**_Wave 3 - Microservices World_**

- Ferramentas para criar, gerenciar e versionar microserviços.
- Geração de código para as plataformas Java, .NET, Node.js e Python (experimental).
- Integração com Git e CI/CD.

**_Wave 4 - Headless World_**

- Transição completa para arquitetura _headless_.
- Suporte a interfaces multiplataforma (React, Vue, Angular, Python, .NET, Java).
- Publicação de repositórios open-source e imagens no _Docker Hub_.

### 🚀 Visão Futura

- **_Omni-channel_**: Uma plataforma única para o governo digital.
- **_Mobile First_**: Navegação otimizada para dispositivos móveis.
- **_API First_**: Integração via REST APIs para uma experiência ágil.
- **_Multi-Cloud_**: Suporte para implantação em nuvem pública, privada ou _on-premise_.
