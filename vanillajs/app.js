var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var btnClose = document.querySelector('.btn-modal-close');
var btnOpen = document.querySelector('.btn-modal-open');


function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

btnOpen.addEventListener('click', function() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
});

btnClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});