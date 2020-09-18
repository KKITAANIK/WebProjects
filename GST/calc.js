let sec;
let min;
let hour;
let day;
let month;
let year;

let date;

document.getElementById("button").onclick = function(){
    sec = ((Date.parse(document.getElementById("dateInput").value) - (Date.parse(document.getElementById("startDate").value))) * 0.9072) / 1000;
    min = 39;
    hour = 1;
    day = 6;
    month = 2;
    year = 6896;

    date = new Date(document.getElementById("dateInput").value);

    if (date == "Invalid Date") {
        document.getElementById("display").innerHTML = "invalid Date";
        document.getElementById("toptext").innerHTML = "";
        document.getElementById("bottomtext").innerHTML = "";
    }
    else {
        if (sec >= 0) {
            while (sec >= 100) {
                sec -= 100;
                min++;
            }
            while (min >= 50) {
                min -= 50;
                hour++;
            }
            while (hour >= 25) {
                hour -= 25;
                day++;
            }
            while ((day > 35) || (day > 34 && ((month % 2 == 0) || (month == 1 && (year % 4 == 0))))) {
                if ((month % 2 == 1) && (year % 4 != 0)) {
                    day -= 35;
                    month++;
                }
                else {
                    day -= 34;
                    month++;
                }
                
                if (month > 9) {
                    month -= 9;
                    year++;
                }
            }
        }
        else {
            while (sec < 0) {
                sec += 100;
                min--;
            }
            while (min < 0) {
                min += 50;
                hour--;
            }
            while (hour < 0) {
                hour += 25;
                day--;
            }
            while (day <= 0) {
                if ((month % 2 == 1) || ((year % 4 == 0) && month == 2)) {
                    day += 34;
                    month--;
                }
                else {
                    day += 35;
                    month--;
                }
                
                if (month <= 0) {
                    month += 9;
                    year--;
                }
            }
        }

        date = date.toString().replace(/I/g, 'i');
        document.getElementById("toptext").innerHTML = date.concat(" in GST is*")

        if (year >= 0) {
            if (hour < 10) {
                if (min < 10) {
                    document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":0", min.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
                }
                else {
                    document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":", min.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
                }
            }
            else {
                if (min < 10) {
                    document.getElementById("display").innerHTML = hour.toString().concat(":0", min.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
                }
                else {
                    document.getElementById("display").innerHTML = hour.toString().concat(":", min.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
                }
            }
        }
        else {
            if (hour < 10) {
                if (min < 10) {
                    document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":0", min.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " BA GST");
                }
                else {
                    document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":", min.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " BA GST");
                }
            }
            else {
                if (min < 10) {
                    document.getElementById("display").innerHTML = hour.toString().concat(":0", min.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " BA GST");
                }
                else {
                    document.getElementById("display").innerHTML = hour.toString().concat(":", min.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " BA GST");
                }
            }
        }
    }
};