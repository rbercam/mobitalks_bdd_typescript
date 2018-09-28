#language: pt
@CadastroBanco
Funcionalidade: Cadastrar um novo banco

Esquema do Cenário: Manter dados de um novo Banco
    Quando realizar uma requisição do tipo <tipo>
    Então a API deverá retornar os dados <retorno>
    E exibir o código <codigo>
    E a mensagem <mensagem>

    Exemplos:
    |  tipo  |    retorno    | codigo | mensagem  |
    | "POST" | "do Cadastro" |    201 | "Created" |