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
let backgroundDinner = document.querySelector("#backgroundDinner");


let elevatorBell = document.querySelector("#elevatorBell");
let door1 = document.querySelector("#door1");
let door2 = document.querySelector("#door2");
let cat = document.querySelector("#cat");
let greyBack = document.querySelector("#greyBack");
let anaKiss = document.querySelector("#anaKiss");
let greyKiss = document.querySelector("#greyKiss");
let crowd = document.querySelector("#crowd");
let crowdLaugh = document.querySelector("#crowdLaugh");
let playAgainButton = document.querySelector(".playAgain");
let playroom = document.querySelector("#playroom");
let anaEmbarrased = document.querySelector("#anaEmbarrased");
let greyEmbarrased = document.querySelector("#greyEmbarrased");

let whip = document.querySelector("#whip");
let mask = document.querySelector("#mask");
let feather = document.querySelector("#feather");
let pillow = document.querySelector("#pillow");

let whip1 = document.querySelector("#whip1");
let mask1 = document.querySelector("#mask1");
let feather1 = document.querySelector("#feather1");
let pillow1 = document.querySelector("#pillow1");
let anaPlayroom= document.querySelector("#anaPlayroom");
let greyPlayroom= document.querySelector("#greyPlayroom");





pressPlayButton.addEventListener("click", play);



function play() {
    background3.style.display = "none";
    background4.style.display = "none";
    background5.style.display = "none";
    background6.style.display = "none";

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
book.classList.remove("anaEnters");
book.addEventListener("animationend", bookDrops);


function bookDrops() {

    book.classList.add("bookDrop");
    monkMusic.pause();


    setTimeout(function () {
        console.log("book drops, thud sound");
        thudSound.play();


    }, 500);
    setTimeout(function () {
        console.log("grey turns around");

        grey.classList.add("mirror");

    }, 900);
    setTimeout(function () {

        console.log("ana gasps in surprise");
        gaspSound.play();

    }, 1100);
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
    crowd.style.display = "block";

    setTimeout(function () {
        console.log("elevator door opens a bit more");
        background3.style.display = "none";
        background4.style.display = "block";
        crowd.style.display = "block";
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

    setTimeout(function () {
        console.log("elevator door opens ");
        background4.style.display = "none";
        background5.style.display = "block";
        anaKiss.style.display = "none";
        greyKiss.style.display = "none";

        anaEmbarrased.style.display = "block";
        greyEmbarrased.style.display = "block";
        playAgainButton.style.display = "block";




    }, 1000);

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
    door1.style.display = "none";
    door2.style.display = "none";

    background6.style.display = "block";


}




let pressBedroomButton = document.querySelector("#bedroom");

pressBedroomButton.addEventListener("click", bedroomClicked);


function bedroomClicked() {
    console.log("bedroom has been clicked");
  background.style.display = "none";
    background2.style.display = "none";
    background6.style.display = "none";
    background3.style.display = "none";
    background4.style.display = "none";

    background5.style.display = "none";
    background7.style.display = "none";
    backgroundBedroom.style.display = "block";
    playroom.classList.add("fadeText");
    monkMusic.play();
    console.log("whip pulses");
    whip.classList.add("sexToysPulse");

        setTimeout(function () {
        console.log("feather pulse");

         feather.classList.add("sexToysPulse");



    }, 300);
           setTimeout(function () {
        console.log("feather pulse");

         pillow.classList.add("sexToysPulse");



    }, 500);
     setTimeout(function () {
        console.log("mask pulse");

         mask.classList.add("sexToysPulse");



    }, 700);

}

mask.addEventListener("click", anaWearMask);

function anaWearMask() {
      console.log("ana wears the mask");
    mask.style.display="none";
    mask1.style.display="block";


}


mask1.addEventListener("click", anaRemovesMask);

function anaRemovesMask() {
      console.log("ana removes the mask");
    mask1.style.display="none";
    mask.style.display="block";


}

pillow.addEventListener("click", pillowFight);

function pillowFight() {
      console.log("pillow fight starts");
    pillow.style.display="none";
    pillow1.style.display="block";


}


pillow1.addEventListener("click", pillowfightEnd);

function pillowfightEnd() {
      console.log("pillow goes back");
    pillow1.style.display="none";
   pillow.style.display="block";


}
feather.addEventListener("click", tickleAna);

function tickleAna() {
      console.log("tickle starts");
  feather.style.display="none";
  feather1.style.display="block";
   anaPlayroom.classList.add("anaTickled");


}


feather1.addEventListener("click", tickleEnd);

function tickleEnd() {
      console.log("feather goes back");
   feather1.style.display="none";
  feather.style.display="block";


}

whip.addEventListener("click", whipAna);

function whipAna() {
      console.log("whipping starts");
  whip.style.display="none";
  whip1.style.display="block";


}


whip1.addEventListener("click", whippingEnd);

function whippingEnd() {
      console.log("whip goes back");
  whip1.style.display="none";
whip.style.display="block";


}








