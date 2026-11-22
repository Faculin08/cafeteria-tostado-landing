// ===== Menú móvil =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}
burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// ===== Filtro del menú =====
const tabs = document.querySelectorAll('.tab');
const dishes = document.querySelectorAll('.dish');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    const filter = tab.dataset.filter;
    dishes.forEach(d => { d.hidden = !(filter === 'all' || d.dataset.cat === filter); });
  });
});

// ===== Animaciones al hacer scroll =====
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-visible'));
}

// ===== Formulario de reserva -> WhatsApp =====
const WHATSAPP = '5491100000000'; // número demo: reemplazar por el del cliente
const form = document.getElementById('form');
const errorBox = document.getElementById('form-error');
const fecha = form.elements.fecha;
fecha.min = new Date().toISOString().split('T')[0];

form.addEventListener('submit', e => {
  e.preventDefault();
  const { nombre, fecha: f, hora, personas, nota } = form.elements;
  let ok = true;
  [nombre, f, hora].forEach(field => {
    const empty = !field.value.trim();
    field.classList.toggle('invalid', empty);
    if (empty) ok = false;
  });
  if (!ok) {
    errorBox.textContent = 'Completá nombre, fecha y hora para reservar.';
    errorBox.hidden = false;
    return;
  }
  errorBox.hidden = true;
  const [y, m, d] = f.value.split('-');
  const msg = `Hola Tostado! Quiero reservar una mesa.\n` +
    `Nombre: ${nombre.value.trim()}\nFecha: ${d}/${m}/${y}\nHora: ${hora.value}\n` +
    `Personas: ${personas.value}` + (nota.value.trim() ? `\nComentarios: ${nota.value.trim()}` : '');
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});

// ===== Año del footer =====
document.getElementById('year').textContent = new Date().getFullYear();
