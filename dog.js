//Step 1.
var myAge = 39; //Setting a var with my age

// Step 2.
var earlyYears = 2; //Setting a var with value 2, this value may change

// Step 3.
earlyYears *= 10.5;

// Step 4.
var laterYears = myAge - 2; //New var with value that may change and for now is substracting 2 from my age

// Step 5.
laterYears *= 4; //multiplication assignment operator to calculate the number of dog years in my lateryears.

// Step 6.
console.log(earlyYears);
console.log(laterYears);

// Step 7.
var myAgeInDogYears = earlyYears + laterYears; //adding the two variables to calculate the total of my actual dogyears.

// Step 8.
const myName = "Sheila".toLowerCase(); //declare my name in a variable using the method to convert all the letters to lowecase

// Step 9.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
