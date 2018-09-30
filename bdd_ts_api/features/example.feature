#language: pt
@CadastroBanco
Funcionalidade: Manter dados de um Banco

Esquema do Cenário: Manter dados de um novo Banco <tipo> Request
    Quando realizar uma requisição do tipo <tipo>
    Então a API deverá retornar os dados <retorno>
    E exibir o código <codigo>
    E a mensagem <mensagem>

    Exemplos:
    |  tipo  |    retorno    | codigo | mensagem  |
    | "POST" | "do Cadastro" |    201 | "Created" |
    | "GET"  | "da Consulta" |    200 | "OK"      |
    | "PUT"  | "da Alteração"|    200 | "OK"      |