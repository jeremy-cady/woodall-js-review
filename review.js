/*

Jargon!!

. - dot
() - parentheses, parens
[] - square (brackets / braces)
{} - curly (brackets / braces)
< - less than / angle brackets
> - greater than / angle brackets
/ - forward slash / whack / division
\ - back slash (escape operator)
! - not operator / exclamation point / bang
# - pound / hash / octothorp
* - star / asterisk / splat / multiplication
|| - or operator / pipes
&& - and operator / ampersands
$ - dollar sign / bling / cash money / jQuery
Nan - Not A Number

*/

/**
 * 
 * Primitive Data Types
 * 
 *  - Strings
 *  - Numbers
 *  - Booleans
 *  - Undefined
 *  - Null
 * 
 * 
 * Complex Data types
 * 
 *  - Arrays
 *  - Objects
 */

// Always use camel case 🐪
let firstName = "Jeremy";

// Other naming conventions:
// snake_case
// kebob-case
// PascalCase or UpperCamelCase
// SCREAMING_CASE

// Use descriptive naming!!

/**
 * 
 * Expressions
 * 
 * Operators
 */

// An expression evaluates to a single value
7+3;        // 10
sum(7, 3);  // 10
let aMediumSizedNumber = 7 + 3;
let anotherNumber = sum(7, 3);

console.log('my fav number is', anotherNumber);
console.log('my fav number is', sum(7, 3));

// increment operator
anotherNumber++;
// Same as:
anotherNumber = anotherNumber +1; // 11

// addition assignment operator / plus equals
anotherNumber += 10;    // 22
// Same as:
anotherNumber = anotherNumber + 10;

let myNumber = 5;
myNumber += 3;   // 8
myNumber -+ 3;   // 2
myNumber *= 3;   // 15
myNumber /= 3;  // 1.666
myNumber %= 3;  // 2

// Modulus Operator
// Gives you the remainder of division
5 % 2;  // 1


let name = "Jeremy";
name += "Cady";
// Same as
name = name + "Cady";   // Jeremy Cady

// THE TRICKY PLUS OPERATOR
// acts as addition when dealing with numbers
// acts as a concatenator when dealing with strings

// minus operator
// only does math
'5' - 3;    // 2
5 - '3';    // 2


// Number
Number('543')   // turns string into number

// parseInt
parseInt('543');    // also turns string into a number

// parseFloat
parseFloat('543.245')   // turns string into float



// Anti-values
// Values that are not values

NaN;    // not a number
        // usually a type coercion error, eg. Number('abc')


// intentionally nothing
null;

// function that returns nothing returns undefined
undefined;

// a variable can also be not defined (not declared)



/*
Conditionals
*/

if(someBoolean) {
    // then do that
}
else if(someOtherBoolean) {
    // then do this
}
else {
    // do this if nothing else is truthy
}

// Conditional Operators
if (myNumber > 8) {
    // do whatever...
}
/*
> Greater than
>= Greater than or equal to
< Less than
<= Less than or equal to
=== Triple Equals (exactly equals)
== Double equals (coerce types, then compare) DON'T USE!!!
!== Not equals
!= Not equals (coerces types) DON'T USE!!!
*/

// eg.
'5' == 5;
// Instead do
Number('5') === 5;


/*
Arrays and Loops
*/

// An array is a list of things

let beverages = [
    'Bubly',
    'Jasmine tea',
    'Coffee',
    'water'
];
/*
Kinds of loops
 - for...of
 - for...in
 - for
 - while
  */

 // for...of loop - often used to loop through arrays
for (let beverage of beverages) {
    console.log(`I am drinking ${beverage}`);
    
}

// for loop - often used for counting
for(let i=0; i<beverages.length; i++) {
    let beverage = beverages[i];
    console.log(`I am drinking ${beverage}`);
    
}

for (let i=10; i<=100; i+=5) {
    console.log('Counting up...', i);
    
}

// for...in loop - returns the index of the item
for (let i in beverages) {
    let beverage = beverages[i];
    console.log(`I am drinking ${beverage}`);
    
}

// while loops
// keep running this code until some condition is met
let forecast;
while(forecast.windspeed < 50) {
    let forecast = goAskTheWeatherService();
}
sendAMessageToMortonsenToStopTheCranes();

let isGameRunning = true;
while(isGameRunning) {
    nextTick();
}
$('#stopButton').on('click', function() {
    isGameRunning = false;
});


/*
Functions!!
*/

function generateSong(lyrics, notes) {
    let song = `🎵 🎵 🎵
    ${lyrics} ${lyrics} ${lyrics}
    ${notes} ${notes} ${notes}
    🎹 🎻
    ${lyrics} ${lyrics} ${lyrics}
    ${notes} ${notes} ${notes}`
    return song;
}

let mySong = generateSong('hey hey hey', 'C F G');
console.log('check out my song', mySong);

// function declaration
// this is "hoisted" (you can call the function 
// anywhere before you declare it)
function sum(num1, num2) {
    return num1 + num2;
}

// function expression
// also called an anonymous function 
// (create an anonymous function and assign it
// to a variable called 'sum')
let sum = function(num1, num2) {
    return num1 + num2;
}


// anonymous function
function(num1, num2) {
    return num1 + num2;
}


// This pattern is seen frequently in JS
function sayHello() {
    console.log('Hello');
    
}

function callMeTwoTimes(fn) {
    fn1();
    fn2();
}

callMeTwoTimes(function() {
    console.log('Hello');
    
});

callMeTwoTimes(sayHello);

// eg.
$(document).on('ready', onReady);

function onReady() {
    console.log('so ready');
    
}

// OR

('button').on('click', onButtonClick);

function onButtonClick() {
    console.log('Button Clicked');
    
}

// OR

$(document).on('ready', function() {
    console.log('so ready');
    
});


// Built in functions in JS are called "methods"
Number('5');    // 5

let notes = ['do', 're', 'mi'];
notes.push('fa');   // adds to the end
notes.pop();        // removes from end
notes.shift();      // removes from beginning
notes.unshift();    //adds to beginning
notes.join(', ')    // joins array elements with a comma and space between each
notes.split(', ')   // splits array elements any time it sees comma space



