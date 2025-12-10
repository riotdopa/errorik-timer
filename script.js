// --- 1. SET YOUR COUNTDOWN DATE AND TIME HERE ---
// Target: December 12, 2025 at 3:00 PM
const countdownDate = new Date("December 12, 2025 15:00:00").getTime();
// -------------------------------------------------


// Get the elements to update
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const messageElement = document.getElementById("countdown-message");


// Function to calculate and update the timer
function updateCountdown() {
    // Get current time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Function to ensure two digits (e.g., 5 -> 05)
    const formatTime = (time) => String(time).padStart(2, '0');

    // Update the elements with the new time
    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);


    // If the countdown is finished, show a message
    if (distance < 0) {
        // Stop the interval from running
        clearInterval(timerInterval);
        
        // Update the display to 00:00:00:00
        daysElement.innerHTML = "00";
        hoursElement.innerHTML = "00";
        minutesElement.innerHTML = "00";
        secondsElement.innerHTML = "00";
        
        // Show the completion message
        messageElement.innerHTML = "🔥 ERRORIK complete! 🔥";
    }
}

// Update the countdown every 1 second
const timerInterval = setInterval(updateCountdown, 1000);

// Run the function once immediately so there is no delay before the timer appears
updateCountdown();