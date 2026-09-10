//if 

// const isLogin= true;
//  if(isLogin){
//     console.log("user login");
//  }


 // >,<,<=,>=,==,!=,===


//  if(2 === "2"){
//     console.log("it is equal");
//  }else{
//     console.log("it is not equal");
//  }

 const score = 200;

 if(score > 100){
    console.log("score is greater than 100");
 }else{
    console.log("score is not greater than 100");
 }

 // nesting loop 

 const balance = 1000;


 if(balance < 500){
        console.log("less than 500");
 }else if (balance < 750){
    console .log("lest than 750")
 }else{
    console.log("less than 1200");
 }


 // real life use 

 const userLoggedIn=true;
 const debitCard=true;
 const loggedInFromGoogle = false;
 const loggedInFromEmail=true;

 if(userLoggedIn && debitCard ){
    console.log("allow to buy course");
 }

 if(loggedInFromEmail || loggedInFromGoogle){
    console .log("user loggedIn");
 }

