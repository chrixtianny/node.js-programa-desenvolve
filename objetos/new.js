/*
function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}


const novoUser = new User('Chris', 'c@email.com')
console.log(novoUser.exibirInfos())


function Admin(role) {
    User.call(this, 'Julina', 'j@email.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUsuario = new Admin('admin')
console.log(novoUsuario.exibirInfos())
console.log(novoUsuario.role)



const user = {
    exibirInfos: function(nome, email) {
        return `${nome}, ${email}`
    }
}

const novoUsuario = Object.create(user)
console.log(novoUsuario.exibirInfos('Chris', 'c@email.com'))
console.log(user.isPrototypeOf(novoUsuario))
*/

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUsuario = Object.create(user)
novoUsuario.init('Taylor', 't@temail.com')
console.log(novoUsuario.exibirInfos())