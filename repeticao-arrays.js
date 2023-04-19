//If

/*
const nomesAlunos = ['João', 'Felipe', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Chris', 'Ingrid', 'Karla', 'João Gabriel', 'André', 'Gabriel', 'Péricles', 'Ian'];
const mediasDosAlunos = [10, 7, 9, 8, 9.5, 4, 8.5, 7, 3, 2];

let listaDeAlunosENotas = [nomesAlunos, mediasDosAlunos];

const exibirNomeNota = (nomesAlunos) => {
    if (listaDeAlunosENotas[0].includes(nomesAlunos)){ indice = listaDeAlunosENotas[0].indexOf(nomesAlunos) 
        return listaDeAlunosENotas[0][indice] + ', sua média é ' + listaDeAlunosENotas[1][indice]} else {
            return "Aluno não cadastrado"
        }
} 

console.log(exibirNomeNota("Chris"))

*/

// For
/*
const lista = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < lista.length; i++){
    console.log(`O índice de ${lista[i]} é ${i}`);
}


const notas = [10, 6.5, 8, 9];
let somaNotas = 0;


/*for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}


// For Each
notas.forEach(notas => {somaNotas += notas})

let media = somaNotas / notas.length;

if (media > 7){ 
    console.log(`O aluno foi aprovado com média ${media}`)
} else if (media >= 4 && media < 7){
    console.log(`O aluno está de recuperação com média ${media}`)}
    else {
        console.log(`O aluno foi reprovado com média ${media}`)
    }


*/


const notasTurma = [[10, 6.5, 8, 9], [10, 6.5, 8, 7.5], [8, 5, 4, 2], [4, 5, 8, 10]];
let somaDasNotas = 0;
let media = 0;

for (let i = 0; i < notasTurma.length; i++){notasTurma[i].forEach(element => {somaDasNotas += element})
    media = somaDasNotas / notasTurma.length;
    somaDasNotas = 0;
    console.log(media)
}
