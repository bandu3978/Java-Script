let promise=new Promise((resolve ,reject)=>
{
  let iswaterfetch=true;
  if(iswaterfetch===true)
  {
    resolve("successfull",document.body.style.backgroundColor="green")
  }
  else{
    reject("Failed",document.body.style.backgroundColor="red")
  }
})
promise.then((x)=>console.log(x)).catch((y)=>console.log(y))