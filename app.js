// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, Хоёрдугаар тоглогчийг 1 гэж тэмвэглэе.

var activePlayer = 1;

// TOGLOGCHDIIN TSUGLUULSAN ONOOG HADGALAAH HUVISAGCH

var scores = [0, 0];

// TOGLOGCHIIN EELJIND AVSAN ONOO

var roundScore = 0;

// ШООНЫ АЛЬ ТАЛААРАА БУУСНЫГ ЭНЭ ХАДГАЛАХ ХУВЬСАГЧ ХЭРЭГТЭЙ 1-6 ГЭСЭН УТГЫГ ЭНЭ ХУВЬСАГЧИД САНАМСАРГҮЙГЭЭР ҮҮСГЭЖ ӨГНӨ

var dice = Math.floor(Math.random() * 6) + 1;

console.log("Шоо:" + dice);

// preparation of program
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
