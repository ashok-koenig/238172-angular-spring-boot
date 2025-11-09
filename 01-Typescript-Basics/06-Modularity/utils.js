"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
exports.welcomeUser = welcomeUser;
exports.message = "Welcome message";
function welcomeUser(name) {
    return "Welcome " + name;
}
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
exports.default = Person;
