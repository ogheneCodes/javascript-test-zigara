// spread operator
// const example1 = [1, 2, 3, 4];
// const example2 = [7, 8, 9];
// export const total = [... example1, ...example2];
// console.log(`Total is: ${total}`);

// rest operator
// function add(...nums){
//     console.log(nums);
// }
// add(2, 3, 4);

//includes
//  export const numbers = [2, 3, 4]
// console.log(numbers.indexOf(4))
// console.log(numbers.includes(2));

//classes
export class Animal{
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }
    mouseSound(sound = "loudnoise"){
        console.log(sound)
    }
    get metadata(){
        return `type: ${this.type}`
    }
}

const fulllname = 'maxwell Oghenemaga'
for(const name of fulllname){
    console.log(name);
}