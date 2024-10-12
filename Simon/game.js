var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];



// var randomNumber = Math.floor(Math.random() * 4);
// var randomChosenColor = [];

// document.addEventListener("keydown", function() {
// if (randomNumber === 0) {
//   randomChosenColor = buttonColors[0];
// } 
// else if (randomNumber === 1) {
//   randomChosenColor = buttonColors[1];
// } 
// else if (randomNumber === 2) {
//   randomChosenColor = buttonColors[2];
// } 
// else if (randomNumber === 3) {
//   randomChosenColor = buttonColors[3];
// }
// else {
//   console.log("Uh-oh, something went wrong.");
// }
// console.log(randomChosenColor);
// gamePattern.push(randomChosenColor);
// });



function playSoundGreen() {
    var greenNoise = new Audio('./sounds/green.wav');
    greenNoise.play();

    $("#green").addClass("pressed");
    setTimeout( function() { $("#green").removeClass("pressed"); }, 200 );
    $(".in-green").addClass("pressed-inner");
    setTimeout( function() { $(".in-green").removeClass("pressed-inner"); }, 200 );
}
$(".green").mousedown(playSoundGreen);


function playSoundRed() {
  var redNoise = new Audio('./sounds/red.wav');
  redNoise.play();
  
  $("#red").addClass("pressed");
  setTimeout( function() { $("#red").removeClass("pressed"); }, 200 );
  $(".in-red").addClass("pressed-inner");
    setTimeout( function() { $(".in-red").removeClass("pressed-inner"); }, 200 );
}
$(".red").mousedown(playSoundRed);


function playSoundYellow() {
  var yellowNoise = new Audio('./sounds/yellow.wav');
  yellowNoise.play();
  
  $("#yellow").addClass("pressed");
  setTimeout( function() { $("#yellow").removeClass("pressed"); }, 200 );
  $(".in-yellow").addClass("pressed-inner");
    setTimeout( function() { $(".in-yellow").removeClass("pressed-inner"); }, 200 );
}
$(".yellow").mousedown(playSoundYellow);


function playSoundBlue() {
  var blueNoise = new Audio('./sounds/blue.wav');
  blueNoise.play();
  
  $("#blue").addClass("pressed");
  setTimeout( function() { $("#blue").removeClass("pressed"); }, 200 );
  $(".in-blue").addClass("pressed-inner");
    setTimeout( function() { $(".in-blue").removeClass("pressed-inner"); }, 200 );
}
$(".blue").mousedown(playSoundBlue);





// Step 8


var started = false;
var level = 0;

$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    $(".your-level").text("Level: " + level);
    nextSequence();
    started = true;
  }
});
$("#level-title").click(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    $(".your-level").text("Level: " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click( function() {

  if (started) {
    
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  // Step 8
  checkAnswer(userClickedPattern.length-1);

  // console.log(userClickedPattern);

  }

  else {
    return;
  }

});


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    
   
    if (userClickedPattern.length === gamePattern.length) {
      console.log(userClickedPattern);

      $(".your-points").text(level * 200 + " Points");

      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  }
  else {
    endGame();
    console.log("Wrong :(");

    restartGame();
  }
}


function nextSequence() {
  userClickedPattern = [];

  level++;

  document.getElementById("level-title").classList.remove("clickable");
  $("#level-title").text("Level " + level);
  $(".your-level").text("Level: " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(200).fadeOut(300).fadeIn(200);
  playSound(randomChosenColor);
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".wav");
  audio.play();
}








// Glass screen

function endGame() {

  var cartoonWhistleAudio = new Audio("sounds/cartoon-whistle.wav");
  cartoonWhistleAudio.play();

  setTimeout(() => {
    document.getElementsByClassName("glass-screen")[0].classList.add("glass-screen-css");
  }, 1000);

  setTimeout(() => {
    var bassAudio = new Audio("sounds/bass-noise.wav");
    bassAudio.play();
  }, 1000);

}


function restartGame() {

  setTimeout(() => {
    
    document.getElementsByClassName("banner-container")[0].classList.remove("hide");

  }, 1800);

  setTimeout(() => {

    document.getElementsByClassName("banner-container")[0].classList.add("banner-dropdown");

  }, 1800);

}



// Restart game and reset game stats

$(".banner-container").click(function() {

  // clear console
  console.clear();

  // stats reset
  level = 0;
  $("#level-title").text("Level " + level);
  $(".your-level").text("Level: " + level);
  $(".your-points").text(level * 200 + " Points");

  gamePattern = [];
  started = false;

  // visual reset
  document.getElementsByClassName("glass-screen")[0].classList.remove("glass-screen-css");
  document.getElementsByClassName("banner-container")[0].classList.add("hide");

  document.getElementById("level-title").innerHTML = "Press a key to start";


  // make press-to-start clickable again
  document.getElementById("level-title").classList.add("clickable");

  // other

  setTimeout(() => {

    document.getElementsByClassName("banner-container")[0].classList.remove("banner-dropdown");

  }, 1000);

});