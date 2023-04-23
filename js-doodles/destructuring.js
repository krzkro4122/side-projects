const cat = {
    chonky: true,
    age: 2,
    legs: 4,
    tail: 2.20,
    moew() {
        console.log("nyaa!! :3");
    }
}

const { chonky: fat, age, moew } = cat;

console.log(fat, age);
moew()

const catColors = ['orange', 'black', 'gray', 'white', 'brown']
const [,black, gray, white,] = catColors;

console.log(catColors);
console.log(black, gray, white);
