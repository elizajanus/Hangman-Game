/*
1. computer chooses word randomly
2. event listener that registers letters
3. guess appears in "letters already guessed" and is compared to letters in chosen word
4. if letter does not appear in word, subtract from guesses remaining
5. if letter does appear in word, add it to appropriate spot in word
*/
$(document).ready(function() {
var wins = 0;
var lives = 13;
var words = ["ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian"];
var scales = ["ionian.mp3", "dorian.mp3", "phygian.mp3", "lydian.mp3", "mixolydian.mp3","aeolian.mp3", "locrian.mp3"];
var guesses = [];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
$("#wins").text(wins);
$("#remaining").text(lives);
  var wordChoice = words[getRandomInt(6)];
  var lettersArray = wordChoice.split("");
  console.log(lettersArray);
  var letters = document.getElementById("letters");
      $("#letters").html('<li class="current-word">Current word:</li>');
for (i = 0; i < wordChoice.length; i++) {
            var letter = '<li class="letter"' + wordChoice.charAt(i).toUpperCase() + '">' + wordChoice.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend', letter);
        }
//this was me trying things out that didn't work how I wanted but I want to keep them for reference:
//  $("#letters").text(lettersArray);
  //$("#letters").text(lettersArray.join(""));
//$("#letters").text(wordChoice);

$(document).on("keypress", function(event) {
    console.log("you pressed a key");
    var press = String.fromCharCode(event.which);
    console.log(press);
        if (guesses.indexOf(press) === -1) {
            guesses.push(press);
            $("#guessed").text(guesses);
            console.log(guesses);
                if (lettersArray.indexOf(press) === -1) {
                    console.log("no match");
                    lives--;
                    $("#remaining").text(lives);
                        if (lives < 0) {
                            alert("loserrrrrrr -- reload the page");
                        }
                }
                else if (lettersArray.indexOf(press) > -1) {
                    console.log("we have a match");
                    wins++;
                    $("#wins").text(wins);

                        for (i=0; i < lettersArray.length; i++) {

                            if (lettersArray[i] == press) {
                                 $(".letter").eq(i).addClass("illuminate");

                            }
                                    else {

                                    }

                        }
                }
          }


      else if (guesses.indexOf(press) > -1) {
        alert("you already pressed that key");
      }
});

});
