function currentTime() {
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let today = date.getDate();
    let year = date.getFullYear();

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = `
    <div>
        <div class="time">${hh}:${mm}:${ss} ${session}</div>
        <div class="date">${today} | ${month} | ${year}</div>
        <div class="day">${day}</div>
    </div>
    `

    document.getElementById("clock").innerHTML = time;
    document.getElementById("wrapper").style.background = `#${hh}${mm}${ss}`;

    setTimeout(currentTime, 1000);

}
currentTime();