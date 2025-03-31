---
sidebar_position: 2
---

# Spring Engine  

O **Spring Engine** gera projetos **Spring**, abrangendo **Models, Controllers, DTOs** e **Permissões**, e inclui ficheiros pré-definidos, como um **Pipeline** para publicação em ambientes IGRP. A sua estrutura separa as classes geridas pelo programador das geridas pelo **Studio**, permitindo focar-se na lógica de negócio das *APIs*, enquanto o **Studio** automatiza o restante código.  

O **Spring Engine** está incluído como dependência do projeto e permite ciclos de desenvolvimento contínuos. O **Studio** lê e modifica a configuração do projeto, possibilitando a edição da **API**.  

## 1. Conceito  

O Gerador de Aplicações Spring automatiza a criação de aplicações baseadas no framework Spring, utilizando TypeScript e Handlebars para modelagem de código. O seu objetivo é facilitar a criação, manutenção e evolução de aplicações, garantindo modularidade e eficiência.  

## 2. Modularidade e Extensibilidade  

A arquitetura modular divide o sistema em módulos independentes, permitindo escalabilidade e evolução sem impacto noutras partes do projeto. Entre os principais módulos destacam-se:  
- **Ficheiros Comum**: Funções essenciais, como geração de ficheiros e templates.  
- **API Base**: Criação da estrutura inicial da aplicação.  
- **Modelos**: Gestão de modelos, definição de relações e operações CRUD.  

Cada módulo é extensível e personalizável conforme as necessidades do projeto.