// callback
/*
const nomes = ['Ana', 'João', 'Léo', 'Paula']

nomes.forEach(imprimirNomes);

function imprimirNomes(nome){
    console.log(nome)
}

// map

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosEmDobro = numeros.map(dobrar);

function dobrar(numero){
    return numero * 2;
}

console.log(numerosEmDobro)

//alterando strings com map

const nomes = ['Ana', 'João', 'Léo', 'Paula']

const nomesEmCaixaAlta = nomes.map(nome => nome.toUpperCase());

console.log(nomesEmCaixaAlta)
*/

//atualizar notas com ponto extra
const notas = [10, 9, 8, 7, 6];

//const notasAtualizadas = notas.map(nota => nota == 10 ? nota : nota++) retorna antes de somar
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota) // soma antes de retornar o valor
console.log(notasAtualizadas)

// filter
/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosPares = numeros.filter(numeroPar);

function numeroPar(numero){
    return numero % 2 === 0;
}

console.log(numerosPares)
*/

// reduce
//media de notas das turmas de Python, JS e Java

const Python = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const Java = [6, 5, 8, 9, 5, 6]
const JavaScript = [7, 9.5, 8, 9, 6]

function mediaTurmas (notasTurma) {
    const somaDasNotas = notasTurma.reduce((acumulador, valorAtual) => 
    valorAtual + acumulador, 0)
    return somaDasNotas/notasTurma.length
}

console.log(`A média da turma de JavaScript é ${mediaTurmas(JavaScript)}`)
console.log(`A média da turma de Python é ${mediaTurmas(Python)}`)
console.log(`A média da turma de Java é ${mediaTurmas(Java)}`)
