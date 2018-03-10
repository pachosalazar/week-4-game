// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// Option 1 Game design notes
// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12.

// I need to create the var that i will use 

var win=0;
var losses=0;
var crystals=[];
var plus= 0;

var start= function() {
    // at the reser point of the start we have to get back the cristals
    $(".crystals").empty();
    // i need a number random that get diplay in the DOM
Guess_total = (Math.floor(Math.random()*101)+19);
$("#total").html('Guess total:  '+ Guess_total);
// testin the number of the pc choice random
console.log (Guess_total);
// try to create crystals by jquery ans js for the cristals
for (var i = 0; i < 4; i++){

    // $(".crystals").empty();
// how to asigne random number to the crystals 
    var rnumber= [Math.floor(Math.random() * 11)+1];
    // i have to create the cristals to be able to use the number on i can try in jquery or in html 

var crystal =$("<div>");
        crystal.attr({
        "class": 'crystal',
        "data-rnumber": rnumber
        });
//how to give rnumber to each cristal 
    $(".crystals").append(crystal);

 console.log (rnumber);
}
}
$("#adds").html(plus);

start();
// funtin to create an event as soon i click each cristal
// ask whats event delegation
$(document).on('click',".crystal", function (){
    var num = parseInt($(this).attr('data-rnumber'));

    // add numbers of dimonts bettwen them
    plus += num;

    $("#adds").html(plus);
// stop adition to go over the number that the pc give us showing win or lose
if (plus > Guess_total){
    losses--;
    $("#lost").html(losses);
    plus=0;
    $("#adds").html(plus);

//  alert("Bad luck you lose!!!");
start();
}
else if (plus === Guess_total){
    win++;
    $("#win").html(win);
    plus=0;
    $("#adds").html( plus);

    // alert("oooohh YEAH you win!!!");
    start();
}  
   console.log ($(this).attr('data-rnumber'));
   console.log (plus);

});

