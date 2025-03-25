---
sidebar_position: 1
---

# Instalação Java

### 1. Baixar e instalar o JDK17 para horizon ou JDK8 para legacy
> **NOTA**: esta documentação está preparada para a versão legacy por isso algum texto ou imagem pode estar desatualizada

Para correr o igrpweb Template no nosso computador, o primeiro software que devemos instalar é o JDK (Java Development Kit), que é o pacote que inclui tudo o que é necessário para escrever aplicações em linguagem JAVA e também o JRE (Java Runtime Environment), um programa que permite ao utilizador rodar aplicativos Java em seu computador para poder rodá-los após finalizá-los.<br></br>
Para baixar o JDK8 podemos ir no site do software e baixá-lo [AQUI](https://www.oracle.com/java/technologies/downloads/#java8?msgid=bugsview8).

**Passo 1**: Escolher o respectivo Sistema Operativo do computador.
![Escolher Sistema Operativo](img/sistemaoperativo.png)

**Passo 2**: Clicar em Next para efetuar a instalação.
![Instalar JDK8](img/installJDK8.png)

**Passo 3**: Clicar em Next para continuar.<br></br>
![Continuar a Instalar JDK8](img/continuaçãoInstallJDK8.png)


**Passo 4**: Clicar em Close para fechar a janela.<br></br>
![Fechar Instalação do JDK8](img/closeInstallJDK8.png)

### 2. Configurar Variáveis de ambiente

Instalamos o JDK pois contém os recursos para desenvolvimento e execução de aplicações Java. Geralmente durante a instalação do JDK, Java é adicionado às variáveis ambiente. No entanto, isso nem sempre acontece. Para estes casos, fazer a configuração dessas variáveis manualmente.<br></br>
**JAVA_HOME**:  Diretório raiz de instalação do Java, além de ser utilizado para configurar as variáveis seguintes também é continuamente referenciado por aplicativos e frameworks desenvolvidos com Java.

**Passo 1**: Ir às propriedades do computador.<br></br>
![Variáveis de Ambiente](img/configVaviáveisAmbiente.png)

**Passo 2**: Escolher a opção "Definições avançadas do sistema."<br></br>
![Em definições avançadas do sistema](img/configVaviáveisAmbiente_2.png)

**Passo 3**: Escolher a opção definições de variáveis de ambiente.
![Em variáveis de Ambiente](img/configVaviáveisAmbiente_3.png)

**Passo 4**: Adicionar uma nova variável de ambiente ao Sistema.
![Adicionar variáveis de ambiente](img/configVaviáveisAmbiente_4.png)

**Passo 5**: Dar o nome de JAVA_HOME no campo nome.
![Java_home](img/addJavaHome.png)

**Passo 6**: Procurar pela pasta de adição da variável de ambiente JDK.
![Procurar Diretório para variável de ambiente text](img/DirVariávelAmbiente.png)

**Passo 7**: É pasta onde está instalada o nosso JDK. Normalmente está na pasta: **C:\Program Files\Java\jdk..** <br></br>
![Pasta do diretório](img/pastaDiretório.png)


**Passo 8**: Seleciona a pasta JDK.
![Selecionar JDK](img/selectJDK.png)

Cica em OK e repetir os passos, de 4 a 8 para adicionar uma nova variável de ambiente, agora em vez de JDK para adicionar a pasta JRE.<br></br>
Desta vez, dando o nome de JRE_HOME, conforme nos mostra o passo 9 e adicionar a pasta JRE, conforme nos mostra o passo 10, que normalmente está no directório **C:\Program Files\Java\jre..**

**Passo 9**: Adição da pasta JRE.<br></br>
![Adiconar JRE ](img/AddJRE.png)

**Passo 10**: Seleção da pasta JRE.<br></br>
![Selecionar JRE](img/SelectJRE.png)

Após ser adicionado as duas variáveis de ambiente é preciso editar o ficheiro path. O Path é uma lista de diretórios que contém aplicativos que podem ser chamados pelo console. Com o PATH apontando para o diretório de executáveis do Java, podemos chama-los de qualquer local do mesmo computador.<br></br>
Para isso, clicar em editar o ficheiro Path, conforme mostra o passo seguinte.

**Passo 11**: Edição do ficheiro Path.<br></br>
![Editar Path](img/editePath.png)

**Passo 12**: Adicionar um novo directório executável.
![Adicionar novo diretório](img/AddNewDiretório.png)

**Passo 13**: Clicar em procurar para adição do directório JDK.
![Procurar Diretório](img/searchDiretório.png)

**Passo 14**: Seleção da pasta bin que normalmente está no diretório **C:\Program Files\Java\jdk..\bin** <br></br>
![Procurar Pasta](img/searchPasta.png)

Repetir os passos 12, 13 e 14, desta vez para adicionar o directório bin, da pasta JRE, que normalmente está na pasta **C:\Program Files\Java\jre..\bin** 

**Passo 15**: Adição dos dois directórios executáveis.
![Variaáveis de Ambiente Adicionados](img/variáveisAmbienteAdd.png)

**Passo 16**: Clicar OK em todas as janelas abertas para guardar as alterações.

**Passo 17**: No windows do computdor pesquisar por linha de comandos.<br></br>
![Na linha de Comando](img/linhaComando.png)

**Passo 18**: Na linha de comandos, executar como administrador e verificar se as duas variáveis estão bem configuradas, utilizando os camandos: <br></br>
**java -version** e **javac - version**<br></br>
![Ver Versão na linha de Comando](img/versionJavaJavac.png)