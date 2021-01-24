//Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.
//coderbyte Entry problem
function lucky_sevens(arr){

    if(arr.length<3){
        return false;
    }

    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]+arr[i+1]+arr[i+2]===7)
        {
            return true;
        }
    }

    return false;

 }

 console.log(lucky_sevens([2, 1, 5, 1, 0]));