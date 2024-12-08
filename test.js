console.log('I am in the console');

function love(hello) {
  if ('test' === hello) {
    console.log('variable  is  a  string');
  } else {
    console.log('try again');
  }
}

const eagles = {
  name: 'terrance',
  lastName: 'Test',
  greet: () => {
    var fullname = this.name + '' + this.lastName;

    console.log(fullname);
  },
};

console.log(eagles.name);
console.log(eagles.lastName);

const time = {
  name: 'Test',
  food: 'burger',
};

console.log(time.name);

const food = {
  eat: 'shrimp',
  overn: true,
};

console.log(food.eat);

const drink = {
  soda: 'sprite',

  juice: 'cranberry',
};

console.log(drink.juice);

const mail = {
  time: 'new',

  drink: 'water',
};

console.log(mail.time);

const monday = (time) => {
  if (time === 'time') {
    console.log('I am on the right track');
  } else {
    console.log('Keep practicing');
  }
};

monday('James');
monday('time');

const tuesday = (name) => {
  if (name === 'James') {
    alert('Hello' + ' ' + name);
  } else {
    alert('Try again');
  }
};

tuesday('James');

const wensday = (name) => {
  if (name === 'water') {
    alert('I am' + ' ' + name);
  } else {
    alert('Try again');
  }
};

wensday('water');

const friday = (name) => {
  if (name === 'earth') {
    alert('I am' + ' ' + name);
  } else {
    alert('Try again');
  }
};

friday('earth');

const sunday = (name) => {
  if (name === 'earth') {
    alert('I am' + ' ' + name);
  } else {
    alert('Try again');
  }
};

friday('coming');
