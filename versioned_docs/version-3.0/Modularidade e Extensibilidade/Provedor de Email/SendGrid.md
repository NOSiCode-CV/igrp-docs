---
sidebar_position: 2
---

# SendGrid (Para implementar)

## Características

- Serviço cloud especializado em envio de emails em larga escala  
- Suporte para templates, tracking e gestão de reputação  
- Autenticação via token de API

## Instruções de Implementação

1. Criar o adapter `SendGridAdapter`
2. Implementar a interface genérica de envio de email
3. Usar a biblioteca oficial do SendGrid para Java (`sendgrid-java`)
4. Configurar o token e remetente via variáveis de ambiente:

```properties
EMAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=SG.xxxxxxx
SENDGRID_SENDER=noreply@empresa.pt
```

## Exemplo de Código
```java
Email from = new Email("noreply@empresa.pt");
String subject = "Confirmação de Registo";
Email to = new Email("utilizador@exemplo.pt");
Content content = new Content("text/plain", "Bem-vindo à aplicação!");
Mail mail = new Mail(from, subject, to, content);

SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
Request request = new Request();
request.setMethod(Method.POST);
request.setEndpoint("mail/send");
request.setBody(mail.build());
```
