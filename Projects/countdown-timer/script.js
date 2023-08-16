const newYears = "1 Jan 2024"

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const timeLeft = (newYearsDate - currentDate);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

countDown();

setInterval(countDown, 1000);