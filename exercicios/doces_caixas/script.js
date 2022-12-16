//! Selecionando os elementos  ------------------------------------------------

// Seleção das entradas

const entradaDeDados = document.querySelectorAll('.entrada_dados');
const mensagensErro = document.querySelectorAll('.mensagem_erro');
const submitButton = document.getElementById('submit_button');

// Seleção das saídas

const informacaoDoces = document.getElementById('informacoes_doces');
const informacoesCapacidadeCaixa = document.getElementById(
  'informacoes_capacidade_caixa'
);
const saidaCaixasCompletas = document.getElementById(
  'quantidade_caixas_fechadas'
);
const saidaCaixasIncompletas = document.getElementById(
  'quantidade_caixas_incompletas'
);

//! Variaveís de controle -----------------------------------------------------

let houveErro = true;

//! Função --------------------------------------------------------------------

//Função para fazer a validação dos dados -----

function checarEntradas() {
  //---- Função para fazer validação das entradas

  entradaDeDados.forEach((entrada_dados, index) => {
    if (entrada_dados.value === '') {
      mensagensErro[index].style.display = 'block';
      mensagensErro[index].textContent = 'Não deixe campos em branco';
      entrada_dados.style.border = '2px solid red';
    } else if (Number(entrada_dados.value) <= 0) {
      mensagensErro[index].style.display = 'block';
      mensagensErro[index].textContent =
        'Digite um valor positivo e diferente de 0';
      mensagensErro[index].style.border = '2px solid red';
    } else {
      mensagensErro[index].style.display = 'none';
      entrada_dados.style.border = '2px solid green';
      houveErro = false;
    }
  });
}

function realizarLogica() {
  //
  let quantidadeDoces = Number(entradaDeDados[0].value);
  let capacidadeDasCaixas = Number(entradaDeDados[1].value);
  let caixasCompletas = Math.floor(quantidadeDoces / capacidadeDasCaixas);
  let quantidadeDocesSobraram = quantidadeDoces % caixasCompletas;
  //

  console.log(
    `quantidade de doces: ${quantidadeDoces}\nCapacidade das caixas: ${capacidadeDasCaixas}\nCaixas completas: ${caixasCompletas}\nDoces que sobraram: ${quantidadeDocesSobraram}`
  );

  informacaoDoces.textContent = quantidadeDoces;
  informacoesCapacidadeCaixa.textContent = capacidadeDasCaixas;
  saidaCaixasCompletas.textContent = `${caixasCompletas} caixas completas`;
  quantidadeDocesSobraram != 0 ? saidaCaixasIncompletas.textContent= : '';
}

//! Event handlers -------------------------------------------------------------

submitButton.addEventListener('click', () => {
  checarEntradas();
  houveErro === false ? realizarLogica() : '';
});
