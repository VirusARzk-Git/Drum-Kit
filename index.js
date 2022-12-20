var len = document.querySelectorAll(".drum").length;
// // for (var i = 0; i < len; i++)
// //     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

// // function handleClick() {
// //     alert("I got clicked.")
// // }

var l = ['sounds/crash.mp3', "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"]



for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // this.style.color = "black";
        var bl = this.innerHTML;
        makeSound(bl);
        animate(bl);
    });
}

document.addEventListener("keypress", function (event) { makeSound(event.key); animate(event.key); });

function makeSound(key) {
    switch (key) {
        case "k":
        case "K":
            var aud = new Audio(l[0]);
            aud.play();
            break;
        case "l":
        case "L":
            var aud = new Audio(l[1]);
            aud.play();
            break;
        case "j":
        case "J":
            var aud = new Audio(l[2]);
            aud.play();
            break;
        case "w":
        case "W":
            var aud = new Audio(l[3]);
            aud.play();
            break;
        case "a":
        case "A":
            var aud = new Audio(l[4]);
            aud.play();
            break;
        case "s":
        case "S":
            var aud = new Audio(l[5]);
            aud.play();
            break;
        case "d":
        case "D":
            var aud = new Audio(l[6]);
            aud.play();
            break;
    }
}

function animate(key) {
    var act_btn = document.querySelector("." + key);
    act_btn.classList.add("pressed");
    setTimeout(function () { act_btn.classList.remove("pressed"); }, 100);
}