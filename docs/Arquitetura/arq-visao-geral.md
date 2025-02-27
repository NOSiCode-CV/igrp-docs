---
sidebar_position: 1
---

#  Visão geral

cls
Esta seção descreve a arquitetura interna da nossa framework. Nossa framework segue o padrão **MVC** (Model-View-Controller), com uma separação clara entre a lógica de negócios, a interface de usuário e a persistência de dados.

## Componentes Principais

A framework é dividida em três principais módulos:
- **Modelo (Model)**: Responsável pela lógica de negócios e interação com o banco de dados.
- **Visão (View)**: Gerencia a apresentação dos dados ao usuário.
- **Controlador (Controller)**: Gerencia a interação entre o modelo e a visão, além de lidar com as requisições e respostas.

![Diagrama da Arquitetura](./img/diagrama-arquitetura.png)
