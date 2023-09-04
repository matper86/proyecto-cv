document.getElementById("boton").onclick = function () {
    console.log("Hola mundo desde getElementById");
    document.getElementById('demo').innerHTML = "Esto es getElementById.";
}
document.getElementById("boton1").addEventListener("click", function () {
    console.log("Hola mundo desde addEventListener");
    document.getElementById('demo').innerHTML = "Esto es addEventListener.";
})
document.getElementById("boton2").addEventListener("click", function () {
    console.log("Cambio de color de fondo por default.");
    document.body.style.backgroundColor = "#000000";
})
document.getElementById("boton3").addEventListener("click", function () {
    console.log("Cambio de color de fondo personalizado.");
    document.body.style.backgroundColor = "#FF7400";
})
function cambiarColorTipografia() {
    var parrafo = document.getElementById("demo");
    parrafo.style.color = "orange";
    console.log("Color de texto por default")
}
    var boton = document.getElementById("boton4");
    boton.addEventListener("click", cambiarColorTipografia);
  

function cambiarColorTipografia2() {
    var parrafo2 = document.getElementById("demo");
    parrafo2.style.color = "yellow";
    console.log("Color de texto personalizado")
}
    var boton = document.getElementById("boton5");
    boton.addEventListener("click", cambiarColorTipografia2);

document.getElementById("boton6").addEventListener("click", function () {
        console.log("Este es tu formato personalizado");
        console.log("boton6");
        document.body.style.backgroundColor = "#FF7400";
    })
    function cambiarColorTipografia3() {
        var parrafo3 = document.getElementById("demo","lorem");
        parrafo3.style.color = "black";
    }
        var boton = document.getElementById("boton6");
        boton.addEventListener("click", cambiarColorTipografia3);

document.getElementById("boton7").addEventListener("click", function () {
        console.log("Este es tu formato default");
        console.log("boton7");
        document.body.style.backgroundColor = "#000000";
    })
    function cambiarColorTipografia4() {
        var parrafo3 = document.getElementById("demo","lorem");
        parrafo3.style.color = "orange";
    }
        var boton = document.getElementById("boton7");
        boton.addEventListener("click", cambiarColorTipografia4);

document.getElementById("boton8").addEventListener("click", function () {
    document.getElementById("lorem").style.display ="none";
});

const collection = document.getElementsByClassName("parrafo");
for (let i=0; i < collection.length; i++){
    collection[i].style.backgroundColor ="yellow";
    collection[i].style.color="black";
}

