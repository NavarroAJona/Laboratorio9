

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

function cantidadPreguntas(cantidadPreguntas) {
    if (cantidadPreguntas.value > 4 && cantidadPreguntas.value < 21) {
        document.getElementById("quiz").style.display = "block";
        var variableInput = "p";
        var variableTexto = "i";
        for (let i = 1; i <= cantidadPreguntas.value; i++) {
            document.getElementById(variableInput + i).style.display = "block";
            document.getElementById(variableTexto + i).style.display = "block";
        }
        document.getElementById("button").style.display = "none";
        
    } else {
        alert("Por favor digite un valor entre 1 y 5");
    }
}

function verRespuestas(cantidadPreguntas) {
    
    // document.getElementById("respuestas").style.visibility="visible";
    for (let i = 1; i <=cantidadPreguntas.value ; i++) {
        document.getElementById(i).style.display = "block";
        document.getElementById(i).style.color="green";
    }
}


