// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Cerrar menú al hacer click en un link (mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Formulario de contacto (demo - sin backend aún)
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('¡Gracias por tu mensaje! Te vamos a contactar a la brevedad.');
  form.reset();
});
