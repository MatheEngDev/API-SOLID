# app

GympPass style app.


## RFS (Requisitos Funcionais)
<!-- são funcionalidades da aplicação, o que ela pode fazer -->

 - [] deve ser possivel (usuário) se cadastrar;
 - [] deve ser possivel (usuário) se autenticar;
 - [] deve ser possivel (usuário) obter perfil de um usuário logado;
 - [] deve ser possivel (usuário) obter o número de check-ins realizados pelo usuário logado;
 - [] deve ser possivel (usuário) obter seu historico de check-in;
 - [] deve ser possivel (usuário) buscar academias próximas;
 - [] deve ser possivel (usuário) buscar academias pelo nome;
 - [] deve ser possivel (usuário) realizar check-in em uma academia;
 - [] deve ser possivel (usuario) validar o check-in de um usuário;
 - [] deve ser possivel (usuário) cadastrar uma academia;
 

## RNs (Regra de negócio)
<!--são regras que estão ligadas a função e permissões/regra para usa-lá  -->

 - [] o usuário não deve poder se cadastrar com um e-mail duplicado
 - [] o usuário não pode fazer dois check-in no mesmo dia;
 - [] o usuário não pode fazer check-in se estiver perto (100m) perto da academia;
 - [] o check-in so pode ser validado 20 minutos após criado;
 - [] o check-in so pode ser validado por administradores:
 - [] academia so pode ser cadastrada por administradores;
## RNFs (Requisitos não-Funcionais)
<!-- são requisitos técnicos para funcionar -->

 - [] a senha do usuario precisa estar criptografada
 - [] os dados da aplicação precisa, estar persistidos em um banco postgreSQL;
 - [] todas listas de daods precisam estar paginadas com 20 itens por pagina;
 - [] o usuário deve ser identificado por um JWT (JSON Web Token)