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
const camposResultado = document.querySelectorAll('.resultado');

// Contantes ----

//------------------------------------//-----------------------
console.log(camposResultado);

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
    let porcentagem = Number((saidas[i] / saidas[0]).toFixed(2));
    // console.log(porcentagem, porcentagens[i]);
    // console.log(porcentagem > porcentagens[i] ? 'true' : 'false');
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
    checarSaida(i);
  }
});

function checarSaida(i) {
  if (i != 0) {
    let saidas = [renda, moradia, transporte, educacao];
    let porcentagem = Number((saidas[i] / saidas[0]).toFixed(2));
    let porcentagensFuncao = [0.3, 0.2, 0.15];
    console.log(
      'A porcentagem é: ',
      porcentagem,
      '\nporcentagem enunciado: ',
      porcentagensFuncao[i - 1]
    );
    if (porcentagem < porcentagensFuncao[i - 1]) {
      camposResultado[i - 1].textContent = 'Abaixo do recomendado ';
      camposResultado[i - 1].style.color = 'green';
    } else if (porcentagem === porcentagensFuncao[i - 1]) {
      camposResultado[i - 1].textContent = 'Igual ao recomendado ';
      camposResultado[i - 1].style.color = 'yellow';
    } else {
      camposResultado[i - 1].textContent = 'Acima do recomendado ';
      camposResultado[i - 1].style.color = 'red';
    }
  }
}
