var buttons = document.querySelectorAll('button');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');

var textEdit = document.querySelector('.modal textarea');



function updateParagraph() {
  outputParagraph.textContent = quote;
}

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}



buttons[2].addEventListener('click', function() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
});

buttons[0].addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

buttons[1].addEventListener('click', function() {
  closeModal();
});
