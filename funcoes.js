function imprimirTexto(texto){
    console.log(texto);
}

imprimirTexto("Olá, mundo!");
imprimirTexto("Boa noite!");

// outras formas de escrever funções

function soma(){
    return 2 + 2;
}

//console.log(soma())
imprimirTexto(soma());

// expressão de função
/* diferença principal: HOISTING
função com comportamento de variavel*/
const subtracao = function(num1, num2) {return num1 - num2}
console.log(subtracao(1, 3))

// arrow function

const apresentar = nome => `meu nome é ${nome}`;
const nome = "Chris";

console.log(apresentar(nome));

const somar = (number1, number2) => number1 + number2;
console.log(somar(1, 2));

const subtrair = (numero1, numero2) => {
    if (numero1 > 10 || numero2 > 10) {
        return "somente números de 1 a 9"
    } else { 
        return numero1 - numero2;
    }
}

console.log(subtrair(9,1))