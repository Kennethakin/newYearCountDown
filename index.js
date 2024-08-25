const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

const newYear = new Date("Jan 1, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = Date.now();
    const gap = newYear - now;

    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    dayElement.innerText = Math.floor(gap / day);
    hourElement.innerText = Math.floor((gap % day) / hour);
    minuteElement.innerText = Math.floor((gap % hour) / minute);
    secondElement.innerText = Math.floor((gap % minute) / second);
    
}

updateCountdown();
setInterval(updateCountdown, 1000);
