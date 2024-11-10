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


