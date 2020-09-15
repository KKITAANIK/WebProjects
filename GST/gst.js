let sec = Math.trunc(((Date.now() / 1000) - 1597536000) * 0.9072);
let min = 39;
let hour = 1;
let day = 6;
let month = 2;
let year = 6896;

function UpdateTime() {
    let sec = Math.trunc(((Date.now() / 1000) - 1597536000) * 0.9072);
    let min = 39;
    let hour = 1;
    let day = 6;
    let month = 2;
    let year = 6896;

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

    if (hour < 10) {
        if (sec < 10) {
            if (min < 10) {
                document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":0", min.toString(), ":0", sec.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
            else {
                document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":", min.toString(), ":0", sec.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
        }
        else {
            if (min < 10) {
                document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":0", min.toString(), ":", sec.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
            else {
                document.getElementById("display").innerHTML = "0".concat(hour.toString(), ":", min.toString(), ":", sec.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
        }
    }
    else {
        if (sec < 10) {
            if (min < 10) {
                document.getElementById("display").innerHTML = hour.toString().concat(":0", min.toString(), ":0", sec.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
            else {
                document.getElementById("display").innerHTML = hour.toString().concat(":", min.toString(), ":0", sec.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
        }
        else {
            if (min < 10) {
                document.getElementById("display").innerHTML = hour.toString().concat(":0", min.toString(), ":", sec.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
            else {
                document.getElementById("display").innerHTML = hour.toString().concat(":", min.toString(), ":", sec.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " AA GST");
            }
        }
    }

    setInterval(UpdateTime, 500);
}