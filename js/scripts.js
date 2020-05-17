function calculate() {
    var dateOfBirth = document.getElementById("date_of_birth").value; // capture date of birth
    var gender = document.getElementById("gender").value;
    var split_date = dateOfBirth.split('-');
    var MM = parseInt(split_date[1]);
    var DD = parseInt(split_date[2]);
    var year = split_date[0]
    var CC = parseInt(year.string(0,2));
    var YY = parseInt(year.string(2,4));
    var d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
        
