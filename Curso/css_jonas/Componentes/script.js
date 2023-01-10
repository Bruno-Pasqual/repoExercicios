//! Fazendo seleção dos elementos -------------------------------------
const dropBoxes = document.querySelectorAll('.primeira_linha');

const numerosOrganizadores = document.querySelectorAll('.numero_organizador');
const topicosDoBox = document.querySelectorAll('.assunto_da_div');
const segundaLinha = document.querySelectorAll('.segunda_linha');
const containerBoxes = document.querySelectorAll('.dropbox_container');

//! Event handlers ----------------------------------------------------

dropBoxes.forEach((elemento, index) => {
  elemento.addEventListener('click', () => {
    segundaLinha[index].classList.toggle('hidden');
    containerBoxes[index].classList.toggle('ativo');
  });
});
