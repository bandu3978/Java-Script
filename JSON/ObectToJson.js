let obj={
  username:"Ammu",
  password:143
}

let Jsondata=JSON.stringify(obj)
console.log(Jsondata);

let objdata=JSON.parse(Jsondata)
console.log(objdata);