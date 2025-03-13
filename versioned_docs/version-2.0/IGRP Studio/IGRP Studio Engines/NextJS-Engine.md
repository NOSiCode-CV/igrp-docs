---
sidebar_position: 1
---

# NextJS Engine 

O **NextJS Engine** gera projetos **Next.js**, incluindo páginas, layouts e componentes. A sua estrutura modular permite que os programadores se concentrem na lógica de negócio dentro das **Service Classes**, enquanto o **IGRP Studio** automatiza o restante código.  

A ferramenta utiliza uma **biblioteca de componentes**, assegurando o desacoplamento entre o **engine** e os componentes. A integração com o **IGRP Studio** ocorre por meio da configuração gerada pelo **Studio**, que orienta a criação e edição de projetos. O **engine** lê os ficheiros de configuração para obter o estado da aplicação.  
 

## 1. Conceito  

O Gerador de Aplicações NextJS automatiza a criação de aplicações NextJS, utilizando TypeScript para a lógica do **engine** e Handlebars para modelagem de código. A sua principal funcionalidade é garantir geração dinâmica e reutilizável de código, melhorando a eficiência.  

A estrutura modular permite uma divisão em componentes independentes, facilitando a manutenção, escalabilidade e modificações sem impacto noutras partes da aplicação.  

## 2. Modularidade e Extensibilidade  

A ferramenta é organizada em módulos específicos:  
- **Ficheiros Comum**: Contém funções essenciais, como salvar ficheiros e renderizar templates Handlebars.  
- **Aplicação Base**: Cria a estrutura fundamental da aplicação, diretórios e ficheiros principais.  
- **Página**: Gere a criação, configuração e eliminação de páginas.  
- **Componentes**: Permite adicionar novos componentes a uma página, garantindo atualização automática do código e integração com a biblioteca **Shadcn**, proporcionando flexibilidade, personalização e desempenho. 

A arquitetura modular permite adicionar funcionalidades sem comprometer a estrutura existente e suporta testes automatizados para garantir qualidade e estabilidade.  
