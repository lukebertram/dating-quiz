$(document).ready(function(){
  $("form#date-survey").submit(function(event){
    var date1Score = 0;
    var date2Score = 0;
    var date3Score = 0;

    var answer1 = $("input:radio[name=question1Radios]:checked").val();
    var answer2 = $("input:radio[name=question2Radios]:checked").val();
    var answer3 = $("input:radio[name=question3Radios]:checked").val();
    var answer4 = $("input:radio[name=question4Radios]:checked").val();

    //answer 1 branches
    if (answer1 === "option1") {
      date1Score++;
    } else if (answer1 === "option2") {
      date2Score++;
    } else if (answer1 === "option3") {
      date3Score++;
    } else {
      //no entry
      $("");
    }
    //answer 2 branches
    if (answer2 === "option1") {
      date1Score++;
    } else if (answer2 === "option2") {
      date2Score++;
    } else if (answer2 === "option3") {
      date3Score++;
    } else {
      //no entry
    }
    //answer 3 branches
    if (answer3 === "option1") {
      date1Score++;
    } else if (answer3 === "option2") {
      date2Score++;
    } else if (answer3 === "option3") {
      date3Score++;
    } else {
      //no entry
    }
    //answer 4 branches
    if (answer4 === "option1") {
      date1Score++;
    } else if (answer4 === "option2") {
      date2Score++;
    } else if (answer4 === "option3") {
      date3Score++;
    } else {
      //no entry
    }
    //determine highscore
    if (date1Score === date2Score && date2Score === date3Score && date1Score === 0){
      $("#fail").show();
    } else if (date1Score > date2Score && date1Score > date3Score){
      $("#date1-card").show();
    } else if (date2Score > date1Score && date2Score > date3Score){
      $("#date2-card").show();
    } else if (date3Score > date1Score && date3Score > date2Score ){
      $("#date3-card").show();
    } else if (date1Score === date2Score){
      $("#date1-card").show();
      $("#date2-card").show();
    } else if (date1Score === date3Score){
      $("#date1-card").show();
      $("#date3-card").show();
    } else {
      $("#date2-card").show();
      $("#date3-card").show();
    }

    event.preventDefault();
  });
});
