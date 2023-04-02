//for bike
let bike=document.querySelector(".op1")
let btn1=document.querySelector(".btn1")
btn1.addEventListener("click",()=>{
let val=document.getElementById("text1").value
let total=val*10;
console.log(total);
if(total>0){
bike.innerHTML="Total cost is = "+total+ " Rs"
}
//for car
})
let car=document.querySelector(".op2")
let btn2=document.querySelector(".btn2")
btn2.addEventListener("click",()=>{
let val=document.getElementById("text2").value
let total=val*20;
console.log(total);
if(total>0){
car.innerHTML="Total cost is = "+total+ " Rs"
}
})
//for auto
let auto=document.querySelector(".op3")
let btn3=document.querySelector(".btn3")
btn3.addEventListener("click",()=>{
let val=document.getElementById("text3").value
let total=val*15;
console.log(total);
if(total>0){
auto.innerHTML="Total cost is = "+total+ " Rs"
}
})
