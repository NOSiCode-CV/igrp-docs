---
sidebar_position: 2
---
# Comunicação 

Os microserviços se comunicam principalmente através de dois métodos:

## Comunicação Síncrona (APIs RESTful)
Cada microserviço expõe uma API RESTful, e as requisições entre serviços são feitas via HTTP.

## Comunicação Assíncrona (Mensageria)
Utilizamos **RabbitMQ** ou **Kafka** para enviar mensagens assíncronas entre microserviços, garantindo maior desacoplamento e flexibilidade na troca de dados.
