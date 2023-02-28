// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //add current date to the top of the page
  dateDisplay=dayjs();
  $("#currentDay").text(dateDisplay.format("dddd, MMMM D YYYY "));

  var currentTime = dayjs().hour();

  $('.time-block').each(function () {

    var timeEl = $(this).attr("data-hour");

    if (timeEl < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("present");
    } else if (timeEl === currentTime) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  
  });

  //TODO: Add a listener for click events on the save button. This code should
  var saveButtonEl = $('.saveBtn');

  saveButtonEl.on('click', function () {
    var currentHour = this.dataset.hour;
    var task = $(`#text-${currentHour}`)[0].value;
    localStorage.setItem(`key-${currentHour}`, task);
  }
  )

  // Displays saved tasks from local storage in the text boxes for the corresponding hours.
  savedTask9 = localStorage.getItem(`key-9`)
  $(`#text-9`)[0].value = savedTask9
  savedTask10 = localStorage.getItem(`key-10`)
  $(`#text-10`)[0].value = savedTask10
  savedTask11 = localStorage.getItem(`key-11`)
  $(`#text-11`)[0].value = savedTask11
  savedTask12 = localStorage.getItem(`key-12`)
  $(`#text-12`)[0].value = savedTask12
  savedTask13 = localStorage.getItem(`key-13`)
  $(`#text-13`)[0].value = savedTask13
  savedTask14 = localStorage.getItem(`key-14`)
  $(`#text-14`)[0].value = savedTask14
  savedTask15 = localStorage.getItem(`key-15`)
  $(`#text-15`)[0].value = savedTask15
  savedTask16 = localStorage.getItem(`key-16`)
  $(`#text-16`)[0].value = savedTask16
  savedTask17 = localStorage.getItem(`key-17`)
  $(`#text-17`)[0].value = savedTask17

});



  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  

