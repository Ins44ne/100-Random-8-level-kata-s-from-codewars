/* #1
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:
Hello, Mr. Spock
*/

function sayHello(name) {
  return `Hello, ${name}`;
}
console.log(sayHello("Mr. Spock"), "Hello, Mr. Spock");
console.log(sayHello("Captain Kirk"), "Hello, Captain Kirk");
console.log(sayHello("Liutenant Uhura"), "Hello, Liutenant Uhura");
console.log(sayHello("Dr. McCoy"), "Hello, Dr. McCoy");

/* #2
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/

function isDivisible(n, x, y) {
  if (n % x === 0) {
    if (n % y === 0) {
      return true;
    }
  }
  return false;
}

console.log(isDivisible(3, 3, 4), false);
console.log(isDivisible(12, 3, 4), true);
console.log(isDivisible(8, 3, 4), false);
console.log(isDivisible(48, 3, 4), true);

/* #3
  Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

*/

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");

/* #4
  There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, number) => acc + number, 0) /
    classPoints.length >
    yourPoints
    ? false
    : true;
}

console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);

/* #5
   Implement a function which convert the given boolean value into its string representation.

    Note: Only valid inputs will be given.
*/

function booleanToString(b) {
  return `${b}`;
}

console.log(
  booleanToString(true),
  "true",
  'When we pass in true, we want the string "true" as output'
);
console.log(
  booleanToString(false),
  "false",
  'When we pass in false, we want the string "false" as output'
);

/* №6
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return Number(value1 + value2);
    case "-":
      return Number(value1 - value2);
    case "*":
      return Number(value1 * value2);
    case "/":
      return Number(value1 / value2);
  }
}

console.log(basicOp("+", 4, 7), 11, "4 + 7 = 11");
console.log(basicOp("-", 15, 18), -3, "15 - 18 = -3");
console.log(basicOp("*", 5, 5), 25, "5 * 5 = 25");
console.log(basicOp("/", 49, 7), 7, "49 / 7 = 7");

/* #7
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
*/

function check(a, x) {
  return a.includes(x);
}

console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(["t", "e", "s", "t"], "e"), true);
console.log(check(["what", "a", "great", "kata"], "kat"), false);

/* #8
  A hero is on his way to the castle to complete his mission. 
  However, he's been told that the castle is surrounded with a couple of powerful dragons!
  Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
  Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
  */

function hero(bullets, dragons) {
  return !(dragons > bullets / 2);
}

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);

/* #9 
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

function reverseWords(str) {
  const arr = str.split(" ");
  let res = "";
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    i === 0 ? (res += `${arr[i]}`) : (res += `${arr[i]} `);
  }
  return res;
}

console.log(reverseWords("hello world!"), "world! hello");
console.log(
  reverseWords("yoda doesn't speak like this"),
  "this like speak doesn't yoda"
);
console.log(reverseWords("foobar"), "foobar");
console.log(reverseWords("kata editor"), "editor kata");
console.log(reverseWords("row row row your boat"), "boat your row row row");
console.log(reverseWords(""), "");

/* #10
Combine strings function
Create a function named combineNames/combine_names/CombineNames that accepts two parameters (first and last name). The function should return the full name.

Example:
With "James" as the first name and "Stevens" as the last name should return "James Stevens"
*/

function combineNames(a, b) {
  return `${a} ${b}`;
}
console.log(combineNames("James", "Stevens"), "James Stevens");

/* #11
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countBy(x, n) {
  let res = [];
  for (i = 1; i <= n; i += 1) {
    res.push(x * i);
  }
  return res;
}

console.log(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(countBy(2, 5), [2, 4, 6, 8, 10]);

/* #12
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  if (!Array.isArray(input)) {
    return [];
  }
  if (input.length === 0) {
    return input;
  }
  let res = [];
  let posCount = 0;
  let negSum = 0;
  input.forEach((el) => {
    if (el < 0) {
      negSum += el;
    }
    if (el > 0) {
      posCount += 1;
    }
  });
  res.push(posCount, negSum);
  return res;
}

console.log(
  countPositivesSumNegatives(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
    [10, -65]
  )
);

console.log(
  countPositivesSumNegatives(
    [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14],
    [8, -50]
  )
);

/* #13
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2) {
  function division(fl) {
    return fl % 2 === 0 ? 1 : 0;
  }
  return division(flower1) + division(flower2) !== 1 ? false : true;
}

console.log(lovefunc(1, 4), true);
console.log(lovefunc(2, 2), false);
console.log(lovefunc(0, 1), true);
console.log(lovefunc(0, 0), false);

/* #14
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Daniel", "Daniel"), "Hello boss");
console.log(greet("Greg", "Daniel"), "Hello guest");

/* #15
Write a function which converts the input string to uppercase.
*/

function makeUpperCase(str) {
  return str.toUpperCase();
}

console.log(makeUpperCase(""), "");
console.log(makeUpperCase("hello"), "HELLO");
console.log(makeUpperCase("Hello"), "HELLO");
console.log(makeUpperCase("HELLO"), "HELLO");

/* #16
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

let removeExclamationMarks = (s) => s.replace(/!/g, "");

function removeExclamationMarks(s) {
  let res = "";
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== "!") {
      res += s[i];
    }
  }
  return res;
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");

/* #17
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = (n) => {
  let res = [];
  for (let i = n; i > 0; i -= 1) {
    res.push(i);
  }
  return res;
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);

/* #18
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.
Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/

function sumArray(array) {
  let res = 0;
  if (!(typeof array === "object") || array === null || array.length < 2) {
    return 0;
  }
  array.sort(function (a, b) {
    return a - b;
  });
  for (let i = 1; i < array.length - 1; i += 1) {
    res += array[i];
  }
  return res;
}

console.log(sumArray(null), 0);
console.log(sumArray([]), 0);
console.log(sumArray([3]), 0);
console.log(sumArray([3, 5]), 0);
console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([0, 1, 6, 10, 10]), 17);
console.log(sumArray([-6, -20, -1, -10, -12]), -28);
console.log(sumArray([-6, 20, -1, 10, -12]), 3);
/* #19
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
For example(Input --> Output):
10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/

function monkeyCount(n) {
  let res = [];
  let i = 1;
  while (i <= n) {
    res.push(i);
    i += 1;
  }
  return res;
}

console.log(monkeyCount(5), [1, 2, 3, 4, 5]);
console.log(monkeyCount(3), [1, 2, 3]);
console.log(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(
  monkeyCount(20),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
);
/* #20 
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

/* #21
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}

console.log(boolToWord(true), "Yes");
console.log(boolToWord(false), "No");

/* #22
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/

var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max([5]), 5);

/* #23
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
 */

function divisibleBy(numbers, divisor) {
  let res = [];
  numbers.forEach((el) => {
    if (el % divisor === 0) {
      res.push(el);
    }
  });
  return res;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1, 3, 5], 2), []);

/* #24
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
 */

class Kata {
  static getVolumeOfCuboid(a, b, c) {
    return a * b * c;
  }
}

console.log(Kata.getVolumeOfCuboid(1, 2, 2), 4);
console.log(Kata.getVolumeOfCuboid(6, 2, 5), 60);

/* #25
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
 */

function mango(quantity, price) {
  let notPayQuant = Math.floor(quantity / 3);
  return (quantity - notPayQuant) * price;
}

console.log(mango(3, 3), 6);
console.log(mango(9, 5), 30);

/* #26
Your task is to find the nearest square number of a positive integer n. In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
For example, if n = 111, then the nearest square number equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.
If n is already a perfect square (e.g. n = 144, n = 81, etc.), you need to just return n. */

function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}

console.log(nearestSq(1), 1, "nearestSq(1) = 1");
console.log(nearestSq(2), 1, "nearestSq(2) = 1");
console.log(nearestSq(10), 9, "nearestSq(10) = 9");
console.log(nearestSq(111), 121, "nearestSq(111) = 121");
console.log(nearestSq(9999), 10000, "nearestSq(9999) = 10000");
/* #27
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
Example:
move(3, 6) should equal 15
 */

function move(pos, roll) {
  return pos + roll * 2;
}

console.log(move(0, 4), 8);
console.log(move(3, 6), 15);
console.log(move(2, 5), 12);

/* #28
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
 */

function greet(language) {
  const obj = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  if (language in obj) {
    return obj[language];
  }
  return "Welcome";
}

console.log(greet("english"), "Welcome");
console.log(greet("dutch"), "Welkom");
console.log(greet("IP_ADDRESS_INVALID"), "Welcome");
/* #29
Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). 
The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:
false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
 */

function xor(a, b) {
  return a + b === 1 ? true : false;
}

console.log(xor(false, false), false);
console.log(xor(true, false), true);
console.log(xor(false, true), true);
console.log(xor(true, true), false);
console.log(xor(true, true), true);
/* #30
Input: Array of elements
["h","o","l","a"]
Output: String with comma delimited elements of the array in th same order.
"h,o,l,a"
Note: if this seems too simple for you try the next level
Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕
 */

function printArray(array) {
  console.log(array);
  return array.toString();
}

console.log(printArray([2, 4, 5, 2]));
console.log(printArray(["two", "four", "five", "two"]));

/* #31
Create a function that takes a number as an argument and returns a grade based on that number.
Score	Grade
Anything greater than 1 or less than 0.6	"F"
0.9 or greater	"A"
0.8 or greater	"B"
0.7 or greater	"C"
0.6 or greater	"D"
 */

function grader(score) {
  if (score < 0.6 || score > 1) {
    return "F";
  } else if (score < 0.7) {
    return "D";
  } else if (score < 0.8) {
    return "C";
  } else if (score < 0.9) {
    return "B";
  } else {
    return "A";
  }
}

console.log(grader(0.7), "C");
console.log(grader(0.9), "A");
console.log(grader(0.6), "D");

/* #32
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!
 */
function removeEveryOther(arr) {
  return arr.filter(function (el, ind) {
    return ind % 2 === 0;
  });
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]), [
  "Hello",
  "Hello Again",
]);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }]), [["Goodbye"]]);

/* #33
The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents.
With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus!
He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:
You have to write a function that accepts three parameters:
cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
 */
function enough(cap, on, wait) {
  return cap > on + wait ? 0 : Math.abs(cap - on - wait);
}

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);
/* #34
You need to write a function that reverses the words in a given string. Words are always separated by a single space.
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
Example (Input --> Output)
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
 */

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverse("I am an expert at this"), "this at expert an am I");
console.log(reverse("This is so easy"), "easy so is This");
console.log(reverse("no one cares"), "cares one no");
console.log(reverse(""), "");
console.log(reverse("CodeWars"), "CodeWars");

/* #35
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. 
Return false otherwise.
You can assume the input will always be a number.
 */

function validateCode(code) {
  return /^[123]/.test(code.toString());
}

console.log(validateCode(123), true);
console.log(validateCode(248), true);
console.log(validateCode(8), false);
console.log(validateCode(321), true);
console.log(validateCode(9453), false);

/* #36
Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.
We know the rules of confect:
material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both)
Task
You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. 
Returns true if it's valid, false otherwise.
Example
For formula = [1,3,7], The output should be true.
For formula = [7,1,2,3], The output should be false.
For formula = [1,3,5,7], The output should be false.
For formula = [1,5,6,7,3], The output should be true.
For formula = [5,6,7], The output should be true.
For formula = [5,6,7,8], The output should be true.
For formula = [6,7,8], The output should be false.
For formula = [7,8], The output should be true.
*/
function isValid(formula) {
  if (formula.includes(1) && formula.includes(2)) return false;
  if (formula.includes(3) && formula.includes(4)) return false;
  if (formula.includes(5) && !formula.includes(6)) return false;
  if (formula.includes(6) && !formula.includes(5)) return false;
  if (!formula.includes(7) && !formula.includes(8)) return false;
  return true;
}

console.log(isValid([1, 3, 7]), true);
console.log(isValid([7, 1, 2, 3]), false);
console.log(isValid([1, 3, 5, 7]), false);
console.log(isValid([1, 5, 6, 7, 3]), true);
console.log(isValid([5, 6, 7]), true);
console.log(isValid([5, 6, 7, 8]), true);
console.log(isValid([6, 7, 8]), false);
console.log(isValid([7, 8]), true);

/* #37
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
 */

function doubleChar(str) {
  let res = "";
  str.split("").forEach((el) => {
    res += el + el;
  });
  return res;
}

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");

/* #38
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
The order of the sequence has to stay the same.
Examples:
Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
 */

function distinct(a) {
  return [...new Set(a)];
}

console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);

/* #39
Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. 
Health can't be less than 0.
 */

function combat(h, d) {
  return h - d > 0 ? h - d : 0;
}

console.log(combat(100, 5), 95);
console.log(combat(92, 8), 84);
console.log(combat(20, 30), 0, "Health cannot go below 0");

/* #40
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. 
The number of petals is always greater than 0.
 */

function howMuchILoveYou(nbPetals) {
  switch (nbPetals % 6) {
    case 1:
      return "I love you";
    case 2:
      return "a little";
    case 3:
      return "a lot";
    case 4:
      return "passionately";
    case 5:
      return "madly";
    default:
      return "not at all";
  }
}

console.log(howMuchILoveYou(7), "I love you");
console.log(howMuchILoveYou(3), "a lot");
console.log(howMuchILoveYou(6), "not at all");

/* #41
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
 */

function getGrade(s1, s2, s3) {
  let avScore = (s1 + s2 + s3) / 3;
  if (avScore >= 90) {
    return "A";
  } else if (avScore >= 80) {
    return "B";
  } else if (avScore >= 70) {
    return "C";
  } else if (avScore >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93), "A");
console.log(getGrade(100, 85, 96), "A");
console.log(getGrade(92, 93, 94), "A");
console.log(getGrade(70, 70, 100), "B");
console.log(getGrade(82, 85, 87), "B");
console.log(getGrade(84, 79, 85), "B");
console.log(getGrade(89, 89, 90), "B");
console.log(getGrade(70, 70, 70), "C");
console.log(getGrade(75, 70, 79), "C");
console.log(getGrade(60, 82, 76), "C");
console.log(getGrade(65, 70, 59), "D");
console.log(getGrade(66, 62, 68), "D");
console.log(getGrade(58, 62, 70), "D");
console.log(getGrade(44, 55, 52), "F");
console.log(getGrade(48, 55, 52), "F");
console.log(getGrade(58, 59, 60), "F");

/* #42
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((char) => {
      return char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    })
    .join("");
};

console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log(
  "String.prototype.toAlternatingCase".toAlternatingCase(),
  "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
);
console.log(
  "Hello World".toAlternatingCase().toAlternatingCase(),
  "Hello World"
);

/* #43
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"
 */

function remove(string) {
  return `${string.replace(/!/g, "")}!`;
}

console.log(doTest("Hi!", "Hi!"));
console.log(doTest("Hi!!!", "Hi!"));
console.log(doTest("!Hi", "Hi!"));
console.log(doTest("!Hi!", "Hi!"));
console.log(doTest("Hi! Hi!", "Hi Hi!"));
console.log(doTest("Hi", "Hi!"));

/* #44
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. 
At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. 
Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
 */

function stringClean(s) {
  return s.replace(/[0-9]/g, "");
}

console.log(stringClean(""), "");
console.log(stringClean("! !"), "! !");
console.log(stringClean("123456789"), "");
console.log(stringClean("(E3at m2e2!!)"), "(Eat me!!)");
console.log(
  stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"),
  "Dsa cdsc csa!!! I Am cool!"
);
console.log(stringClean("A1 A1! AAA   3J4K5L@!!!"), "A A! AAA   JKL@!!!");
console.log(
  stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"),
  "Adgre Asad! AAA fvfdvJKL@"
);
console.log(
  stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 "),
  "Addsadds A  $$sad! AAAe fKL@ "
);
console.log(
  stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 "),
  "Addsadds A  $$sa!d! A!A!Ae$ f## "
);
console.log(
  stringClean(
    'My "me3ssy" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?'
  ),
  'My "messy" data issues! Will they ever, ever be solved?'
);
console.log(
  stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"),
  "Why can't we buy the good software? #cheapskates"
);

/* #45
Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
When bool is truthy, func1 should be called, otherwise call the func2.
Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
 */

function _if(bool, func1, func2) {
  console.log(bool);
  if (bool == true) {
    func1();
  } else {
    func2();
  }
}

/* #46
  Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
  NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
 */

var humanYearsCatYearsDogYears = function (humanYears) {
  let res = [];
  let catY = 0;
  let dogY = 0;
  for (let i = 1; i <= humanYears; i += 1) {
    if (i === 1) {
      catY = dogY += 15;
    } else if (i === 2) {
      catY = dogY += 9;
    } else {
      catY += 4;
      dogY += 5;
    }
  }
  res.push(humanYears, catY, dogY);
  return res;
};

console.log(humanYearsCatYearsDogYears(1), [1, 15, 15]);
console.log(humanYearsCatYearsDogYears(2), [2, 24, 24]);
console.log(humanYearsCatYearsDogYears(10), [10, 56, 64]);

/* #47
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0
 */

function Hero(name = "Hero") {
  this.name = name;
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

let myHero = new Hero();

console.log(
  myHero.name,
  "Hero",
  "Hero should have a 'name' attribute with value \"Hero\""
);
console.log(
  myHero.experience,
  0,
  "Hero should have an 'experience' attribute with value 0"
);
console.log(
  myHero.health,
  100,
  "Hero should have a 'health' attribute with value 100"
);
console.log(
  myHero.position,
  "00",
  "Hero should have a 'position' attribute with value \"00\""
);
console.log(
  myHero.damage,
  5,
  "Hero should have a 'damage' attribute with value 5"
);

/* #48
Task
Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise.
Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. 
(no more than 161) You may assume that all array elements are unique.
 */

const find = (arr, elem) =>
  arr.indexOf(elem) !== -1 ? arr.indexOf(elem) : "Not found";

console.log(find(array, 5), 2);
console.log(find(array, 11), 4);
console.log(find(array, 3), 1);
console.log(find(array, 2), 0);
console.log(find(array, 7), 3);
console.log(find(array, 1), "Not found");
console.log(find(array, 8), "Not found");
array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
console.log(find(array, "Hello World"), 1);
console.log(find(array, "lorem ipsum"), "Not found");
console.log(find(array, "Lorem Ipsum"), 3);
console.log(find(array, false), 2);
console.log(find(array, true), 0);
console.log(find(array, Math.PI), 5);
console.log(find(array, 3.14), "Not found");
console.log(find(array, 6), 4);

/* #49
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 */

function makeNegative(num) {
  return num > 0 ? -num : num;
}

console.log(makeNegative(42), -42);

/* #50
Complete the function which returns the weekday according to the input number:
1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
 */

function whatday(num) {
  const arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return num > arr.length || num === 0
    ? "Wrong, please enter a number between 1 and 7"
    : arr[num - 1];
}

console.log(whatday(1), "Sunday");
console.log(whatday(2), "Monday");
console.log(whatday(3), "Tuesday");
console.log(whatday(8), "Wrong, please enter a number between 1 and 7");
console.log(whatday(20), "Wrong, please enter a number between 1 and 7");

/* #51
Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.
Example
With the numbers 1, 2, and 3, here are some possible expressions:
1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
The maximum value that can be obtained is 9.
Notes
The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
You can use the same operation more than once.
It is not necessary to use all the operators or parentheses.
You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.
Input and Output Examples
expressionsMatter(1, 2, 3) ==> 9, because (1 + 2) * 3 = 9.
expressionsMatter(1, 1, 1) ==> 3, because 1 + 1 + 1 = 3.
expressionsMatter(9, 1, 1) ==> 18, because 9 * (1 + 1) = 18.
 */

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c
  );
}

// Small values
console.log(expressionMatter(2, 1, 2), 6);
console.log(expressionMatter(2, 1, 1), 4);
console.log(expressionMatter(1, 1, 1), 3);
console.log(expressionMatter(1, 2, 3), 9);
console.log(expressionMatter(1, 3, 1), 5);
console.log(expressionMatter(2, 2, 2), 8);

// Medium values
console.log(expressionMatter(5, 1, 3), 20);
console.log(expressionMatter(3, 5, 7), 105);
console.log(expressionMatter(5, 6, 1), 35);
console.log(expressionMatter(1, 6, 1), 8);
console.log(expressionMatter(2, 6, 1), 14);
console.log(expressionMatter(6, 7, 1), 48);

// Mixed values
console.log(expressionMatter(2, 10, 3), 60);
console.log(expressionMatter(1, 8, 3), 27);
console.log(expressionMatter(9, 7, 2), 126);
console.log(expressionMatter(1, 1, 10), 20);
console.log(expressionMatter(9, 1, 1), 18);
console.log(expressionMatter(10, 5, 6), 300);
console.log(expressionMatter(1, 10, 1), 12);

/* #52
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

function testEven(n) {
  return n % 2 === 0;
}

console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");

/* #53
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
Hint: Don't forget to check for bad values like null/undefined
 */

function countSheeps(sheep) {
  let count = 0
 const res = sheep.flat(Infinity)
 res.forEach((el) => {
  if (el === true)
    count += 1
 })
 return count
}

console.log(countSheeps([[], 0]));
console.log(countSheeps([[undefined], 0]));
console.log(countSheeps([[null], 0]));
console.log(countSheeps([[false], 0]));
console.log(countSheeps([[true], 1]));
console.log(countSheeps([[undefined, null, false, true], 1]));
console.log(countSheeps([[undefined, null, false, true, true, false, null, undefined], 2]));
console.log(countSheeps()[
  [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ],
  17,
]);

/* #54
Wilson primes satisfy the following condition. Let 
P
P represent a prime number.
Then,
(P−1)!+1/P∗P 
​should give a whole number, where P! is the factorial of P.
Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.
 */

function amIWilson(p) {
  return (p === 5 || p === 13 || p === 563)
}

console.log((amIWilson(5), true))
console.log((amIWilson(9), false))
console.log((amIWilson(6), false))

/* #55
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
 */

function problem(x){
  return typeof x === 'string' ? "Error" : x*50+6

}
console.log(problem("hello"), "Error");
console.log(problem(1), 56);
console.log(problem(5), 256);
console.log(problem(0), 6);
console.log(problem(1.2), 66);
console.log(problem(3), 156);
console.log(problem("RyanIsCool"), "Error");
console.log(problem(-3), -144);
console.log(problem(""), "Error");
console.log(problem(0.03), 7.5);

/* #56
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 
*/

function grow(x){
  return x.reduce((a, b)=> a * b,1);
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16); 
console.log(grow([2, 2, 2, 2, 2, 2]), 64); 

/* #57
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside.
The strings will not be the same length, but they may be empty ( zero length ).
Hint for R users:
The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output
("1", "22") --> "1221"
("22", "1") --> "1221"
ShortLongShort.solution("1", "22"); // returns "1221"
ShortLongShort.solution("22", "1"); // returns "1221"
 */

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}
  
  console.log(solution('45', '1'), '1451');
  console.log(solution('13', '200'), '1320013');
  console.log(solution('Soon', 'Me'), 'MeSoonMe');
  console.log(solution('U', 'False'), 'UFalseU');


/* #58
 */
/* #59
 */
/* #60
 */
/* #61
 */
