
# 3. Metodologia

A metodologia pormenoriza as ferramentas aplicadas pelo grupo na organização e na estruturação da implantação das tarefas do projeto, assim como nas plataformas e artefatos utilizados para a manutenção e conservação dos códigos.

Em todos os artefatos produzidos no projeto, para melhor entendimento e padronização, a nomenclatura usuário será utilizada para os casos específicos do ator.


## 3.1 Relação de Ambientes de Trabalho

Os artefatos do projeto são acompanhados e evoluídos com a ajuda de diferentes plataformas, cada qual com sua função específica. A combinação dos ambientes com suas respectivas finalidades é apresentada no quadro abaixo.

Quadro 8 - Ambientes de Trabalho

| AMBIENTE                         | PLATAFORMA   | LINK DE ACESSO |
|----------------------------------|--------------|----------------|
|Repositório de Código Fonte       | GitHub       | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t2-vacina-tracker |
|Documento do Projeto              | GitHub Docs  | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t2-vacina-tracker/tree/main/docs |
|Documento e Imagens do Projeto    | Google Drive | https://drive.google.com/drive/folders/19flSKVYBKsrLSF6V46qhVD_I4HdnY-Yb |
|Projeto de Interface e Wireframes | Figma        | Web: https://www.figma.com/file/ru3bhVXv6GM2N7Z0HaHhvq/Template-Web?node-id=0-1&t=MXp9PMxn8InUWeOQ-0
<br> Mobile: https://www.figma.com/file/ixeBUXHYrHZ7N2B52eaBUe/Template-Mobile?node-id=0-1&t=RjID30ZUc0UAVvXG-0 |
|Gerenciamento do Projeto          | Git Projects | https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/235 |

Fonte: Elaborado pelos autores


## 3.2 Controle de Versão

A hospedagem do repositório, definida pela faculdade, será no GitHub, sendo assumido para o controle de versão do projeto, a utilização do Git. 

O sistema de controle de versão moderno e mais utilizado é o Git e, com ele, é possível acompanhar as alterações de código realizadas no decorrer da codificação, assim como ser possível reverter para versões anteriores e específicas (Taysser-Ghergal et al, 2022).

No que tange ao gerenciamento das Issues, optamos por adotar no projeto as etiquetas: documentation, delivery, planning, invalid, help wanted e code review.

A tarefas estão etiquetadas em função da natureza da atividade e seguem o esquema de cores/categorias conforme abaixo:

- Documentation
- Delivery
- Planning
- Invalid
- Help Wanted
- Code Review


Figura 10 - Labels

![image](https://user-images.githubusercontent.com/89549220/226082437-47cc7c26-ee4c-494c-8a07-e54ba17be8a0.png)

Fonte: Elaborado pelos autores


## 3.3 Gestão de Código Fonte

De acordo com Vietro (2015), é importante observar o uso de técnicas e metodologias para o desenvolvimento de sistemas, buscando melhorar as práticas atuais. Diante disso torna-se essencial o gerenciamento do software, e isso envolve administrar as várias etapas do processo, como, por exemplo: requisitos do sistema, arquitetura do software, padrões de codificação, gerência de configuração, deploy, entre outros.

Pensando nesse contexto, o grupo optou por utilizar um processo fundamentado no GitFlow para a gestão do código fonte do software que será desenvolvido.

O GitFlow é um framework criado em 2010 e considerado um ótimo modelo de branching, além de ser usado para trabalhar em conjunto com o sistema de controle de versão Git (VIETRO, 2015). Assim sendo, as manutenções do código serão efetuadas definindo-se os papéis de cada branch em separado, como eles devem interagir entre si, e com a identificação de Branch Master, Branch Develop, Feature Branch, Release Branch, Maintenance Branch (Hotfix).

Figura 11 - GitFlow Workflow Modelo de Fluxo de Controle do Código Fonte no Repositório Git

![Imagem1](https://user-images.githubusercontent.com/89549220/226082748-7891d5be-1822-4a87-a352-003bd21ba72f.png)

Fonte: Vietro (2015)


Esse modelo de workflow utiliza dois branches principais para guardar o histórico do projeto, ao invés de trabalhar com apenas um Branch Master. O Branch Master guarda o histórico oficial das entregas, já o Branch Develop serve como integração entre todos os branches de funcionalidades (Feature Branches). Cada funcionalidade deve ter seu próprio branch, e ele deve ser criado a partir do Branch Develop. Quando uma funcionalidade for concluída, ela é mesclada (merged) novamente com o seu branch pai. Quando o Branch Develop estiver com funcionalidades suficientes para uma entrega, criaremos um branch de entrega (Release Branch). Com isso, damos início ao próximo ciclo de entrega, ou seja, nenhuma nova funcionalidade pode ser incluída a partir desse momento. Quando estivermos prontos para realizar a entrega, o Release Branch é mesclada com os branches Master e Develop. O Maintenance Branches (Hotfix) são usados para corrigir rapidamente algum problema em produção. Este é o único branch que deve ser criado a partir do Master. Assim que a correção for finalizada, o branch é fechado e mesclado com o Master e Develop, mantendo assim as linhas completamente atualizadas (VIETRO, 2015).


## 3.4 Gerenciamento de Projeto

O grupo decidiu por utilizar a metodologia Ágil, sendo escolhido o _Scrum_ como base para definição do processo de desenvolvimento do projeto.

### 3.4.1 Divisão de Papéis

A organização da equipe está apresentada conforme abaixo:

a) _Scrum Master_
  *	Fabiana Bicalho Palhano Rocha Cossenzo

b) _Product Owner_
  * Eduardo Lordeiro Alves

c) Equipe de Desenvolvimento
  * Eduardo Lordeiro Alves
  * Fabiana Bicalho Palhano Rocha Cossenzo
  * Felipe Costa Moreira
  * Nayara Katlin Oliveira da Silva
  
d) Equipe de _Design_ 
  * Eduardo Lordeiro Alves
  * Fabiana Bicalho Palhano Rocha Cossenzo
  * Felipe Costa Moreira
  * Nayara Katlin Oliveira da Silva
  
  
### 3.4.2 Processo

Na organização e na distribuição das tarefas do projeto, o grupo utiliza o aplicativo de gerenciamento de projetos denominado Git Projects, onde o mesmo está estruturado com as seguintes listas:

- Documentação: sequência das tarefas referentes à documentação de contexto que serão trabalhadas pela equipe, conforme cronograma do curso.
- Product Backlog: local onde é adicionado as tarefas a serem trabalhadas pela equipe, assim como as tarefas que forem identificadas no andamento do projeto.
- To Do: representa o Sprint Backlog atual que está sendo trabalhado.
- In Progress: tarefas que foram iniciadas são adicionadas nessa lista.
- Done: nesta lista são adicionadas as tarefas que passaram pela Checagem de Qualidade e estão prontas para serem enviadas e/ou entregues.

O quadro gerenciado pelo grupo no aplicativo Git Projects está disponível através da URL especificada no Quadro x e é apresentado, em seu estado atual, congênere figura abaixo. A caracterização da estrutura montada se fundamentou no artigo escrito por Littlefield (2016), assim como nos conceitos de Scrum de Schwaber e Sutherland (2020).

Figura 12 - Tela do Git Projects para Gerenciamento do Projeto

![image](https://user-images.githubusercontent.com/89549220/226083266-3b49f3c7-a971-4901-9623-a8df45ab96af.png)

Fonte: Elaborado pelos autores

Para visualizá-lo adequadamente torna-se necessário se direcionar para a aba Projects, ou através do [link](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/235/views/1).


### 3.4.3 Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
