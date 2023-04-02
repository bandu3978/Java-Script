var a=10;
console.log(a);
function one()
{
  var b=20;
  console.log(b)
  function two()
  {
    let d=30;
    console.log(d);
    console.log(a);
    console.log(b);
  }
  return two()
}
one()()