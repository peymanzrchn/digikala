function countDownTimer() {
    let countDownDate = new Date("Nov 17, 2050 24:00:00").getTime();
    console.log(countDownDate);

    let m = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        let timer = document.querySelectorAll(".timer span");

        for (let i = 0; i < timer.length; i++) {
            timer[i].innerHTML = `${hours}:${minutes}:${seconds}`;
        }

        if (distance < 0) {
            clearInterval(m);
            timer[i].innerHTML = "EXPIRED";
        }
    }, 1000);
}

countDownTimer();
