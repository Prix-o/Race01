// DELETE IN FUTURE

// let timerInterval;
// let timeLeft = 30;

// // Function to start the timer
// function startTimer() {
//   // Clear any existing timers
//   clearInterval(timerInterval);

//   // Reset the time
//   timeLeft = 30;
//   document.getElementById('time').textContent = timeLeft;

//   // Start the countdown
//   timerInterval = setInterval(() => {
//     timeLeft--;
//     document.getElementById('time').textContent = timeLeft;

//     // If time runs out, end the turn automatically
//     if (timeLeft <= 0) {
//       clearInterval(timerInterval);
//       endTurn();
//     }
//   }, 1000);
// }

// // Function to end the turn
// function endTurn() {
//   alert('Turn ended!');
//   // Perform end turn actions (e.g., switch player, reset timer, etc.)
//   // Remove or comment out the automatic restart to control the flow manually
//   // startTimer(); // Uncomment if you want to restart automatically
// }

// // Event listener for the End Turn button
// document.getElementById('end_turn').addEventListener('click', () => {
//   clearInterval(timerInterval);
//   startTimer(); // Start or restart the timer when the button is pressed
// });

// // Optional: Automatically start the timer when the page loads
// window.onload = startTimer;
