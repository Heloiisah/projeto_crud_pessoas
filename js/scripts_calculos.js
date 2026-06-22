//CRIANDO A FUNÇÃO PARA CALCULAR OS DESCONTOS
const calcDesconto = (objPessoa) => {
    let resultCalc = ''

    if ((objPessoa.idade < 18) || (objPessoa.renda <= 1700)) {
        resultCalc = 'Isento de desconto'
    }else if(objPessoa.renda <= 5000){
        resultCalc = objPessoa.renda * 0.05
    }else if(objPessoa.renda <= 8000){
        resultCalc = objPessoa.renda * 0.10
    }else if(objPessoa.renda <= 12000){
        resultCalc = objPessoa.renda * 0.15
    }else{
        resultCalc = objPessoa.renda * 0.20
    }

    return resultCalc
}

export{calcDesconto}