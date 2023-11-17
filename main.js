const $newBtn = document.querySelector('.new-btn');
const $overlay = document.querySelector('.overlay');

$newBtn.addEventListener('click', function (event) {
  $overlay.classList.remove('hidden');
});

const $cancelBtn = document.querySelector('.cancel');

$cancelBtn.addEventListener('click', function (event) {
  $overlay.classList.add('hidden');
});
