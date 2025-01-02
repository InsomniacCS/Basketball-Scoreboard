function increaseGuestScore(number) {
  let guestScoreElement = document.getElementById("guest-score");
  guestScoreElement.textContent =
    parseInt(guestScoreElement.textContent) + number;
}

function increaseHomeScore(number) {
  let homeScoreElement = document.getElementById("home-score");
  homeScoreElement.textContent =
    parseInt(homeScoreElement.textContent) + number;
}
