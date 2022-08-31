let modal = document.querySelector('.modal');
let backdrop = document.querySelector('.backdrop');
let btnClose = document.querySelector('.btn-modal-close');
let btnOpen = document.querySelector('.btn-modal-open');


function closeModal() {
  modal.classList.remove("open");
  backdrop.classList.remove("open");
  document.body.style.overflowY= 'visible';
}

btnOpen.addEventListener('click', function() {
  modal.classList.add("open");
  backdrop.classList.add("open");
  document.body.style.overflowY= 'hidden';
});

btnClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});