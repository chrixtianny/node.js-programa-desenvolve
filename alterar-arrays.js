//SLICE

/*
const nomes = ['João', 'Felipe', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Chris', 'Ingrid', 'Karla', 'João Gabriel', 'André', 'Gabriel', 'Péricles', 'Ian']

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da Sala 1: ${sala1}`);
console.log(`Alunos da Sala 2: ${sala2}`);
*/

//SPLICE
/*
const listaDeChamada = ['João', 'Ana', 'Caio', 'Marjorie', 'Lara', 'Leo'];
//com retirada
listaDeChamada.splice(1, 2, 'Rodrigo');
//sem retirada
listaDeChamada.splice(2, 0, 'Rodrigo');
console.log(`Lista de Chamada: ${listaDeChamada}`)

*/

//CONCAT

const turmaPython = ['Melissa', 'Lara', 'Julia'];
const turmaC = ['Leo', 'Jess', 'Lily'];

const turmasUnificadas = turmaPython.concat(turmaC);
console.log(turmasUnificadas);