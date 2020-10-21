const { func, number } = require("prop-types");

/* 
    Assign a variable
    (semi-columns is not necessary) 
*/
x = 32;
whereAmI = "Beijing";

var monster1 = "Grover", monster2 = "Cookie", monster3 = "Animal";

/* 
    String 
*/
"This is a string";
'This is also a string';

"<a href=''>";

"There a some \" slashes \"";   //include quotes in the string

"This is \
my favourite \
string";

/* string properties and methods */
var myStr = "This is my string";
myStr.length            //property
myStr.toUpperCase()     //methods

/* 
    Number
*/
//All numbers in JS are in the same type, there is not int, double, float
a = 12
b = 12.0    //they are the same

Infinity    //Largest number
-Infinity   //Smallest number
NaN         //not a number

Math.round(12.1231)     //Use math package to round number
Math.random()           //return a random number

/* 
    Boolean(all in lower case)
*/
true
false
buttonHasBeenClicked = true;
buttonHasBeenClicked = false;

var myLocation = "atl", myOtherLocation = "la";
myLocation === myOtherLocation       //return false

/* 
    Objects 
*/
var myEmptyObj = {};    //could declare a empty object
var notEmptyObj = {
    "label": "value",
    "label2": "value2"
};

var bear = {
    genus: "ursus",
    species: "corvax",
    commonName: "raven",
    maxOfSpring: 5,
    noisy: true,
    deadly: false
};
bear.genus;      //return ursus
bear["genus"];   //return ursus
bear.color = "brown";    //add a new property
bear["where it lives"] = "in the woods";    //add a new property

delete bear.color;      //remove a property from obj

//Jargon: References and objects
var bear = {
    genus: "ursus",
    species: "corvax",
    commonName: "raven",
    maxOfSpring: 5,
    noisy: true,
    deadly: false
};

//Its not a copy, it's a reference, 
//they point to the same thing in the memory
var animal2 = bear;

//2 ways to make a copy, 
//  1. use the entire declaration again,
//  2. use JSON file indirectly. 
var animal3 =  {
    genus: "ursus",
    species: "corvax",
    commonName: "raven",
    maxOfSpring: 5,
    noisy: true,
    deadly: false
};
var animal4 = JSON.parse(JSON.stringify(bear));

/* 
    Array 
*/
var myArray = [];
var daysOfTheWeek = ["Sun", "Mon", "Tue"]  //array in JS is object
myArray = [0, 1, 2, "str1", "str2", true, false]    //array could store different types of data

var arrayOfStaff = [{"name":"value"}, 
                    [1, 2, 3], 
                    "str"]          //your could even put objects inside an array
arrayOfStaff.length                 //get the len of array

//Manipulating arrays
myArray[0]      //return first element of myArray
myArray[0] = 100        //change element
myArray[myArray.length] = "New element"     //add a new element to the tail
myArray.push("Another new element")         //add a new element using push()
myArray.pop()                               //return the last element and delete it

delete myArray[1]       //wipe out the element without changing the size of array
myArray.splice(2, 2)    //from 3rd element start to delete 2 element, and return the deleted element


/* 
    Readability: 
*/ 
//Use whitespace
//  1. Use whitespace, backslash, change lines to make code clear.
//  2. some extensions could help.
//  3. https://prettier.io could help, too.

//Use comments
//  2 styles: 
//      Line comment:   '//'    (can't cross line) 
//      Block comment:  '/* */' (could cross lines)

/* 
    Regular Expression 
*/
var regex = /this/;  // regex is a data type in JS, use '/variable/'

var str1 = "This is the longest str ever."
var str2 = "This is the shortest str ever."
var str3 = "Is this the str we are looking for?"
var str4 = "This is a good str."

//use console to run the regular expression test, to find out the patent in var "regex" -- "this"
//console.log() --> output info to the console
console.log(regex.test(str1));  
console.log(regex.test(str2));
console.log(regex.test(str3));
console.log(regex.test(str4));  // return: false, false, false, true, false

var regex = /this/i;    // "i" --> insensitive, insensitive to upper or lower cases.
var regex = /^this/i;    // "^" --> check if "this" is at the beginning of the str
var regex = /this$/i;    // "$" --> check if "this" is at the end of the str
var regex = /this\.$/i;    // check if "this." is at the end of the str

/*
    Operators
*/
//Comparisons
//  >, <, >=, <= are the same
var one = 1, two = 2;
one === two;    //equal, more strict
one !== two;    //not equal
one == "1"      //return true, less strict
one != "1"      //return false

//Arithmetc operators
//  +, -, *, / are the same 
20 % 2          //module operation
20 % 2 === 0    //check the equation

var counter = 0;
counter += 2    //self increase by 2
counter++       //self increase by 1, and only by 1
counter -= 1
counter--

var str = "cat " + "dog"    //combine strings

//Logical operators
//  "&&" --> and
//  "||" --> or, '&&' has higher priority than '||'
//  "!" --> not

/* 
    Control strutures 
*/
//Conditionals: if
var answer = window.confirm("Click OK, get true. Click cancel, get false.");    //pop up a window in web broswer to click
if (answer === true) {
    console.log("You get true!");
} else {
    console.log("You get false!");
}

var answer = window.prompt("Type YES, NO or MAYBE. Then click OK");     //pop up a prompt to input something
if (answer === "YES") {
    console.log("You said YES!");
} else if (answer == "NO") {
    console.log("You said NO.");
} else {
    console.log("You are not sure!");
}

//Switch
//  each block ends with "break"
//  if there is no "break", it will execute the next line until reach a "break"
//  "default" at the end
switch (answer) {
    case "YES":
        console.log("You said YES!");
        break;
    case "MAYBE":
        console.log("You said MAYBE.");
        break;
    case "NO":
        console.log("You said NO.");
        break;
    default:
        console.log("You are not sure!");
        break;
}

//Terse ifs --> one-line if statement
var one = 1;
if (one === 1) console.log("It's one!");
else console.log("It's not one!")

var todayGood = true
if (todayGood) console.log("It's a good day!");

//Ternary operator
//  check conditions
var animal = "cat";
animal === "cat"
    ? console.log("You got a cat.")
    : console.log("You lost a cat.")

// assign variable
var job = animal === "cat" ? "cat herder" : "dog catcher";

//Type checking
var num = 12;
typeof num;    // return a string "number"
var obj = {};
typeof obj;     // return a string "object"
var arr = [];
typeof arr;     // return a string "object"

typeof obj === "object" && obj.hasOwnProperty("length")     //return true

typeof NaN;         // "number"
Number.isNaN(num);  // check if num === NaN

typeof null;        // "object"
null === NaN;       // false

/* 
    Loops
*/
//sequential FOR loops
//  Simple loop print 0 to 9
for (var i = 0; i < 10; i++) {      
    console.log(i);
}

//  Match the page name using loop
var pageNames = [
    "Homes",
    "About us",
    "Contact us",
    "JS playground",
    "News",
    "Blog"
];
for (var i = 0; i < pageNames.length; i++){
    if (document.title === pageNames[i]) {      //document.title --> get the title of this page
        console.log("We are at: " + pageNames[i]);
        break;
    } else {
        console.log("We are not here: " + pageNames[i]);
    }
}

//Enumerative FOR loops
//  Caveat!!!  if use "in" to taverse, the travel order is not guaranteed. Don't depend on it.
//  p gets the indices of pageNames here.
//  print out all elements in the list--pageNames with indices
for (var p in pageNames) {
    console.log(p, pageNames[p]);
}

//  print out all elements in the dict--pageNames with indices
var pageNames = {
    first: "Homes",
    second: "About us",
    third: "Contact us",
    fourth: "JS playground",
    fifth: "News"
};

for (var p in pageNames) {      //here p gets keys
    if (pageNames.hasOwnProperty(p)){
        console.log(p, pageNames[p]);
    }
}

//WHILE loops
//  use it when you don't necessarily need when to stop
var myArr = [true, true, true, false, true, true];
var item = null;
while (item !== false) {
    console.log(
        "myArr has " + myArr.length + " items now. This loop stops when get a false."
    );
    item = myArr.pop();
}

//  Infinite loop
var counter = 1;
while (true) {
    counter++;
    console.log(counter);
}

//DO...WHILE loop
//  Execute at least once
var item = false;
do {
    console.log(
        "myArr has " + myArr.length + " items now. This loop stops when get a false."
    );
    item = myArr.pop();
} while (item !== false);


/* 
    Functions
*/
//Basic functions
function speak() {
    console.log("Moo");
    console.log("Woof");
    console.log("Meow");
}
speak();    //call the function

//Arguments in functions
/* 
function speak(arg1, arg2, ...) {
    ...
    return;
}
*/

//  deafult argument
/* 
function speak(what="default speech", howMany=1){
    ...
    return;
}
*/

//  arbitrary number of argumens
function addingMachine(){
    var total = 0;
    for (var i = 0; i < arguments.length; i += 1){  //"arguments" contain all args passed in, use indices to access
        var number = arguments[i];
        if(typeof number == "number") {
            total += number;
        }
    }

    return total;
}

console.log(addingMachine(1,2,3,4,5,6))

//Objects, references and functions
var human = {
    name: "calvin",
    age: 30,
    form: "human"
};

//  Object will be passed into the function by reference!!!
//  which means, the function will modify the object itself.
//  if don't want to change the original arguments, just return newly created objects
function transRandomFrom(people){
    if(typeof people !== "object") {
        console.error("Wrong type argument");
        return;
    }

    //get a random number between 1 and 3
    //Math.random return a number in (0, 1)
    var randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            people.form = "t-rex";
            break;
        case 2:
            people.form = "wolf";
            break;
        case 3:
            people.form = "tiger";
            break;
        default:
            people.form = "human";
            break;
    }
}

//Functions are objects
//  functions could be passed as arguments
//  functions are inheritated from a global object --> Function
var speakSomething = function(what) {   //function(what) here, is a anonymous function
    what = what || "Speaking";          //if “what” is false(null, undefined, 0), what="Speaking". Otherwise, what=what

    for (var i = 0; i < 10; i += 1) {
        console.log(what);
    }
};

//  window: the window of web browser
//  after 100ms, the function will be executed
window.setTimeout(speakSomething, 100);     

//  set funtion in an object
var obj = {
    sayHello: function() {
        console.log("Hello");
    }
};

obj.sayHello();

//Jargon: Variable Scope in JS
//  var, let, const --> are scopes in JS
//  global variables vs. local variables --> varible defined in functions are locacl
var num = 20;       // global
function printNum(){
    var num = 30;   //local
    console.log("The local variable num = ", num);
    console.log("The global variable num = ", window.num);  //use "window.variable" to get gloable variable
    return;
}

printNum();

//Jargon: callback functions
//  1. Use map()
var myNums = [1, 2, 3, 4, 5];

function doubleIt(number){
    return (number *= 2);
}

var myDoubles = myNums.map(doubleIt);   //use obj.map(func) to map each element in obj to func

//  2. Use forEach()
myNums.forEach(function(number){    //print each element in "number"
    console.log("My arr contains", number);
});

//  3. use => (?????)
doubleIt = number => (number *= 2);


/* 
    More advanced pieces    
*/
//Asynchronous code: The waiting is the hardest part
//  Some steps could run without blocking other steps
//  Let some steps happend while while waiting other steps to be finished

//Promises
// one promise
// axios is library for making network requests and return promises
axios.get("https://httpbin.org/get").then(funciton(response){
    // now I have some data
});

//  multiple promises in sequence, no nesting
axios 
    .get("https://httpbin.org/get")
    .then(function(response){
        //now I have some data

        return axios.get("https://httpbin.org/get");
    })
    .then(function(response){
        //now I have some data

        return axios.get("https://httpbin.org/get");
    });

//Async and Await
// One requesth
async function getOneThing(){
    var response = await axios.get("https://httpbin.org/get");

    // now I have some data
}

//  Multiple request
//      mark each promise with await, so we can get the response as soon as they're ready
async function getLotsOfThings(){
    var response1 = await axios.get("https://httpbin.org/get");     
    var response2 = await axios.get("https://httpbin.org/get");
    var response3 = await axios.get("https://httpbin.org/get");

    //now I have some data
}

//Object-oriented JS: Prototypes and classes
//  Inheritance in JS: Prototypal inheritance,
//  using Prototypal chain, child objects have link to their parent objects --> __proto__

//jargon: Strong vs loose typing
//  JS is loosely typed --> flexible
//  TypeScript: JavaScript + Strong typing(and more)

//Modern JS tooling
//  Webpack and rollup.js --> load share libraries
//  npm and yarn --> packages installation and management
//  Babel, TS--> tansfiler or compiler, trasfer TS into JS
//  Node.js --> running JS on servers instead of browsers