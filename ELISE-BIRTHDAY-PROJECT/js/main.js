(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const audio = $('#birthdayAudio');
  const musicToggle = $('#musicToggle');
  const musicLabel = $('#musicLabel');
  const playSymbol = $('#playSymbol');
  const toast = $('#toast');
  const modal = $('#surpriseModal');
  let toastTimer;

  $('#year').textContent = new Date().getFullYear();
  if (audio) audio.volume = 0.42;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }
  function updateMusicUI(playing) {
    musicToggle.setAttribute('aria-pressed', String(playing));
    musicLabel.textContent = playing ? 'Mettre en pause' : 'Lancer la musique';
    playSymbol.textContent = playing ? 'Ⅱ' : '▶';
  }
  musicToggle.addEventListener('click', async () => {
    if (!audio) return;
    if (audio.paused) {
      try { await audio.play(); updateMusicUI(true); }
      catch { showToast('Le navigateur a bloqué la lecture. Clique à nouveau pour réessayer.'); }
    } else { audio.pause(); updateMusicUI(false); }
  });
  audio.addEventListener('play', () => updateMusicUI(true));
  audio.addEventListener('pause', () => updateMusicUI(false));
  audio.addEventListener('error', () => showToast('Fichier audio introuvable : vérifie assets/audio/musique-anniversaire.mp3.'));

  // Apparition progressive des sections au défilement.
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add('visible'));
  setTimeout(() => document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible')), 100);

  function stars(count = 24, originX = window.innerWidth / 2, originY = window.innerHeight * .65) {
    const symbols = ['✦', '✧', '♡', '·'];
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('span');
      particle.className = 'star-particle';
      particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      particle.style.left = `${originX + (Math.random() - .5) * 180}px`;
      particle.style.top = `${originY + (Math.random() - .5) * 60}px`;
      particle.style.setProperty('--dx', `${(Math.random() - .5) * 260}px`);
      particle.style.animationDelay = `${Math.random() * .35}s`;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 2300);
    }
  }
  $('#confettiBtn').addEventListener('click', () => { stars(32); showToast('Un petit nuage d’étoiles rien que pour toi ✨'); });

  const wishes = [
    'Que chaque nouvelle journée te donne une raison de sourire.',
    'Que tes projets prennent vie, un petit pas après l’autre.',
    'Que tu sois entourée de personnes qui te font du bien.',
    'Que cette année t’offre de belles surprises et des souvenirs précieux.',
    'N’oublie jamais tout ce qui te rend unique. ♡',
    'Que le bonheur se cache dans les détails de chaque journée.'
  ];
  let lastWish = -1;
  function newWish() {
    let index;
    do { index = Math.floor(Math.random() * wishes.length); } while (index === lastWish && wishes.length > 1);
    lastWish = index;
    $('#wishText').textContent = wishes[index];
    stars(14, window.innerWidth / 2, window.innerHeight / 2);
  }
  function openModal() { newWish(); modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); $('#closeModal').focus(); }
  function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
  $('#surpriseBtn').addEventListener('click', openModal);
  $('#newWish').addEventListener('click', newWish);
  $('#closeModal').addEventListener('click', closeModal);
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });
  $('#againBtn').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); stars(40); showToast('Encore joyeux anniversaire Élise ! ♡'); });

  // La photo finale est volontairement un emplacement : le fichier pourra être ajouté ensuite.
  const photo = $('#elisePhoto');
  const photoWrap = $('.memory-image');
  photo.addEventListener('load', () => photoWrap.classList.add('has-photo'));
  photo.addEventListener('error', () => photoWrap.classList.remove('has-photo'));
  if (photo.complete && photo.naturalWidth) photoWrap.classList.add('has-photo');
})();
