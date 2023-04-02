let text=document.getElementById("text");
let step=document.getElementById("step");
let play=document.getElementById("play");
let stop=document.getElementById("stop")

play.addEventListener("click",()=>{
  talk(text.value);
})
let rex;
function talk(pow){
 rex=new SpeechSynthesisUtterance(pow);
rex.rate=step.value;
speechSynthesis.speak(rex);
 
}
stop.addEventListener("click",()=>{
  speechSynthesis.cancel(rex)
   })


