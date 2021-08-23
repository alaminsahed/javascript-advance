// 1. value swapping

//[1,2,3,4,5] -> [4,,2,3,1,5]

//array destructuring

let array = [1,2,3,4,5];

[array[0],array[3]] = [array[3],array[0]];

console.log(array);

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

// shuffling array

const shuffle = [25,100,50,40,10];

const result =
