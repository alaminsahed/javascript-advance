function test_divisors(low, high) {
  
   const output = [];
   for(var i= low+1; i<high; i++)
   {
        output.push(i);

        if(i%3===0)
        {
            output.push('div3');
        }

   }

   console.log(output);
    
  }
  
  test_divisors(2, 10);