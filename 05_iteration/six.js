const coding = ["js","ruby","java","python","cpp"];

// const value = coding.forEach( (item) =>{
//     return item;
// })
// console.log(value);

const MyNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = MyNums.filter( (num) => {
//     return num > 4;
// })

// console.log(newNums)

const newNums = []

MyNums.forEach( (item) =>{
    if( item >= 5){
        newNums.push(item);
    }
})

console.log(newNums);

