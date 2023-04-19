/* 
const cliente = {
    nome: 'Pedro',
    idade: 32,
    cpf: '12345678900',
    email: 'pedro@emaildopedro.com',
    fones: ["888887558", "999998878"]
}

cliente.fones.forEach(fone => console.log(fone))

cliente.dependentes = {
    nome: "Sarah",
    parentesco: "filha",
    dataNascimento: "20/03/1995"
}

console.log(cliente)

cliente.dependentes.nome = "Sarah Poncio"

console.log(cliente)


*/
// listas em objetos

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12544786434",
    email: "abc@abc.com",
    dependentes: [{
        nome: "Sarah Leticia",
        parentesco: "filha",
        dataNascimento: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Gabriela Sarah",
    parentesco: "filha",
    dataNascimento: "04/01/2014"
})

console.log(cliente)

const filhaCacula = cliente.dependentes.filter(dependente => dependente.dataNascimento==="04/01/2014")

console.log(filhaCacula[0].nome)



