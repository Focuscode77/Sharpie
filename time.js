//Object Leterials

let mind = {

    blub: "light",
    weather: 'fall',

    team: {
        lead: "Josh",
        version: "new"

    }
}
//  Frist Class Function Objects
function greet() {
    console.log('hi')

}

var anonymousGreet = () => {

    console.log('hey')
}

anonymousGreet()

function log(a) {

    a();

}

log(function () {

    console.log('hi')

});

//By value 
var a = 3;
var b;
b = a;

console.log(a);
console.log(b);

// by reference

var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello' //mutate
console.log(c);
console.log(d);

//equals operartor sets up new memory space

c = { greeting: 'howdy' };
//this points to the window  object as a defualt 
function r() {
    console.log(this);

}

var k = function () {

    console.log(this)

}

k();

r();

// this  points  to the object
var t = {

    name: 'the t obect',

    log: function () {
        console.log(this)
    }
}

t.log();

//Arry

var arr = [1, 2, false];

console.log(arr)

function team(firstname, lastname, language) {

    console.log(firstname);
    console.log(lastname);
    console.log(language)

}

team('james', 'ten', 'english')

//Function over loading

function project(firstname, lastname, language) {

    language = language || 'en';

    if (language === 'en') {

        console.log('Hello' + ' ' + firstname + ' ' + lastname);

    }
    if (language === 'es') {

        console.log('Hola' + ' ' + firstname + ' ' + lastname);
    }

}

// Create different functions
function greetEnglish(firstname, lastname) {

    project(firstname, lastname, 'en');

}

function greetSpanish(firstname, lastname) {

    project(firstname, lastname, 'es');

}

greetEnglish('james', 'test');

greetSpanish('mugel', 'gomez');

// Becareful of using Semicolon Insertion
//Semiclons are optional in javascript 
//You should always put your own semiclons in your code
//If you dont add your own the javascript engine will add its own semicolon which could
// mess up your code

//Whitespace invisable characters that create literal space in your
// written code
//You can add as many comments as you want in your code  it will
// ignore the white space in you code


//Function Statement
function greet(name) {

    console.log("Hello" + name);

}

greet('james');

// using a function expression
var greetFunc = function (name) {

    console.log('Hello' + name);

};

greetFunc('james')

//using an Immediately Invoked Function Expression (IIFE)
var greeting = function (name) {
    return 'Hello' + name;

}();

// an prenthesis operator only takes in an expression

//Can pass  variable names or expression to the function

//IIFE and Safe Code
//when you create a function and place prenthesis first  you are putting
//that oobject on the execution stack and saving it in memory without running
//the code
//Wrapping your code in prenthesis ensure that your code does not run into
//or interfere with  a variable or function with a similar name
var firstname = "John";


(function (global, name) {
    var greeting = 'Hello';
    //if  you want to you can even place the object on the golabal window object
    global.greeting = 'Terance'
    console.log(greeting + " " + name);


}(window, firstname)); //IIFE

console.log(greeting)

// Closure

function apple(whattosay) {

    return function (name) {
        console.log(whattosay + ' ' + name);

    }

}

apple('Hey')('Tony');

var sayHi = apple('Hey');

//This is possible because of Closure
//It see this because it still exsist in memory and it goes up
//the scope chain to recoginze what exactly apple 'hey is this is becaue
//of the lexical environment this means that it still has memory what was connected to it in memory
// Note it doesnt matter when we invoke the funtion it will make sure it knows
//What  the function is connected to in memeory
sayHi('Tony');

//Closure Part 2
function buildFunction() {

    var arr = [];
    // Output will be a 3 because it will not leave the for  loop
    // until this expression is no longer true
    for (var i = 0; i < 3; i++) {

        arr.push(
            function () {

                console.log(i);

            }
        )
    }

    return arr;

}

// also called free variables
var fs = buildFunction();
// All  three of these have the same parant object
// Look behind the scenes instead of what your wrirting

fs[0]();
fs[1]();
fs[2]();

//Go over lesson  46 for more details Function Closures
function buildFunction2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            (function (j) {
                return function () {
                    console.log(j);

                }

            }(i))
        )
    }

    return arr;

}

var fs2 = buildFunction2();

fs2[0]();
fs2[1]();
fs2[2]();

//Function Factories
// How we can use closures to our advantage
function makeGreeting(language) {

    return function (firstname, lastname) {

        if (language === 'en') {

            console.log('Hello' + ' ' + firstname + ' ' + lastname)

        }
        if (language === 'es') {

            console.log('Hola' + ' ' + firstname + '  ' + lastname)
        }

    }

}

var greetOne = makeGreeting('en');
var greetTwo = makeGreeting('es');

greetOne('nick', 'cole');
greetTwo('dan', 'thomas');

//Closures and Callbacks
// If you have been used set timeout you havee already been using 
//javascript callbacks
// goes up the scope chain and checks it memory
function sayHiLater() {

    var greeting = 'Hi';
    //This is called a callback function
    // A call back function is a function you give to another function
    //when thee function  is finished
    setTimeout(function () {

        console.log(greeting);


    }, 3000);
}

sayHiLater();


// Function that calls for a callback

function tellMeWhenDone(callback) {

    var a = 1000;// some work
    var b = 2000;// soome work


    callback(); // the call back runs the function you give it
}


tellMeWhenDone(function () {

    alert('I am done');

});

tellMeWhenDone(function () {

    console.log('I am done');

});

//Call, Apply, Bind
