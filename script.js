const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function clockTime() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateclock(second, seconds);
    rotateclock(minute, minutes);
    rotateclock(hour, hours);
}

function rotateclock(element, value) {
    element.style.setProperty("--rotate", value * 360);
}

setInterval(clockTime, 1000);