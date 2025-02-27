---
sidebar_position: 6

---

# Configuração e Personalização

Nossa framework é altamente configurável e permite que você personalize a arquitetura conforme necessário.

## Personalização de Módulos

Você pode desativar ou substituir qualquer módulo, como o módulo de autenticação, editando o arquivo `config.js`.

```js
module.exports = {
  authModule: {
    enabled: true,
    strategy: 'jwt', // ou 'oauth2'
  }
};
