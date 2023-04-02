let arr=[100,200,4000,2000,1]
console.log(`input array :${arr}`);
// filter

for ( i = 0; i < arr.length; i++) 
{
  if (arr[i]>100) 
  {
    console.log(`${arr[i]} is greater than 100`);
   
  }
  
}//mapping
for (let index = 0; index < arr.length; index++) 
{

  console.log( `18% gst to ${arr[index]} is :${arr[index]*1.18}`);
  
}

//reduce
var ans=0;
for (let index = 0; index < arr.length; index++)
 {
      ans=ans+arr[index];
  
}
console.log(`total sum of an array elements is :${ans}`);
