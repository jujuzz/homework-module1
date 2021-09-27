//create a time data function
function currentTime() {
    var d = new Date();//get current date
    var hr24 = d.getHours();//get current hours 0-23
    var min = d.getMinutes();//get current minutes 0-59
    var sec = d.getSeconds();//get current seconds 0-59
    var ampm;//declare empty variable to store AM or PM
    var hr12;
    var utchr = d.getUTCHours();
    var timeDiff = utchr - hr24;
    var adjTimeDiff;
    var timeZone;

    //add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }
    //determine AM or PM string
    if (hr24 == 12) {
        hr12 = hr24;
        ampm = "PM";
    } else if (hr24 > 12 && hr24 < 24) {
        hr12 = hr24 - 12;
        ampm = "PM";
    } else {
        hr12 = hr24;
        ampm = "AM";
    }
    //ensure timediff is positive
    if (timeDiff < 0) {
        adjTimeDiff = timeDiff * -1;
    } else {
        adjTimeDiff = timeDiff;
    }
    //determin time zone
    if (adjTimeDiff == 4) {
        timeZone = "ET";
    } else if (adjTimeDiff == 5) {
        timeZone = "CT";
    } else if (adjTimeDiff == 6) {
        timeZone = "MT";
    } else if (adjTimeDiff == 7) {
        timeZone = "PT";
    } else {
        timeZone = "";
    }
    //Assemble time format to display
    var time = hr12 + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    document.getElementById("clock").innerText = time;
    //Run time data function every 1 second
    setInterval(currentTime, 1000);
}
currentTime();