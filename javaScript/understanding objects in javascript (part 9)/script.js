/*
an object is JS is a data type that is composed of names or keys and values represented
in name:value pairs. the name:value pairs can consist of properties that may contain any 
data type. including strings, numbers, and booleans as well as methods, which are functions
contained within an object
*/

/*
objects in javascript are standalone entities that can be likened to objects in real life. 
for example, a book might be an object which you would describe by the title, author, 
number of pages, and genre. similarly a car might be an object that you would describe by 
the color, make, model, and horsepower. JS arrays are also a type of object
*/

/*
objects are an integral and foundationa aspect of most JS programs. for example, a user 
account object may contain such data as usernames, passwords, and email addresses. another 
common use case is a web shopping cart that could consist of an array of many objects containing 
all the pertinent information for each item, such as name, price and weight for shipping 
information. a to do list is aother common application that might consist of objects
*/

// Initialize object literal with curly brackets
const objectLiteral = {};

// Initialize object constructor with new Object
const objectConstructor = new Object();

// using an object literal is the preffered method as it turns over less inconsistencies

const gimli = {
    name: `gimli`,
    race: `dwarf`,
    weapon: `axe`,
    greet: function() {
        return `hi my name is ${this.name}!`
    },
};

console.log(gimli);

/*
our new object is gimli which has 3 properties. each property consists of a name:value pair
also known as a key:value pair. weapon in one of the property names, which is linked to the propeerty
value "axe". it has one method, with a method name of greet. and the method value consisting
of the contects of the function

within greet youll notice the this keyword. this refers to the current object when you use 
it inside an object
*/

/*
objects can have properties and methods

a property i the association between a name and value within an object, and it can contain any
data type. a property generally refers to the characteristic of an object

a method is a function that is the value of an object property, and therefor a task that an object 
can perform
*/

console.log(gimli.weapon);
// we can retrieve the property value with dot notation

console.log(gimli[`weapon`]);
/*
both dot notation and bracket notation are used regularly. dot notation is faster and more readable but
has more limitations. bracket notation allows access to property names stores in a variable, and must be used 
if an objects property contains any sort of special characters
*/

console.log(gimli.greet());
// used dot notation to retrieve our funtion from the object and printed it to the console

// ------------------------------ADDING AND MODIFYING OBJECT PROPERTIES-------------------------------

/*
in order to add a new proerty to an object you would assign a new value to a property with the assignment 
operator = 

for example we can add new numerical data type to the object as the new age property. both dot and bracket
notation can be used to add a new object property
*/

// add new property age to gimli
gimli.age = 139;

console.log(gimli.age);

// an object method can be created in the same way as above

gimli.fight = function() {
    return `gimli attacks with an ${this.weapon}.`
};

console.log(gimli.fight);

// using the same methos, an objects property can be modified by assigning a new value to an existing property

// update weapon from axe to battle axe
gimli.weapon = `battle axe`;

console.log (gimli);

// remove weapon from gimli
delete gimli.weapon; 

console.log(gimli);

// ---------------------------LOOPING THROUGH OBJECT PROPERTIES------------------------------

/*
we can use for...in to traverse through all the properties of gimli and print them to the console. using bracket 
notation, we can retrieve the property value as a variable, in this case key.
*/
delete gimli.fight;
delete gimli.greet;
gimli.weapon = `battle axe`;

for (let key in gimli) {
    console.log(gimli[key])
};

// get keys and values of gimli properties and return them next to their key name in uppercase
for (let key in gimli) {
    console.log(key.toUpperCase() + `:`, gimli[key])
};

// another enumeration method is the object.keys() method which will return an array of the objects keys
console.log(Object.keys(gimli));