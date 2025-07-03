function filtrarCategoria(categoria) {
  const items = document.querySelectorAll('.categoria');
  let algunoVisible = false;

  items.forEach(item => {
    if (categoria === 'todos' || item.classList.contains(categoria)) {
      item.style.display = 'block';
      algunoVisible = true;
    } else {
      item.style.display = 'none';
    }
  });
}
function mostrarImagen(src) {
  document.getElementById('imagenExpandida').src = src;
  const modal = new bootstrap.Modal(document.getElementById('imagenModal'));
  modal.show();
}
 function mostrarCatalogo() {
  document.getElementById('home-section').style.display = 'none';
  document.getElementById('navbar-principal').style.display = 'block';
  document.getElementById('contenido-productos').style.display = 'flex';
  document.getElementById('carrusel-principal').style.display = 'block';
  document.getElementById('footer-principal').style.display = 'block';
}
window.addEventListener('load', () => {
  document.getElementById('home-section').style.display = 'flex'; // mostrar intro
  document.getElementById('navbar-principal').style.display = 'flex';
  document.getElementById('contenido-productos').style.display = 'none';
  document.getElementById('carrusel-principal').style.display = 'none';
  document.getElementById('footer-principal').style.display = 'none';
});
function mostrarIntro() {
  document.getElementById('home-section').style.display = 'flex';
  document.getElementById('navbar-principal').style.display = 'none';
  document.getElementById('contenido-productos').style.display = 'none';
  document.getElementById('carrusel-principal').style.display = 'none';
  document.getElementById('footer-principal').style.display = 'none';
}
document.getElementById('btn-home').addEventListener('click', function(e) {
  e.preventDefault();
  mostrarIntro();
});document.getElementById('buscador').addEventListener('input', function() {
  const valor = this.value.toLowerCase();
  const tarjetas = document.querySelectorAll('.categoria');

  let algunoVisible = false;

  tarjetas.forEach(tarjeta => {
    const texto = tarjeta.textContent.toLowerCase();
    if (texto.includes(valor)) {
      tarjeta.style.display = 'block';
      algunoVisible = true;
    } else {
      tarjeta.style.display = 'none';
    }
  });

  // Mostrar mensaje si no hay resultados
  const mensaje = document.getElementById('mensaje-vacio');
  if (mensaje) {
    mensaje.style.display = algunoVisible ? 'none' : 'block';
  }
});
