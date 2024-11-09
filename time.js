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