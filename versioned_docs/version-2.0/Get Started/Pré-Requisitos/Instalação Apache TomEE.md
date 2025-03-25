---
sidebar_position: 4
---

# (Opcional) Instalação Apache TomEE

>**Observação**: Se utilizar o comando _maven package tomee:run_ ou _package tomee:debug_ não irá necessitar de ter o Apache TomEE dedicado porque o _maven_ faz o _donwload_.

>**NOTA**: esta documentação está preparada para a versão _legacy_ por isso algumas coisas podem estar desatualizadas.

O Apache TomEE é o servidor que o igrpweb utiliza para fazer o _deploy_ das suas aplicações. Em vez de incorporar o Tomcat em um servidor de aplicativos, o TomEE incorpora as tecnologias EJB, CDI e as outras _features_ do Java EE dentro do Tomcat, resultando em um servidor _Web Profile_ totalmente compatível, mas mantendo o Tomcat como o servidor mestre. <br></br> O pacote TomEE é criado descompactando o Tomcat, adicionando os _jars_ específicos e adicionando um único _listener_ a "_conf/server.xml_" e zipando tudo novamente.<br></br>
Para baixar o Apache TomEE Plus, baixamos a versão Zip  versão 8.0.6 - [AQUI](https://tomee.apache.org/download.html).

**Passo 1**: Clicar em Baixar o ZIP do Apache TomEE plus.
![Zip do Apache TomEE plus](img/zipTomEE.png)
**Passo 2**: Baixar o zip.
![Baixar Zip](img/downloadZip.png)
**Passo 3**: Extrair a pasta no Disco C
![Extrair Zip](img/extrairZip.png)

