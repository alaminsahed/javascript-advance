// 1. value swapping

//[1,2,3,4,5] -> [4,,2,3,1,5]

//array destructuring

let array = [1,2,3,4,5];

[array[0],array[3]] = [array[3],array[0]];

console.log(array); //[ 4, 2, 3, 1, 5 ]

//math solution

let a = 2;
let b = 3;

a = a+b; //5
b = a-b; // 2
a = a-b ; // 3

console.log(a,b);

//destructuring alias

const student = {
    name: "sumon",
    id : 6,
    passed: "yes"
}

const {name:StudentName, id:idNo } = student;

console.log(StudentName,idNo); // sumon, 6

//get value as datatype

const d = "1234";
console.log(typeof d); // string

const e = d.valueASNumber;
console.log(typeof e);  // undefined

// remove duplicate number

const n = [2,2,4,3,3,5,7,8,8];

const remove = [...new Set(n)];
console.log(remove); // [2,4,3,7,8]

//spread operator

const s = [11,12,13];
const m = [12,13,14];

const merge = [...s,...m];
console.log(merge); // [11,12,13,12,13,14]

// compare two arrays by value

const arr1 = [1,2,3,4];
const arr2 = [2,3,4,5];

// compare two logic 
// length && value

//every function returns a boolean value.  Returns true if all the elements in the array pass the test, otherwise it returns false
//function(currentValue, index, arr)

const compare =(arr1,arr2)=>{
   return arr1.length === arr2.length && arr1.every((element, index)=>{
        element === arr2[index]
    })
    
}

console.log(compare(arr1,arr2)); //false


// const survey = [
//     { name: "Steve", answer: "Yes"},
//     { name: "Jessica", answer: "Yes"},
//     { name: "Peter", answer: "Yes"},
//     { name: "Elaine", answer: "No"}
//   ];
  
//   survey.every(isSameAnswer)    // Returns false
  
//   function isSameAnswer(el, index, arr) {
//     //   console.log(index);
//     //   console.log(el);
//     //   console.log(arr);
//     if (index === 0) {
//       return true;
//     } else {
//       return (el.answer === arr[index - 1].answer);
//     }
//   }

// shorting array
// shuffle.sort() not working properly
// return negative value descending order
// positive value ascending order 
const shuffle = [25,100,50,40,10];

const result = shuffle.sort((a,b)=>{
    return a-b;
})

console.log(result);

// shuffling array
// math.random returns value between 0 to 1 (1 excluded)
// -0.5 helps to return positive and negative number

const result2 = shuffle.sort(()=>Math.random()-0.5);

console.log(result2);

//remove falsy value
// 6 falsy value in js
// null, blank, false, undefine, not a number, NaN, 0

const removeValue = ['a', null, '', false, 'd','s'];

const falsyValueResult = removeValue.filter(Boolean);

console.log(falsyValueResult); //[ 'a', 'd', 's' ]

// convert to boolean
// add !! before value

console.log(!!'sumon'); // true
console.log(!!0); // false

//Resizing array
//just declare new array length
const array4 = ['sumon', 'rahim','2','5','null'];

array4.length = 4;

console.log(array4); //[ 'sumon', 'rahim', '2', '5' ]

//How to flat multi-dimensional array

const arr3 = ['2',['3','4'],'5'];

const flat = arr3.flat();

console.log(flat); //[ '2', '3', '4', '5' ]

const arr4 = ['2',['3','4',['6','8']],'5','6'];

const flat2 = arr4.flat(Infinity);

console.log(flat2); //[
//     '2', '3', '4',
//     '6', '8', '5',
//     '6'
//   ]

//replace string or word
// g for all

const quote = "I am a good programmer. I am also good developer. I also know good networking"

const replace = quote.replace(/good/g,"bad");

console.log(replace); //I am a bad programmer. I am also bad developer. I also know bad networking

// console.log

const ele1 = 'normy';
const ele2 =  'liberal';

console.log({ele1}); //{ ele1: 'normy' }

//measure performance 
const {
    performance
  } = require('perf_hooks');

const start = performance.now();

for (let i = 0; i < 20; i++) {
    console.log(i);
    
}

const end = performance.now();

console.log(`Duration: ${end-start}`); //Duration: 19.46349999308586