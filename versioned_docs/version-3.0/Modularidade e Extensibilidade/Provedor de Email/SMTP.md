---
sidebar_position: 1
---

# SMTP (implementado por defeito)

## Características

- Envio de emails através de servidores SMTP standard  
- Ideal para ambientes de desenvolvimento ou infraestruturas próprias  
- Compatível com qualquer servidor SMTP (Exim, Postfix, etc.)

## Implementação

- O adapter SMTP faz a ponte entre a plataforma e qualquer serviço SMTP  
- Utiliza autenticação básica e configuração de servidor (host, porta, utilizador, palavra-passe)  
- Configurações como remetente, tempo de expiração ou segurança (TLS/SSL) podem ser ajustadas via ficheiros `.env` ou `application.properties`

## Exemplo de configuração (`.env` ou `application.properties`)

```properties
EMAIL_PROVIDER=smtp
SMTP_HOST=smtp.empresa.pt
SMTP_PORT=587
SMTP_USERNAME=noreply@empresa.pt
SMTP_PASSWORD=superseguro
SMTP_TLS=true
```

## Boas Práticas
- **Separação de responsabilidades**: A lógica de negócio de envio de emails deve ser isolada no *adapter*, facilitando testes e substituição do provedor.
- **Configuração externa**: Evita *hardcoding* de credenciais e detalhes do servidor — utiliza variáveis de ambiente ou ficheiros de configuração.
- **Fallback**: Considera a possibilidade de *fallback* automático entre provedores em caso de falha (ex: SMTP como backup do SendGrid).
- **Monitorização**: Utiliza *logs* e métricas para acompanhar o estado dos envios (*status codes*, tempos de resposta, etc.).
