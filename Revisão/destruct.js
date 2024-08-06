const dev = {
    'nome': 'Gabriel',
    'idade': '30',
    'stack': 'fullstack'
};

//acessando atributos de objeto
console.log(dev.nome);
console.log(dev.idade);
console.log(dev.stack);

const { nome, idade, stack } = dev;

//fazendo destructuring
console.log(nome);
console.log(idade);
console.log(stack);
