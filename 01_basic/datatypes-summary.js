//primitive 


// 7  types = Number,String,Boolean,null,undefined,BigInt






//References (Non Primitive data type)
//Array,Object,Function

const heroes =["sahid","sharukh","salman"];

let MyObj = {
    name : "Aditya",
    age : 22,
}

  const MyFunction=function (){
    console.log("Hello world");
}
console.log(MyFunction);



//++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap(Non primitve)

let Aditya="Infromation Technology";

let Sanket=Aditya;
Sanket="Computer Science";
 console.log(Sanket);



 let userOne ={
      email: "ap0443785@gmail.com",
      upi: "98355@ybl",

 }

 let userTwo=userOne;
 userTwo.email="Aditya04kumar";
 console.log(userOne);
 console.log(userTwo);
