# Desafios - Condicionais e Concatenação

### 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
    function desafio01{
        let diaDaSemana = prompt('Qual é o dia da semana? ')

        if( diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo'){
            alert('Bom fim de semana')
        }else{
            alert('Boa Semana')
        }
    }
  

### 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
    function desafio02(){
        let numero = prompt('Informe um número: ');

        if(numero < 0){
            alert("Número informado é Negativo")
        }else{
            alert('Numero informado é positivo')
        }
    }

  


### 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
    function desafio03(){
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
### 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
    function desafio04(){
        const saldoDaConta = 100;
        alert(`O saldo da conta atualmente é de R$ ${saldoDaConta}`)
    } 

### 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
    function desafio05(){
        let nome = prompt('Informe seu nome: ')
        alert(`Seja Bem Vindo ${nome}`)
    }
 