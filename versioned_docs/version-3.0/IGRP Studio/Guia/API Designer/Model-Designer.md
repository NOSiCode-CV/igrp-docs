---
sidebar_position: 5
---

# Designer de Modelos

O Projecto Spring permite a criação e configuração de modelos, CRUDs, controladores e DTOs de forma automatizada. Abaixo, detalhamos cada componente:

## Modelos

Os modelos representam as entidades da aplicação e são gerados com base em um arquivo de configuração (**ModelConfig**). O arquivo de configuração define o nome do modelo e seus atributos.

**Funcionalidades:**
- **Geração de Modelos**: O módulo Model gera classes Java com anotações Lombok (`@Data`, `@AllArgsConstructor`, `@NoArgsConstructor`) para reduzir a verbosidade do código.
- **Atributos e Relações**: Os modelos podem conter atributos simples (como `String`, `Integer`, etc.) e relações com outros modelos (`@OneToOne`, `@OneToMany`, `@ManyToMany`).

**Exemplo de ModelConfig:**

```json
export interface ModelConfig {
    type: 'model';
    name: string;
    tableName: string;
    attributes: Attribute[];
    crud?: Crud;
    relations?: Relation[];
}
```

## CRUDs

O **Spring Engine** permite a geração automática de operações CRUD (**Create, Read, Update, Delete**) para os modelos. O CRUD é gerado como um repositório que estende a interface `CrudRepository` do **Spring Data JPA**.

**Funcionalidades:**
- **Geração de Repositórios**: O repositório é gerado com base no modelo e pode ser personalizado para incluir ou excluir métodos específicos (como `save`, `delete`, `findAll`, etc.).
- **Configuração de Métodos**: O arquivo de configuração do modelo (**ModelConfig**) permite desabilitar métodos específicos do CRUD.

**Exemplo de Configuração de Modelo:**
```java
const model: ModelConfig = {
    type: 'model',
    name: 'T_PESSOA',
    tableName: 't_pessoa',
    audit: false,
    attributes: [
        { type: 'Long', name: 'idPessoa', primarykey: true },
        { type: 'String', name: 'numero', unique: false, nullable: false, required: true },
        { type: 'String', name: 'nomeMae', length: 30 },
        { type: 'Float', name: 'saldo', length: 50 },
        { type: 'Boolean', name: 'fumador', length: 30 },
        { type: 'Text', name: 'nomePat', length: 2000, required: true },
    ],
    crud: {
        enabled: true,
        path: 'app_pessoa',
        disabledMethods: ['deleteById']
    }
};
```

## Controllers

Os **controladores** são gerados para gerenciar as requisições HTTP e direcionar as operações para os serviços correspondentes. O **Spring Engine** gera automaticamente os controladores com base em um arquivo de configuração.

**Funcionalidades:**
- **Geração de Controladores**: O módulo Controller gera classes Java com métodos correspondentes aos endpoints da API.
- **Configuração de Endpoints**: Cada endpoint é configurado com um caminho (**path**), método HTTP (**GET, POST**, etc.), e parâmetros de requisição e resposta.

**Exemplo de Configuração de Modelo para Controlador:**
```json
export interface ControllerConfig {
    type: 'controller';
    name: string;
    basePath: string;
    actions: ControllerAction[];
}
```

**Exemplo de Configuração de Controlador:**
```json
export interface ControllerAction {
    path: string;
    actionName: string;
    isResponseList: boolean;
    method: HttpMethod;
    accepts?: MimeTypes;
    contentType?: MimeTypes;
    requestBody?: string;
    requestParams?: RequestParams[];
    response: string;
    pathVariables?: PathVariables[];
}
```

Onde:
- **path**: O caminho para aceder ao endpoint implementado.
- **actionName**: O nome do método a ser implementado.
- **isResponseList**: Indica se o método retorna uma lista.
- **method**: Operações HTTP (POST, GET, DELETE, PUT, PATCH, etc.).
- **accepts**: Atributo opcional, que pode ser incluído no cabeçalho do método.
- **contentType**: Atributo opcional para definir o tipo de conteúdo. Consulte os MimeTypes definidos na aplicação para conhecer os valores aceites para estes atributos (accepts e contentType).
- **requestBody**: É uma string que representa o nome do objeto que é passado ao endpoint. Por exemplo, se quisermos criar ou registar um novo objeto, o requestBody apenas recebe o nome que queremos dar a este objeto, não o objeto em si.
- **requestParams**: Os parâmetros que queremos passar ao endpoint. Um parâmetro é um objeto que tem a seguinte estrutura: `{type: "string", name: "string"}`.
- **response**: O tipo de resposta que o método retornará. Os tipos aceitáveis são: `['String', 'Integer', 'Boolean', 'Object']`. 
> Nota: Se a resposta for um `Object` e o que queremos retornar for uma lista de objetos, apenas temos de marcar `isResponseList` como `true`.
- **pathVariables**: Variáveis que serão incluídas no URL para aceder ao método declarado. É um objeto que deve ter o seguinte formato: `{type: String, name: String}`.


## DTOs (Data Transfer Objects)

Os **DTOs** são gerados para transferir dados entre as camadas da aplicação. Eles são criados com base nos modelos e podem ser personalizados para incluir apenas os atributos necessários.

**Funcionalidades:**
- **Geração de DTOs**: Os DTOs são gerados automaticamente com base nos modelos, permitindo a transferência de dados de forma segura e eficiente.
- **Personalização**: Os DTOs podem ser configurados para incluir ou excluir atributos específicos.
