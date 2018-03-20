function Person () { }
Person.prototype = {
    func: function () {
        console.log( '11111' );
    }
};
var p = new Person();
Person.prototype = {
    func: function () {
        console.log( '22222' );
    }
};
var p1 = new Person();

p.func();

p1.func();



// function Person() {}

// Person.prototype.name = '张三';

// var p1 = new Person();

// var p2 = new Person();

// var a = {"b":111};

// p1.name = '李四';
// p2.__proto__.name = "2222";

// console.log(p1.__proto__ == p1.constructor.prototype);
// console.log(p1.__proto__ == Person.prototype);
