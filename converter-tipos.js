//tipo de dado
//booleanos

//conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); //false
console.log(numero == numeroString); //true

//conversão explícita

console.log(numero === Number(numeroString)); //true
console.log(numero + Number(numeroString));

//Number()
//String()
