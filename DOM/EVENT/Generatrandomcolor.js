let input=document.querySelector("input")


input.addEventListener("keydown",()=>
  {
    let randomcolor=Math.floor(Math.random()*10000).toString(16)

    console.log(randomcolor);
  document.body.style.backgroundColor="#"+randomcolor//`#${randomcolor}`
  })