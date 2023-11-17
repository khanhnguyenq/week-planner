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

$confirmBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const submittedData = {
    time: $time.value,
    day: $day.value,
    information: $information.value,
  };
  $overlay.classList.add('hidden');
  $eventForm.reset()
});

const $time = document.querySelector('#time');
const $day = document.querySelector('#weekday-modal');
const $information = document.querySelector('#information');

function renderEntry() {
  const $tr = document.createElement('tr');
  const $firstTd = document.createElement('td');
  const $secondTd = document.createElement('td');
  const $thirdTd = document.createElement('td');
}
