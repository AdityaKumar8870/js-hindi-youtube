// singlton
// Object.created




//bject literal

const Mysymbol=Symbol("id");
const jsUser={
    name : "Aditya Pandey",
    [Mysymbol]:9835,
    "Full Name":"Aditya Kumar Pandey",
    email: "ap0443785@gmail.com",
    Location: "patna",
    isLogedin:false,
    lastLoginDays:["Monday","Tuesday","friday"]

}

// console.log(jsUser.lastLoginDays[0]);
// console.log(jsUser["name"]);
// console.log(jsUser.isLogedin);
// console.log(jsUser["Full Name"]);
console.log(jsUser[Mysymbol]);


// jsUser.name="sanket"
// console.log(jsUser.name);

// //  Object.freeze(jsUser);
//  jsUser.Location="saharsa"
//  console.log(jsUser.Location);

 jsUser.greeting = function(){
        console.log("Hello js User");
 }
 console.log(jsUser.greeting());

 jsUser.greetingTwo = function(){
    console.log(`Hello jsUser, ${this.name}`);
 }
 console.log(jsUser.greetingTwo());

