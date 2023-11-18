/* global data */

const $newBtn = document.querySelector('.new-btn');
const $overlay = document.querySelector('.overlay');

$newBtn.addEventListener('click', function (event) {
  $overlay.classList.remove('hidden');
});

const $cancelBtn = document.querySelector('.cancel');

$cancelBtn.addEventListener('click', function (event) {
  $overlay.classList.add('hidden');

});

const $confirmBtn = document.querySelector('.confirm');
const $eventForm = document.querySelector('.event-form');

$confirmBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const submittedData = {
    time: $time.value,
    day: $day.value,
    information: $information.value,
  };
  data.entries.unshift(submittedData);
  $tBody.prepend(renderEntry(submittedData));
  $overlay.classList.add('hidden');
  $tHead.classList.remove('hidden');
  $eventForm.reset()
});

const $time = document.querySelector('#time');
const $day = document.querySelector('#weekday-modal');
const $information = document.querySelector('#information');
const $tBody = document.querySelector('tbody');
const $tHead = document.querySelector('thead');

function renderEntry() {
  const $tr = document.createElement('tr');
  const $firstTd = document.createElement('td');
  const $secondTd = document.createElement('td');
  const $thirdTd = document.createElement('td');
  const $editButton = document.createElement('button');
  const $deleteButton = document.createElement('button');

  $firstTd.textContent = $time.value;
  $secondTd.textContent = $information.value;
  $editButton.textContent = 'Edit';
  $deleteButton.textContent = 'Delete';
  $editButton.setAttribute('class', 'edit');
  $deleteButton.setAttribute('class', 'delete');

  $tBody.appendChild($tr);
  $tr.appendChild($firstTd);
  $tr.appendChild($secondTd);
  $tr.appendChild($thirdTd);
  $thirdTd.appendChild($editButton);
  $thirdTd.appendChild($deleteButton);

  return $tr;
}

function viewSwap() {

}
