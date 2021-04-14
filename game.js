
var gamePattern = [];
var userClickedPattern = [];
var randomColor;
var level = 1;
var started = 0;
var i=0;
var userChoosenColor;
var userChoosenColorSound;
var buttonColor = ["green", "red", "yellow", "blue"];
var buttonSound = ["sounds/green.mp3", "sounds/red.mp3", "sounds/yellow.mp3", "sounds/blue.mp3"];

document.addEventListener("keypress",function(){
    if(!started){
        start(1);
    takeUserInputAndCompare();
    started=1;

    }
     
});

function start(l){
    document.querySelector("h1").innerHTML = "Level" + " " + l;
    setTimeout(function () {
        nextSequence();
        restoreUserValues(); 
     }, 800);
        
}

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    randomColor = buttonColor[randomNumber];
    var selectedColorId = "#" + randomColor;
    $(selectedColorId).fadeOut(100).fadeIn(100);
    gamePattern.push(randomColor);
    var buttonPressSound = new Audio(buttonSound[randomNumber]);
    buttonPressSound.play();
}

function restoreUserValues(){
    userClickedPattern = [];
    i=0;
}


function takeUserInputAndCompare(){
    addListerner(0);
    addListerner(1);
    addListerner(2);
    addListerner(3);

}


function addListerner(b){
    document.querySelectorAll(".btn")[b].addEventListener("click", function () {
        userClickedPattern.push(buttonColor[b]);
        // console.log(buttonColor[b] + " Chosen");
        userChoosenColorSound = new Audio(buttonSound[b]);
        userChoosenColorSound.play();
        document.querySelectorAll(".btn")[b].classList.add("pressed");
        setTimeout(function () {
            document.querySelectorAll(".btn")[b].classList.remove("pressed");
        }, 100);
        if (gamePattern[i] === userClickedPattern[i]) {
            i++;
            if(i==level){
                console.log("input matched");
                level++;
                setTimeout(function () {
                    start(level);
                }, 800);

            }
            
        }
        else {
            var wrongSound = new Audio("sounds/wrong.mp3");
            wrongSound.play();
            document.querySelector("body").classList.add("wronged");
            setTimeout(function () {
                document.querySelector("body").classList.remove("wronged");
            }, 400);
            setTimeout(function () {
                restart();
            }, 800);
            
         }

});
}


function restart(){
    level=1;
    gamePattern=[];
    start(1);
}


    

//another solution


// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
       
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }




