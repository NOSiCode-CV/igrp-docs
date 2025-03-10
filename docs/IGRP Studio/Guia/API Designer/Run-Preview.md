---
sidebar_position: 8
---

# Run & Preview

O processo de Execução e Pré-visualização seguem um fluxo definido, garantindo a correta geração de componentes essenciais antes do arranque da aplicação.

## Configuração do Banco de Dados

Edite o arquivo `application.properties` para configurar a conexão com o banco de dados.

Se não desejar usar um banco de dados, comente ou remova a dependência `spring-boot-starter-data-jpa` no arquivo `pom.xml`.

## Iniciar a Aplicação

Execute a aplicação Spring Boot. A API estará disponível na URL base [http://localhost:8080](http://localhost:8080).

## Pré-visualização

### Controladores

Acesse os endpoints definidos no controlador. Exemplo: [http://localhost:8080/greetings/hello](http://localhost:8080/greetings/hello).
> **NOTA:** Para aceder aos endpoints gerados, é necessário implementar os métodos declarados na interface do controlador. Esta implementação é realizada pelo programador.
Uma vez implementados os métodos declarados, os endpoints podem ser acedidos da seguinte forma: `http://<HOST>:<PORT>/<CONTROLLER_PATH>/<ACTION_PATH>`.


### CRUD

Para acessar os métodos CRUD, utilize a URL base do modelo. Exemplo: [http://localhost:8080/pessoas](http://localhost:8080/pessoas).
> **IMPORTANTE:** Quando o CRUD é gerado, para aceder aos métodos (GET, POST, DELETE, PUT) não é necessário implementar uma classe de controlador, acedemos simplesmente a: `<HOST>:<PORT>/<CRUD_PATH>`.


