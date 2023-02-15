/**
function insert(num) {
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
  }
  
  function clean() {
    document.getElementById('resultado').innerHTML = '';
  }
  
  function back() {
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.slice(0, -1);
  }
  
  function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
      document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
      document.getElementById('resultado').innerHTML = 'null';
    }
  }**/

const insert = num => document.getElementById('resultado').innerHTML += num;
const clean = () => document.getElementById('resultado').innerHTML = '';
const back = () => document.getElementById('resultado').innerHTML = document.getElementById('resultado').innerHTML.slice(0, -1);
const calcular = () =>  {
const resultado = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = resultado ? eval(resultado) : 'null';
}