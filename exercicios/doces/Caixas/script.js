//! Fazendo Seleção dos elementos ----------------------------------------------

const entradas = document.querySelectorAll('.entrada');
const botaoEmpacotar = document.getElementById('botao_empacotar');
const mensagensErro = document.querySelectorAll('.mensagem_erro');

//Selecionando os parágrafos de saída

const saidaCaixasCompletas = document.getElementById('saida_caixas_completas');

//! Variável -------------------------------------------------------------------

let houveErro = false;

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

botaoEmpacotar.addEventListener('click', () => {
  checarEntradas();
});
