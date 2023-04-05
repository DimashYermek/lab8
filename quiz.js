$(document).ready(function() {
  questions = [
    "What is the code of this course?","How many quizes were taken?","Room number?"];
  answers = [
    "CSCI 111","2","323"];
  choice_options = [["CSCI 101", "CSCI 110", "CSCI 111", "CSCI 090"],["1", "3", "2", "0"],
    ["323", "319", "304", "301"]];

  for (var i=0; i<questions.length; i++) {
    question = $("<h3>").text("Q " + (i + 1) + ". " + questions[i]);
    $("#questions").append(question);

    options = $("<div>");
    for (var j=0; j<choice_options[i].length; j++) {
      option = $("<input>").attr("type", "radio").attr("name", "question" + i).attr("value", choice_options[i][j]);
      label = $("<label>").text(choice_options[i][j]);
      options.append(option).append(label);
    }
    $("#questions").append(options);
  }

  $("#submit").click(function() {
    score = 0;
    for (var i=0; i<questions.length; i++) {
      selected = $("input[name=question" + i + "]:checked").val();
      if (selected === answers[i]) {
        score++;
      }
    }
    $("#grade").text("You have " + score + " correct answers");
  });
});
