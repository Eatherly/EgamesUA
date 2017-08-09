"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by Администратор on 8/5/2017.
 */

var PI = 3.14;
//PI=3.14158


var arr = [1, 2, 3];
var arr2 = [4, 5, 6];
var newArr = [].concat(arr, arr2);

console.log(newArr);

function test(newArr) {
    console.log(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
test(newArr); //?
test.apply(undefined, _toConsumableArray(newArr));

var name = "Andrey";
var age = 30;

console.log(`My name is ${name} I am ${age}years old`);


function sum(a, b) {
    console.log(`${parseInt(a) + parseInt(b)}`);
}
sum("1", "22");

//console.log(toUpp 'hello ${name)');

function toUpp(literals, val) {
    return literals[0].toUpperCase() + val.toUpperCase();
}

function fullName(name, lastName) {
    console.log('Your full name ${name} ${lastname}');
}
fullName('A', 'S');
fullName();

function sum(a) {
    Array.prototype.forEach.call(arguments, function (value) {
        console.log(value);
    });
}
sum(1, 2, 3, 4, 5, 6, 7);

function sum2() {
    for (var _len = arguments.length, array = Array(_len), _key = 0; _key < _len; _key++) {
        array[_key] = arguments[_key];
    }

    array.forEach(function (value) {
        console.log(value);
    });
}
sum2(1, 2, 3, 4, 5, 6, 7);

var cars = ['audi', 'bmw', 'volvo'];

for (var car in cars) {
    console.log(car);
    console.log(cars[car]);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = cars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var newcar = _step.value;

        console.log(newcar);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

cars.forEach(function (item, i, arr) {
    console.log(i + ": " + item + " (array:" + arr + ")");
});
var volvo = cars.filter(function (car) {
    return car == 'volvo';
});
console.log(volvo);

var carLengths = cars.map(function (car2) {
    return car2.length;
});
console.log(carLengths);

var arr3 = [1, -1, 2, -2, 3];

function isPositive(number) {
    return number > 0;
}

console.log(arr3.every(isPositive));
console.log(arr3.some(isPositive));

var context = { foo: "bar" };

function returnFoo() {
    return this.foo;
}

var bound = returnFoo.bind(context);
console.log(bound());

var name3 = "A",
    lastNme = "S",
    age3 = 31;

var user = {
    name: name3,
    lastname: lastNme,
    age: age3,
    hello: function hello() {
        console.log('hellp');
    }
};
console.log(user.lastname);

/*let newUser = {
    name,
    lastName,
    age,
    hello(){
        console.log('heloo2');
    }
}*/

/*let animal = {
    walk(){
        console.log("I'm walking");
    }
};

let rabbit = {
    _proto_:animal,
    walk() {
        console.log(super.walk);
        super.walk();
    }
};


rabbit.walk();*/
var Person = {
    firstname: "Andrey",
    lastName: "S",
    birDate: new Date("06-06-1984"),
    gender: "male",
    getAge: function getAge() {
        var today = new Date();
        var diff = today.getTime() - this.birDate.getTime();
        var year = 1000 * 60 * 60 * 24 * 365;
        return Math.floor(diff / year);
    },
    toString: function toString() {
        return this.firstName + " " + this.lastName + " " + this.getAge() + " " + this.gender;
    }
};

var User = Object.create(Person);
User.firstName = "Bob", User.lastName = "S", User.birDate = new Date('06-06-1994');
console.log(User.toString());
console.log(User.__proto__);

var User2 = Object.create(Person);
User.firstName = "Serg", User.lastName = "C", User.birDate = new Date('06-06-1964');
console.log(User._proto_ === Person);

var newUser = function () {
    function newUser(firstName, lastName, birtDate, gender) {
        _classCallCheck(this, newUser);

        this.firstName = firstName;
        this.LastName = lastName;
        this.birtDate = new Date(birtDate);
        this.gender = gender;
    }

    _createClass(newUser, [{
        key: "getAge",
        value: function getAge() {
            var today = new Date();
            var diff = today.getTime() - this.birtDate.getTime();
        }
    }]);

    return newUser;
}();