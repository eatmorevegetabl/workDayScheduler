var dayEl = $('#currentDay');
var btnEl = $('.btn');
var formEl = $('.form-input');

dayEl.text(moment().format('MMMM Do YYYY')); //date at header

// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value
  var hourItem = $('input[name="hourly-input"]').val();

  // if there's nothing in the form entered, don't print to the page
  if (!hourItem) {
    console.log('No event filled out in form!');
    return;
  }

  // save to local storage
  localStorage.setItem('myHour', hourItem);
}

btnEl.on('click', handleFormSubmit);
