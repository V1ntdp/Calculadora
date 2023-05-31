

function inserir(numero){
   var num = document.querySelector('#resultado').innerHTML;
   document.getElementById('resultado').innerHTML = num + numero;

    // aqui a função inserir vai receber um paremetro chamado numero que ativara a id "resultado"
    // e toda vez que clicado em um botão com a função inserir, ele ira receber dentro dessa Id o valor clicado e assim ira sobreescrever a função que esta recebendo o parametro numero

    //    aqui estou dizendo para a id ir adicionando o valor da variavel "num" e o numero que está vindo do paremetro "numero"
   
}


function limpar(){
   
    document.getElementById('resultado').innerHTML = "";

     // função para quando eu clicar no botão "C", ele chamar a id resultado e receber valor nenhum.
}

function apagar(){

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)

    // função para quando eu clicar no botão "<" ele ir apagando/diminuindo -1.

    // aqui a id vai receber o valor do resultado e ira pegar todos os caracteres dentro de resultado e diminuira -1.
    
    // -substring é: uma sequência de caracteres dentro de uma sequência maior. Ou seja, cada caractere dentro de uma string já é uma substring dela e as combinações que podem ser feitas também são.

}

function calcular(){

    var calcular = document.getElementById('resultado').innerHTML;

    if(calcular){
        document.getElementById('resultado').innerHTML = eval(calcular);
    }else{
        document.getElementById('resultado').innerHTML = "Nada A Calcular"
    }

    // a função calcular assim que ativada, ira criar uma variavel recebendo a mesma id "resultado".

    // depois ira fazer uma verificação, if"se" tiver alguma coisa na variavel calcular.

    // se for verdade, ele ira adicionar a id "resultado" uma função "eval" que faz o calculo por si só

    //  caso não tenha nada na var calcular, ira transmitir a msg: "Nada A Calcular"

    // -EVAL: A função Eval avalia o expressão de cadeia de caracteres e retorna seu valor
}