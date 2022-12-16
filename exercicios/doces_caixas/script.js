//! Selecionando os elementos  ------------------------------------------------

const entradaDeDados = document.querySelectorAll('.entrada_dados');
const mensagensErro = document.querySelectorAll('.mensagem_erro');
const submitButton = document.getElementById('submit_button');

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
  let capacidadeCaixas = Number(entradaDeDados[1].value);
  let caixasCompletas = 0;
  //
  for (i = 1; quantidadeDoces >= capacidadeCaixas; i++) {
    caixasCompletas++;
  }
  console.log(caixasCompletas);
}

//! Event handlers -------------------------------------------------------------

submitButton.addEventListener('click', () => {
  checarEntradas();
  realizarLogica();
});
