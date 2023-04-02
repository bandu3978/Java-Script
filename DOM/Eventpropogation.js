let gt=document.querySelector("#gt")
let pt=document.querySelector("#pt")
let cd=document.querySelector("#cd")

gt.addEventListener("click",(e)=>
{
  e.stopPropagation()
  console.log("Grandparent clicked");
})
pt.addEventListener("click",(e)=>
{
  e.stopPropagation()
  console.log("parent clicked");
})
cd.addEventListener("click",(e)=>
{
  e.stopPropagation()
  console.log("child clicked");
})