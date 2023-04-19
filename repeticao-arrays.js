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
