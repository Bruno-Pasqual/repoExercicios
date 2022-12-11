//! Fazendo a seleção dos elementos ----------------------------

// Seleção dos inputs -----

const rendaInput = document.getElementById('renda_input');
const moradiaInput = document.getElementById('moradia_input');
const transporteInput = document.getElementById('transporte_input');
const educacaoInput = document.getElementById('educacao_input');
const botaoSubmit = document.getElementById('submit_button');
//Selecionando os campos de saída
const campoSaidas = document.querySelectorAll('.details');
const recomendados = document.querySelectorAll('recomendado');

// Contantes ----

//------------------------------------//-----------------------

botaoSubmit.addEventListener('click', () => {
  for (let i = 1; i < campoSaidas.length; i++) {
    //! variáveis ------------------------------------
    [renda, moradia, transporte, educacao] = [
      Number(rendaInput.value),
      Number(moradiaInput.value),
      Number(transporteInput.value),
      Number(educacaoInput.value),
    ];
    let porcentagens = ['', 0.3, 0.2, 0.15];
    let saidas = [renda, moradia, transporte, educacao];
    console.log(saidas);
    let porcentagem = saidas[i].value / saidas[0];
    console.log(porcentagem);

    //!  Fim das variáveis ------------------------------
    campoSaidas[i].style.color = 'red';
  }
});

//aa
function fazerAnalise() {
  console.log(rendaInput.value);
  campoSaidas[0].innerHTML = `<p class="details">R$: ${rendaInput.value}</p>`;
  //Gasto com casa
  campoSaidas[1].innerHTML = `Seu custo: R$ ${moradiaInput.value} ( ${
    Number(moradiaInput.value / rendaInput.value) * 100
  }%)`;
  recomendados[1].innerHTML = `Seu custo: R$ ${moradiaInput.value} ( ${
    Number(moradiaInput.value / rendaInput.value) * 100
  }%)`;
}
