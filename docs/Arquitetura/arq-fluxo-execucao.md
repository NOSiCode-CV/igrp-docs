---
sidebar_position: 3
---

# Fluxo de Execução

Abaixo está o fluxo de execução de uma requisição simples:

1. O usuário envia uma requisição HTTP para a aplicação.
2. O **Controlador** intercepta a requisição, valida os parâmetros e chama o **Modelo**.
3. O **Modelo** executa a lógica de negócios e interage com o banco de dados.
4. O **Controlador** recebe os dados processados e passa para a **Visão**.
5. A **Visão** renderiza a resposta para o usuário.
