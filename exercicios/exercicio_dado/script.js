let imagens = [
  `./dice_1.gif`,
  `./dice_2.gif`,
  `./dice_3.gif`,
  `./dice_4.gif`,
  `./dice_5.gif`,
  `./dice_6.gif`,
];

// Selecionando containers
const dado1 = document.getElementById('dado1');
const dado2 = document.getElementById('dado2');
const jogaDado = document.getElementById('botao_jogaDado');
//Event handlers
jogaDado.addEventListener('click', () => {
  let aleatorio1 = Math.floor(Math.random() * 6 + 1);
  let aleatorio2 = Math.floor(Math.random() * 6 + 1);
  dado1.style.backgroundImage = `url('/exercicios/exercicio_dado/dice_${aleatorio1}.gif')`;
  dado2.style.backgroundImage = `url('/exercicios/exercicio_dado/dice_${aleatorio2}.gif')`;
});
