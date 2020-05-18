function calculate() {
  var dateOfBirth = document.getElementById("date-of-birth").value; // capture date of birth
  var gender = document.getElementById("gender").value;
  var split_date = dateOfBirth.split("-"); //['2020', '05', '16']
  var year = split_date[0] // navigates to year
  var MM = parseInt(split_date[1]); //month
  var DD = parseInt(split_date[2]); //day
  var CC = parseInt(year.substring(0, 2));
  var YY = parseInt(year.substring(2, 4));
  var d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
  var output = document.getElementById("results_container");
  if (gender === 'male') {
    output.innerHTML = "You were born on " + dayOfTheWeek[parseInt(d)] + " and your name is: " + male[parseInt(d)];
  } else if (gender === 'female') {
    output.innerHTML = "You were born on " + dayOfTheWeek[parseInt(d)] + " and your name is: " + female[parseInt(d)];
  }
}
