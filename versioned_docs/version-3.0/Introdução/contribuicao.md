---
sidebar_position: 6
---

# Contribuição

BEM-VINDO AO IGRP

É a sua primeira vez?
Se é a primeira vez que contribui, temos guias para o ajudar a contribuir, reportar erros ou submeter correções.

> **Este guia serve para definir expectativas claras para todos os envolvidos no projeto, para que possamos melhorá-lo em conjunto e criar um espaço acolhedor para todos participarem. Seguir estas diretrizes ajudará a garantir uma experiência positiva para contribuidores e mantenedores.**

## Diretrizes de Contribuição

*Pull requests, relatórios de erros e todas as outras formas de contribuição são bem-vindas e altamente encorajadas!*

### Conteúdo

- [Código de Conduta](#-código-de-conduta)
- [Colocar Dúvidas](#-colocar-dúvidas)
- [Abrir um Issue](#-abrir-um-issue)
- [Reportar Problemas de Segurança](#-reportar-problemas-de-segurança)
- [Relatar Erros e Outros Problemas](#-relatar-erros-e-outros-problemas)
- [Pedidos de Funcionalidade](#-pedidos-de-funcionalidade)
- [Submeter Pull Requests](#-submeter-pull-requests)
- [Escrever Mensagens de Commit](#-escrever-mensagens-de-commit)
- [Revisão de Código](#-revisão-de-código)

### 📖 Código de Conduta

Por favor, reveja o nosso [CODIGO DE CONDUTA](/Security/SECURITY.md). Está em vigor em todos os momentos. Esperamos que seja respeitado por todos os que contribuem para este projeto.

### 💡 Colocar Dúvidas

Com dificuldades? Queremos ajudar!

Consulte as FAQ - Contêm respostas a muitas questões comuns.

Veja o nosso [Guia de Suporte](../Docs%20Referência/SUPORTE.md). Em resumo, os problemas do GitHub não são o local apropriado para depurar o seu projeto específico, mas devem ser usados para reportar erros e fazer pedidos de funcionalidade.

### 📥 Abrir um Issue

Antes de [criar um issue](https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue), verifique se está a usar a versão mais recente do projeto. Se não estiver atualizado, veja se a atualização resolve o seu issue primeiro.

#### 🔒 Reportar problemas de segurança

Consulte a nossa [Política de Segurança](/Security/SECURITY.md). **Não** crie um problema público para vulnerabilidades de segurança.

#### 🪲 Relatar Erros e outros problemas

Uma excelente forma de contribuir para o projeto é enviar um relato detalhado sempre que encontrar um problema. Apreciamos muito um relatório de erro bem escrito e completo.

- **Revise a documentação e o [Guia de Suporte](../Docs%20Referência/SUPORTE.md)** antes de abrir um novo problema.
- **Não crie problemas duplicados!** Verifique se o problema já foi relatado. Caso exista, comente com informações adicionais.
- **Use reações ao invés de comentar** apenas para indicar que também tem o problema.
- **Preencha completamente o modelo de problema fornecido.** Seja claro, conciso e descritivo.
- **Use [Markdown do GitHub](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)** para melhorar a legibilidade.

### 💌 Pedidos de Funcionalidade

Pedidos de funcionalidade são bem-vindos! Contudo, não podemos garantir que serão aceites ou implementados de imediato.

- **Verifique se a funcionalidade já foi pedida antes.**
- **Preencha completamente o modelo de pedido de funcionalidade.**
- Seja claro sobre o objetivo e como a funcionalidade se relaciona com as existentes.

### 🔁 Submeter _Pull Requests_

Adoramos _pull requests_! Antes de criar um [_pull request_](../Docs%20Referência/PULL_REQUEST_TEMPLATE_.md) para alterações não triviais, é recomendável discutir primeiro discutir as mudanças, ou discutir sua abordagem pretendida para resolver o problema nos comentários de um _issue_ existente.

Para a maioria das contribuições, depois que sua primeira solicitação de _pull_ for aceita e mesclada, você será convidado para o projeto e receberá acesso de _push_.🎉

_Observação: todas as contribuições serão licenciadas sob a licença do projeto._

- **Faça pull requests pequenos.** Cada um deve conter apenas uma correção ou funcionalidade.
- **Para alterações grandes, coordene antes.**
- **Priorize a clareza sobre a "esperteza" do código.**
- **Siga o estilo e convenções do código existente.**
- **Inclua testes e documentação para as suas alterações.**
- **Atualize o CHANGELOG** para melhorias e correções de erros.

### 📝 Escrever mensagens de Commit

Por favor, escreva mensagens de commit de qualidade:

1. Separe o título do corpo com uma linha em branco
2. Limite o título a 50 caracteres
3. Use maiúscula no início do título
4. Não termine o título com um ponto
5. Use modo imperativo no título (exemplo: "Corrigir problema de rede")
6. Envolva o corpo em cerca de 72 caracteres por linha
7. Explique **porquê**, *não o quê ou como* (o código mostra isso!).
8. Se aplicável, adicione o nome do componente relevante. (exemplos: ["Documentação] Corrigir erro de digitação", "[Perfil] Corrigir avatar ausente")

```
Exemplo de uma mensagem de commit seguindo as características acima:

*Resumo curto das alterações em 50 caracteres ou menos*

Adicione aqui uma explicação mais detalhada, se necessário. Pode 
incluir algum contexto sobre o problema que foi resolvido, etc. O 
corpo da mensagem do commit pode ter vários parágrafos. Parágrafos 
adicionais devem ser separados por linhas em branco e formatados 
corretamente.

Envolva o texto em cerca de 72 caracteres por linha. Em alguns 
contextos, a primeira linha é tratada como o assunto do commit e 
o restante do texto como o corpo. A linha em branco separando o 
resumo do corpo é crucial (a menos que o corpo seja omitido); 
diversas ferramentas como `log`, `shortlog` e `rebase` podem ficar 
confusas se não houver essa separação.

Explique o problema que este commit resolve. Foque no porquê 
está a fazer esta alteração em vez de como ou o quê. O código 
explica o como e o quê. Revisores e o seu eu do futuro podem ler 
o patch, mas podem não entender por que uma determinada solução 
foi implementada. Existem efeitos colaterais ou outras consequências 
incomuns desta mudança? Aqui é o local para explicá-las.

 - Pontos de lista também são aceitáveis

 - Use um hífen ou um asterisco para a lista, precedido por um 
   único espaço, com linhas em branco entre os itens

Note os problemas do GitHub corrigidos ou relevantes no final:

Resolves: #123
See also: #456, #789*
```

### ✅ Revisão de Código
 
- **Revise o código, não o autor.** Procure e sugira melhorias sem menosprezar ou insultar o autor. Forneça _feedback_ acionável e explique seu raciocínio.
- **Separe-se do seu código.** Quando seu código for criticado, questionado ou criticado construtivamente, lembre-se de que você não é seu código. Não leve a revisão de código para o lado pessoal.
- **Seja sempre profissional e respeitoso.** Ninguém escreve _bugs_ de propósito. Faça o seu melhor e aprenda com seus erros.
- **Siga estas diretrizes para uma experiência produtiva e colaborativa.**

### 🎖️ Crédito

Escrito pelo Francisco Lopes Horta.


