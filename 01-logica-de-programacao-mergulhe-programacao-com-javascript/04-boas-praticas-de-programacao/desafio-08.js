
function desafio08(){
    enunciadoDesafio08();

    let mensagem = '';
    const numero = prompt('Informe um número');

    if(numero == 0){
        mensagem = 'nulo (0)'
    }else{
        if (numero > 0){
            mensagem = 'positivo'
        }else{
            mensagem = "negativo"
        }
    }

    console.log(`O numero informado é ${mensagem}`)

}

function enunciadoDesafio08(){
    alert('Crie uma variável "numero" e peça um valor com prompt verifique se é positivo '+
          'negativo ou zero. Use if-else para imprimir a respectiva mensagem.')
}

