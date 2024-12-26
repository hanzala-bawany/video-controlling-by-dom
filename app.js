// let a = new Audio("./assets/sound-1-167181.mp3")
// let button = document.querySelector("button");

// button.addEventListener("click",
// function (){
//     a.play();
// }
// )


let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let Forward = document.querySelector("#forward");
let Backward = document.querySelector("#backward");
let vIncrease = document.querySelector("#vIncrease");
let vdecrease = document.querySelector("#vdecrease");
let vidio = document.body.querySelector("video");


play.addEventListener("click",
function (){
    vidio.play()
    vidio.controls = true

}
)

pause.addEventListener("click",
function (){
    vidio.pause()
}
)

Forward.addEventListener("click",
function (){
    vidio.currentTime += 2;
}
)

Backward.addEventListener("click",
function (){
    vidio.currentTime -= 2;
}
)

vIncrease.addEventListener("click",
function (){
    vidio.volume += 0.1;
}
)

vdecrease.addEventListener("click",
function (){
    vidio.volume -= 0.1;
}
)