
const arr = [1,2,3,4,5];
for (const num of arr) {

    //console.log(num);
    
}

const Games = ["free fire","PUBG","MM"];

for (const Game of Games) {
    //console.log(Game);
}

const map = new Map();
map.set('name','Aditya');
map.set('Age',22);
map.set('Height',5.11);

for (const [key,value] of map) {
    //console.log(key,'->',value);
    
}

const myObject = {
    game : "NFS",
    game2:"Spiderman"
}

for (const [key,value] of myObject) {
    console.log(key,'->',value);
    
}