// Function to perform basic calculator operations
const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 == 0) {
        return "cannott";
      } else {
        return num1 / num2;
      }
  }
};

// Example usage
console.log("Addition:", calculator(10, 5, "+"));
console.log("Division:", calculator(10, 5, "/"));

// Function to validate and return a hexadecimal string
const hexToHex = (hex) => {
  const isValidHex = /^[0-9A-Fa-f]+$/.test(hex);
  if (!isValidHex) {
    return "Invalid hexadecimal input";
  }
  return hex.toUpperCase(); // Return the hexadecimal in uppercase format
};

// Example usage
console.log(hexToHex("1a3f")); // Output: 1A3F
console.log(hexToHex("G123")); // Output: Invalid hexadecimal input
console.log(hexToHex("FF")); // Output: FF

// 1. Variables and Constants
let name = "John"; // Variable
const age = 30; // Constant
console.log(`Name: ${name}, Age: ${age}`);

// 2. Functions
function greet(person) {
  return `Hello, ${person}!`;
}
console.log(greet(name));

// 3. Arrays
const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Orange"); // Add an item
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);

// 4. Objects
const person = {
  name: "Alice",
  age: 25,
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  },
};
console.log(person.greet());

// 5. Loops
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// 6. Conditional Statements
const number = 0;
if (number > 0) {
  console.log(`${number} is positive.`);
} else if (number < 0) {
  console.log(`${number} is negative.`);
} else {
  console.log(`${number} is zero.`);
}

// 7. Arrow Functions
const square = (x) => x * x;
console.log(`Square of 5: ${square(5)}`);

// 8. Promises and Async/Await
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
  });
};

async function getData() {
  const data = await fetchData();
  console.log(data);
}
getData();

// Function to shift characters in a string
const strchange = (str, shiftBy = 1) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + shiftBy))
    .join("");

// Function to reverse a string
const reverseString = (str) => str.split("").reverse().join("");

// Function to check if a string is a palindrome
const isPalindrome = (str) => {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
};
console.log("hiaa");

// Function to count vowels and consonants in a string
const countVowelsAndConsonants = (str) => {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
};

// Function to capitalize the first letter of each word
const capitalizeWords = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Example usage
const input = "hello world";
console.log("Original String:", input);
console.log("Shifted String:", strchange(input, 1));
console.log("Reversed String:", reverseString(input));
console.log("Is Palindrome:", isPalindrome("madam"));
console.log("Vowel and Consonant Count:", countVowelsAndConsonants(input));
console.log("Capitalized Words:", capitalizeWords(input));

const squareRoot = (num) => {
  if (num < 0) return NaN; // Square root of negative numbers is not defined for real numbers
  let guess = num / 2; // Initial guess
  let epsilon = 0.00001; // Precision level

  while (Math.abs(guess * guess - num) > epsilon) {
    guess = (guess + num / guess) / 2; // Newton's method
  }

  return guess;
};

// Example usage
console.log(squareRoot(25)); // Output: 5
console.log(squareRoot(49)); // Output: 7
console.log(squareRoot(2)); // Output: ~1.414

const reverse = (x) => {
  const limit = 2 ** 31;
  const sign = x < 0 ? -1 : 1;
  const reversed =
    parseInt(Math.abs(x).toString().split("").reverse().join("")) * sign;

  return reversed < -limit || reversed >= limit ? 0 : reversed;
};

// Example usage
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(1534236469)); // Output: 0
