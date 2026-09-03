function sayMyname(){
console.log("A");
console.log("d");
console.log("i");
console.log("t");
console.log("y");
console.log("A");
}

// sayMyname();

function addTwoNumber(number1,number2){
    //console.log(number1 + number2);

    // let result = number1+number2;
    // return result;

    return number1+number2;
}

const result = addTwoNumber(3,4);

// console.log("result:",result);

function userLoggined(username="Pandey"){

    return `${username} just logged in`;
}

// console.log(userLoggined("aditya"));
//  console.log(userLoggined("Aditya"));




 function claculateCart(...num){
    return num 
 }

 console.log(claculateCart(200,300,400,500,600));


 const user ={
    username : "Aditya",
    price : 200
 }

 function handleObject(anyobject){
     console.log(`usename is ${anyobject.username} and price is ${anyobject.price}`)
 }

//  handleObject(user);
handleObject({
    username:"sanket",
    price: 100000
})



const newArray = [200,300,400,500];

function returnSecondValue(getArray){
            return getArray[1];
}
// console.log(returnSecondValue(newArray));
 console.log(returnSecondValue([200,400,500,6000]));








