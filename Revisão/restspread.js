//em parâmetro de função
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
  } 
  
console.log(total(2, 3, 4, 5, 6));

//em objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//em array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)