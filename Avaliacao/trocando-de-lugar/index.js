var botao = document.querySelector('#calcular')
botao.addEventListener('click', function(){

var a = parseInt(document.querySelector('#txt-01').value);
var b = parseInt( document.querySelector('#txt-02').value);

[a,b]=[b,a]

document.querySelector('#resultado01').innerHTML = 'A=' + a
document.querySelector('#resultado02').innerHTML = 'B=' + b

})
