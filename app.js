// togloom duussan esehiig hadgalah tuluviin huvisagch
var isNewGame;

// global variables
var activePlayer;
var scores;
var roundScore;

// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, Хоёрдугаар тоглогчийг 1 гэж тэмвэглэx.

var diceDom = document.querySelector(".dice");

initGame();

function initGame() {
  isNewGame = true;

  activePlayer = 0;

  // TOGLOGCHDIIN TSUGLUULSAN ONOOG HADGALAAH HUVISAGCH

  scores = [0, 0];

  // TOGLOGCHIIN EELJIND AVSAN ONOO

  roundScore = 0;

  // preparation of program
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // winner arilgaj shineer ehluuleh
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Click New Game button");
  }
});
// HOLD товчны EventListener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // players  round score add to main score

    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // ug toglogch hojson vgvig shalgah (100-s ih eseh)
    if (scores[activePlayer] >= 10) {
      // togloomiig duussan tuluvt oruulna
      isNewGame = false;
      //yalagch gesen textiig nerniih n orond gargana
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("click new game");
  }

  // displays main score
  //current number gets 0
  //changes players turn
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // if (activePlayer === 0) {
  //   activePlayer = 1;
  // } else {
  //   activePlayer = 0;
  // }
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDom.style.display = "none";
}

// shine togloom ehluuleh tovchnii event listener
document.querySelector(".btn-new").addEventListener("click", function () {
  initGame();
});
