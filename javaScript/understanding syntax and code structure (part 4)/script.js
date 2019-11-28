const greeting='Hello'; // no whitespace between variable & string
const greeting =        'Hello'; // excessive whitespace after assignment
const greeting = 'Hello'; // single whitespace between variable & string

// the bottom example is the most readable option
// whitespace is taken out before processing the .js file. therefor
// all 3 variables will have the same output


// Get the current timestamp and print it to the console
const now = new Date(); console.log(now)

// Two statements separated by newlines
const now = new Date()
console.log(now)

/*
the statements above need a semicolon only if they are on the same line. a safe 
bet is to always use semi colons
*/
// ---------------------------------------------------------------------------------------------


// structure for loops and statements


for (initialization; condition; increment) {
    // run the loop
  }

  // Initialize a function to calculate the area of a square
function square(number) {
    return Math.pow(number, 2)
  }
  
  // Calculate the area of a number greater than 0
  if (number > 0) {
    square(number)
  }

  /*
  not all code encased in curly braces wil end without a semi colon. objects encased
  in curly brackets and should end in a semi colon
  */

  // An example object
const objectName = {};

// Initialize triangle object
const triangle = {
  type: 'right',
  angle: 90,
  sides: 3,
};

/*
the name of a variable function or property is known as an identifier in JS. Identifiers
consist of letters and numbers but they cannot contain $ or _ and cannot begin 
with a number
*/

/*
identifiers also must not contain any reserved keywords that are built in for JS 
functionality, these incude var, ir, for and this
*/
