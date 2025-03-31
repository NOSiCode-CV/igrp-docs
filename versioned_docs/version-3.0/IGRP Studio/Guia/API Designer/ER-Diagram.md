---
sidebar_position: 6
---

# Diagrama ER

O Spring Engine permite a criação de relacionamentos entre modelos, embora não haja uma implementação automática para gerar o código desses relacionamentos. Os relacionamentos são configurados manualmente no arquivo de configuração do modelo e, em seguida, o modelo é regenerado para refletir as alterações.

## Tipos de Relacionamentos

- **@OneToOne**: Relacionamento um-para-um.
- **@OneToMany**: Relacionamento um-para-muitos.
- **@ManyToMany**: Relacionamento muitos-para-muitos.

**Exemplo de Configuração de Relacionamento:**

```java
{
  "type": "model",
  "name": "Order",
  "attributes": [
    { "name": "id", "type": "Long" },
    { "name": "user", "type": "User", "relationship": "@OneToOne" }
  ]
}