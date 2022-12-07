/* Crie um programa que solicite ao usuário que digite um número inteiro, positivo e diferente de zero.

Valide a entrada de dados e informe se o número digitado é par ou ímpar. */

/* function executaRotina() {
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


 */

//!Questão 4
/* Criar um programa que obtenha dois números inteiros diferentes, valide se a entrada está correta e informe qual dos dois é o maior.

 */

/* function executaCodigo() {
  const numero1 = prompt('Digite um número');
  const numero2 = prompt('Digite um número');

  if (numero1 === '' || numero2 === '') {
    alert('Digite um número para ambos');
    executaCodigo();
  } else if (isNaN(Number(numero1)) || isNaN(Number(numero2))) {
    alert('Digite apenas números');
    executaCodigo();
  } else if (!numero1 || !numero2) {
    alert('algum dos números não foi passado');
    executaCodigo();
  } else if (
    !Number.isInteger(Number(numero1)) ||
    !Number.isInteger(Number(numero2))
  ) {
    alert('Apenas números inteiros\n (Sem parte decimal)');
    executaCodigo();
  } else if (Number(numero1) === Number(numero2)) {
    alert('Os números não podem ser iguais');
    executaCodigo();
  } else {
    maiorNumero(numero1, numero2);
  }

  function maiorNumero(numero1, numero2) {
    Number(numero1) < Number(numero2)
      ? alert(
          `Valores digitados: ${numero1} e ${numero2} \n O maior: ${numero2}`
        )
      : Number(numero1) > Number(numero2)
      ? alert(
          `Valores digitados: ${numero1} e ${numero2} \n O maior: ${numero1}`
        )
      : Number(numero1) === Number(numero2)
      ? alert(
          `Valores digitados: ${numero1} e ${numero2} \n E os valores são iguais`
        )
      : '';
  }
}

executaCodigo(); */

//! Questão 5
//todo Enunciado
/* Crie um programa que receba na entrada o valor de três notas de um aluno - com valor entre 0 e 10 e informe a média entre elas.

Não é necessário validar se as notas estão dentro do intervalo válido. */
/* 
function executaCodigo() {
  let arr = [];
  let temp = 0;

  for (var i = 0; i < 3; i++) {
    arr.push(+prompt('Enter a number'));
  }
  for (let i = 0; i < 3; i++) {
    temp = temp + arr[i];
  }
  let media = (temp / arr.length).toFixed(2);

  if (isNaN(media)) {
    alert('Digite apenas números');
    executaCodigo();
  } else {
    alert(`A media das notas é: ${media}`);
  }
}

executaCodigo();
 */

//! Questão 6
//todo -- Enunciado
/* Utilize prompt e alert para solucionar essa questão.
Um motorista deseja abastecer seu carro com um determinado valor em reais.

Escreva um programa para ler o preço do litro do álcool e da gasolina e informe se o motorista deve usar um ou outro combustível.

O cálculo básico para se descobrir se o álcool é vantajoso ou não em relação à gasolina é simples: basta dividir o preço do litro do álcool pelo da gasolina.

Se o resultado for inferior a 0,7 use álcool. Se for maior ou igual à 0,7 então a gasolina é melhor. */

/* function executaCodigo() {
  let gasolina = +prompt('Quantos está a gasolina na sua cidade?');
  let alcool = +prompt('Quantos está o álcool na sua cidade?');

  if (isNaN(gasolina) || isNaN(alcool)) {
    alert(
      'Por favor, digite apenas números\n(utilize . e não , para a parte decimal)'
    );
  } else if (gasolina <= 0 || alcool <= 0) {
    alert('Por favor, digite preços válidos\n(positivos e maiores que zero)');
  } else {
    let temp = alcool / gasolina;
    temp.toFixed(2) >= 0.7
      ? alert(`O índice deu: ${temp.toFixed(2)}\nO mais vantajoso: Gasolina`)
      : alert(`O índice deu: ${temp.toFixed(2)}\nO mais vantajoso: Álcool`);
  }
}

executaCodigo();

//Feito no vscode
 */
//! Questão 7
//todo Enunciado
/* Utilize prompt e alert para solucionar essa questão.
Um motorista deseja abastecer seu carro com um determinado valor em reais.

Escreva um programa para ler o preço do litro do combustível e o valor que o motorista deseja gastar e informe quantos litros foram colocados no tanque.

Não se preocupe com a capacidade do tanque de combustível. */

/* function executaCodigo() {
  let dinheiro = +prompt('Quantos reais você tem para abastecer?');
  let valorCombustivel = +prompt(
    'E quantos está custando o combustível que você deseja abastecer?'
  );

  if (dinheiro === '' || valorCombustivel === '') {
    alert('Os valores não podem ser vazios\nPor favor, digite algum valor');
    executaCodigo();
  } else if (isNaN(Number(dinheiro)) || isNaN(Number(valorCombustivel))) {
    alert('Digite apenas números');
    executaCodigo();
  } else if (!dinheiro || !valorCombustivel) {
    alert('É necessário passar ambos os valores');
    executaCodigo();
  } else if (Number(dinheiro) <= 0 || Number(valorCombustivel) <= 0) {
    alert('Por favor, digite valores positivos e diferentes de zero');
    executaCodigo();
  } else {
    calculaLitros(dinheiro, valorCombustivel);
  }

  function calculaLitros(dinheiro, valorCombustivel) {
    let daParaComprar = dinheiro / valorCombustivel;
    alert(
      `Dinheiro: R$ ${dinheiro}\n Custo do combustível: R$ ${valorCombustivel}/L\n Quantos litros: ${daParaComprar.toFixed(
        2
      )}`
    );
  }
}

executaCodigo();
 */

//!Questão 8
//todo Enunciado
/* Utilize prompt e alert para solucionar essa questão.
Construa um programa que determine, dada uma idade, se uma pessoa brasileira:

É obrigada a votar (maiores de 18 até 70 anos).
Tem voto eletivo (de 16 anos em diante até 18 anos e maiores de 70 anos).
Não pode votar (menores de 16 anos).
Valide a entrada de dados: a idade deve ser um número inteiro e positivo. Não se preocupe com a idade máxima. */

/* function executaCodigo() {
  let idade = prompt('Digite a sua idade utilizando números');

  if (containsOnlyNumbers(idade)) {
    votoEh(Number(idade));
  } else {
    alert(
      'Você digitou uma idade inválida ou não digitou nada\n Por favor, digite um valor válido para a sua idade'
    );
    executaCodigo();
  } */

//! Faltar ajustar esse bloco comentado
/*   if (isNaN(idade)) {
    alert('Idade inválida');
    executaCodigo(); 
  } else if (idade < 0) {
    alert('Idade inválida\n(apenas valores positivos)');
    executaCodigo();
  } else if (!idade) {
    console.log(containsOnlyNumbers(idade));
  } else {
    votoEh(idade);
  } */

/*   function votoEh(idade) {
    //Função que irá receber a variável idade, e irá checar a obrigatorioedade do voto de acordo com a idade.
    idade < 16
      ? alert('Você ainda não tem idade para votar ')
      : (idade >= 16 && idade < 18) || idade > 70
      ? alert('O voto para você é: FACULTATIVO')
      : alert('O voto para você é: OBRIGATÓRIO');
  }
}

executaCodigo();

function containsOnlyNumbers(str) {
  //Função que checa se uma determinada string (entrada do prompt) contém apenas números.
  return /^\d+$/.test(str);
}
 */

//! Questão 10
//todo Enunciado
/* Utilize prompt e alert para solucionar essa questão.
Construa um programa que determine, dada a categoria da carteira de motorista, que veículos podem ser conduzidos.

A - Motos e triciclos.
B - Carros de passeio.
C - Veículos de carga acima de 3,5 toneladas.
D - Veículos com mais de 8 passageiros.
E - Veículos com unidade acoplada acima de 6 toneladas.
Utilize a estrutura de controle switch e retorne mensagens adequadas, inclusive se a entrada de dados não for válida. Considere apenas uma categoria. */

function executaCodigo() {
  let habilitacao = prompt(
    'Digite a categoria da sua CNH e veja quais tipos de veículos você pode dirigir'
  );

  switch (habilitacao.toLowerCase()) {
    case 'e':
      alert('Veículos com unidade acoplada acima de 6 tonelas');
    case 'd':
      alert('Veículos com mais de 8 passageiros');
    case 'c':
      alert('Veículos de carga acima de 3,5 tonelas');
    case 'b':
      alert('carros de passeio');
      break;
    case 'a':
      alert('Motos e triciclos');
      break;
    default: {
      alert('Digite uma categoria válida');
      executaCodigo();
    }
  }
}

executaCodigo();
