# 5. Arquitetura da Solução

A arquitetura de solução apresenta como o _software_ é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação. Seguem abaixo os principais elementos relacionados a esse tópico.


## 5.1 Diagrama de Classes
O diagrama de classes ilustra esquematicamente como será a estrutura do _software_ e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

Figura 14 - Diagrama de Classes

![Diagrama Classes Vacina Tracker](https://user-images.githubusercontent.com/89549220/233687031-2cd7baaf-a852-482f-b822-e030bcb0c4de.png)

Fonte: Elaborado pelos autores


## 5.2 Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa. Segue abaixo a representação do Modelo ER:

Figura 15 - Modelo ER

<img width="1656" alt="Modelo ER - EIXO 4" src="https://user-images.githubusercontent.com/91228798/233808111-670efa49-3878-4fed-8e57-f1f193d7bc26.png">

Fonte: Elaborado pelos autores


## 5.3 Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária. Segue abaixo a representação do Esquema Relacional:

Figura 16 - Esquema Relacional

![Esquema relacional - Eixo 4](https://user-images.githubusercontent.com/91228798/233808254-80e05b4d-7fa7-4143-b41f-5779b9ec4228.png)

Fonte: Elaborado pelos autores


## 5.4 Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.


## 5.5 Diagrama de Componentes

Compreendemos nessa seção os componentes que fazem parte da arquitetura da solução, consoante figura adiante.

Figura 17 - Arquitetura da Solução

![image](https://user-images.githubusercontent.com/89549220/230423142-2b2ca2c9-ba9b-47f6-a8a9-fd15f492e501.png)

Fonte: Elaborado pelos autores

### 5.5.1 Refatoração

Figura 18 - Refatoração da Arquitetura da Solução

![image](https://user-images.githubusercontent.com/89549220/233716226-af2c216d-3e38-4efd-ab37-c2ac811abc2b.png)

Fonte: Elaborado pelos autores


## 5.6 Tecnologias Utilizadas

Para implantação da solução, decidimos por utilizar as seguintes tecnologias:

a) Editor de Código, Linguagens, Frameworks, Bibliotecas, Banco de Dados: Visual Studio, Visual Studio Code, JavaScript, React, React Native, React Native Paper, Bootstrap, C#, ASP NET Core, Insomnia, Swagger. 

b) Ferramentas de Desenho de Tela (_wireframing_): Figma

c) Ferramentas para Criação de Diagramas: Lucidchart e Visio

d) Banco de Dados: SQL Server e MongoDB.

No que tange à ilustração da interação do usuário com o sistema, demonstramos no item 5.5 e subitem 5.5.1, através da arquitetura da solução.


## 5.7 Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## 5.8 Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
