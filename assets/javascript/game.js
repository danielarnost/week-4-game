
//GLOBAL VARIABLES
//=====================================================
//Arrays and variables for holding data


//var computerAnswer = []

$(document).ready(function(){

var green, opal, red, blue;

var totalScore = 0
var winCounter = 0
var lossCounter = 0 
var userGameCounter = []
var crystalValue = []

reset();
// sub category game counters (Global)
//__________________________________________________________


//Functions (Reusable blocks of code )_____________________
function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }
    var randomNumber = (getRandomInt(19, 120));
    console.log(randomNumber);

  $(".computerAnswer").html(randomNumber);
  $(".totalScore").html(totalScore);

//click functions++++++++++++++++++++++++++++++++++++++
//variables, including gems, (everything but wins and losses)  call it in a function
//number to guess back to 0
//total score back to 0
function reset(){
totalScore=0;
 opal = getRandomInt(1, 12);
 green = getRandomInt(1, 12);
 blue = getRandomInt(1, 12);
 red = getRandomInt(1, 12);
 $(".totalScore").html(totalScore);
}


// call reset at beginning and these can be deleted. 
// var opal = (getRandomInt(1, 12));
// console.log(opal);

// var green= (getRandomInt(1, 12));
// console.log(green);

// var blue = (getRandomInt(1, 12));
// console.log(blue);

// var red = (getRandomInt(1, 12));
// console.log(red);
 

  $(".opal").on("click", function() {// use += when adding an onclick to total score
  	 totalScore += opal  //adds opal to total score i.e. total score = total score + opal
  $(".totalScore").html(totalScore);// need to interact with DOM
	checkScore();
  })

  $(".green").on("click", function() {// use += when adding an onclick to total score
  	 totalScore += green  //adds opal to total score i.e. total score = total score + opal
  $(".totalScore").html(totalScore);// need to interact with DOM
	checkScore();
  })

  $(".blue").on("click", function() {// use += when adding an onclick to total score
  	 totalScore += blue  //adds opal to total score i.e. total score = total score + opal
  $(".totalScore").html(totalScore);// need to interact with DOM
	checkScore();
  })

  $(".red").on("click", function() {// use += when adding an onclick to total score
  	 totalScore += red  //adds opal to total score i.e. total score = total score + opal
  $(".totalScore").html(totalScore);// need to interact with DOM
	checkScore();
  })

//++++++++++++++++++++++resets+++++++++++++++++++++++++++++++++++++++++++++++


//logic
function checkScore () {
	if (randomNumber === totalScore){
		winCounter++
		$(".wins").html(winCounter)
		reset();	
	} 
	if (totalScore > randomNumber ){
		lossCounter++
		$(".losses").html(lossCounter);
		reset();
	}


}



})




//reset functions - every time it runs start game these need to be reset
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//populate DOM====================================================
// use for loops for to check if user addition = computerGuess





//var x = Y+w
//varY=5
//document.getElementbyID"demo










//TENOR use on click function for crystals
//$( ".crystal" ).click(function() {



//check if user won : if statement


////add hidden value


///add addition function (calculator)






//Main processes, call functions , 
//====================================================

//Initiaiates code for first time
