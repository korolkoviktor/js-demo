//Create a car object, add a color property to it with the value equals 'black'
let car = {};
car.color = 'black';

//Change the color property of the car object to 'green'
car.color = 'green'

//Add the power property to the car object, which is a function and displays the engine power to the console
car['power'] = enginePower();
function enginePower() {
  return 100;
}
console.log('Engine power = '+car.power);

/*Pears and apples are accepted to the warehouse, write a function that returns the result 
of adding the number of accepted pears and apples*/
let warehouse = {
  pears: 18,
  apples: 14
};
function sumFruits(cart) {
  let sum = 0;
  for (let i of Object.values(cart)) {
    sum += i;
  }
  return console.log('Sum of pears and apples = '+ sum);
};
sumFruits(warehouse);

/*Your name is saved in the payment terminal, write a function to define the name in the terminal 
(if you entered your name, then hello + name, if not, then there is no such name)*/
let namesarrow = ['John', 'Alex', 'Trevis'];
function defineLogin(login) {
  // let login = prompt('Enter your name');
  if (login == '') {
    console.log('Yor need to enter yor name!');
    return;
  }
  for (let key of namesarrow) {
    if (key == login) {
      console.log('Hello ' + login + '!');
      return;
    }
  }
  console.log('There is no such name.');
}
console.log('The function which define the name:')
defineLogin(); // empty name value
defineLogin('Alex'); //enter a registered name
defineLogin('Devid');// enter unregistered name

//Write a function for calculating the type of argument and type output to the console
function showTypeofValue(arg) {
  return console.log('Type of argument is ' + typeof (arg));
}
showTypeofValue(NaN)

//Write a function that determines whether a number is prime or not
function deternPrimeNumber(num) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log('The number ' + num + ' is not prime');
      return;
    }
    return console.log('The number ' + num + ' is prime number');
  }
}
deternPrimeNumber(16);
