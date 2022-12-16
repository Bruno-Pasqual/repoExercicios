//! Selecionando elementos para o DOM -------------------------------

const valorASacar = document.getElementById('valor_a_sacar');
const mensagemErro = document.getElementById('mensagem_erro');
const submitButton = document.getElementById('submit_button');

//! Funções ---------------------------------------------------------

function validarEntrada() {
  if ((valorASacar.value = '')) {
    mensagemErro.style.display = 'block';
    mensagemErro.textContent = 'Digite algum valor';
    valorASacar.style.border = '1px solid red';
  } else if (Number(valorASacar.value) <= 0) {
    mensagemErro.style.display = 'block';
    mensagemErro.textContent = 'O valor deve ser positivo e diferente de 0';
  }
}

//! Event Handlers --------------------------------------------------

/* entradaDeDados.forEach((entrada_dados, index) => {
  if (entrada_dados.value === '') {
    mensagensErro[index].style.display = 'block';
    mensagensErro[index].textContent = 'Não deixe campos em branco';
    entrada_dados.style.border = '2px solid red';
  } else if (Number(entrada_dados.value) <= 0) {
    mensagensErro[index].style.display = 'block';
    mensagensErro[index].textContent =
      'Digite um valor positivo e diferente de 0';
  } else if (!Number.isInteger(Number(entrada_dados.value))) {
    mensagensErro[index].style.display = 'block';
    mensagensErro[index].textContent = 'Digite um valor inteiro';
    entrada_dados.style.border = '2px solid red';
  } else {
    mensagensErro[index].style.display = 'none';
    entrada_dados.style.border = '2px solid green';
    houveErro = false;
  }
});
 */
