#!/bin/bash

# Verificar se o Docker está instalado
echo "Verificando se o Docker está instalado..."
if ! command -v docker &> /dev/null
then
    echo "Docker não encontrado! Instale o Docker primeiro."
    exit 1
fi

# Baixar a versão mais recente do Docker Compose
echo "Baixando o Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Tornar o Docker Compose executável
echo "Tornando o Docker Compose executável..."
sudo chmod +x /usr/local/bin/docker-compose

# Verificar a instalação do Docker Compose
echo "Verificando instalação do Docker Compose..."
docker-compose --version

echo "Instalação do Docker Compose concluída!"
