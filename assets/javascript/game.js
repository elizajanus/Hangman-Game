/*
1. event listener that registers letters
2. computer chooses word randomly
3. guess appears in "letters already guessed" and is compared to letters in chosen word
4. if letter does not appear in word, subtract from guesses remaining
5. if letter does appear in word, add it to appropriate spot in word
*/
$(document).ready(function() {


var alphabet = "abcdefghijklmnopqrstuvwxyz";
var lives = 13;
var words = ["ionian", "dorian", "lydian", "mixolydian", "aeolian", "phrygian", "locrian"];
var win = 'nice';
var lose = 'heck';
var $output = $("#output");
var $hangman = $("#hangman");
var $guessInput = $("#letter");

$(document).on("keydown", function() {
    
});

});