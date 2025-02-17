let timer;
let timeLeft = 25 * 60;

function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("Süre doldu!");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateDisplay();
}

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("time").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
