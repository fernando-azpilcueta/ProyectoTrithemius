//console.log("hola");

function encriptar(){

    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    let mensaje = document.getElementById("mensaje").value;
    let mensajeEncriptado = "";
    console.log(mensaje);
    var numLetra=0;
    for(let i=0;i<mensaje.length;i++){

        //hallando fila y columna
        if(letras.indexOf(mensaje[i]) != -1){
            for(let fila=0;fila<tabla.length;fila++){
                numLetra = numLetra%27;
                if(tabla[fila][0] == mensaje[i]){
                    mensajeEncriptado=mensajeEncriptado+tabla[fila][numLetra];
                }
            }
            numLetra++;
        }
        else{
            mensajeEncriptado=mensajeEncriptado + mensaje[i];
        }
       
    }
    console.log(mensajeEncriptado);
    document.getElementById("mensaje2").innerHTML=mensajeEncriptado;
}

function desencriptar(){

    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    let mensaje = document.getElementById("mensaje").value;
    let mensajeDesencriptado = "";
    console.log(mensaje);
    var numLetra=0;
    for(let i=0;i<mensaje.length;i++){
        
        //hallando fila y columna
        if(letras.indexOf(mensaje[i]) != -1){
            for(let fila=0;fila<tabla.length;fila++){
                numLetra = numLetra%27;
                if(tabla[fila][numLetra] == mensaje[i]){
                    mensajeDesencriptado=mensajeDesencriptado+tabla[fila][0];
                }
            }
            numLetra++;
        }
        else{
            mensajeDesencriptado=mensajeDesencriptado + mensaje[i];
        }
       
    }
 
    document.getElementById("mensaje2").innerHTML=mensajeDesencriptado;
}

document.getElementById("encriptar").addEventListener("click",
function(){
    encriptar();
    //console.log("adios")
});

document.getElementById("desencriptar").addEventListener("click",
function(){
    desencriptar();
    //console.log("adios")
});




var tabla = [
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    ["B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A"],
    ["C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B"],
    ["D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C"],
    ["E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D"],
    ["F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E"],
    ["G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F"],
    ["H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G"],
    ["I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H"],
    ["J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I"],
    ["K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J"],
    ["L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K"],
    ["M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L"],
    ["N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"],
    ["Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N"],
    ["O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ"],
    ["P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O"],
    ["Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P"],
    ["R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q"],
    ["S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R"],
    ["T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S"],
    ["U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T"],
    ["V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U"],
    ["W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V"],
    ["X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W"],
    ["Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X"],
    ["Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y"],
];
