const textArea = document.querySelector(".text-area");
const diamante2 = document.querySelector(".diamante2");
const btnCopiar = document.querySelector(".btn-copiar");




//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`




function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    diamante2.value = textoEncriptado;
    textArea.value = "";
    diamante2.style.backgroundImage = "none";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],[matrizCodigo[i][1]]);

        }

    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    diamante2.value = textoDesencriptado;
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringDesencriptada.toLowerCase()
    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }
    return stringDesencriptada;
}

document.querySelector(".btn-copiar").onclick = (e) => {
    e.preventDefault();
    const mensaje = document.querySelector(".diamante2");
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado");
}






