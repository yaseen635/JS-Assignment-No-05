// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var multidimensionalArray = [
    [], 
    [], 
    []  
  ];
  
  console.log(multidimensionalArray);

  // 2. Declare and initialize a multidimensional array
// representing the following matrix:

var matrix2 = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

console.log(matrix2);

// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var number = prompt("Enter table Name");
var length = prompt("Enter table length");

number = parseInt(number);
length = parseInt(length);

for (let i = 1; i <= length; i++) {
  var result = number * i;
  console.log(number + " x " + i + " = " + result);
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

console.log("Counting:");
var countingSeries = "";
for (let i = 1; i <= 15; i++) {
  countingSeries += i + " ";
}
console.log(countingSeries);

console.log("Reverse counting:");
var reverseCountingSeries = "";
for (let i = 10; i >= 1; i--) {
  reverseCountingSeries += i + " ";
}
console.log(reverseCountingSeries);

console.log("Even numbers:");
var evenSeries = "";
for (let i = 0; i <= 20; i += 2) {
  evenSeries += i + " ";
}
console.log(evenSeries);

console.log("Odd numbers:");
var oddSeries = "";
for (let i = 1; i <= 19; i += 2) {
  oddSeries += i + " ";
}
console.log(oddSeries);

console.log("Series:");
var kSeries = "";
for (let i = 2; i <= 20; i += 2) {
  kSeries += i + "k ";
}
console.log(kSeries);

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var list = ["cake", "apple pie", "cookie", "chips", "patties"];

var searchItem = prompt("What is being found");

var found = false; 

for (var i = 0; i < list.length; i++) {
  if (A[i] === searchItem) {
    found = true; 
    break;
  }
}

if (found) {
  alert(searchItem + " got!");
} else {
  alert(searchItem + "did not get yet");
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
var largest = A[0]; 

for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

console.log("Array mein sabse bada number hai: " + largest);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


var smallest = A[0]; 

for (let i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i]; 
  }
}

console.log("Array mein sabse chhota number hai: " + smallest);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

console.log("Multiples of five 1 to 100");

for (let i = 1; i <= 20; i++) {
  let multiple = 5 * i;
  console.log(multiple);
}

