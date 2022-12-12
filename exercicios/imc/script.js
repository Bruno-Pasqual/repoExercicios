//! Selecionando elementos --------------------------

const submitButton = document.getElementById('submit_button');
const mensagensErro = document.querySelectorAll('.mensagem_erro');
const entradas = document.querySelectorAll('.input');

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
      //Peso superior a 400 kgs (pessoa mais pesada no planeta está abaixo)
    } else if (index === 0 && Number(input.value) > 400) {
      input.style.border = '3px solid red';
      mensagensErro[index].textContent = 'Digite um peso válido (max 400kgs)';
      mensagensErro[index].style.display = 'block';
      //Checando se a pessoa colocou o valor em CMs
    } else if (index === 1 && Number(input.value) > 3) {
      input.style.border = '3px solid red';
      mensagensErro[index].textContent =
        'Coloque uma altura válida (metros) (max: 3m)';
      mensagensErro[index].style.display = 'block';
      //Valor igual a 0
    } else if (Number(input.value) <= 0) {
      input.style.border = '3px solid red';
      mensagensErro[index].textContent =
        'Devem ser positivos e diferentes de 0';
      mensagensErro[index].style.display = 'block';
    } else {
      mensagensErro[index].style.display = 'none';
      input.style.border = '1px solid lightgreen';
    }
  });
}

//! Event handlers ---------------------------------------------
submitButton.addEventListener('click', () => {
  checarEntradas();
});
