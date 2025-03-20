---
sidebar_position: 3
---

# Criação de base de dados e Configuração do "db_igrp_config.xml"

**Passo 1**: Criar base de dados de instalação do framework no **pgAdmin**.

![pgAdmin](img/pgAdmin.png)

>Atenção: É provável que na execução ocorra um erro, basta fecharmos esta janela e executarmos novamente o pgAdmin.

**Passo 2**: Inserir a _password_ definida ao criar a aplicação e clicar em _Servers_.
![Adicionar password](img/addPass.png)

**Passo 3**: Em cima da opção **Database**, criar uma nova base de dados.
![Criar Base de Dados](img/createDB.png)

**Passo 4**: Definimos um nome para a Base de Dados [neste caso, **db_igrp**] e clicamos sobre o botão **Save**. 

![Definir nome da Base de Dados](img/nomeBD.png)

**Passo 5**: No Eclipse, procurar **(ctrl+shift+R)** pelo ficheiro _xml_ de configuração de base de dados do projeto **IGRP-Template**: _"hibernate-igrp-core.cfg.xml"_.

Se não conseguir pesquisar, vais encontrar o ficheiro na pasta: [IGRP Template -> src -> main -> resources].
![Ficheiro hibernate-igrp-core.cfg.xml ](img/fileHibernate-igrp-core.cfg.xml.png)
 
**Passo 6**: Colocar a _password_ escolhida ao instalar o PostgreSQL.
![Password Base de Dados](img/PassBD.png)

**Passo 7**: Clicar **Save** para gravar as alterações.

