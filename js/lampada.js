//dom

const lampada = document.querySelector('#lampada')
const bt1 = document.querySelector('#btLigar')
const bt2 = document.querySelector('#btDesligar')

//evento

bt1.addEventListener('click',ligar)
bt2.addEventListener('click',desligar)
lampada.addEventListener('mouseover', ligar);
lampada.addEventListener('mouseleave', desligar);
lampada.addEventListener('dblclick', lampadaquebrada);

//funçoes

function ligar(){
lampada.src = "img/acesa.gif"
}
function desligar(){
    lampada.src = "img/apagada.gif"
}
function lampadaquebrada(){
    lampada.src = "img/quebrada.png";
}


