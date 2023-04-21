var character= document.getElementById("character");
var block = document.getElementById("block");

document.addEventListener("keypress",jump)

function jump(){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");},
        500);
    
    
}
var characterDead= setInterval(function(){
var charcterTop= parseInt(window.getComputedStyle(character).getPropertyValue("top")
);
var blockLeft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if(blockLeft<20 && blockLeft>0 && charcterTop>=130){
    block.style.animation="none";
    block.style.display="none";
    alert("you Lose!")
;}

},10);