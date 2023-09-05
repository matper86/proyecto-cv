if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }
const ocultarElementos = document.getElementsByClassName("seccion");
  for (let i = 0;i < ocultarElementos.length; i++){
    ocultarElementos[i].style.display ="none";
  }