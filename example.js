let countdown;
let isRunning = false;
let timeElapsed = 0;
const timerDisplay = document.getElementById('timer-display');

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    timerDisplay.textContent = display;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        countdown = setInterval(() => {
            timeElapsed++;
            displayTime(timeElapsed);
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeElapsed = 0;
    displayTime(timeElapsed);
}

function restartTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeElapsed = 0;
    startTimer();
}

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('stop-btn').addEventListener('click', stopTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
document.getElementById('restart-btn').addEventListener('click', restartTimer);

displayTime(timeElapsed); 
