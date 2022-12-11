let expressao = [];
var numero;
function digita(numero){
    document.getElementById("textodigitado").innerHTML = numero;
    document.getElementById("expressaototal").innerHTML = expressao.push(numero);
    console.log("dentro da funcao",numero,expressao)

}
