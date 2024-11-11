// Greeter - Requirements
// When given a first name, last name, and optional language,
// it generates formal and informal greetings
// Support  English and Spanish Languages
// Reuseabe library/frameworks
// Easy to type g$()Structure
// Should support JQuery

// Safe Code Go over lesson 75

(function (global) {

    var Greeter = function (firstName, lastName, language) {

        return this.firstName + '' + this.lastName + '' + this.language;

    }

    var greeterInit = new Greeter('James', 'Test', 'en');

    console.log(greeterInit('James', 'Test', 'en'))



}(window))
