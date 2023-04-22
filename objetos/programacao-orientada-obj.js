const user = {
    nome: "Christianny",
    email: "c@email.com",
    nascimento: "1995/03/10",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}
/*
user.exibirInfos()
const exibir = user.exibirInfos     sozinha retorna UNDEFINED
exibir()                              retornaria UNDEFINED

const exibir = function(){
    console.log(this.nome)
}
const exibirNome = exibir.bind(user)
exibirNome()
*/

const admin = {
    nome: "Kelly",
    email: "ckelly@email.com",
    role: "admin",
    criarCurso(){
        console.log("Curso criado!")
    }
}

Object.setPrototypeOf(admin, user) 
/* protótipos são a forma que o JS usa para que objetos 
herdem recursos uns dos outros */
admin.criarCurso()
admin.exibirInfos()

