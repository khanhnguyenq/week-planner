const $newBtn = document.querySelector('.new-btn');
const $overlay = document.querySelector('.overlay');

$newBtn.addEventListener('click', function (event) {
  $overlay.classList.remove('hidden');
});

const $cancelBtn = document.querySelector('.cancel');

$cancelBtn.addEventListener('click', function (event) {
  $overlay.classList.add('hidden');
});

let data = {
  view: 'day',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

const $confirmBtn = document.querySelector('.confirm');
const $eventForm = document.querySelector('.event-form');

$confirmBtn.addEventListener('submit', function (event) {
  const submittedData = {};
});

console.log('event-form:', $eventForm);
