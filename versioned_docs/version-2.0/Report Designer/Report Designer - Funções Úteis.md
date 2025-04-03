---
sidebar_position: 4
---

# Report Designer - Funções Úteis
 

### 1. Core.getLinkReport

Esta função permite gerar um _report_ apartir de um botão:<br></br>
`Response resp = Core.getLinkReport("codigo_do_report", new nosi.core.webapp.Report());`

Sempre é gerado uma Contra Prova do tipo _uuid_ caso não fôr definido nenhum e é obtido assim:<br></br>
`String contraProva = resp.getContent()`

Pode acrescentar definir uma Contra Prova ao gerar o _report_:<br></br>
`Response resp = Core.getLinkReport("codigo_do_report", new nosi.core.webapp.Report().setContraprova("string_contra_prova"));`
 

### 2. Core.getLinkReportPDF
Esta função permite gerar um _report_ apartir de um botão, já em formato PDF, com opção de fazer _download_:<br></br>
`Response resp = Core.getLinkReportPDF("codigo_do_report", New Nosi.Core.Webapp.Report());`<br></br>
e para obter a contra prova gerada: `String contraProva= resp.getContent();`

### 3. Core.getLinkContraProva

Esta função permite consultar um _report_ previamente gerado, colocando uma contra prova, para ser usado num campo do tipo _link_ ou para enviar pelo email:
```
String linkCP = Core.getLinkContraProvaPDF ("string_contra_prova"); //ou Core.getLinkContraProva ("string_contra_prova")
Response repCP = Core.getRepContraProvaPDF("string_contra_prova");
```

### 4. Envio de um report em anexo, após ser aberto para ser guardado usando uma contra prova
```
final Response repContraProvaPDF = Core.getRepContraProvaPDF(string_contra_prova, "“+ Core.getCurrentAppId(), false);

Attachment[] attachs= {new Attachment(repContraProvaPDF.getStream(), "Certificado de "+"IGRPWEB_"+string_contra_prova+".pdf",repContraProvaPDF.getContentType())};    
Core.mail_v2("marcos.m.brito@nosi.cv,francisco.horta@nosi.cv", "EUREKA", "Teste envio de PDF em anexo e o Codigo fonte em anexo<br>"utf-8", "html", attachs, "");

return repContraProvaPDF;
```
