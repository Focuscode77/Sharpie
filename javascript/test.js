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
  if (name === 'fire') {
    alert('I am' + ' ' + name);
  } else {
    alert('Try again');
  }
};

friday('fire');

const sunday = (name) => {
  if (name === 'pure') {
    alert('I am' + ' ' + name);
  } else {
    alert('Try again');
  }
};

sunday('pure');

const MondayTwo = (name) => {
  if (name === 'earth') {
    alert('I am' + ' ' + name);
  } else {
    alert('Consistency');
  }
};

MondayTwo('earth');

const gum = ['Trident', 'Winter fresh', 'Juicy Fruit', 'Altoids'];

//console.log(gum[0]);

const fresh = (name) => {
  for (i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
};

fresh(gum);

const holiday = ['apple juice', 'water', 'Tea', 'soda'];

//console.log(gum[0]);

const comp = (name) => {
  for (i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
};

fresh(holiday);

const christmas = ['balls', 'light', 'ginger bread', 'tree'];

const tree = (name) => {
  for (i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
};

tree(christmas);

const Satarday = ['balls', 'light', 'ginger bread', 'tree'];

const leaf = (name) => {
  for (i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
};

leaf(Satarday);

const Sunday = ['balls', 'light', 'ginger bread', 'tree'];

const motorla = (name) => {
  for (i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
};
motorla(Sunday);
