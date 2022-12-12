//! Selecionando elementos --------------------------

const submitButton = document.getElementById('submit_button');
const mensagensErro = document.querySelectorAll('.mensagem_erro');
const entradas = document.querySelectorAll('.input');
//Saídas (segunda tela)
const containerResultados = document.querySelector('.container_resultados');
const resultadoIMC = document.getElementById('resultado_imc');
const resultadoCategoria = document.getElementById('resultado_categoria');

//! Functions ---------------------------------------------

function checarEntradas() {
  console.log(entradas);
  //---- checando o peso
  entradas.forEach((input, index) => {
    //Sem valor algum
    if (input.value === '') {
      input.style.border = '3px solid red';
      mensagensErro[index].textContent = 'Não deixe campos em branco';
      mensagensErro[index].style.display = 'block';
      return false;
      //Peso superior a 400 kgs (pessoa mais pesada no planeta está abaixo)
    } else if (index === 0 && Number(input.value) > 400) {
      input.style.border = '3px solid red';
      mensagensErro[index].textContent = 'Digite um peso válido (max 400kgs)';
      mensagensErro[index].style.display = 'block';
      return false;
      //Checando se a pessoa colocou o valor em CMs
    } else if (index === 1 && Number(input.value) > 3) {
      input.style.border = '3px solid red';
      mensagensErro[index].textContent =
        'Coloque uma altura válida (metros) (max: 3m)';
      mensagensErro[index].style.display = 'block';
      return false;
      //Valor igual a 0
    } else if (Number(input.value) <= 0) {
      input.style.border = '3px solid red';
      mensagensErro[index].textContent =
        'Devem ser positivos e diferentes de 0';
      mensagensErro[index].style.display = 'block';
      return false;
    } else {
      mensagensErro[index].style.display = 'none';
      input.style.border = '1px solid lightgreen';
      return true;
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
  if (!checarEntradas()) {
    let IMC =
      Number(entradas[0].value) / Math.pow(Number(entradas[1].value), 2);
    console.log(IMC);
    resultadoIMC.textContent = IMC.toFixed(2);
  } else {
    alert('Houve um erro, tente novamente ');
  }
});
