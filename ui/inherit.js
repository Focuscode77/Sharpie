//Inheritance Prototypal
//Classical vs Prototypal Inheritance
// Inheritance one object gets access to the properties and methods of another object
// Classical what is currently best known
//Prototypal flexible extensible easy to understand
// Go over prototype chain
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function () {

        return this.firstname + ' ' + this.lastname;

    }

}

var john = {

    firstname: 'John',
    lastname: 'Doe'
}

//Not everything is an object except for the base object on javascript 
//window

//Reflectin and Extend- an object can look at itself and change properties and
//methods
// Go over lessoons 55-57

//Building Objects

function Build() {

    this.firstname = 'John';
    this.lastname = 'Doe'


}
var tim = new Build();

console.log(tim);

