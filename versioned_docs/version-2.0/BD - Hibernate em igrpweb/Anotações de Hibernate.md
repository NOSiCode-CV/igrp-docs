---
sidebar_position: 3
---

# Anotações de Hibernate

#### 1. Exemplo de Hibernate usando anotação no Eclipse

O aplicativo de hibernação pode ser criado com anotações. Existem muitas anotações que podem ser usadas para criar aplicativos de hibernação, como @Entity, @Id, @Table etc. As anotações do Hibernate são baseadas na especificação JPA 2 e oferecem suporte a todos os recursos. Todas as anotações JPA são definidas no pacote javax.persistence.

O Hibernate EntityManager implementa as interfaces e o ciclo de vida definido pela especificação JPA. A principal vantagem de usar a anotação de hibernação é que você não precisa criar um arquivo de mapeamento (hbm).

Aqui, as anotações de hibernação são usadas para fornecer os metadados.

#### Crie a classe Persistence.

Aqui, estamos criando a mesma classe persistente que criamos no tópico anterior. Mas aqui, estamos usando anotação.

A anotação **@Entity** marca essa classe como uma entidade.

A anotação **@Table** especifica o nome da tabela onde os dados desta entidade devem ser persistidos. Se você não usar a anotação @Table, o hibernate usará o nome da classe como o nome da tabela por padrão.

A anotação **@Id** marca o identificador para esta entidade.

A anotação **@Column** especifica os detalhes da coluna para esta propriedade ou campo. Se a anotação @Column não for especificada, o nome da propriedade será usado como o nome da coluna por padrão.

A anotação **@CreationTimeStamp** é utilizada num campo data ou dateTime e permite inserir a data da criação do objeto inserio.

A anotação **@UpdateTimestamp** é utilizada num campo do tipo data do dateTime e atualiza a data a cada vez que o objeto é atualizado.

A anotação **@Immutable** perimite criar um objeto que não pode ser alterado após a sua criação.