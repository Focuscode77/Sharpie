const Greeting = (hello) => {
  if (hello == 'hello') {
    console.log('Good Moring');
  } else {
    console.log('Please greet me');
  }
};

Greeting('hello');

// Understand JSON Objects

const simpleObject = { key: 'valueOne', key2: 'valueTwo', key3: 'valueThree' };

const simpleArray = ['One', 'Two', 'Three'];

const arrayOfObjects = [
  { key: 'valueOne' },
  { key2: 'valueTwo' },
  { key3: 'valueThree' },
];

const typesOfData = { string: 'this is a string', number: 5 };

const mix = {
  FirstName: 'Arthur',
  LastName: 'Test',
  Age: 18,
  Student: [
    {
      FirstName: 'Dan',
      LastName: 'Jim',
    },
    {
      FirstName: 'Sam',
      LastName: 'Time',
    },
  ],
};

console.log(simpleObject.key);
console.log(simpleArray[0]);
console.log(arrayOfObjects[0]);
console.log(typesOfData.number);
console.log(mix.Age);
console.log(mix.Student[0].FirstName);

const newStudent = mix.Student[0].FirstName;

console.log(newStudent);
