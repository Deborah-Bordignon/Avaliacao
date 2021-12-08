  
document.querySelector('#btn-calc').addEventListener('click', ()=> {

    let numero01 = parseFloat(document.querySelector('#txt-01').value)
    let numero02 = parseFloat(document.querySelector('#txt-02').value)
    let numero03 = parseFloat(document.querySelector('#txt-03').value)

   
if ( numero01 % 2 == 0){

    n1 = 'PAR'
    soma01 = numero01 * 3
    
}

else {

    n1 = 'ÍMPAR'
    soma01 = numero01 + 7
    
}

if ( numero02 % 2 == 0){

    n2 = 'PAR'
    soma02 = numero02 * 3
    
}

else {

    n2 = 'ÍMPAR'
    soma02 = numero02 + 7
    
}

if ( numero03 % 2 == 0){

    n3 = 'PAR'
    soma03 = numero03 * 3
    
}

else {

    n3 = 'ÍMPAR'
    soma03 = numero03 + 7
    
}




document.querySelector('#resultado01').innerHTML = 'O Número ' + numero01 + ' é um número ' + n1 + '. Resultando no valor final de : ' + soma01
document.querySelector('#resultado02').innerHTML = 'O Número ' + numero02 + ' é um número ' + n2 + '. Resultando no valor final de : ' + soma02
document.querySelector('#resultado03').innerHTML = 'O Número ' + numero03 + ' é um número ' + n3 + '. Resultando no valor final de : ' + soma03




})