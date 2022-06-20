let numOfDrumButton = document.querySelectorAll('.drum').length; //selected all the drum button using .drum
//console.log (document.querySelectorAll('.drum'));
for(i=0; i<numOfDrumButton; i++){

  // console.log(document.querySelectorAll('.drum')[i]); //selected all the button using iteration
document.querySelectorAll('.drum')[i].addEventListener('click', function(){;
/* this.style.color="white"; */
let buttonInnerHTML = this.innerHTML;
switch(buttonInnerHTML) {
    case 'w': 
        let tom1 =  new Audio('sounds/tom-1.mp3');
        tom1.play();
    break; 

    case 'a': 
        let tom2 =  new Audio('sounds/tom-2.mp3');
        tom2.play();
    break;

    case 's': 
        let tom3 =  new Audio('sounds/tom-3.mp3');
        tom3.play();
    break;
    case 'd': 
        let crash =  new Audio('sounds/crash.mp3');
        crash.play();
    break;
    case 'j': 
        let kick =  new Audio('sounds/kick-bass.mp3');
        kick.play();
    break;
    case 'k': 
        let snare =  new Audio('sounds/snare.mp3');
        snare.play();
    break;
    case 'l': 
        let tom4 =  new Audio('sounds/tom-4.mp3');
        tom4.play();
    break;

    default : console.log(buttonInnerHTML);

}

/* function handleClick(){
    
} */
});
}
