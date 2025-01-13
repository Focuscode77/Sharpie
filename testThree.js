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

const simpleObjectThree = {
  Key: 'value',
  KeyTwo: 'valueTwo',
  KeyThree: 'valueThree',
};

const simpleArrayThree = ['Tim', 'Dan', 'Sam'];

const typesOfDataThree = { string: 'This is a string', number: 20 };

const mixThree = {
  FirstName: 'Nate',
  LastName: 'Kim',
  Age: 25,
  People: [
    {
      FirstName: 'Saratogas',
      LastName: 'Sparkling',
      Age: 30,
    },
    {
      FirstName: 'Peter',
      LastName: 'Sand',
      Age: 30,
    },
  ],
};

const Full = mixThree.People[0].FirstName + ' ' + mixTwo.People[0].LastName;

console.log(Full);

const simpleObjectFour = {
  Key: 'value',
  KeyTwo: 'valueTwo',
  KeyThree: 'valueThree',
};

const simpleArrayFour = ['orange', 'apple', 'lemon', 'strawberry'];

const typesOfDataFour = { string: 'This is a string', number: 30 };

const mixFour = {
  FirstName: 'James',
  LastName: 'Health',
  Age: 33,
  People: [
    {
      FirstName: 'Pinapple',
      LastName: 'Water',
      Age: 30,
    },
    {
      FirstName: 'Peter',
      LastName: 'Sand',
      Age: 30,
    },
  ],
};

//console.log(mixFour.People[0].FirstName);

const GymName = mixFour.People[0].FirstName;

console.log(GymName);

const simpleObjectFive = {
  Key: 'value',
  KeyTwo: 'valueTwo',
  KeyThree: 'valueThree',
};

const simpleArrayFive = ['orange', 'apple', 'lemon', 'strawberry'];

const typesOfDataFive = { string: 'This is a string', number: 30 };

const mixFive = {
  FirstName: 'John',
  LastName: 'Health',
  Age: 33,
  People: [
    {
      FirstName: 'Watermelon',
      LastName: 'Water',
      Age: 30,
    },
    {
      FirstName: 'Tim',
      LastName: 'Sand',
      Age: 30,
    },
  ],
};

//console.log(mixFour.People[0].FirstName);

const Gymlife = mixFour.People[0].FirstName;

console.log(GymName);
