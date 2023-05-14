# 8. Plano de Testes de _Software_

Os testes funcionais a serem realizados no aplicativo são descritos abaixo.

Requisitos para realização dos testes:<br/>

Testes na Web:
-	_Site_ publicado na internet;<br/>
-	Navegador de Internet (_Google Chrome, Firefox, Microsoft Edge_);<br/>
-	Conexão com a internet para acesso à plataforma.<br/>
 
Testes no App:
- Aplicativo publicado na plataforma escolhida;<br/>
- Conexão com a internet para conseguir acessar a plataforma.<br/>
 
Quadro 10 - Plano de Testes

|Caso de Teste | CT-01 - Realizar cadastro |
|:--|:--|
|**Requisitos Associados**|RF-005 – A aplicação deve permitir ao usuário criar uma conta.|  
|**Objetivo do teste**|- Permitir que o usuário se cadastre através do _Site_ ou pelo aplicativo.|
|**Passos**| 1)	Acessar o site ou Realizar o _download_ do app na plataforma. <br/> 2) Clicar no botão "cadastre-se" do menu. <br/> 3) Preencher os campos com informações validas. <br/> 5) Clicar no botão cadastrar.|
|**Critérios de Êxito**| - Confirmação do cadastro e orientação para realizar o _login_.|

|Caso de Teste | CT-02 - Realizar _login_ |
|:--|:--|
|**Requisitos Associados**|RF-006 - A aplicação deve permitir que o usuário faça login em sua conta através do seu e-mail e senha cadastrados.|  
|**Objetivo do teste**|- Permitir que o usuário faça _login_ através do _Site_ ou pelo aplicativo.|
|**Passos**| 1)	Acessar o site ou realizar o _download_ do app na plataforma. <br/> 2) Clicar no botão "Acessar" do menu. <br/> 3) Preencher os campos com o _e-mail_ e senha cadastrados. <br/> 4) Clicar em entrar.|
|**Critérios de Êxito**| - Confirmação do _login_ e redirecionamento para _homepage_ do aplicativo.|

|Caso de Teste | CT-03 - Realizar cadastro de membros |
|:--|:--|
|**Requisitos Associados**|RF-001 - A aplicação deve permitir que o usuário faça o cadastrados dos membros da família.|  
|**Objetivo do teste**|- Permitir que o usuário faça o cadastro dos membros através do _Site_ ou pelo aplicativo.|
|**Passos**| 1)	Acessar o site ou realizar o _download_ do app na plataforma. <br/> 2) Clicar no botão "Acessar" do menu. <br/> 3) Preencher os campos com o _e-mail_ e senha cadastrados. <br/> 4) Clicar em entrar. <br/> 5) Clicar em Membros. <br/> 6) Preencher os campos com o nome do membro e idade.|
|**Critérios de Êxito**| - Confirmação de atualização de cadastro dos membros.|

|Caso de Teste | CT-04 - Realizar gerenciamento do cadastro (Alterar) |
|:--|:--|
|**Requisitos Associados**|RF-007 – A aplicação deve permitir ao usuário gerenciar o cadastro.|
|**Objetivo do teste**|- Permitir que o usuário realize alteração das informações cadastradas.|
|**Passos**|  1) Acessar o site ou realizar o _download_ do app na plataforma. <br/> 2) Clicar no botão "Acessar" do menu. <br/> 3) Preencher os campos com o _e-mail_ e senha cadastrados. <br/> 4) Clicar em entrar. <br/> 5) Digitar os dados a serem alterados. <br/> 6) Clicar no botão "Salvar alterações".|
|**Critérios de Êxito**| - Confirmação de atualização do cadastro.|

|Caso de Teste | CT-05 - Realizar gerenciamento do cadastro (excluir) |
|:--|:--|
|**Requisitos Associados**|RF-007 – O sistema deve permitir ao usuário gerenciar seu cadastro.| 
|**Objetivo do teste**|- Permitir que o usuário exclua sua conta.|
|**Passos**| 1)	Acessar o site ou realizar o _download_ do app na plataforma. <br/> 2) Clicar no botão "Acessar" do menu. <br/> 3) Preencher os campos com o _e-mail_ e senha cadastrados. <br/> 4) Clicar em entrar. <br/> 5) Clicar em entrar. <br/> 6) Clicar em excluir.|
|**Critérios de Êxito**| - Confirmação da exclusão da conta.|
 
|Caso de Teste | CT-06 - Realizar gerenciamento do cadastro de vacinas |
|:--|:--|
|**Requisitos Associados**|RF-009 – O sistema deve permitir ao usuário gerenciar o cadastro das vacinas.|
|**Objetivo do teste**|- Permitir que o usuário realize alteração de vacinas cadastradas.|
|**Passos**| 1)	Acessar o site ou realizar o _download_ do app na plataforma. <br/> 2) Clicar no botão "Acessar" do menu. <br/> 3) Preencher os campos com o _e-mail_ e senha cadastrados. <br/> 4) Clicar em entrar. <br/> 5) Clicar em "Vacinas". <br/> 6) Selecionar a vacina. <br/> 7) Clicar em alterar. <br/> 8) Alterar os dados desejados. <br/> 9) Clicar em salvar.|
|**Critérios de Êxito**| - Confirmação da alteração do cadastro de vacinas.|

|Caso de Teste | CT-07 - Realizar gerenciamento do cadastro de vacinas (excluir)|
|:--|:--|
|**Requisitos Associados**|RF-009 – O sistema deve permitir ao usuário gerenciar o cadastro das vacinas.|
|**Objetivo do teste**|- Permitir que o usuário realize exclusão de vacinas cadastradas. |
|**Passos**| 1)	Acessar o site ou realizar o _download_ do app na plataforma. <br/> 2) Clicar no botão "Acessar" do menu. <br/> 3) Preencher os campos com o _e-mail_ e senha cadastrados. <br/> 4) Clicar em entrar. <br/> 5) Clicar em "Vacinas". <br/> 6) Selecionar a vacina. <br/> 7) Clicar em excluir.|
|**Critérios de Êxito**| - Confirmação da exclusão da vacina.|

|Caso de Teste | CT-08 - Redefinir senha |
|:--|:--|
|**Requisitos Associados**|RF-011 – A aplicação deve permitir ao usuário solicitar a redefinição de sua senha, informando o e-mail cadastrado.  
|**Objetivo do teste**|- Permitir que o usuário redefina sua senha.|
|**Passos**| 1)	Acessar o site ou realizar o _download_ do app na plataforma. <br/> 2) Clicar no botão "Acessar" do menu. <br/> 3) Clicar no link "esqueci minha senha" da página de login. <br/> 5) Digitar _e-mail_ cadastrado e clicar em "recuperar senha".<br/> 6) Clicar no _link_ de redefinição recebido no _e-mail_ cadastrado.<br/> 7) Inserir a nova senha nos campos indicados e clicar no botão “salvar”.|
|**Critérios de Êxito**|- Receber _e-mail_ com _link_ para redefinição de senha.<br/> - Realizar novo _login_ após redefinir senha.|

|Caso de Teste | CT-09 - Acesso as Políticas e Condições de Uso |
|:--|:--|
|**Requisitos Associados**|RF-010 – A aplicação deve permitir acesso à documentação de política de privacidade e termos e condições de uso.  
|**Objetivo do teste**|- Permitir o acesso as políticas e condições de uso.|
|**Passos**| 1)	Acessar o site ou realizar o _download_ do app na plataforma. <br/> 2) Clicar no botão "Cadastrar" do menu. <br/> 3)Clicar em “Políticas e Condições de Uso”.|
|**Critérios de Êxito**|- Apresentar as informações de políticas e condições de uso.|
 
|Caso de Teste | CT-10 - Acesso as vacinas cadastradas |
|:--|:--|
|**Requisitos Associados**|RF-002 – A aplicação deve permitir acesso às vacinas cadastradas.  
|**Objetivo do teste**|- Permitir que o usuário visualize as vacinas cadastradas.|
|**Passos**| 1)	Acessar o site ou realizar o _download_ do app na plataforma. <br/> 2) Clicar no botão "Acessar" do menu. <br/> 3) Preencher os campos com o _e-mail_ e senha cadastrados. <br/> 4) Clicar em entrar. <br/> 5) Clicar em "Vacinas".|
|**Critérios de Êxito**|- Apresentar uma página com as informações das vacinas cadastradas.|

Fonte: Elaborado pelos Autores
