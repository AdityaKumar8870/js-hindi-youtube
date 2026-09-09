//Imediately Invoked Function Expression (IIFE)

(function(){
    const name = "Aditya";
    console .log(name);
})();

(  (name)  => {
   console.log(`Adity cast is ${name}`); 
})('pandey');