function adjustLayout() {
    const screenWidth = window.innerWidth;
    const miElemento = document.getElementById('mi-elemento');
  
    if (screenWidth < 768) {
      miElemento.style.fontSize = '16px';
    } else {
      miElemento.style.fontSize = '24px';
    }
  }
  window.addEventListener('resize', adjustLayout);
  window.addEventListener('load', adjustLayout);