---
sidebar_position: 1
---

# Keyclock

A interação com o _Keycloak_ é realizada através de um adaptador denominado **KeycloakAdapter**. A classe **KeycloakAdapter** atua como uma ponte entre a aplicação e o _Keycloak_, permitindo uma gestão eficiente de utilizadores, funções, departamentos, aplicações e permissões. Esta classe implementa a interface **IAdapter** e utiliza a **Admin API** do _Keycloak_ para a interação.

> ⚠️ As ações mais complexas devem ser feitas diretamente no painel do _Keycloak_ por um administrador.


## Keycloak OAuth2 Provider
Atualmente, o _Keycloak_ é o provedor `OAuth2` responsável pela gestão de acessos. O Gestor de utilizadores cria os recursos no _Keycloak_, refletindo os da base de dados IGRP, e atribui as permissões conforme solicitado. Assim, ao receber uma função, o utilizador terá automaticamente acesso aos recursos correspondentes, garantindo um controlo de acesso centralizado, seguro e consistente.

## Keycloak Adapter

### Interface
A interface `IAdapter` define o contrato de integração entre a aplicação e qualquer provedor IAM. Todos os métodos essenciais de autenticação e autorização são centralizados nesta interface.

```java
public interface IAdapter {

  IGRPUserRepresentation getUserByUsername(String username);
  IGRPUserRepresentation getUserByEmail(String email);
  List<String> getAppsFromUser(String username);
  List<IGRPUserRepresentation> getUsersFromDepartment(String department);
  List<IGRPUserRepresentation> getUsersFromApp(String app);
  IGRPUserRepresentation createUser(String... params);
  List<String> getRolesFromUser(String username);
  IGRPUserRepresentation addRoleToUser(String role, String username);
  IGRPUserRepresentation removeRoleFromUser(String role, String username);
}
```

>🔹 Esta interface deve ser implementada por qualquer novo adapter (ex: `AutentikaAdapter`, `AzureADAdapter`).

A classe IGRPUserRepresentation assegura uma representação padronizada do utilizador, independentemente do sistema IAM:
```java
public class IGRPUserRepresentation {
  private String username;
  private String email; 
  private List<String> roles; 
  private List<String> applications;
  private List<String> departments;
}
```

### Dependências
Para a integração com o Keycloak via Java API, é necessário adicionar as seguintes dependências no `pom.xml`, respeitando a versão do servidor Keycloak (exemplo: `25.0.4`):

```java
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

>⚠️ Assegura que a versão da dependência corresponde à usada no container (ex: `docker-compose` com imagem `keycloak/keycloak:25.0.4`).

### Configuração
A configuração da ligação ao servidor Keycloak deve ser definida em ficheiros de ambiente (`.env`) e no `application.properties`.
```java
KEYCLOAK_URL=https://keycloak.local
KEYCLOAK_REALM=igrp
KEYCLOAK_CLIENT_ID=admin-cli
KEYCLOAK_USERNAME=admin
KEYCLOAK_PASSWORD=admin123
```
**Inicialização do cliente**:
```java
keycloak = KeycloakBuilder.builder()
    .serverUrl(KEYCLOAK_URL)
    .realm(KEYCLOAK_REALM)
    .clientId("admin-cli")
    .grantType(OAuth2Constants.PASSWORD)
    .username(KEYCLOAK_USERNAME)
    .password(KEYCLOAK_PASSWORD)
    .build();
```
### Implementação
`KeycloakAdapter.java` é a classe principal de integração com o Keycloak, onde a interface `IAdapter` é implementada:
```java
public class KeycloakAdapter implements IAdapter {
  
  @Override
  public IGRPUserRepresentation getUserByUsername(String username) {
    UserRepresentation user = client.searchByUsername(username);
    return buildUser(user);
  }

  // Outros métodos implementados aqui...

  private IGRPUserRepresentation buildUser(UserRepresentation user) {
    // Conversão para estrutura IGRP
  }
}
```

`KeycloakClient.java` é a camada de acesso direto à API do Keycloak:

```java
public class KeycloakClient {
  
  public void connect() { ... }
  public void disconnect() { ... }

  public UserRepresentation searchByUsername(String username) { ... }
  public List<GroupRepresentation> getGroups(String username) { ... }

  public void setRoles(String username, List<RoleRepresentation> roles) { ... }
  public void removeRoles(String username, List<RoleRepresentation> roles) { ... }

  public RoleResource getRole(GroupResource group, String roleName) { ... }
}
```

**Exemplo prático**: adicionar role a um utilizador:
```java
client.connect();

UserRepresentation user = client.searchByUsername(username);
List<GroupRepresentation> groups = client.getGroups(username);

RoleResource roleResource = getRoleFromGroups(role, groups);
if (roleResource == null) {
  throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Role não disponível.");
}

client.setRoles(username, Arrays.asList(roleResource.toRepresentation()));
client.disconnect();
```

### Boas Práticas
- ❗ Trata exceções no adapter para enviar mensagens HTTP significativas ao frontend.

- 🔄 Isola lógica de negócio no adapter (`KeycloakAdapter`) e a lógica básica no client (`KeycloakClient`).

- ⚙️ Usa injeção de dependência para alternar entre adapters com base em `application.properties`.