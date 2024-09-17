/* #1
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:
Hello, Mr. Spock
*/

function sayHello(name) {
    return `Hello, ${name}`
  }
 console.log(sayHello('Mr. Spock'), 'Hello, Mr. Spock');
 console.log(sayHello('Captain Kirk'), 'Hello, Captain Kirk');
 console.log(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura');
 console.log(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy');


 /* #2
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/

function isDivisible(n, x, y) {
    if (n%x === 0){
      if (n%y === 0){
        return true
      }
    }
        return false
  }

  console.log(isDivisible(3,3,4),false);
  console.log(isDivisible(12,3,4),true);
  console.log(isDivisible(8,3,4),false);
  console.log(isDivisible(48,3,4),true);

  /* #3
  Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

*/

function areYouPlayingBanjo(name) {
    return (name[0].toLowerCase() === 'r') ? `${name} plays banjo` : `${name} does not play banjo` 
    }

  console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
  console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
  console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
  console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
  console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");