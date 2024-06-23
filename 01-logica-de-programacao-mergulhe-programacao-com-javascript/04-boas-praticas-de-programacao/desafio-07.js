 function desafio07(){
   enunciadoDesafio07()
   const idade = prompt('Informe sua idade: ')
   let mensagem = ''

   if(idade >= 18){
      mensagem = 'Usuario é maior de idade'
   }else{
      mensagem = 'Usuario é menor de idade'
   }
   
   console.log(mensagem);
}

function enunciadoDesafio07(){
   alert('Peça ao usuário para inserir sua idade com prompt. Com base na idade '+
    'inserida, utilize um if para verificar se a pessoa é maior ou menor de '+
    'idade, exibindo uma mensagem apropriada no console. ')
}