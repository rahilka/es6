"use strict";

// import myModule from 'myModule';


//block scoping

var a = 1;  //let is the new var
//
// var test = function() {
//   var b=1;
// }
// console.log(b); //is not defined

if(true) {
  let b = 2;
  console.log(a);
}

// console.log(b); //not defined error


const foo = 1;

if(true) {
  const bar = 4
  // bar = 2;
  console.log(foo);
}

// console.log(bar);

//use let only if you expect the value to change at some point
// otherwise use const

const bar = { a:1 };
console.log(bar.a);
bar.a = 555;
console.log(bar.a);

//CLASSES:

function Parent() {
  //constructor
}

Parent.prototype.kids = function() {
  console.log('Kids');
};

var parent = new Parent();
console.log(parent.kids());


class Mother{

  // age = 34;

  constructor() {

  }

  static foo() {
      //method 1
      console.log('Foo');
  }

  bar() {
    // method 2
    console.log('Bar');
  }
}

var parent = new Mother();
// parent.foo();  //not a function
Mother.foo();
// parent.age;
// console.log('parent: ', parent);

class Child extends Mother {
  constructor() {
    super()
  }

  baz() {
    console.log('BAZZZ');
  }
}

var child = new Child();
child.baz();
child.bar();
// child.foo();  //not a function, cos foo() is static
Child.foo();


//arrow functions

var arrFunc = function(a, b) {
  return a + b;
}

console.log(arrFunc(2,5));


var arrFuncArrow = (a,b) => (a + b); // without return keyworkd only for one line functions

console.log(arrFuncArrow(4,5));

console.log([0,1,2].map(val => ++val));

//arrow function automatically bind 'this'

var module = {
  age: 30,
  foo: function() {
    setTimeout(() => {
      console.log(this.age);
    }, 1000);
  }
};

module.foo();


//modules and require

// import myModule from 'myModule';
//
// var myModule = require('myModule');
// myModule();

//generator function
// async function() {
//
// }
