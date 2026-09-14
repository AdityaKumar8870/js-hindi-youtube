const coding = ["js","ruby","java","python","cpp"]
coding.forEach( function (item) {
   // console.log(item);
})

coding.forEach( (value) => {
        //console.log(value);
})

function printMe(item){
        //console.log(item)
}

//
// coding.forEach(printMe);


// coding .forEach((item,index,arr) => {
//         console.log(item,index,arr);

// })

const myCodig = [
        {
          languageName:"javascript",
          langaugeFileName:"js",      
        },

        {
                languageName:"Java",
                lanaguageFileName:"java"
        },
        {
                languageName:"Python",
                langauageFileName:"py"
        },

]

myCodig.forEach((item) =>{
        console.log(item.languageName);
})
