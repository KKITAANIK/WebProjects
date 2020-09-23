let sec = ((Date.now() - 1597536000000) * 0.9072) / 1000;
let min = 39;
let hour = 1;
let day = 6;
let month = 2;
let year = 6896;

function UpdateTime() {
    sec = ((Date.now() - (Date.parse(document.getElementById("startDate").value))) * 0.9072) / 1000;
    min = 39;
    hour = 1;
    day = 6;
    month = 2;
    year = 6896;

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
        if ((month % 2 == 0) || ((year % 4 == 0) && month == 1)) {
            day -= 34;
            month++;
        }
        else {
            day -= 35;
            month++;
        }
        
        if (month > 9) {
            month -= 9;
            year++;
        }
    }

    if (hour < 10) {
        if (sec < 10) {
            if (min < 10) {
                document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":0", min.toString(), ":0", Math.trunc(sec).toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
            else {
                document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":", min.toString(), ":0", Math.trunc(sec).toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
        }
        else {
            if (min < 10) {
                document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":0", min.toString(), ":", Math.trunc(sec).toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
            else {
                document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":", min.toString(), ":", Math.trunc(sec).toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
        }
    }
    else {
        if (sec < 10) {
            if (min < 10) {
                document.getElementById("display").innerHTML = hour.toString().concat(":0", min.toString(), ":0", Math.trunc(sec).toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
            else {
                document.getElementById("display").innerHTML = hour.toString().concat(":", min.toString(), ":0", Math.trunc(sec).toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
        }
        else {
            if (min < 10) {
                document.getElementById("display").innerHTML = hour.toString().concat(":0", min.toString(), ":", Math.trunc(sec).toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
            else {
                document.getElementById("display").innerHTML = hour.toString().concat(":", min.toString(), ":", Math.trunc(sec).toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
        }
    }
}