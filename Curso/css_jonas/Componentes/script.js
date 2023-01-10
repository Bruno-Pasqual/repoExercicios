//! Fazendo seleção dos elementos -------------------------------------
const dropBoxes = document.querySelectorAll('.primeira_linha');

const numerosOrganizadores = document.querySelectorAll('.numero_organizador');
const topicosDoBox = document.querySelectorAll('.assunto_da_div');

//! Event handlers ----------------------------------------------------

dropBoxes.forEach((elemento) => {
  elemento.addEventListener('mouseover', () => {
    // numerosOrganizadores.forEach((numero) => {
    //   numero.style.color = 'red';
    // });
  });
});
