// Functional Programming
// We put work into functions to create less work
// Go over lesson 52
// Because of this  you can use first class functions to your advantage

function mapForEach(arr, fn) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {

        newArr.push(
            fn(arr[i])
        );
    };
    return newArr;

}
var arr1 = [1, 2, 3];

console.log(arr1);


var arr2 = mapForEach(arr1, function (item) {
    return item * 2;


});

console.log(arr2);

var arr3 = mapForEach(arr1, function (item) {
    return item > 2;


});

console.log(arr3);



//New Example

var checkPastLimit = function (limiter, item) {

    return item > limiter;
};

//var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
//console.log(arr4);
// Start to think about hoow i can give my functions functions and retun my functions
//functions
// Make sure your functional are not changing data
var onlyLimit = function (limiter) {

    return function (limiter, item) {

        return item > limiter;

    }.bind(this, limiter);

};

var arr5 = mapForEach(arr1, onlyLimit(2));
console.log(arr5);
