//date
//USING ARRAY
let x=new Date()
let month=x.getMonth()
let arr=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOMBER","NOVEMBER","DECEMBER"]
console.log(arr[month]);


//using switch case

let x1=new Date()
let month1=x1.getMonth()
switch(month1)
{
  case 0:{console.log("JANUARY"); }break;
  case 1:{console.log("FEBBRUARY"); }break;
  case 2:{console.log("MARCH"); }break;
  case 3:{console.log("APRIL"); }break;
  case 4:{console.log("MAY"); }break;
  case 5:{console.log("JUNE"); }break;
  case 6:{console.log("JULY"); }break;
  case 7:{console.log("AUGUST"); }break;
  case 8:{console.log("SEPTEMBER"); }break;
  case 9:{console.log("OCTOMBER"); }break;
  case 10:{console.log("NOVEMBER"); }break;
  case 11:{console.log("DECEMBER" );}break;
  default :console.log("invalid");
}


//using else if
let x2=new Date()
let month2=x2.getMonth()
    if(month2==0)
    {console.log("JANUARY"); }
   else if(month2==1)
    {console.log("FEBBRUARY"); }
  else if(month2==2)
  {console.log("MARCH"); }
  else if(month2==3)
  {console.log("APRIL"); }
  else if(month2==4)
  {console.log("MAY"); }
  else if(month2==5)
  {console.log("JUNE"); }
  else if(month2==6)
  {console.log("JULY"); }
  else if(month2==7)
  {console.log("AUGUST"); }
  else if(month2==8)
  {console.log("SEPTEMBER"); }
  else if(month2==9)
  {console.log("OCTOMBER"); }
  else if(month2==10)
  {console.log("NOVEMBER"); }
  else if(month2==11)
  {console.log("DECEMBER" );}







