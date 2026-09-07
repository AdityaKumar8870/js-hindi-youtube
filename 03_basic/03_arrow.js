const user = {
    username : "Aditya",
    price : 500,

    welecomeMessage : function(){
        console.log(`${this.username},welecome to our website`)
    }
}
//
user.welecomeMessage();
user.username= "sanket"
user.welecomeMessage();


const addonee=(num1 , num2)=>{
    return num1+num2;
}
console.log(addonee(4,5));


