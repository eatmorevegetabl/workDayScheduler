var dayEl = $('#currentDay');
var btnEl = $('.btn');
var formEl = $('.form-input');

dayEl.text(moment().format('MMMM Do YYYY')); //date at header

formEl.append(localStorage.getItem('myHour'));

// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value
  var hourItem = $('input[name="hourly-input"]').val();

  // save to local storage
  return localStorage.setItem('myHour', hourItem);
}

btnEl.on('click', handleFormSubmit);
