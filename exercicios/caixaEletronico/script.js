//! Selecionando elementos para o DOM -------------------------------

const valorASacar = document.getElementById('valor_a_sacar');
const mensagemErro = document.getElementById('mensagem_erro');
const submitButton = document.getElementById('submit_button');

console.log(valorASacar, mensagemErro, submitButton);

//! Variáveis ------------------------------------------------------

let notas100 = 0;
let notas50 = 0;
let notas20 = 0;
let notas10 = 0;
let resto;
let valor;
let tudoCerto = false;

//! Funções ---------------------------------------------------------

function checarDado() {
  if (valorASacar.value == '') {
    mensagemErro.style.display = 'block';
    mensagemErro.textContent = 'Não pode ficar em branco';
    valorASacar.style.border = '2px solid red';
  } else if (Number(valorASacar.value) <= 0) {
    mensagemErro.style.display = 'block';
    mensagemErro.textContent = 'Deve ser positivo e diferente de 0';
    valorASacar.style.border = '2px solid red';
  } else if (!Number.isInteger(Number(valorASacar.value))) {
    mensagemErro.style.display = 'block';
    mensagemErro.textContent = 'Digite um valor inteiro';
    valorASacar.style.border = '2px solid red';
  } else if (Number(valorASacar.value) % 10 != 0) {
    mensagemErro.style.display = 'block';
    mensagemErro.textContent = 'Apenas valores multiplos de 10';
    valorASacar.style.border = '2px solid red';
  } else {
    mensagemErro.style.display = 'none';
    valorASacar.style.border = '2px solid green';
    tudoCerto = true;
  }
}

function quantasNotas(valor) {
  console.log(`valor dentro do quantasNotas ${valor}`);
  checarNotas(valor);
}

function checarNotas(valor) {
  console.log('checarNotas', valor);
  if (valor >= 100) {
    notas100 = Math.floor(valor / 100);
    valor = valor % 100;
    resto != 0 ? checarNotas(valor) : '';
    // valor != 0 ?
  } else if (valor >= 50) {
    notas50 = Math.floor(valor / 50);
    valor = valor % 50;
    valor != 0 ? checarNotas(valor) : '';
  } else if (valor >= 20) {
    notas20 = Math.floor(valor / 20);
    valor = valor % 20;
    valor != 0 ? checarNotas(valor) : '';
  } else if (valor >= 10) {
    notas10 = Math.floor(valor / 10);
    valor = valor % 10;
    valor != 0 ? checarNotas(valor) : '';
  }
}
//! Event Handlers --------------------------------------------------

submitButton.addEventListener('click', () => {
  let valor = Number(valorASacar.value);
  checarDado();
  if (tudoCerto === true) {
    quantasNotas(valor);
    alert(
      `Notas para pagar o valor: \n\nNotas 100: ${notas100}\nNotas 50: ${notas50}\nNotas 20: ${notas20}\nNotas 10: ${notas10}`
    );
    alert('Recarregue a página para testar novamente');
  } else {
    alert('houve algum erro');
  }
});
