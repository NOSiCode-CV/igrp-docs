---
sidebar_position: 2
---

# Autentika / WSO2 IAM (Para implementar)

Para suportar **Autentika** ou **WSO2 IAM**, será necessário:

- Criar a classe `AutentikaAdapter` ou `WSO2Adapter`
- Implementar todos os métodos definidos em `IAdapter`
- Utilizar as APIs **REST/Admin** fornecidas pelos respetivos provedores
- Registar o adapter no sistema com base em variáveis de ambiente  
  Exemplo: `FRAMEAPP_IAM_PROVIDER=autentika`

> **Sugestão:** Verifica se o novo provedor suporta mapeamento de grupos, roles e permissões de forma compatível com o modelo do `IGRPUserRepresentation`.
