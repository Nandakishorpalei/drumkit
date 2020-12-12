var number =document.querySelectorAll(".drum").length;
for(i=0 ; i< number;i++ ){

  // button detection
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 var buttonInnerHtml=this.innerHTML;
 makesound(buttonInnerHtml);
 recentbutton(buttonInnerHtml);
});

// key detection
document.addEventListener("keypress",function(event){
  makesound(event.key);
  recentbutton(event.key);
})


}

function makesound(key){
  switch(key){
    case "w":

var audio=new Audio("crash.mp3");
audio.play();

break;

  case "a":

var audio1=new Audio("kick-bass.mp3");
audio1.play();

break;

  case "s":

var audio2=new Audio("snare.mp3");
audio2.play();

break;

  case "d":

var audio3=new Audio("tom-1.mp3");
audio3.play();

break;

  case "j":

var audio4=new Audio("tom-2.mp3");
audio4.play();

break;

  case "k":

var audio5=new Audio("tom-3.mp3");
audio5.play();

break;

  case "l":

var audio6=new Audio("tom-4.mp3");
audio6.play();

  break;
      
        case "W":

var audio7=new Audio("crash.mp3");
audio7.play();

break;

  case "A":

var audio8=new Audio("kick-bass.mp3");
audio8.play();

break;

  case "S":

var audio9=new Audio("snare.mp3");
audio9.play();

break;

  case "D":

var audio10=new Audio("tom-1.mp3");
audio10.play();

break;

  case "J":

var audio11=new Audio("tom-2.mp3");
audio11.play();

break;

  case "K":

var audio12=new Audio("tom-3.mp3");
audio12.play();

break;

  case "L":

var audio13=new Audio("tom-4.mp3");
audio13.play();

  break;


 default:
 alert("wrong input");
   }

  }

 function recentbutton(activekey){
    var activebutton=  document.querySelector("."+activekey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
      activebutton.classList.remove("pressed");
    },100);
  }
