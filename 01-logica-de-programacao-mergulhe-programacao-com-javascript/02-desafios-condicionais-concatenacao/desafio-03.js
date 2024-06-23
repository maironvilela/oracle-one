function desafio03(){
    enunciadoDesafio03();

    let primeiraPontuação = prompt('Informa a primeira pontuação: ')
    let segundaPontuação = prompt('Informa a segunda pontuação: ')
    let terceiraPontuação = prompt('Informa a terceira pontuação: ')

    const total = Number(primeiraPontuação) + Number(segundaPontuação) + Number(terceiraPontuação)
    console.log(total)

    if(total >= 100){
        alert(`parabens, voce venceu com ${total} pontos`)
    }else{
        alert(`Tente novamente conseguir apenas ${total} pontos`)
    }
}

function enunciadoDesafio03(){
    alert('Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar."')
}
