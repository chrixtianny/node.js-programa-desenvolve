// a diferença entre array e objetos
// arrays são para dados simples
// objetos podem relacionar um dado a outro

const arrayCliente = ["nome", "André", "idade", 36];

const objetoCliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678900",
    email: "andre@algumemail.com"
}

//como manipular Objetos
//acessando valores de um objeto

console.log(`Meu nome é ${objetoCliente.nome} e tenho ${objetoCliente.idade} anos.`)
console.log(objetoCliente.cpf.substring(0,3));

//alterando valores de um objeto

objetoCliente.nome = "André Luiz";
objetoCliente.idade = objetoCliente.idade + 1;
objetoCliente.cpf = "12345678900";
objetoCliente.fones = ["99999999", "88888888"];

console.log(objetoCliente);

//acessar dados com colchetes 

console.log(objetoCliente["nome"]);

//adicionar novos atributos

objetoCliente.sobrenome = "Silva";
objetoCliente["nome do pai"] = "João"; // entra junto ao sobrenome

console.log(objetoCliente);

//deletar atributos

delete objetoCliente.nome;
delete objetoCliente["nome do pai"];

console.log(objetoCliente);

const PeterParker = {
    nome: "Peter Parker",
    idade: 18,
    identidade: "46545645",
    cidade: "New York",
    email: "peterparker@email.com",
    telefone: "999999999",
    profissao: "estudante",
}

PeterParker.cpf = "134524894-22"
console.log(PeterParker)