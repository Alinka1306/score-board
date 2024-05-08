let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");

let resetGameBtn = document.getElementById("reset-game");

let homeScoreEl =document.getElementById("home-score");
let guestScoreEl =document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function increaseHomeScore(scoreIncreaser){
    homeScore += scoreIncreaser;
    console.log(arguments[0]);
    homeScoreEl.textContent = homeScore;
}
function increaseGuestScore(scoreIncreaser){
    guestScore += scoreIncreaser;
    console.log(arguments[0]);
    guestScoreEl.textContent = guestScore;
}

// Event listeners for home score buttons
homeScoreBtnOne.addEventListener("click", function() {
    increaseHomeScore(1);
});
homeScoreBtnTwo.addEventListener("click", function() {
    increaseHomeScore(2);
});
homeScoreBtnThree.addEventListener("click", function() {
    increaseHomeScore(3);
});

// Event listeners for guest score buttons
guestScoreBtnOne.addEventListener("click", function() {
    increaseGuestScore(1);
});
guestScoreBtnTwo.addEventListener("click", function() {
    increaseGuestScore(2);
});
guestScoreBtnThree.addEventListener("click", function() {
    increaseGuestScore(3);
});

// Reset game counters to 0
resetGameBtn.addEventListener("click", function() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
});