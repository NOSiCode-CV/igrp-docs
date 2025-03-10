---
sidebar_position: 4
---

# Deployment 

Os microserviços são deployados de forma independente e podem ser orquestrados usando plataformas como **Kubernetes** ou **Docker**.

## Kubernetes
- **Gerenciamento**: Kubernetes facilita o gerenciamento de múltiplos microserviços, orquestrando o deploy, escalabilidade e recuperação de falhas.
- **Exemplo**: Cada microserviço é empacotado como um container Docker e gerenciado pelo Kubernetes.

## Docker
- Cada microserviço é encapsulado em um container Docker, garantindo que ele seja executado de forma consistente em qualquer ambiente.

## CI/CD
Utilizamos pipelines de **CI/CD** para automação do build, testes e deploy dos microserviços, garantindo entregas contínuas.
