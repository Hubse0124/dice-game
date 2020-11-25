// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, Хоёрдугаар тоглогчийг 1 гэж тэмвэглэе.

var activePlayer = 1;

// TOGLOGCHDIIN TSUGLUULSAN ONOOG HADGALAAH HUVISAGCH

var scores = [0, 0];

// TOGLOGCHIIN EELJIND AVSAN ONOO

var roundScore = 0;

// ШООНЫ АЛЬ ТАЛААРАА БУУСНЫГ ЭНЭ ХАДГАЛАХ ХУВЬСАГЧ ХЭРЭГТЭЙ 1-6 ГЭСЭН УТГЫГ ЭНЭ ХУВЬСАГЧИД САНАМСАРГҮЙГЭЭР ҮҮСГЭЖ ӨГНӨ

var diceNumber = Math.floor(Math.random() * 6) + 1;

// preparation of program
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //   alert("shoo: " + diceNumber);

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
