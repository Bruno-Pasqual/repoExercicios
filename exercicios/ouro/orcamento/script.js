//! Fazendo a seleção dos elementos ----------------------------

// Seleção dos inputs -----

const rendaInput = document.getElementById('renda_input');
const moradiaInput = document.getElementById('moradia_input');
const transporteInput = document.getElementById('transporte_input');
const educacaoInput = document.getElementById('educacao_input');
const botaoSubmit = document.getElementById('submit_button');
//Selecionando os campos de saída
const campoSaidas = document.querySelectorAll('.details');

// Contantes ----

//------------------------------------//-----------------------

botaoSubmit.addEventListener('click', () => {
  [rendaValor, gastoEducacao, gastoMoradia, gastoTransporte] = [
    Number(rendaInput.value),
    Number(moradiaInput.value),
    Number(transporteInput.value),
    Number(educacaoInput.value),
  ];

  [renda, moradiaPorcentagem, transportePorcentagem, educacaoPorcentagem] = [
    0, 30, 15, 20,
  ];

  let arr2 = [
    renda,
    moradiaPorcentagem,
    transportePorcentagem,
    educacaoPorcentagem,
  ];

  //------------------------------------//-----------------------

  let arr = [rendaValor, gastoEducacao, gastoMoradia, gastoTransporte];
  for (let i = 0; i < arr.length; i++) {
    let temp = (arr[i] / rendaValor).toFixed(2) * 100;
    console.log(temp, arr2[i]);
    if (temp - arr2[i] < 0) {
      console.log(
        `O valor informado está abaixo do estipulado em ${temp - arr2[i]}% `
      );
    } else if (temp - arr2[i] === 0) {
      console.log(
        `O valor informado está de acordo com a porcentagem ${arr2[i]}%`
      );
    } else {
      console.log(
        `O valor informado está acima do estipulado em ${temp - arr2[i]}`
      );
    }
  }

  // -----
});

//----------------------------------//-------------------------
