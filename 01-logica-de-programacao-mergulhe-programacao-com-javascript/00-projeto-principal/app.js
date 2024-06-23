alert('Boas vindas ao jogo do número secreto!!')
const numeroMaximo = prompt('Informe número maximo: ')
const numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute = 0;
let tentativas = 0;

while(chute != numeroSecreto){
    tentativas++;
    chute = prompt(`Escolhe um numero entre 1 e ${numeroMaximo}`)

    if( chute == numeroSecreto ){
        alert(`Voce descobriu o número secreto com ${tentativas} tentativas`);
     }else{
        
        if(chute > numeroSecreto){
            alert('Número secreto é menor')
        }else{
            alert('Número secreto é Maior')
        } 
    }
}
