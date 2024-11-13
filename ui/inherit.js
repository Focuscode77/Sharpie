//Inheritance Prototypal
//Classical vs Prototypal Inheritance
// Inheritance one object gets access to the properties and methods of another object
// Classical what is currently best known
//Prototypal flexible extensible easy to understand
// Go over prototype chain
//var person = {
//  firstname: 'Default',
// lastname: 'Default',
// getFullName: function () {

//     return this.firstname + ' ' + this.lastname;

// }

//}

//var john = {

//firstname: 'John',
//   lastname: 'Doe'
//}

//Not everything is an object except for the base object on javascript 
//window

//Reflectin and Extend- an object can look at itself and change properties and
//methods
// Go over lessoons 55-57

//Building Objects
// you know its a constructor by the name being a capital letter
function PersonTwo(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname


}

// funnction constructor a nnormal function that is used to 
// contruct objects
var tim = new PersonTwo('nick', 'test');
var test = new PersonTwo('greoge', 'nick');

console.log(tim);

console.log(test);


function Food(protien, vegetables) {

    this.protien = protien;
    this.vegetables = vegetables

}

var store = new Food('Steak', 'Kale');

console.log(store.protien)
console.log(store.vegetables)

// Built in functions Construtors
// When you build coonstrutors you are actually building objects

var a = new String;

String.prototype.indexOf

// Example of building your own prototypes to the object
String.prototype.isLengthGreaterThan = function (limit) {

    return this.length > limit;
}

console.log('John'.isLengthGreaterThan(3));

//Arrays for in not recommended to use
var arr = ['Jimmy', 'Jane', 'Jim'];

for (var prop in arr) {

    console.log(prop + ':' + arr[prop]);

}

// Object Create
var food = {
    firstName: 'Default',
    lastname: "Default",
    greet: function () {

        return 'hI' + this.firstName

    }

}

var john = Object.create(food);
john.firstName = 'James';
john.lastName = 'Test'
console.log(john)

// ES6 Notes
//Odds and Ends
// Intailization
var people = [
    {
        //this is James Object
        name: 'James',
        lastName: 'Test',
        Address: ['112 Ford Street']
    },
    {
        //this is Kim Object
        name: 'James',
        lastName: 'Test',
        Address: ['113 Nest Street'],
        greet: function () {

            return 'hello';

        },

    }

]

console.log(people)

console.log(people[0].name)


//type of example

var kind = 'caring';

console.log(typeof kind)
console.log(typeof people);

// Strict Mode
// you can use strict to give extra rules on your code better to 
//use at the top of the file

var talent = [{

    name: 'Josh',
    address: ['1234 east test'],
    greeting: function (name) {

        console.log('Hey', name)


    }

},
{

    event: 'space',

    drinks: 'wine'


}

]


console.log(talent[0].greeting('kim'))