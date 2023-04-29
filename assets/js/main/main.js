$(document).ready(function () {
	// START AOS
	AOS.init();
	const countdown = document.querySelector(".countdown");

	// Set the target date for the countdown (YYYY-MM-DD format)
	const targetDate = "2023-06-04";

	function updateCountdown() {
		const now = new Date().getTime();
		const target = new Date(targetDate).getTime();
		const timeRemaining = target - now;

		if (timeRemaining >= 0) {
			// Calculate the days, hours, minutes, and seconds remaining
			let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
			let hours = Math.floor(
				(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			let minutes = Math.floor(
				(timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
			);
			let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

			// Update the countdown timer HTML
			document.getElementById("days").textContent = days
				.toString()
				.padStart(2, "0");
			document.getElementById("hours").textContent = hours
				.toString()
				.padStart(2, "0");
			document.getElementById("minutes").textContent = minutes
				.toString()
				.padStart(2, "0");
			document.getElementById("seconds").textContent = seconds
				.toString()
				.padStart(2, "0");

			// Add the flipdown animation
			const countdownItems = countdown.querySelectorAll(".countdown-number");
			countdownItems.forEach((item) => {
				item.classList.remove("animate");
				void item.offsetWidth;
				item.classList.add("animate");
			});
		} else {
			// Show an expired message if the countdown has ended
			countdown.innerHTML =
				'<div class="countdown-expired">Countdown has ended!</div>';
		}
	}

	// Call the updateCountdown function every second
	setInterval(updateCountdown, 1000);
});