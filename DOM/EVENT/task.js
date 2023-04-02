let color=prompt("netr the color")

let btn=document.querySelector("button")
btn.innerText=color
btn.style.backgroundColor=color
btn.style.height="40px"
  btn.style.width="60px"
btn.addEventListener("click",()=>
{
  btn.style.backgroundColor="blue"
  btn.style.border="2px solid "
  btn.style.borderColor="pink"
  btn.style.borderRadius="30px"
  btn.style.color=color
  btn.style.height="40px"
  btn.style.width="60px"
  document.body.style.backgroundColor=color
})