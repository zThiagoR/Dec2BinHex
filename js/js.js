const input = document.querySelectorAll("input"); 
const dec = document.getElementById('dec')
const bin = document.getElementById('bin')
const hex = document.getElementById('hex')
const alert = document.querySelector('.alert')

input.forEach(input => input.addEventListener("input", () => {
    
    if(Math.max(65536) <= dec.value) {
        console.log("passou de valor");
        alert.innerHTML = "Você já digitou o número decimal máximo excedido!"
        return false;
    } else {
        alert.innerHTML = " "
    }

    if(input.value === "") {
        dec.value = 0
        bin.value = 0
        hex.value = 0;
        return;
    } else {
        Converter(input.value);
    }
}))

input.addEventListener;

function SomenteNumero(e){
    var tecla=(window.event)? event.keyCode:e.which;

    if((tecla>47 && tecla<58)) return true;
    else{
    if (tecla==8 || tecla==0) return true;
    else  return false;
    }
}

function Converter(e) {

    dec.value = parseInt(e).toString(10)
    bin.value = parseInt(e).toString(2)
    hex.value = (parseInt(e)>>>0).toString(16).toLowerCase()

}

