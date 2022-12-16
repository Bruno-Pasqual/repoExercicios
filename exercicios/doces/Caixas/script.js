//! Fazendo Seleção dos elementos ----------------------------------------------

const entradas = document.querySelectorAll('.entrada');
const botaoEmpacotar = document.getElementById('botao_empacotar');
const mensagensErro = document.querySelectorAll('.mensagem_erro');

//Selecionando os parágrafos de saída

const saidaCaixasCompletas = document.getElementById('saida_caixas_completas');
const saidaCaixasIncompletas = document.getElementById(
  'saida_caixas_incompletas'
);
const necessitouIncompleta = document.getElementById('necessitou_incompleta');

//! Variável -------------------------------------------------------------------

let houveErro = false;

//! Funções --------------------------------------------------------------------

// function checarEntradas

function checarEntradas() {
  entradas.forEach((entrada, index) => {
    if (entrada.value === '') {
      entrada.style.border = '2px solid red';
      mensagensErro[index].textContent = 'Não deixe campos em branco';
      mensagensErro[index].style.display = 'block';
    } else if (entrada.value <= 0) {
      entrada.style.border = '2px solid red';
      mensagensErro[index].textContent =
        'Digite um valor positivo diferente de 0';
      mensagensErro[index].style.display = 'block';
    } else {
      mensagensErro[index].style.display = 'none';
      entrada.style.border = '2px solid green';
      houveErro = true;
    }
  });
}

function calcularCaixas() {
  //Declarando variáveis da função ----

  let quantidadeDoces = entradas[0].value;
  let capacidadeCaixa = entradas[1].value;
  let quantasVezesCoube = 0;
  let docesInciais = quantidadeDoces;

  // Utilizando Loop para descobrir quantas vezes um número é divísivel e atribuindo os valores necessários as variáveis.

  for (let i = 1; quantidadeDoces >= capacidadeCaixa; i++) {
    quantidadeDoces -= capacidadeCaixa;
    quantasVezesCoube = i;
    return quantidadeDoces;
  }
  console.log(quantidadeDoces);
  quantidadeDoces != 0
    ? (necessitouIncompleta.textContent = `Precisou de uma caixa incompleta com ${quantidadeDoces} doces`)
    : (necessitouIncompleta.textContent =
        'Não precisou de caixa extra incompleta');

  saidaCaixasCompletas.textContent = `${quantasVezesCoube}`;
  saidaCaixasIncompletas.textContent = `${quantidadeDoces}`;
}

//! Event handlers ------------------------------------------------------------

botaoEmpacotar.addEventListener('click', () => {
  checarEntradas();
  calcularCaixas();
});
