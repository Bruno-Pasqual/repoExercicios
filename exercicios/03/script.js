/* Crie um programa que solicite ao usuário que digite um número inteiro, positivo e diferente de zero.

Valide a entrada de dados e informe se o número digitado é par ou ímpar. */

function executaRotina() {
  let escolha = Number(prompt('Digite um número'));
  console.log(typeof escolha);

  if (escolha === '') {
    console.log('Digite algum número');
    executaRotina();
  } else if (escolha === 0) {
    alert('O número precisa ser diferente de 0');
    executaRotina();
  } else if (escolha < 0) {
    alert('Apenas números positivos');
    executaRotina();
  } else {
    escolha % 2 != 0 ? alert('O número é impar') : alert('O número é par');
  }
}

executaRotina();
