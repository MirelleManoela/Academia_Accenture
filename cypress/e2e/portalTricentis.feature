#utf-8
#language: pt

Funcionalidade: Preenchimento das abas
    Cenário: Validação do preenchimento das abas no portal da tricentis
        Dado que acesso o portal tricentis
        Quando preencho os dados na aba Enter Vehicle Date
        E preencho os dados na aba Enter Insurant Date
        E preencho os dados na aba Enter Product date
        E seleciono a opção platina na aba Select Price Option
        Então a aba send quote ficará disponivel para edição