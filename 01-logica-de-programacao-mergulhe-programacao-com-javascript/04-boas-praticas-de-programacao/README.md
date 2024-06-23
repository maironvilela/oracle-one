
#  Desafios - Boas práticas de programação

### 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
    
        function desafio01(){
            console.log("Seja Bem Vindo(a)")
        }
     
### 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
    
        function desafio02(){
            const nome = "Mairon Vilela";
            console.log(`Olá ${nome}`);
        }
    
### 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
    
        function desafio03(){
            const nome = "Mairon Vilela"
            alert(`Olá ${nome}`)
        }
    
### 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
    
        function desafio04(){
            const linguagemFavorita = prompt('Qual a linguagem de programação que você mais gosta? ')
            console.log(`Linguagem de programação favorita: ${linguagemFavorita}`)
        }
    
### 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
    
        function desafio05(){
            const valor1 = 12;
            const valor2 = 7;

            const resultado = valor1 + valor2;

            console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
        }
    
### 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
    
        function desafio06(){
            const valor1 = 12;
            const valor2 = 13;

            const resultado = valor1 - valor2;

            console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);
        }
    
### 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
    
        function desafio07(){
            enunciadoDesafio()
            const idade = prompt('Informe sua idade: ')
            let mensagem = ''

            if(idade >= 18){
                mensagem = 'Usuario é maior de idade'
            }else{
                mensagem = 'Usuario é menor de idade'
            }
            
            console.log(mensagem);
        }
    
### 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
    
        function desafio08(){
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
    
    
### 9. Use um loop while para imprimir os números de 1 a 10 no console.
    
        function desafio09(){
            enunciadoDesafio();

            let cont = 1;

            while(cont <=10){
                console.log(cont);
                cont++;
            }
        }
    
### 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
    
        function desafio10(){
            const nota = 8;
            let mensagem = '';

            if(nota >= 7 ){
                mensagem = 'Aprovado';
            }else{
                mensagem = 'Reprovado';
            }
            console.log(mensagem);
        }
    
### 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
    
        function desafio11(){
            enunciadoDesafio11();
        
            const numero = Math.random()
            console.log( numero )
        }
    
### 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
    
        function desafio12(){
            enunciadoDesafio();
            const numero = parseInt(Math.random() * 10 + 1)
            console.log(numero)
        }
    

### 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
    
        function desafio13(){
            enunciadoDesafio()
            const numero = parseInt(Math.random() * 1000 + 1);
            console.log(numero)
        }
    