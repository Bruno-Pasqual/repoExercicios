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

/* function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'Miranda');
console.log(pessoa1.nomeCompleto()); //Luiz miranda */

//
/* function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

const produto1 = new Produto('mouse', 200);
console.log(produto1);

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  this.estoque = estoque;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('caneca azul', 13, 'Plástico', 5);
console.log(caneca); */

//! Exercício validador de cpf ------------------------------------------------

function validaCPF(cpf) {
  //Deixando apenas números na string
  let cpfLimpo = cpf.replace(/\D+/g, '');
  //transformando string em array
  cpfLimpo = [...cpfLimpo];
  //Aramazenando os dois digitos finais em outra variável
  let doisDigitos = cpfLimpo.slice(-2);
  //Deixando apenas os 9 digitos na variável cpf
  cpfLimpo = cpfLimpo.slice(0, -2);

  //todo Começando a lógica ----
  let acumulador = 0;

  cpfLimpo.map(function (element, index) {
    let temp = Number(element);
    let arrayMultiplicacao = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    temp = temp * arrayMultiplicacao[index];
    acumulador += temp;
  });

  let primeiroDigito = 11 - (acumulador % 11);
  //Utilizarei o próprio array doisDigitos para fazer uma validação ao final do código
  primeiroDigito == doisDigitos[0]
    ? (doisDigitos[0] = 1)
    : (doisDigitos[0] = 0);

  //Incluindo a variável primeiro digito na string do cpf para a segunda parte.
  cpfLimpo.push(String(primeiroDigito));

  //todo  Realizando a lógica para o segundo digito
  acumulador = 0;
  cpfLimpo.map(function (element, index) {
    let temp = Number(element);
    let arrayMultiplicacao = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    temp = temp * arrayMultiplicacao[index];
    acumulador += temp;
  });

  let segundoDigito = 11 - (acumulador % 11);
  segundoDigito == doisDigitos[1]
    ? (doisDigitos[1] = 1)
    : (doisDigitos[1] = 'deu ruim 2');
  console.log(
    doisDigitos[0] == 1 && doisDigitos[1] == 1 ? 'cpf valido' : 'cpf inválido'
  );
}

validaCPF('430.713.268-81');
