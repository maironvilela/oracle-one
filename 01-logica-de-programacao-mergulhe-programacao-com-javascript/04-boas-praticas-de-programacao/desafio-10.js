function desafio10(){
    enunciadoDesafio10();

    const nota = 8;
    let mensagem = '';

    if(nota >= 7 ){
        mensagem = 'Aprovado';
    }else{
        mensagem = 'Reprovado';
    }
    console.log(mensagem);
}

function enunciadoDesafio10(){
    alert( 'Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else '+
        'para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" '+
        'ou "Reprovado" no console.')

}