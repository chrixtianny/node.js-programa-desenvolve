//funções em objetos
/*
const cliente = 
    {
    nome: "André",
    idade: 36,
    cpf: "12544786434",
    email: "abc@abc.com",
    dependentes: [{
        nome: "Sarah Leticia",
        parentesco: "filha",
        dataNascimento: "20/03/2011"
    }],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor;
    }, 
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

//

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento

// for... in

let relatorio = "";
for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
    relatorio += `${info} ==> ${cliente[info]} 
`
}
}

console.log(relatorio)

// function oferecer seguro

function oferecerSeguro(obj) {
    const propsCliente = Object.keys(obj);
    if (propsCliente.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)
*/
// espalhamento

const clientes = [
    {
    nome: "André",
    idade: 36,
    cpf: "12544786434",
    email: "abc@abc.com",
    dependentes: [{
        nome: "Sarah Leticia",
        parentesco: "filha",
        dataNascimento: "20/03/2011"
    }],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor;
    }}, 
    {
    nome: "Siclano",
    idade: 30,
    cpf: "12544786434",
    email: "siclano@email.com",
    dependentes: 
    [{
        nome: "Siclano Junior",
        parentesco: "filho",
        dataNascimento: "30/03/2004"
    },
    {
        nome: "Gabriela Sarah",
        parentesco: "filha",
        dataNascimento: "26/08/1999"
    }],
    }
]

const listaDeDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.log(listaDeDependentes)

console.table(listaDeDependentes)

// reduce com objetos
/*

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}

console.log(resultado)
*/