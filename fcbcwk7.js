//FE BC Week 7 Assignment
//Each question was added to the browser console by adding the text of the question via console.log

//Question 1

//Creates an array called "ages" and specifies the values.
console.log('1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.');
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//Subtracts the first element "3" from the last element "93", resulting in "90"
console.log('1a.Programmatically subtract the first element from the last element.');
let resultA = ages[ages.length - 1] - ages[0];
console.log(`Result for 1a: ${resultA}`);

//The new age added to the array was "42" and it subtracts the first element "3" from this new age resulting in "39"
console.log('1b.Add a new age (added 42) to the array and repeat the step above.');
let newAge = 42;
ages.push(newAge);
let resultB = ages[ages.length - 1] - ages[0];
console.log(`Result for 1b: ${resultB}`);

//Using a loop, this adds all of the ages in the array, resulting in "totalAge". It then divides the total age by the length of the array, resulting in the average age
console.log('1c.Use a loop to calculate the average age.');
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log(`Result for 1c: ${averageAge}`);

//Question 2

console.log('2.Create an array called names that contains the following values:', "'Sam',", "'Tommy',", "'Tim',", "'Sally',", "'Buck',", "'Bob'");

//This is the array of names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

//Here we are using a loop to calculate the total number of letters by adding the length of each name, then total number of letters is divided by the number of names to obtain the average number of letters per name
console.log('2a.Use a loop to iterate through the array and calculate the average number of letters per name.');
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(`Average number of letters per name: ${averageLetters}`);

//Here we are, again, using a loop to concatenating each name with a space in between
console.log('2b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
}
console.log(`Concatenated names: ${concatenatedNames.trim()}`);

//On Question 3 and Question 4, we used a backtick to include the question with its full answer and explanation
//Question 3

console.log('3.How do you access the last element of any array?');
let question3 = `Once the array is created, you can access the last element of an array by using its length property. 
Example: 

    let anyArray = [8,6,7,5,3,0,9]; 

Since the first element is considered 0, use the length of the array, in this case 7, and subtract 1. 

    let lastElement = anyArray[anyArray.length – 1]; 

    console.log(lastElement); 

The output, in this example, should be 9, which is the last element of the array.`
console.log(question3);

//Question 4
console.log('4.	How do you access the first element of any array?');
let question4 = `Once the array is created, you can access the first element of an array by enclosing a 0 in square brackets.
Example:

    var anyArray = [8,6,7,5,3,0,9];

Since the first element is considered 0: 

    var firstElement = anyArray[0];

    console.log(firstElement); 

In this case, the output should be the number 8.`
console.log(question4);


//Question 5

console.log(`5.Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`);

//Here we are transforming each element of the element "myNames" to "nameLengths", which contains the lengths of the strings
let myNames = ['James', 'Emmanuel', 'Charles'];
let nameLengths = myNames.map(function(name) {
    return name.length;
});
console.log(nameLengths);


//Question 6

console.log('6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.');

//This answer refers back to the "nameLengths" array from Question 5 and uses a 'for' loop to add the lengths of each name
let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum); 


//Question 7

console.log(`7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')`);

//This function initiates a loop that will run "n(n=10)" times and inside the loop it concatenates the word chosen. To test the function, the word used was 'Think' and 'n=10'
//Answer
function repeatWord(word,n) {
    let result = '';
    for (let i = 0; i< n; i++) {
        result += word;
    }
    return result;
}

//Function Test
let testAnswer = repeatWord('Think', 10);
console.log(testAnswer);


//Question 8

console.log(`8.Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.`);

//The function 'theFullName' adds the two strings together and creates the 'fullName' variable by concatenating 'firstName', a space, and 'last name'
//Answer
function theFullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return fullName;
}

//Function Test
let testName = theFullName('James', 'Jarrell');
console.log(testName);


//Question 9

console.log('9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.');

//This function adds each of the numbers one at a time creating the 'accumulator' and adding the next value which would be the 'currentValue'. It adds them up and returns a 'True' answer if the sum is greater than 100. If not, it returns a 'False' answer.
//Answer
function moreThanHundred(numbers) {
    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum > 100;
}

//Function Test
let arrayA = [65, 25, 44];
console.log(moreThanHundred(arrayA));

let arrayB = [50, 10, 20];
console.log(moreThanHundred(arrayB));


//Question 10

console.log('10.Write a function that takes an array of numbers and returns the average of all the elements in the array.');

//
//Answer
function findAverage(numbers) {
    if (numbers.length === 0) {
        return undefined; //If the array is empty, the answer returned would be undefined
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } //Using a 'for' loop, the numbers are added
    let average = sum / numbers.length; //The sum of the numbers is then divided by the elements in the array
    return average;
}

//Function Test
let arrayC = [13, 654, 5];
console.log(findAverage(arrayC)); 




//Question 11

console.log(`11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
is greater than the average of the elements in the second array.`);

//Answer
function isFirstGreater(arrayD, arrayE) {
    let average1 = calculateAverage(arrayD);
    let average2 = calculateAverage(arrayE);
    return average1 > average2; //This function will compare the two averages from the arrays, to then verify if the first one is larger. If so, the return will be 'True'.  
}
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return undefined; //If the array is empty, it will return as undefined
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length; //Lines 213 through 217 calculate the average
}  

//Function Test
let arrayD = [15, 25, 35];
let arrayE = [10, 20, 30];
console.log(isFirstGreater(arrayD, arrayE));



//Question 12

console.log('12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.');

//Answer
//The two parameters set are 'isHotOutside' and 'moneyInPocket'. If both of these are 'True', the return will be 'True'; otherwise, it will be 'False'
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

//Function Test
let hotOut = true;
let money = 24.75
console.log(willBuyDrink(hotOut, money));

let hotOut1 = true;
let money1 = 10.25
console.log(willBuyDrink(hotOut1, money1));



//Question 13
console.log('13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it.');

//Answer
//This function is created to let you know if you can afford to fill your gas tank given the current price per gallon and the size you your vehicle's tank.
function gettingGas(moneyAvailable, pPG, tankCap) { //For you to be 'gettingGas' this will calculate the totalCost to fill your tank and verify if you have the 'moneyAvailable' to do this.
    let totalCost = pPG * tankCap;
    return moneyAvailable >= totalCost;
}

//Function Test - A 'True' result means you can fill your gas tank, whereas a 'False' return will indicate that you cannot fill your tank.
let moneyAvailable = 50; 
let pPG = 3.05;
let tankCap = 15
console.log(gettingGas(moneyAvailable, pPG, tankCap));