//! Selecionando elementos --------------------------

const submitButton = document.getElementById('submit_button');
const mensagensErro = document.querySelectorAll('.mensagem_erro');
const entradas = document.querySelectorAll('.input');
const containerFormulario = document.getElementById('container_formulario');
//Saídas (segunda tela)
const containerResultados = document.querySelector('.container_resultados');
const resultadoIMC = document.getElementById('resultado_imc');
const resultadoCategoria = document.getElementById('resultado_categoria');

//!Variável ---------------------------------------------

let houveErro = false;

//! Functions ---------------------------------------------

function checarEntradas() {
  console.log(entradas);
  //---- checando o peso
  entradas.forEach((input, index) => {
    //Sem valor algum
    if (input.value === '') {
      input.style.border = '2px solid red';
      mensagensErro[index].textContent = 'Não deixe campos em branco';
      mensagensErro[index].style.display = 'block';
      //Peso superior a 400 kgs (pessoa mais pesada no planeta está abaixo)
    } else if (index === 0 && Number(input.value) > 400) {
      input.style.border = '2px solid red';
      mensagensErro[index].textContent = 'Digite um peso válido (max 400kgs)';
      mensagensErro[index].style.display = 'block';
      //Checando se a pessoa colocou o valor em CMs
    } else if (index === 1 && Number(input.value) > 3) {
      input.style.border = '2px solid red';
      mensagensErro[index].textContent =
        'Coloque uma altura válida (metros) (max: 3m)';
      mensagensErro[index].style.display = 'block';
      //Valor igual a 0
    } else if (Number(input.value) <= 0) {
      input.style.border = '2px solid red';
      mensagensErro[index].textContent =
        'Devem ser positivos e diferentes de 0';
      mensagensErro[index].style.display = 'block';
    } else {
      mensagensErro[index].style.display = 'none';
      input.style.border = '2px solid lightgreen';
      houveErro = true;
    }
  });
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    resultadoCategoria.textContent = 'Magreza';
  } else if (imc >= 18.5 && imc < 25) {
    resultadoCategoria.textContent = 'Normal';
  } else if (imc >= 25 && imc < 30) {
    resultadoCategoria.textContent = 'Sobrepeso';
  } else if (imc >= 30 && imc < 40) {
    resultadoCategoria.textContent = 'Obesidade';
  } else if (imc >= 40) {
    resultadoCategoria.textContent = 'Obesidade Grave';
  }
}

//! Event handlers ---------------------------------------------

submitButton.addEventListener('click', () => {
  // checarEntradas();
  checarEntradas();
  if (houveErro === false) {
  } else {
    //definindo valor do imc
    let IMC =
      Number(entradas[0].value) / Math.pow(Number(entradas[1].value), 2);
    resultadoIMC.textContent = IMC.toFixed(2);
    classificarIMC(IMC);
    containerResultados.style.display = 'flex';
    containerFormulario.style.display = 'none';
  }
});
