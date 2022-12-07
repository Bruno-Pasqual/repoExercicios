//! Exercício 15
//todo Enunciado \/
/* Crie uma aplicação que solicite ao usuário o seu cargo e o seu salário. A aplicação deve retornar a atualização salarial do usuário de acordo com a regra:

Para estagiários, atualizar o valor em 10%.
Para trainee, atualizar o valor em 9%.
Para júnior, atualizar o valor em 8%.
Para pleno, atualizar o valor em 7%.
Para sênior, atualizar o valor em 6%.
Para outros casos, informar que o cargo não é conhecido pelo sistema. */

function defineSalario() {
  //Função que irá definir o salário e também realizar a sua validação
  const salario = prompt('Por favor, informe o seu salário ');

  if (salario === '') {
    alert('não deixe campos em branco');
    defineSalario();
  } else if (Number(salario) === 0) {
    alert('Nesse caso, é melhor ir procurar um emprego 😅');
    defineSalario();
  } else if (isNaN(Number(salario))) {
    alert('Utilize apenas números para informar seu salário');
    defineSalario();
  } else if (Number(salario) < 0) {
    alert('O salário deve ser positivo e diferente de 0');
    defineSalario();
  } else {
    defineCargo(salario);
  }
}

function defineCargo(salario) {
  //Função que irá definir o cargo e também realizar a sua validação
  const cargo = prompt(
    'Qual é o seu cargo?\n\nOpções:\nestagiário\ntrainee\njunior\npleno\nsênior'
  );

  if (cargo === '') {
    alert('Não deixe campos em branco');
    defineCargo();
  } else if (!apenasLetras(cargo)) {
    alert('Utilize apenas letras para informar seu cargo');
    defineCargo();
  } else {
    calculaReajuste(cargo, salario);
  }
}

function apenasLetras(string) {
  //Função usada para checar se dentro da string existem apenas letras
  return /^[a-zA-Z]+$/.test(string);
}

function calculaReajuste(cargo, salario) {
  if (cargo === 'estagiario') {
    alert(
      `Cargo: ${cargo}\nAntigo salário: ${salario}\nNovo salário: ${(
        salario * 1.1
      ).toFixed(2)} (+ 10%)`
    );
  } else if (cargo === 'trainee') {
    alert(
      `Cargo: ${cargo}\nAntigo salário: ${salario}\nNovo salário: ${(
        salario * 1.09
      ).toFixed(2)} (+ 9%)`
    );
  } else if (cargo === 'junior') {
    alert(
      `Cargo: ${cargo}\nAntigo salário: ${salario}\nNovo salário: ${(
        salario * 1.08
      ).toFixed(2)} (+ 8%)`
    );
  } else if (cargo === 'pleno') {
    alert(
      `Cargo: ${cargo}\nAntigo salário: ${salario}\nNovo salário: ${(
        salario * 1.07
      ).toFixed(2)} (+ 7%)`
    );
  } else if (cargo === 'senior') {
    alert(
      `Cargo: ${cargo}\nAntigo salário: ${salario}\nNovo salário: ${(
        salario * 1.06
      ).toFixed(2)} (+ 6%)`
    );
  } else {
    alert('Cargo não reconhecido pelo sistema, tente novamente');
    defineCargo(salario);
  }
}

defineSalario();
