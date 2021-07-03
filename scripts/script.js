function clear(){
  document.getElementById('result').value ='';
}

function concat(valor){
  document.getElementById('result').value += valor;
}

function calculate(){
  var resultado = 0;
  resultado = document.getElementById('result').value;
  document.getElementById('result').value = eval(resultado);
}