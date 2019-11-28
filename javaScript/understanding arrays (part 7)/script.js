/*
an array in javascript is a type of global object that is used to store data. arrays consist
of an ordered collection or list containing zero or multiple datatypes, and use numbered 
indices starting from 0 to access each specific item
*/

/*
arrays are very useful as they store mutiple values in a single variable, which can condence 
and organize our code. arrays can contain any datatype, including numbers strings and even other 
objects
 */

// Assign the five oceans to five variables
const ocean1 = 'Pacific'
const ocean2 = 'Atlantic'
const ocean3 = 'Indian'
const ocean4 = 'Arctic'
const ocean5 = 'Antarctic'

// Assign the five oceans
let oceans = ['Pacific', 'Atlantic', 'Indian', 'Arctic', 'Antarctic'];

// Initialize array of mixed datatypes
let mixedData = ['String', null, 7, ['another', 'array']]

let seaCreatures = ['octopus', 'squid', 'shark', 'sea horse', 'starfish'];

seaCreatures.indexOf(`sea horse`); // returns 3

seaCreatures[1]; // gets the second item in the array

let nestedArray = [['salmon', 'halibut'], ['coral', 'reef']]

nestedArray[1][0]; // we add another index number to correspond to the inner array. the output is coral.


// we can add an item by simply adding the index number and giving it a value

seaCreatures[5] = `whale`;

// outputs whale as the 6th string

seaCreatures[7] = `pufferfish`;

// if we add an item but skip an index number, it will put an undefined item in the missing space

seaCreatures.push('lobster'); // we can avoid this by using the push method to add the new item to the end of the list

seaCreatures.unshift('otter'); // the unshift method will do the opposite and add the item to the begining of our list

seaCreatures.splice(6,1); // the splice method can be used to remove items from an array. we remove the unidentified item we made earlier
// the first value is the item number were selecting and the second number is the number of items we wish to remove

seaCreatures.pop(); // pop() will remove the last item in an array

seaCreatures.shift(); // removes the firt item in the array

seaCreatures[0] = `manitee`; // replaces the value of an item

/*
Another way to modify a value is using the splice() method with a new parameter. If we wanted to change the value of sea horse, which is 
the item at index 3, we could remove it and add a new item in its place.
 */

seaCreatures.splice(3,1, `sea lion`);

let shellfish = [`oyster`,`shrimp`,`clam`,`mussel`];

for (let i = 0; i < shellfish.length; i++) {
    console.log(i,shellfish[i])
};

// we use a for loop to loop through all the items in the array and then log them to the console. the loop is limited by the total length 
// of our array

let mammals = [`dolphin`,`whale`,`otter`];

for (let mammal of mammals) {
    console.log(mammal)
};

/*
we can also use a for...of loop. a newer feature in js

the for...of loop does not retrieve the index number of the elements in the array but is a generally simpler and more concise wat to loop 
through an array. using loops is extremely useful for printing out the whole valu of an array, such as when displaing the items from a data
base on a website
*/
