$(document).ready(function () {
  var laps = 0;
  $("#flying-pig").draggable({});
  $("#flying-pig").click(function () {
    //code goes here
    console.log("position: ", $("#flying-pig").position());
  });

  $("#flying-pig").draggable({
    stop: function () {
      if ($("#flying-pig").position().left > 2000) {
        //  alert("you haswss wowzazzz ");
        $("#flying-pig").css("transform", "scaleX(1)");
      } else if ($("#flying-pig").position().left < 150) {
        $("#flying-pig").css("transform", "scaleX(-1)");
        laps++;
        console.log("Laps Completed:", laps);
      }
      if (laps >= 5) {
        $("#game-text").text("Congratulations you've shown us pigs can fly");
        $("#game-text")
          .css("font-size", "50px")
          .css("text-align", "center")
          .css("color", "yellow")
          .css("background", "orange");
        $("body").css("font-family", "cursive");
      }
    }
  });
});
