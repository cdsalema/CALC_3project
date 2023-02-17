const insert = num => document.getElementById('resultado').innerHTML += num;
const clean = () => document.getElementById('resultado').innerHTML = '';
const back = () => document.getElementById('resultado').innerHTML = document.getElementById('resultado').innerHTML.slice(0, -1);
const calcular = () =>  {
const resultado = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = resultado ? eval(resultado) : 'null';
}