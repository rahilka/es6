//destructuring
var foo = {
  bar: 1,
  baz: 2
};

var { bar } = foo;
//the same as:
//var bar = foo.bar; var baz = foo.baz;

console.log('bar: ', bar);
// console.log('baz: ', baz);


var tenses = ['me', 'you', 'he'];
var [ firstPerson, secondPerson ] = tenses;

console.log('firstPerson', firstPerson);
console.log('secondPerson', secondPerson);

//promises

// Promise.all([promise1, promise2]).then(function([results1, results2]) {
//   var [ results1 ] = results;
// });

var foo = 2;

var obj = {
  bar: 1,
  foo,  //the same as foo:2
}

console.log('obj: ', obj);


var name= 'rahilka';
var age = 24;

// some.method({ name, age });

var name = 'rahilka'
var obj = {
  ['name' + name]: 'some value'
}
console.log(obj);

function calcBmi({weight: w, height: h, max = 25, callback}) {
  var bmi = w / Math.pow(h, 2);
  console.log(bmi);
  if(bmi > max) {
    console.log("You're overweight");
  }
  if(callback) {
    callback(bmi);
  }
}

calcBmi({ w:50, h:150, max:20 });
calcBmi({ h:150, w:150, callback: function () {
  console.log('callback');
}});


//template strings

var name = 'Rahilka';
var thing = 'party';
var greet = 'Hi, my name is \n' +
              name + ' and I like to ' + thing + '.';
console.log('greet: ', greet);

//es6:
var greet = `Hi, my name is
${name} and
I like to
${thing}!!!!!!!!`
console.log(greet);

//dollar sign, $, means look for that variable and pop the variable in
