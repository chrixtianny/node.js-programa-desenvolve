const texto1 = "Hello, world!";
const texto2 = 'Hello, world!';
const frase = 'And I think to myself "What a wonderful world"';
console.log(texto1, texto2, frase);

// concatenação

const nome = "João";
const nome2 = "Maria";

console.log('Somos ' + nome + ' e ' + nome2)

//unicode 
//padrão UTF-16
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// padronizando entrada de texto

const cidade = "Maceió";
const input = "MACEIÓ";
const inputMinusculo = input.toLowerCase();
const cidadeMinusculo = cidade.toLowerCase();

console.log(cidadeMinusculo === inputMinusculo);

// quantidade de caracteres

const senha = "maceioMinhaSereia"
console.log(senha.length)
