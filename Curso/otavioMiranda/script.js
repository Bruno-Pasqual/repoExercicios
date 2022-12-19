//! Clonando um objeto para outro, de forma que ambos sejam independentes
/* 
const produto = { nome: 'Produto', preco: 1.8 };
const caneca = { ...produto };
console.log(caneca); */

//! Como ver as keys de um objeto ----

/* const variavel = Object.keys(produto);
console.log(variavel); */

//!Prototypes ----------------------------------------------------------------

//Prototypes permitem são objetos que são linkados direto a uma função construtora, de forma que todos os objetos que foram criados por essa, terão acesso a esse prototype que pode conter funções e outras coisas.

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'Miranda');
console.log(pessoa1.nomeCompleto());
