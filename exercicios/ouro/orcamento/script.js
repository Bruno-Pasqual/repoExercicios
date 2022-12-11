//! Fazendo a seleção dos elementos ----------------------------

// Seleção dos inputs -----

const rendaInput = document.getElementById('renda_input');
const moradiaInput = document.getElementById('moradia_input');
const transporteInput = document.getElementById('transporte_input');
const educacaoInput = document.getElementById('educacao_input');
const botaoSubmit = document.getElementById('submit_button');
//Selecionando os campos de saída
const campoSaidas = document.querySelectorAll('.details');
const recomendados = document.querySelectorAll('.recomendado');

// Contantes ----

//------------------------------------//-----------------------
console.log(recomendados);

botaoSubmit.addEventListener('click', () => {
  for (let i = 0; i < campoSaidas.length; i++) {
    //! variáveis ------------------------------------
    [renda, moradia, transporte, educacao] = [
      Number(rendaInput.value),
      Number(moradiaInput.value),
      Number(educacaoInput.value),
      Number(transporteInput.value),
    ];
    let porcentagens = ['', 0.3, 0.2, 0.15];
    let saidas = [renda, moradia, transporte, educacao];
    let porcentagem = Number(saidas[i].value) / Number(saidas[i]);
    console.log(porcentagem);

    //!  Fim das variáveis ------------------------------
    if (i === 0) {
      campoSaidas[i].innerHTML = `<p class="details">R$: ${saidas[i]}</p>`;
    } else {
      campoSaidas[i].innerHTML = `Seu custo: R$ ${saidas[i]} ( ${Number(
        (saidas[i] / rendaInput.value) * 100
      ).toFixed(2)}%)`;

      recomendados[i - 1].innerHTML = `recomendado: R$ ${
        porcentagens[i] * rendaInput.value
      } ( ${Number(porcentagens[i] * 100)}%)`;
    }
  }
  // fazerAnalise();
});

//aa
function fazerAnalise() {
  let saidas = [renda, moradia, transporte, educacao];
  console.log(rendaInput.value);
  //alterando valor da renda

  //Gasto com casa
  campoSaidas[0 + 1].innerHTML = `Seu custo: R$ ${saidas[1]} ( ${
    Number(saidas[1] / rendaInput.value) * 100
  }%)`;
  recomendados[0].innerHTML = `recomendado: R$ ${saidas[1]} ( ${
    Number(moradiaInput.value / rendaInput.value) * 100
  }%)`;
}
