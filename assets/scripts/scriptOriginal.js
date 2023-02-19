
// estou deixando o código original do meu projeto para que possa no futuro analisa-lo e ver como anda meu avanço na forma de pensar e codar.

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
  }