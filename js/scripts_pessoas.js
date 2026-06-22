// PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')

// CRIANDO ARRAY DE PESSOAS
const pessoas = []

// CAPTURAR EVENTO SUBMIT DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) => {

    // IMPEDIR O RECARREGAMENTO DA PÁGINA
    evt.preventDefault()

    // CRIAR OBJETO FORMDATA
    const dadosFormPessoa = new FormData(formPessoa)

    // CRIAR OBJETO PESSOA
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }

    // ADICIONAR PESSOA AO ARRAY
    addPessoa(pessoa)

    // LIMPAR FORMULÁRIO
    formPessoa.reset()
})

// FUNÇÃO PARA ADICIONAR PESSOA
const addPessoa = (objPessoa) => {

    pessoas.push(objPessoa)

    listPessoa()
}

// FUNÇÃO PARA LISTAR PESSOAS
const listPessoa = () => {

    divLista.innerHTML = ''

    pessoas.forEach((elem, i) => {

        divLista.innerHTML += `
            ${i + 1} - ${elem.nome} - ${elem.idade} - ${elem.renda}<br>
        `
    })
}