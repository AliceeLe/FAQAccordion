var questions = document.getElementsByClassName("question");
var i;

for (i = 0; i < questions.length; i++) {
  var question = questions[i];
  console.log(question);
  var header = question.getElementsByClassName("question-header")[0];
  console.log(header);
  header.addEventListener("mouseover", function (event) {
    event.target.style.color = " #AD28EB";
  });
  header.addEventListener("mouseout", function (event) {
    event.target.style.color = "";
  });

  question.addEventListener("click", function () {
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    var button = question.getElementsByClassName("question-button")[0];
    if (panel.style.display === "block") {
      panel.style.display = "none";
      event.target.src = "assets/images/icon-minus.svg";
    } else {
      panel.style.display = "block";
      event.target.src = "assets/images/icon-plus.svg";
    }
  });
}
