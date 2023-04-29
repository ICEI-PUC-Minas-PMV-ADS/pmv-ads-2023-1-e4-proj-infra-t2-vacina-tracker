# 5. Arquitetura da Solução

A arquitetura de solução apresenta como o _software_ é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação. Seguem abaixo os principais elementos relacionados a esse tópico.


## 5.1 Diagrama de Classes
O diagrama de classes ilustra esquematicamente como será a estrutura do _software_ e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

Figura 14 - Diagrama de Classes

![Diagrama Classes Vacina Tracker](https://user-images.githubusercontent.com/91228798/233861223-11a095ee-6b09-41cf-97d7-f11dac557e7a.png)

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


## 5.6 Rotas e Recursos

Figura 19 - Rotas _Swagger_

![Swagger_Rota Usuarios](https://user-images.githubusercontent.com/89549220/233861093-4e7d7936-1959-456f-b987-9954e8569ab6.png)

![Swagger_Rota Vacinas](https://user-images.githubusercontent.com/89549220/233861101-c26dc200-e099-4c5e-be7a-aa02b074d9c3.png)

![Swagger_Schemas](https://user-images.githubusercontent.com/89549220/233861114-911b1e16-81c2-4700-904c-3b492bbfb5eb.png)

Fonte: Elaborado pelos autores


## 5.7 Tecnologias Utilizadas

Para implantação da solução, decidimos por utilizar as seguintes tecnologias:

a) Editor de Código, Linguagens, Frameworks, Bibliotecas, Banco de Dados: Visual Studio, Visual Studio Code, JavaScript, React, React Native, React Native Paper, Bootstrap, C#, ASP NET Core, Insomnia, Postman, Swagger. 

b) Ferramentas de Desenho de Tela (_wireframing_): Figma

c) Ferramentas para Criação de Diagramas: Lucidchart, Visio, Gitmind.

d) Banco de Dados: SQL Server e MongoDB Atlas.

No que tange à ilustração da interação do usuário com o sistema, demonstramos no item 5.5 e subitem 5.5.1, através da arquitetura da solução.


## 5.8 Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## 5.9 Qualidade de Software

Entendendo as características e subcaracterísticas que definem a qualidade de um produto de software, a qualidade de _software_ é um conceito fundamental para garantir que um produto final atenda às expectativas dos usuários e demais _stakeholders_ envolvidos. No entanto, essa definição não é simples e envolve uma série de características e subcaracterísticas que devem ser levadas em conta durante o desenvolvimento do _software_. Neste contexto, a norma ISO/IEC 25010 apresenta oito características e 30 subcaracterísticas de qualidade que devem ser consideradas.
No desenvolvimento de um projeto de _software_, é importante entender como as características e subcaracterísticas de qualidade se aplicam. Por exemplo, no desenvolvimento do nosso aplicativo "Vacina Tracker", a equipe utilizará as seguintes características e subcaracterísticas como guias:

1.	Segurança: essa característica envolve a confidencialidade e integridade dos dados. Para avaliar a segurança do, a equipe pode verificar se a aplicação garante a confidencialidade e integridade dos dados dos usuários.
2.	Usabilidade: essa característica envolve a facilidade de aprendizado, operação e estética da interface do software. Para avaliar a usabilidade do sistema, a equipe pode verificar se a aplicação é fácil de usar, se possui uma interface atual e se é de fácil entendimento.
3.	Eficiência: essa característica envolve a velocidade e recursos utilizados pelo software. Para avaliar a eficiência do sistema, a equipe pode verificar o mínimo tempo de resposta, a máxima velocidade de execução e o mínimo uso de recursos para o mesmo resultado.
4.	Confiabilidade: essa característica envolve a maturidade, recuperabilidade e tolerância a falhas do software. Para avaliar a confiabilidade do sistema, a equipe pode verificar a frequência com que a aplicação apresenta falhas, se é capaz de recuperar dados após uma falha e se reage bem às falhas que aparecem.
5.	Portabilidade: essa característica envolve a facilidade de adaptação e instalação do software em diferentes ambientes. Para avaliar a portabilidade do sistema, a equipe pode verificar se a aplicação está adaptada para os diversos ambientes, se é fácil de instalar em outros ambientes e se apresenta aderência a padrões de portabilidade.
6.	Manutenibilidade: essa característica envolve a facilidade de modificação e testabilidade do software. Para avaliar a manutenibilidade do sistema, a equipe pode verificar a facilidade de modificar o código e de testar a aplicação.

