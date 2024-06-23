# Desafios - Condicionais-concatenacao

### 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
    function desafio01(){
        let cont = 1;
        while(cont <=10){
            alert(cont)
            cont++
        }
    }

### 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
    function desafio02(){
        let cont = 10;
        while(cont >=0){
            alert(cont)
            cont--
        }
    }



### 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
    function desafio03(){
        let numero = prompt('Informe um número: ');
        while(numero >= 0){
            alert(numero)
            numero--;
        }
    }

### 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
    function desafio04(){
        let numero = prompt('Informe um número: ');
        let cont = 0;
        while(cont <= numero){
            alert(cont)
            cont++
        }
    }