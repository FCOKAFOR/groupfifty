let pressPlayButton = document.querySelector("#play");



let ana = document.querySelector("#ana");
let grey = document.querySelector("#grey");
let startText = document.querySelector("#startText");
let itBegan = document.querySelector("#itBegan");
let monkMusic = document.querySelector("#monk");
let book = document.querySelector("#book");
let gaspSound = document.querySelector("#gasp");
let thudSound = document.querySelector("#thud");
let background = document.querySelector("#background");
let background2 = document.querySelector("#background2");
let background3 = document.querySelector("#background3");
let background4 = document.querySelector("#background4");
let background5 = document.querySelector("#background5");
let background6 = document.querySelector("#background6");
let background7 = document.querySelector("#background7");
let backgroundBedroom = document.querySelector("#backgroundBedroom");


let elevatorBell = document.querySelector("#elevatorBell");
let door1 = document.querySelector("#door1");
let door2 = document.querySelector("#door2");
let cat = document.querySelector("#cat");
let greyBack = document.querySelector("#greyBack");
let anaKiss= document.querySelector("#anaKiss");
let greyKiss = document.querySelector("#greyKiss");
let crowd = document.querySelector("#crowd");
let crowdLaugh = document.querySelector("#crowdLaugh");
let playAgainButton = document.querySelector(".playAgain");
let playroom = document.querySelector("#playroom");
pressPlayButton.addEventListener("click", play);

function play() {
    background3.style.display = "none";
    background4.style.display = "none";
    background5.style.display = "none";

    monkMusic.play();
    startText.classList.add("fadeText");
    pressPlayButton.style.display = "none";

    setTimeout(function () {
        console.log("grey appears");
        grey.style.opacity = "1";

    }, 2000);
    setTimeout(function () {
        console.log("ana enters pauses");
        ana.classList.add("anaEnters");
        book.classList.add("anaEnters");



    }, 2500);
}

book.addEventListener("animationend", bookDrops);


function bookDrops() {

    book.classList.add("bookDrop");
    monkMusic.pause();
    book.classList.remove("anaEnters");

    setTimeout(function () {
        console.log("book drops, thud sound");
        thudSound.play();

    }, 500);
    setTimeout(function () {

        console.log("ana gasps in surprise");
        gaspSound.play();

    }, 800);
    setTimeout(function () {
        console.log("thats how it began");
        itBegan.style.opacity = "1";

    }, 1500);
    setTimeout(function () {
        console.log("black background");

        ana.style.display = "none";
        grey.style.display = "none";
        background.style.display = "none";
        background2.style.display = "block";


    }, 3000);
    book.removeEventListener("animationend", bookDrops);
}




let pressElevatorButton = document.querySelector("#elevator");

pressElevatorButton.addEventListener("click", elevatorClicked);

function elevatorClicked() {
    console.log("elevator selected");
    background.style.display = "none";
    background2.style.display = "none";
    background6.style.display = "none";
    background3.style.display = "block";
    cat.style.display = "block";
    greyBack.style.display = "block";

    setTimeout(function () {
        console.log("elevator bell rings");
        elevatorBell.play();
        cat.style.display = "block";
        greyBack.style.display = "block";
    }, 500);

    setTimeout(function () {
        console.log("elevator door opens");
        background3.style.display = "none";
        background4.style.display = "block";
        cat.style.display = "block";
        greyBack.style.display = "block";
    }, 700);

    setTimeout(function () {
        console.log("elevator door opens more");
        background4.style.display = "none";
        cat.style.display = "block";
        greyBack.style.display = "block";
        background5.style.display = "block";
        cat.classList.add("enterElevator");
        greyBack.classList.add("enterElevator");

    }, 1000);

}

greyBack.addEventListener("animationend", insideElevator);

function insideElevator() {
    console.log("we see inside of elevator");
    background5.style.display = "none";
    cat.style.display = "none";
    greyBack.style.display = "none";
    background7.style.opacity = "1";
    background7.style.display = "block";
    setTimeout(function () {
        console.log("doors close");
        door1.classList.add("door1Close");
        door2.classList.add("door2Close");
    }, 700);
}




door2.addEventListener("animationend", fullscreenElevator);

function fullscreenElevator() {
    console.log("elevator door opens a bit");
    background3.style.display = "block";
 door1.style.display = "none";
     door2.style.display = "none";
     crowd.style.display ="block";

    setTimeout(function () {
        console.log("elevator door opens a bit more");
        background3.style.display = "none";
        background4.style.display = "block";
      crowd.style.display ="block";
        crowdLaugh.play();



    }, 300);

    setTimeout(function () {
        console.log("elevator door opens ");
        background4.style.display = "none";
        background5.style.display = "block";
    anaKiss.style.display = "block";
  greyKiss.style.display = "block";
        playAgainButton.style.display = "block";




    }, 300);

}



let pressDinnerButton =
    document.querySelector("#dinner");

pressDinnerButton.addEventListener("click", dinnerClicked);

function dinnerClicked() {
    console.log("dinner selected");
    background.style.display = "none";
    background2.style.display = "none";
    background3.style.display = "none";
    background4.style.display = "none";
    background5.style.display = "none";
    background7.style.display = "none";
    background6.style.display = "block";


}




let pressBedroomButton = document.querySelector("#bedroom");


function bedroomClicked() {
    console.log ("bedroom has been clicked");

     backgroundBedroom.style.display="block";
 playroom.classList.add("fadeText");
    monkMusic.play();
      background.style.display = "none";
    background2.style.display = "none";
    background6.style.display = "none";
    background3.style.display = "none";
    background4.style.display = "none";

    background5.style.display = "none";
    background7.style.display = "none";



}

pressBedroomButton.addEventListener("click", bedroomClicked);

