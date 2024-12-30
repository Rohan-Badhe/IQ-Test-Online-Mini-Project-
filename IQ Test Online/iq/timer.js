document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    const formElement = document.getElementById("test-form");
    let timeLeft = 180; // 3 minutes in seconds

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            alert("Time's up! The test will now submit.");
            formElement.submit();
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to display the timer immediately
});
