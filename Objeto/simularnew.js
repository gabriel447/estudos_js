// o js usa o prototype pra lidar com herança.

function Aula(nome, videoid) {
    this.nome = nome
    this.videoid = videoid
}

const aula1 = new Aula("Bem Vindo!", 123)
const aula2 = new Aula("Ate Breve!", 456)

console.log(aula1, aula2)

//funcao pra simular o ne
//operador spread rest ...params

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, "Bem Vindo!", 123)
const aula4 = novo(Aula, "Ate Breve!", 456)

console.log(aula3, aula4)

