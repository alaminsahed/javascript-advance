// when a function used as parameter of  a function

//synchronous problem
// console.log("Line 1");

// const getData = () => {
//   setTimeout(() => console.log("Line 2"), 3000);
// };

// getData();

// console.log("Line 3");

// output  //can't maintain sequence
// Line 1
// Line 3
// Line 2

// callback function
console.log("Line 4");

const getData2 = (line6) => {
  setTimeout(() => {
    console.log("Line 5");
    line6();
  }, 3000);
};


const line6 = () => {        // line 6 call back function
  console.log("Line 6");
};

getData2(line6); // function works as parameter

//output  //maintain the serial
// Line 4
// Line 5
// Line 6