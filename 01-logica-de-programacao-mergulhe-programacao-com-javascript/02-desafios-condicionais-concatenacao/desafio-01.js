function desafio01(){
    enunciadoDesafio01();
    
    let diaDaSemana = prompt('Qual é o dia da semana? ')

    if( diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo'){
        alert('Bom fim de semana')
    }else{
        alert('Boa Semana')
    }
    
}

function enunciadoDesafio01(){
    alert('Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!')
}
