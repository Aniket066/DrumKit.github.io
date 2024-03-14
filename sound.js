var numberofdrums = document.querySelectorAll(".drum").length


//for loop for all drums
for(var i=0;i<numberofdrums;i++){

    //detecting clicks
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var inner= this.innerHTML;
        makesound(inner);
        animations(inner);
    }); 



    //detecting buttons
    document.addEventListener("keypress", function (event){
        makesound(event.key);
        animations(event.key);
    });
}






//function for sounds
function makesound(key){
    switch (key) {
        case "w":
            var sound1= new Audio("sounds/tom-1.mp3");
            sound1.play();
            break;
        case "a":
            var sound2= new Audio("sounds/tom-2.mp3");
            sound2.play();
            break;
        case "s":
            var sound3= new Audio("sounds/tom-3.mp3");
            sound3.play();
            break;
        case "d":
            var sound4= new Audio("sounds/tom-4.mp3");
            sound4.play();
            break;
        case "j":
            var sound5= new Audio("sounds/crash.mp3");
            sound5.play();
            break;
        case "k":
            var sound6= new Audio("sounds/kick-bass.mp3");
            sound6.play();
            break;
        case "l":
            var sound7= new Audio("sounds/snare.mp3");
            sound7.play();
            break;
    
        default: console.log(key)
            break;
    }
}

//animations
function animations(currentkey){
    var active = document.querySelector("."+currentkey);
    active.classList.add("pressed");

    // for timer
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 50);
}