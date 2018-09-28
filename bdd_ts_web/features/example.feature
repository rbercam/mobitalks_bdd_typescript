#language: pt
@PesquisaTecnologias
Funcionalidade: Pesquisar por tecnologias no Google

Esquema do Cenário: Pesquisar por <Tecnologia>
    Dado o endereço do Google
    Quando realizar a pesquisa por <Tecnologia>
    Então o Google deve exibir o resultado da pesquisa sobre <Tecnologia>

Exemplos: 
|    Tecnologia    |
| "TypeScript"     |
| "Angular"        |
| "EcmaScript"     |
| "Json Web Token" |
