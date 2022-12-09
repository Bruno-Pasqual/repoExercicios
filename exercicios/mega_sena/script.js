let arr = [];
const boxes = document.querySelectorAll('.box');

boxes.forEach((box, index) => {
  checaValor();
  box.textContent = `${aleatorio}`;
  box.classList.add('ativo');
  console.log(arr);
});

function checaValor() {
  let random = Math.floor(Math.random() * 60 + 1);
  if (arr.includes(random)) {
    checaValor();
  } else {
    arr.unshift(random);
    return (aleatorio = random);
  }
}
