var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log(this.name, this.age);
    };
    return Person;
}());
// create an object
var john = new Person("John", 25);
john.display();
