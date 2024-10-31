//Javascript you need to know  for REACT
//working with arrow functions

export const CreateName = () => {


}

//How its  done in REACT

const MyComponent = () => {

    return <div></div>

}

//Can pass functions into html elements

<button onClick={() => { console.log('I was clicked') }}>

</button>

//Conditional with operators JSX

//BOOLEAN Example
//let age = 16;
//let name = age > 10 > 'James' : 'Jack';

const Component = () => {

    return age > 10 ? <div> Pedro</div> ? <div>Jack </div>;


}

//Destructure Objects
const person = {
    name: "James",
    age: 20,
    isMarried: false,


};
//Javascript way
//const name = person.name
//const age= person.age
//const isMarried = person.isMarried


//React  destructure using key value pairs this is  used alot 
//when working with props

const { name, age, isMarried } = person;

//you can used the spread opreator when you want to change one key value pair
//speard operator is saying keeps everything in the object that starts with this.
//Any key value pair that is grab after that change
const peerson2 = { ...person, name: 'jack' }

//Speard operators also works well with arrays
//Understand the fundamentals of arrays
let schools = ['lake', 'foundations', 'times']

// .map()
// .filter()
// .reduce()
//could do a for loop but with react
schools.map((school) => {

    return <h1> {school} </h1>
})


//filters with react
let foods = ["orange", "apple", "bannana"]

foods.filter((food) => {
    return food !== "orange"
    //This will return  apple and bannana

})

//Async, Await, Fetch