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

*/
