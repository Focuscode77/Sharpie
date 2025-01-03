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

// JSON Objects

const simpleObjectTwo = {
  Key: 'value',
  KeyTwo: 'valueTwo',
  KeyThree: 'valueThree',
};

const simpleArrayTwo = ['Tim', 'Dan', 'Sam'];

const typesOfDataTwo = { string: 'This is a string', number: 20 };

const mixTwo = {
  FirstName: 'Nate',
  LastName: 'Kim',
  Age: 25,
  People: [
    {
      FirstName: 'Jim',
      LastName: 'Sandwitch',
      Age: 30,
    },
    {
      FirstName: 'Peter',
      LastName: 'Sand',
      Age: 30,
    },
  ],
};

const FullName = mixTwo.People[0].FirstName + ' ' + mixTwo.People[0].LastName;

console.log(FullName);
