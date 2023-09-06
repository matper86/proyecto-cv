if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }
function mostrarElementoDat() {
  var elemento = document.getElementById("ocultarDat");
  elemento.style.display = "block";
  var elemento = document.getElementById("ocultarBie");
  elemento.style.display = "none";
  var elemento = document.getElementById("ocultarEdu");
  elemento.style.display = "none";
  var elemento = document.getElementById("ocultarExp");
  elemento.style.display = "none";
  var elemento = document.getElementById("ocultarObg");
  elemento.style.display = "none";
  var elemento = document.getElementById("ocultarOtr");
  elemento.style.display = "none";
}
var enlaceMostrar = document.getElementById("dat");
enlaceMostrar.addEventListener("click", function(event) {
  event.preventDefault();
  mostrarElementoDat();
});
function mostrarElementoEdu() {
  var elemento1 = document.getElementById("ocultarDat");
  elemento1.style.display = "none";
  var elemento1 = document.getElementById("ocultarBie");
  elemento1.style.display = "none";
  var elemento1 = document.getElementById("ocultarEdu");
  elemento1.style.display = "block";
  var elemento1 = document.getElementById("ocultarExp");
  elemento1.style.display = "none";
  var elemento1 = document.getElementById("ocultarObg");
  elemento1.style.display = "none";
  var elemento1 = document.getElementById("ocultarOtr");
  elemento1.style.display = "none";
}
var enlaceMostrar = document.getElementById("edu");
enlaceMostrar.addEventListener("click", function(event) {
  event.preventDefault();
  mostrarElementoEdu();
});
function mostrarElementoExp() {
  var elemento2 = document.getElementById("ocultarDat");
  elemento2.style.display = "none";
  var elemento2 = document.getElementById("ocultarBie");
  elemento2.style.display = "none";
  var elemento2 = document.getElementById("ocultarEdu");
  elemento2.style.display = "none";
  var elemento2 = document.getElementById("ocultarExp");
  elemento2.style.display = "block";
  var elemento2 = document.getElementById("ocultarObg");
  elemento2.style.display = "none";
  var elemento2 = document.getElementById("ocultarOtr");
  elemento2.style.display = "none";
}
var enlaceMostrar = document.getElementById("exp");
enlaceMostrar.addEventListener("click", function(event) {
  event.preventDefault();
  mostrarElementoExp();
});
function mostrarElementoObg() {
  var elemento3 = document.getElementById("ocultarDat");
  elemento3.style.display = "none";
  var elemento3 = document.getElementById("ocultarBie");
  elemento3.style.display = "none";
  var elemento3 = document.getElementById("ocultarEdu");
  elemento3.style.display = "none";
  var elemento3 = document.getElementById("ocultarExp");
  elemento3.style.display = "none";
  var elemento3 = document.getElementById("ocultarObg");
  elemento3.style.display = "block";
  var elemento3 = document.getElementById("ocultarOtr");
  elemento3.style.display = "none";
}
var enlaceMostrar = document.getElementById("obg");
enlaceMostrar.addEventListener("click", function(event) {
  event.preventDefault();
  mostrarElementoObg();
});
function mostrarElementoOtr() {
  var elemento4 = document.getElementById("ocultarDat");
  elemento4.style.display = "none";
  var elemento4 = document.getElementById("ocultarBie");
  elemento4.style.display = "none";
  var elemento4 = document.getElementById("ocultarEdu");
  elemento4.style.display = "none";
  var elemento4 = document.getElementById("ocultarExp");
  elemento4.style.display = "none";
  var elemento4 = document.getElementById("ocultarObg");
  elemento4.style.display = "none";
  var elemento4 = document.getElementById("ocultarOtr");
  elemento4.style.display = "block";
}
var enlaceMostrar = document.getElementById("otr");
enlaceMostrar.addEventListener("click", function(event) {
  event.preventDefault();
  mostrarElementoOtr();
});