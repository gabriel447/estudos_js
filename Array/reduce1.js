const alunos = [
  { nome: "Joao", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: false },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    return acumulador + atual;
  }, 0);

console.log(resultado);
