// ===== BURGER / NAV MODAL =====
const burgerBtn = document.getElementById('burgerBtn');
const navModal  = document.getElementById('navModal');
const navModalBg   = document.getElementById('navModalBg');
const navModalClose = document.getElementById('navModalClose');

function openNav() {
  navModal.classList.add('active');
  burgerBtn.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  navModal.classList.remove('active');
  burgerBtn.classList.remove('open');
  document.body.style.overflow = '';
}

burgerBtn.addEventListener('click', openNav);
navModalClose.addEventListener('click', closeNav);
navModalBg.addEventListener('click', closeNav);

// ===== SLIDESHOW =====
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto-rotate every 4 seconds
function startSlider() {
  slideInterval = setInterval(nextSlide, 4000);
}
startSlider();

// ===== MODALS =====
function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Open via data-modal buttons
document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.modal));
});

// Close via data-close buttons
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.close));
});

// Close modal when clicking the overlay background
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});
