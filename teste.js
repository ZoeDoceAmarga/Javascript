// para comentar utiliza-se essa duas barra // 
/*(para iniciar) outro jeito de fazer comentário, esse só se encerra quando eu fecho ele, então tem que abrir e fechar, como uma tag utilizando (para finalizar)>> */
var currentNumberWrapper=document.getElementById('currentNumber');
var currentNumber=0;

function increment(){
    currentNumber=currentNumber+1;
    currentNumberWrapper.innerHTML=currentNumber;
}

function decrement(){
    currentNumber=currentNumber-1;
    currentNumberWrapper.innerHTML=currentNumber;
}