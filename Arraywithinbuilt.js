let product=[100,200,4000,2000,1]
console.log(product);

//filter

let res=product.filter((x)=>{
        return x>100
})
console.log(`values which is greater than 100  are `+ res);


//map

let gst=res.map((x)=>{
  return x*1.18
})
console.log(`mapping or addeding 18% gst to all the values `+gst)

//reduce

let total=gst.reduce((acc,values)=>{
  return acc+values
},0)
console.log(`total sum of element `+total);