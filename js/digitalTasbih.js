let totalCount = 0;
const totalCountDisplay = document.getElementById('total-count');

// SUBHAN ALLAH -- PART -- //
const subhanAllahCount = document.getElementById('subhan-allah-count');
let incCountSubhanAllah = 0;
document.getElementById('subhan-allah-inc').addEventListener('click', function () {

  if (incCountSubhanAllah >= 33) {
    alert('SUBHAN ALLAH COUNT REACH HIGHEST LIMIT! PLEASE DONT COUNT SUBHAN ALLAH MORE.')
  }
  else {
    incCountSubhanAllah++;
    subhanAllahCount.innerText = incCountSubhanAllah;
    totalCount++;
    totalCountDisplay.innerText = totalCount;
  }
});

document.getElementById('subhan-allah-dec').addEventListener('click', function () {

  if (incCountSubhanAllah <= 0) {
    alert('INVALID COUNT!')
  }
  else {
    incCountSubhanAllah--;
    subhanAllahCount.innerText = incCountSubhanAllah;
    totalCount--;
    totalCountDisplay.innerText = totalCount;
  }
});

// ALHAMDULILLAH -- PART -- //
const alhamdulillahCount = document.getElementById('alhamdulillah-count');
let incCountAlhamdulillah = 0;
document.getElementById('alhamdulillah-inc').addEventListener('click', function () {

  if (incCountAlhamdulillah >= 33) {
    alert('ALHAMDULILLAH COUNT REACH HIGHEST LIMIT! PLEASE DONT COUNT ALHAMDULILLAH MORE.')
  }
  else {
    incCountAlhamdulillah++;
    alhamdulillahCount.innerText = incCountAlhamdulillah;
    totalCount++;
    totalCountDisplay.innerText = totalCount;
  }
});

document.getElementById('alhamdulillah-dec').addEventListener('click', function () {

  if (incCountAlhamdulillah <= 0) {
    alert('INVALID COUNT!')
  }
  else {
    incCountAlhamdulillah--;
    alhamdulillahCount.innerText = incCountAlhamdulillah;
    totalCount--;
    totalCountDisplay.innerText = totalCount;
  }
});

// ALLAHU AKBER -- PART -- //
const allahuAkberCount = document.getElementById('allahu-akber-count');
let incCountAllahuAkber = 0;
document.getElementById('allahu-akber-inc').addEventListener('click', function () {

  if (incCountAllahuAkber >= 33) {
    alert('ALLAHU AKBER COUNT REACH HIGHEST LIMIT! PLEASE DONT COUNT ALLAHU AKBER MORE.')
  }
  else {
    incCountAllahuAkber++;
    allahuAkberCount.innerText = incCountAllahuAkber;
    totalCount++;
    totalCountDisplay.innerText = totalCount;
  }
});

document.getElementById('allahu-akber-dec').addEventListener('click', function () {

  if (incCountAllahuAkber <= 0) {
    alert('INVALID COUNT!')
  }
  else {
    incCountAllahuAkber--;
    allahuAkberCount.innerText = incCountAllahuAkber;
    totalCount--;
    totalCountDisplay.innerText = totalCount;
  }
});

// RESET PART
document.getElementById('reset-button').addEventListener('click', function () {
  totalCount = 0;
  totalCountDisplay.innerText = 0;

  incCountSubhanAllah = 0;
  subhanAllahCount.innerText = 0;

  incCountAlhamdulillah = 0;
  alhamdulillahCount.innerText = 0;

  incCountAllahuAkber = 0;
  allahuAkberCount.innerText = 0;
});