$(document).ready(function () {
  let start =
    ($(".progress-bar").width() / $(".progress-bar").parent().width()) * 100;
  let perc1 = $("#add1");
  let perc3 = $("#add3");
  let perc7 = $("#add7");
  perc1.click(function () {
    if (start <= 100) {
      start = start + 1;
      $(".progress-bar").css("width", `${start}%`);
    } else {
      alert("уже максимум");
    }
  });
  perc3.click(function () {
    if (start <= 100) {
      start = start + 3;
      $(".progress-bar").css("width", `${start}%`);
    } else {
      alert("уже максимум");
    }
  });
  perc7.click(function () {
    if (start <= 100) {
      start = start + 7;
      $(".progress-bar").css("width", `${start}%`);
    } else {
      alert("уже максимум");
    }
  });
});
