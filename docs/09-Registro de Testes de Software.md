# 9. Registro de Testes de Software

Relatório com os resultados obtidos nos testes de _software_ realizados na aplicação pela equipe, baseado em um plano de testes pré-definido.


## 9.1 Avaliação

Quadro 11 - Registro dos Testes

|Caso de Teste |Ação                                 |Resultado Esperado                               |Resultado Obtido                            |
|--------------|-------------------------------------|-------------------------------------------------|--------------------------------------------|
|CT-01         |Criar conta                    |Permitir que o usuário se cadastre na plataforma.|Objetivo alcançado. |
|CT-02         |Realizar login                       |Permitir que o usuário faça login na plataforma. |Objetivo alcançado. |
|CT-03         |Realizar gerenciamento do cadastro (Editar)  |Permitir que o usuário altere suas informações cadastradas. |Objetivo alcançado parcialmente. |
|CT-04         |Realizar gerenciamento do cadastro (Excluir) |Permitir que o usuário exclua sua conta.|Objetivo alcançado parcialmente. |
|CT-05         |Realizar cadastro de membro            |Permitir que o usuário realize o cadastro dos membros familiares.|Objetivo alcançado parcialmente. |
|CT-06         |Realizar cadastro de vacina    |Permitir que o usuário realize o cadastro das vacinas      |Objetivo alcançado parcialmente. |
|CT-07         |Redefinir Senha                      |Permitir que o usuário redefina sua senha. |Em desenvolvimento. |
|CT-08         |Acesso as Políticas e Condições de Uso |Permitir o acesso as políticas e condições de uso.  |Objetivo alcançado. |
|CT-09         |Lembrar vacina              |Permitir que o usuário seja alertado das próximas vacinas |Em desenvolvimento. |

Fonte: Elaborado pelos Autores

## 9.2 Relatório do Teste de Software

Quadro 12 - Resultado

|Caso de Teste |Ação                                           |Relatório                   |
|--------------|-----------------------------------------------|----------------------------|
|CT-01         |Criar conta                                    |Resultado obtido com êxito. |
|CT-02         |Realizar login                                 |Resultado obtido com êxito. |
|CT-03         |Realizar gerenciamento do cadastro (Editar)    |Objetivo alcançado parcialmente. Faltou implementar o método Update. |
|CT-04         |Realizar gerenciamento do cadastro (Excluir)   |Objetivo alcançado parcialmente. Faltou implementar o método Delete. |
|CT-05         |Realizar cadastro de membro                    |Objetivo alcançado parcialmente. Faltou implementar o método Post. |
|CT-06         |Realizar cadastro de vacina                    |Objetivo alcançado parcialmente. Faltou implementar o método Post. |
|CT-07         |Redefinir senha                                |Resultado alcançado parcialmente, pois a funcionalidade para o usuário receber o _link_ para redefinir sua senha não foi concluída. |
|CT-08         |Acesso as Políticas e Condições de Uso         |Resultado obtido com êxito. |
|CT-09         |Lembrar vacina                        |Não foi possível implementar o alerta em tempo hábil. |

Fonte: Elaborado pelos Autores
