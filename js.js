let pressPlayButton = document.querySelector("#play");
let firstPage =document.querySelector("#firstPage");

let text=document.querySelector("#text");
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
let playAgainButton = document.querySelector("#playAgain");
let playroom = document.querySelector("#playroom");
let anaEmbarrased = document.querySelector("#anaEmbarrased");
let greyEmbarrased = document.querySelector("#greyEmbarrased");


let maskYah = document.querySelector("#maskYah");
let greyYes = document.querySelector("#yas");
let dammIt = document.querySelector("#dammIt");
let whip = document.querySelector("#whip");
let mask = document.querySelector("#mask");
let feather = document.querySelector("#feather");
let pillow = document.querySelector("#pillow");

let whipSound = document.querySelector("#whipSound");
let pleaseWhip = document.querySelector("#pleaseWhip");
let mask1 = document.querySelector("#mask1");
let feather1 = document.querySelector("#feather1");
let pillow1 = document.querySelector("#pillow1");
let anaPlayroom= document.querySelector("#anaPlayroom");
let greyPlayroom= document.querySelector("#greyPlayroom");
let playroomText= document.querySelector("#playroomText");
let anaFeather = document.querySelector("#anaFeather");
let contract = document.querySelector("#contract");
    let bbl = document.querySelector("#bbl");
        let steam = document.querySelector("#steam");
        let showerSound = document.querySelector("audio#shower");
        let dinnerSound = document.querySelector("#dinnerSound");





text.addEventListener("click", fadein);
function fadein (){
text.classList.add("fadein");

}

text.addEventListener("click", play);




function play() {
    background3.style.display = "none";
    background4.style.display = "none";
    background5.style.display = "none";
    background6.style.display = "none";
    firstPage.style.display = "none";

    background.style.display = "block";

    monkMusic.play();
    startText.classList.add("fadeText");



    setTimeout(function () {
        console.log("grey appears");
        grey.style.opacity = "1";

    }, 2000);
    setTimeout(function () {
        console.log("ana enters pauses");
        ana.classList.add("anaEnters");
        book.classList.add("bookComeIn");




    }, 2500);

}

book.addEventListener("animationend", bookDrops);


function bookDrops() {

    book.classList.add("bookDrop");
    monkMusic.pause();


    setTimeout(function () {
        console.log("book drops, thud sound");
        thudSound.play();


    }, 200);
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
        crowdLaugh.currentTime= 5;



    }, 300);

    setTimeout(function () {
        console.log("elevator door opens ");
        background4.style.display = "none";
        background5.style.display = "block";
        anaKiss.style.display = "block";
        greyKiss.style.display = "block";





    }, 300);

    setTimeout(function () {
        console.log("elevator door opens more ");
        background4.style.display = "none";
        background5.style.display = "block";
        anaKiss.style.display = "none";
        greyKiss.style.display = "none";

        anaEmbarrased.style.display = "block";
        greyEmbarrased.style.display = "block";

  playAgainButton.style.display = "initial";




    }, 1000);

}

document.querySelector('#playAgain').addEventListener('click', playOptions);
function playOptions(e){
 e.preventDefault()
    background2.style.display = "block";
    anaEmbarrased.style.display="none";
    bath.style.display="none";

    crowd.style.display="none";
     greyEmbarrased.style.display="none";
    anaKiss.style.display="none";
    greyKiss.style.display="none";

}
/*function playOptions(e){
    e.preventDefault()
    background2.style.display = "block";
    anaEmbarrased.style.display="none";
    bath.style.display="none";
    crowd.style.display="none";
     greyEmbarrased.style.display="none";
}
*/
let pressDinnerButton =
    document.querySelector("#dinner");

pressDinnerButton.addEventListener("click", dinnerClicked);

function dinnerClicked() {
    console.log("dinner selected");
   dinnerSound.play();
    background.style.display = "none";
    background2.style.display = "none";
    background3.style.display = "none";
    background4.style.display = "none";
    background5.style.display = "none";
    background7.style.display = "none";
    bath.style.display = "none";
    door1.style.display = "none";
    door2.style.display = "none";
 playAgainButton.style.display = "block";
    background6.style.display = "block";


}

contract.addEventListener("animationend", fadein);

function fadein (){
setTimeout(function () {
Layer_1.style.opacity="1"}, 500);
   dinnerSound.pause();


}

document.querySelector('#playAgain').addEventListener('click', playOptions);

function playOptions(){
console.log("back to options");
    background2.style.display = "block";
    anaEmbarrased.style.display="none";
    background6.style.display="none";
    bath.style.display="none";
    crowd.style.display="none";
     greyEmbarrased.style.display="none";
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
    playroomText.classList.add("fadeText");
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
    mask.style.display = "none";
    mask1.style.display = "block";
    anaPlayroom.classList.add("anaWiggle");
    mask1.classList.add("anaWiggle");
    maskYah.play();
    monkMusic.pause();
}

maskYah.addEventListener("ended", greySpeak);

function greySpeak() {
    greyYes.play();
    greyPlayroom.classList.add("iLikeThat");
}

greyYes.addEventListener("ended", remove);

function remove() {
    console.log("Now reset mask");
    greyPlayroom.classList.remove("iLikeThat");
    mask1.style.display = "none";
    mask.style.display = "initial";
    anaPlayroom.classList.remove("anaWiggle");
    mask1.classList.remove("anaWiggle");
    monkMusic.play();

}



pillow.addEventListener("click", pillowFight);

function pillowFight() {
    console.log("pillow fight starts");
    pillow.style.display = "none";
    pillow1.style.display = "block";
    dammIt.play();
    pillow1.classList.add("pillowHit");
    anaPlayroom.classList.add("anaPillowHit");
    greyPlayroom.classList.add("greyPillowHit");
    monkMusic.pause();
}

dammIt.addEventListener("ended", pillowfightEnd);

function pillowfightEnd() {
    console.log("pillow goes back");
    pillow1.classList.remove("pillowHit");
    anaPlayroom.classList.remove("anaPillowHit");
    greyPlayroom.classList.remove("greyPillowHit");
    pillow1.style.display = "none";
    pillow.style.display = "initial";
    monkMusic.play();
}



feather.addEventListener("click", tickleAna);

function tickleAna() {
    console.log("tickle starts");
    feather.style.display = "none";
    feather1.style.display = "block";
    feather1.classList.add("featherSwing");
    anaPlayroom.classList.add("anaFeatherShake");
    anaFeather.play();
    monkMusic.pause();
}

anaPlayroom.addEventListener("animationend", featherDone);

function featherDone() {
    console.log("featherEnd");
    feather1.classList.remove("featherSwing");
    anaPlayroom.classList.remove("anaFeatherShake");
    feather.style.display = "initial";
    feather1.style.display = "none";
    monkMusic.play();
}








whip.addEventListener("click", whipAna);

function whipAna() {
    console.log("whipping starts");
    whip.style.display = "none";
    pleaseWhip.style.display = "block";
    pleaseWhip.classList.add("whipIt");
    monkMusic.pause();
    whipSound.play();


}


pleaseWhip.addEventListener("animationend", whippingEnd);

function whippingEnd() {
    console.log("whip goes back");
    monkMusic.play();
    pleaseWhip.classList.remove("whipIt");
    whip.style.display = "initial";
    pleaseWhip.style.display = "none";
}







let pressBathroomButton = document.querySelector("#bathroom");

pressBathroomButton.addEventListener("click", bathroomClicked);


function bathroomClicked() {
    console.log("bathroom has been clicked");
     bath.style.display = "block";
  background.style.display = "none";
    background2.style.display = "none";
    background6.style.display = "none";
    background3.style.display = "none";
    background4.style.display = "none";

    background5.style.display = "none";
    background7.style.display = "none";
    backgroundBedroom.style.display = "none";
   door1.style.display = "none";
   door2.style.display = "none";

    playAgainButton.style.display="block";
    showerSound.play();
     bbl.classList.add("move");
    console.log("shower sound plays");

            bbl.addEventListener('animationend', shake);
}




        function shake() {
            console.log("shake butt");
            ass.classList.add("shake");
            ass.addEventListener('animationend', steamUp);
        }

        function steamUp() {
            console.log("steam");
            steam.classList.add("steamUp");


        }
steam.addEventListener("animationend", stopPlay)
function stopPlay (){
    showerSound.pause();
}


