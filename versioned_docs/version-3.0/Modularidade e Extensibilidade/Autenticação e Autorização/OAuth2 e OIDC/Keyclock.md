---
sidebar_position: 1
---

# Keyclock

A interação com o _Keycloak_ é realizada através de um adaptador denominado **KeycloakAdapter**. A classe **KeycloakAdapter** atua como uma ponte entre a aplicação e o _Keycloak_, permitindo uma gestão eficiente de utilizadores, funções, departamentos, aplicações e permissões. Esta classe implementa a interface **IAdapter** e utiliza a **Admin API** do _Keycloak_ para a interação.

### 1. Keycloak OAuth2 Provider
Atualmente, o _Keycloak_ é o fornecedor OAuth2 responsável pela gestão de acessos. O Gestor de utilizadores cria os recursos no _Keycloak_, refletindo os da base de dados IGRP, e atribui as permissões conforme solicitado. Assim, ao receber uma função, o utilizador ganha automaticamente acesso aos recursos correspondentes, garantindo um controlo de acesso centralizado, seguro e consistente.

### 2. Keycloak Adapter
#### 2.1 Objetivo
O _Keycloak_ Adapter facilita a comunicação entre APIs e o servidor _Keycloak_, permitindo a gestão de permissões, papéis e estrutura organizacional. Ele simplifica operações básicas de gestão de utilizadores, mas ações mais complexas devem ser feitas diretamente no painel do _Keycloak_ por um administrador.

Caso seja necessário adicionar outro sistema no futuro, basta criar uma nova implementação da interface.<br></br>
A interface define os seguintes métodos:
```
public interface IAdapter {
  public IGRPUserRepresentation getUserByUsername(String username);
  public IGRPUserRepresentation getUserByEmail(String email);
  public List<String> getAppsFromUser(String username);
  public List<IGRPUserRepresentation> getUsersFromDepartment(String department);
  public List<IGRPUserRepresentation> getUsersFromApp(String app);
  public IGRPUserRepresentation createUser(String... params); 
  public List<String> getRolesFromUser(String username);
  public IGRPUserRepresentation addRoleToUser(String role, String username);
  public IGRPUserRepresentation removeRoleFromUser(String role, String username);
}
```
Para garantir uma representação partilhada do utilizador, independentemente do _software_ de autenticação, é adicionada a classe **_IGRPUserRepresentation_**. Esta classe armazena informações básicas sobre o utilizador e sua utilização no sistema IGRP.
```
public class IGRPUserRepresentation {
  private String username;
  private String email; 
  private List<String> roles; 
  private List<String> applications;
  private List<String> departments;

  // Getters and setters
  ...
}
```
#### 2.3 Dependências
Para a API Java do _Keycloak_, a dependência deve ser adicionada ao ficheiro _pom.xml_. É necessário utilizar a mesma versão do servidor _Keycloak_, por exemplo, se o arquivo _docker-compose_ estiver utilizando a versão 25.0.4:
```
# Keycloak server 
  keycloak:
    image: keycloak/keycloak:25.0.4
    command: 
      - start
    ...
```
O mesmo deve ser refletido da seguinte forma (utilizando a versão 25.0.4):
```
<dependency>
        <groupId>org.keycloak</groupId>
        <artifactId>keycloak-admin-client</artifactId>
        <version>25.0.4</version>
    </dependency>
    <dependency>
        <groupId>org.keycloak</groupId>
        <artifactId>keycloak-core</artifactId>
        <version>25.0.4</version>
        <scope>provided</scope>
    </dependency>
```
