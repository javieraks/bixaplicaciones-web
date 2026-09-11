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

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
  });
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Pausar carrusel de logos al pasar el mouse
const logosTrack = document.querySelector('.logos-track');
if (logosTrack) {
  logosTrack.addEventListener('mouseenter', () => {
    logosTrack.style.animationPlayState = 'paused';
  });
  logosTrack.addEventListener('mouseleave', () => {
    logosTrack.style.animationPlayState = 'running';
  });
}
