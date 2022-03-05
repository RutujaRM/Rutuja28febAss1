
 
// JavaScript program to print Fizz Buzz

function series()
{
      
    var a= parseInt(prompt("please Enter a number"));
    

       if (isNaN (a))                             //its use to take only integer values
               {
   		         alert("It's not a valid number");
	           } 
 
               for (i=1; i<=a; i++)
               {
                   // number divisible by 3 and 5 will
                   // always be divisible by 15, print 'FizzBuzz' in place of the number
                   
                   if (i%15 == 0)   
                       document.write("FizzBuzz" + " ");
                    
                   // number divisible by 3, print 'Fizz' in place of the number
                   
                   else if ((i%3) == 0)
                       document.write("Fizz" + " ");               
                    
                   // number divisible by 5, print 'Buzz' in place of the number
                   
                   else if ((i%5) == 0)                   
                       document.write("Buzz" + " ");               
                
                   else // print the number       
                       document.write(i + " ");               
               }
            
}

        
   


