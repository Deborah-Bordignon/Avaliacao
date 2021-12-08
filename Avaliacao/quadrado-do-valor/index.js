document.querySelector('#btn-calc').addEventListener('click', function(){

var numero = parseInt(document.querySelector('#txt-01').value)

var resultado = numero ** 2

document.querySelector('#resultado').innerHTML = 'O número Digitado foi: '+ numero + '. O quadrado do mesmo é : ' + resultado





})