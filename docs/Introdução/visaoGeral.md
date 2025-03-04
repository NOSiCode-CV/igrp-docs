---
sidebar_position: 1
---

# Visão Geral

O **IGRP** é uma plataforma web única e robusta que permite gerir aplicações de governação eletrónica em todas as suas etapas: concessão, 
desenvolvimento, disponibilização, monitoramento e auditoria.
Permite o desenvolvimento _low code to no code_ de aplicações web, num studio de desenvolvimento com forte capacidade de geração automática de códigos do IGRP Studio.
Ainda, oferece às empresas oportunidades únicas de poderem desenvolver números ilimitados de aplicativos com rapidez, qualidade e segurança.

### Principais Componentes:

#### 1. Microserviços

-   O IGRP foi migrado para uma arquitetura de microserviços utilizando _Spring Boot_.
-   Os serviços são independentes e podem ser escalados separadamente.
-   Inclui módulos como Gestor de Utilizadores (autenticação via _Keycloak_) e Gestor de Aplicações (criação e gestão de apps no IGRP).

#### 2. Interface do Utilizador

-   Baseada em **React** e **Next.js**, proporcionando uma experiência rápida e dinâmica.
-   Totalmente desacoplada do _backend_, permitindo alterações na interface sem afetar a lógica dos serviços.

#### 3. IGRP Studio

-   Aplicação _desktop_ independente para criação de APIs e aplicações web.
-   Oferece uma abordagem _low-code_, com suporte para _drag and drop_.
-   Geração automática de código para APIs (_Spring Boot_) e aplicações web (Next.js).

#### 4. Infraestrutura

-   O IGRP roda em Kubernetes, garantindo segurança, escalabilidade e alta disponibilidade.
-   Possui monitorização com **Grafana** e **OpenTelemetry** e mecanismos de segurança como _Trivy_ e _Keycloak_.

#### 5. Automação

-   Infraestrutura como código via **_Helm Charts_** e **ArgoCD** para facilitar a implantação.
-   Suporte para CI/CD (Integração e Entrega Contínuas) nas aplicações geradas.

#### 6. Licença

O projeto está licenciado sob a licença Apache 2.0 – consulte o ficheiro [Licença](../Docs%20Referência/LICENSE.txt) para mais detalhes.

### Benefícios para um utilizador básico:

✅ **Facilidade de utilização**: Interface intuitiva para gerir utilizadores e aplicações.

✅ **Flexibilidade**: Possibilidade de personalizar aplicações sem precisar de grandes mudanças no sistema.

✅ **Segurança integrada**: Controle de acessos e autenticação via _Keycloak_.

✅ **Escalabilidade**: Projetado para crescer de acordo com as necessidades do utilizador.
    
