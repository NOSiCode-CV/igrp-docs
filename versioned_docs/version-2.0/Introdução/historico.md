---
sidebar_position: 3
---

# Histórico

Apresentação da evolução da plataforma, desde as versões iniciais até o IGRP 3.0, destacando os principais marcos, melhorias tecnológicas e avanços em termos de funcionalidades e desempenho.

### 🛫 Lançamento Inicial
O IGRP foi inicialmente desenvolvido como uma plataforma robusta para a gestão de aplicações de governação eletrónica em Cabo Verde.

### 🔓 _Open Source_ 
Recentemente, o IGRP foi transformado em uma plataforma open source, permitindo que empresas públicas e privadas, tanto nacionais quanto internacionais, utilizem a plataforma para desenvolver soluções digitais.

### 🖧 Arquitetura baseada em Micro Serviços 
o IGRP possuía inicialmente uma arquitetura monolítica, o que limitava sua flexibilidade e escalabilidade. A nova versão do IGRP agora possui uma arquitetura baseada em micro serviços, tornando-a numa plataforma _full stack_, interoperável e escalável.

### 📣 Novo _Brand_
Durante o <a href="https://nosi.cv/pt/web/guest/w/nosi-25-anos-nosi-apresenta-o-novo-igrp-framework-open-source-e-gratuito-para-desenvolvimento-de-solu%C3%A7%C3%B5es">evento de comemoração dos 25 anos da NOSi</a>, foi apresentada a mais recente versão do IGRP, destacando as melhorias e a nova marca da plataforma.


# Quadro Comparativo das Versões do IGRP

| Característica               | IGRP vO | igrp**web** v1 | IGRP Horizon v2 ([GA](https://en.m.wikipedia.org/wiki/Software_release_life_cycle)) | iGRP New Horizon v3 (Alpha) |
|----------------------------|---------|------------|----------------|------------------|
| **Front-end** | BootStrap + jQuery (xml/xsl) | BootStrap + jQuery (xml/xsl) | BootStrap + jQuery (xml/xsl) | React; no futuro... Vue, Angular... |
| **Back-end** | Weblogic + base de dados Oracle | Tomee / Hibernate | Tomee / Hibernate | (API) - Spring, .NET, no futuro... Django... |
| **Linguagem Backend** | Oracle PL SQL | Java EE > 8 | Java EE / Jakarta > 17 | TypeScript, Java, C#... (depende da escolha para o projeto ) |
| **Tratamento de Instâncias** | Instância única e código dentro da base de dados | Multi-War (salto dependente da plataforma de Identidade "Autentika") | Multi-instância direta | Microserviços |
| **Logos** | ![IGRP v0 Logo](https://nosiappssta.gov.cv/images/IGRP/IGRP2.3/themes/default/img/logo2.svg) | ![IGRPWeb v1 Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRte-wSJcVn2kyHKZD9cuY5oJ7q3r5FtRvQDUn0um6AVyE4NTOocboQwzGvXj8r3Ft5QmU&usqp=CAU) | ![IGRP Horizon v2 Logo](https://igrp.cv/_next/image?url=https%3A%2F%2Fstorage-api.nosi.cv%2Fcms-portal-igrp%2FLOGO_default_01_7ac2b9de62.webp&w=640&q=75) | ![IGRP New Horizon v3 Logo](https://igrp.cv/_next/image?url=https%3A%2F%2Fstorage-api.nosi.cv%2Fcms-portal-igrp%2FLOGO_default_01_7ac2b9de62.webp&w=640&q=75) |
| **Geradores** | 2.1 (descritivo); 2.3 (visual - Bootstrap e jQuery 3) | 2.3 (visual - Bootstrap e jQuery 3) | 2.3 (visual); 2.4 (design system com Bootstrap atualizado) | 3 (UI modular); 3 (API modular) |
