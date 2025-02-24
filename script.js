const showGaleryButtons = document.querySelectorAll('.showGalery');
const galeryElements = document.querySelectorAll('.galery');
const overlayElements = document.querySelectorAll('.overlay');

showGaleryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const galeryId = button.getAttribute('data-galery');
    const overlayId = button.getAttribute('data-overlay');
    const galery = document.querySelector(galeryId);
    const overlay = document.querySelector(overlayId);
    if (overlay) {
      overlay.classList.add('aberto');
    }
    galery.style.display = 'block';
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('showGalery') && !e.target.classList.contains('galery')) {
    galeryElements.forEach(galery => {
      galery.style.display = 'none';
    });
    overlayElements.forEach(overlay => {
      overlay.classList.remove('aberto');
    });
  }
});
