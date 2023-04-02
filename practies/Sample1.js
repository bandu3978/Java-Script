let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let div3=document.getElementById("div3");

div1.addEventListener(("click"),(e)=>{
  e.stopPropagation();
   console.log(div1);

})
div2.addEventListener(("click"),(e)=>{
  e.stopPropagation();
  console.log(div2);
})
div3.addEventListener(("click"),(e)=>{
  e.stopPropagation();
  console.log(div3);
})