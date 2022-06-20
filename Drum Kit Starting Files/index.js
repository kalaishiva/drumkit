let numOfDrumButton = document.querySelectorAll('.drum').length; //selected all the drum button using .drum
//console.log (document.querySelectorAll('.drum'));
for(i=0; i<numOfDrumButton; i++){

  // console.log(document.querySelectorAll('.drum')[i]); //selected all the button using iteration
document.querySelectorAll('.drum')[i].addEventListener('click', handleClick);

function handleClick(){
    alert('The button is clicked');
}
} 

