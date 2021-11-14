function convertSeconds(s) {
    let sec = Math.floor(s % 60);
    let min = Math.floor(s / 60);
    let hour;
    if (min >= 60) {
        hour = Math.floor(min / 60);
        min %= 60;
        return nf(hour, 2) + ":" + nf(min, 2) + ":" + nf(sec, 2);
    }
    return nf("0", 2) + ":" + nf(min, 2) + ":" + nf(sec, 2);
}

function setup() {
    let counter = 0;
    let timeLeft = 90000;
    let timer = document.querySelectorAll(".timer span");
    for (let i = 0; i < timer.length; i++) {
        timer[i].innerHTML = convertSeconds(timeLeft - counter);
        let interval = setInterval(timeIt, 1000);
        function timeIt() {
            counter++;
            timer[i].innerHTML = convertSeconds(timeLeft - counter);
            if (counter === timeLeft) {
                counter = 0;
                clearInterval(interval);
            }
        }
    }
}

setup();
