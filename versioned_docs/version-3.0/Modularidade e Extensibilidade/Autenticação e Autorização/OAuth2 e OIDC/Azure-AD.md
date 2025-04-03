---
sidebar_position: 3
---

# Azure Active Directory (Para implementar)

Para integrar com Azure AD:

- Utiliza a **Microsoft Graph API**

- Implementa a interface `IAdapter` para incluir:
  - Consulta de utilizadores por email
  - Atribuição de grupos/roles
  - Criação de departamentos via grupos do Azure

> **Nota:** Poderá ser necessário utilizar **OAuth2** com credenciais da aplicação (`client_credentials`).
