const numDivs = 36;
const maxHits = 10;

let mistake = 0;
let hits = 0;
let firstHitTime = 0;
function round() {
  $("div#win-message").hide();
  $("div").removeClass("target");
  $("div").removeClass("miss");
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $("div.game-field").empty();
  $(divSelector).html(hits + 1);
  if (hits < 1) {
    firstHitTime = getTimestamp();
  } else {
  }
  if (hits === maxHits) {
    $("div.game-field").empty();
    $("div").removeClass("target");
    endGame();
  }
}

function endGame() {
  $("div.play").hide();
  $("div#win-message").show();
  let result = hits - mistake;
  console.log(result);
  $("div#win-message").append(
    `<h2> Вы нашли ${hits} зелёных квадратов за <span id='total-time-played'></span> секунд<br>Но допустили ошибок - ${mistake}<br>Общий счет - ${result}</h2>`
  );
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
  hits = 0;
}

function handleClick(event) {
  if ($(event.target).closest(".target").length > 0) {
    hits = hits + 1;
    round();
  } else {
    $(event.target).addClass("miss");
    mistake = mistake + 1;
  }
}

function init() {
  $("#button-start").click(function () {
    $("div.play").show();
    round();
  });

  $(".game-field").click(handleClick);
  $("#button-reload").click(function () {
    location.reload();
  });
}

$(document).ready(init);
