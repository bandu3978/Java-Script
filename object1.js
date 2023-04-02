// //object
// //litral method
// let obj={
//   userName:"bandu3978@gmail.com",
//   password:"bandu3978",
//   mblno:9902349215
// }
// console.log(obj);
// console.log(obj.mblno);

// //new keyword
// let x=new Object()
// x.userName1="ram"
// x.password1=12345
// x.mblno1=87749879857
// console.log(x); 
// console.log(x.userName1);


// //passing object as value
// let obj1={
//   studentName:"basu",
//   studentId:123,
//   studentphone:{
//                 persnal:9902348215,
//                 perant:9740364468  
//                }

// }
// console.log(obj1);
// console.log(obj1.studentphone.perant);


// //passing function as value
// let obj2={
//      userName:"bandu3978",
//      address:function()
//      {
//                console.log(this.userName);
//                    var home="#32 2nd cross"
//                    var office="#45 3rd cross"
//                    console.log(home);
//                    console.log(office);
                      
//                      }

// }
// obj2.address()

// //passing function as value
// let obj3={
//   userName:"bandu3978",
//   address:()=>
//   {
//             console.log(this.userName);
//                 var home="#32 2nd cross"
//                 var office="#45 3rd cross"
//                 console.log(home);
//                 console.log(office);
                   
//                   }

// }
// obj3.address()


//object inbuilt methodes

let colours={
  c1 :"red",
  c2 :"blue",
  c3 :"black",
  c4 :"green"
}
console.log(colours);

///to get keys only

console.log(Object.keys(colours));

//to get values only
console.log(Object.values(colours));
//to get both keys and values
console.log(Object.entries(colours));


//update the values

colours.c1="yellow"
console.log(colours);

//add the value

colours.c5="pink"
console.log(colours);

//delete the values
delete colours.c1
console.log(colours);

//seal method
Object.seal(colours)
 colours.c7="red"//adding values are not passible
 colours.c2="red"//update is passible
console.log(colours);
 //to check weather it is sealed are what

 console.log(Object.isSealed(colours));//true


 //freeze
 Object.freeze(colours)
 colours.c7="red"//adding values are not passible
 colours.c2="blue"//update is not passible
console.log(colours);












