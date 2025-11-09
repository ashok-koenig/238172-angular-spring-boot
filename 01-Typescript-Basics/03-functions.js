function add(num1, num2) {
    var result = num1 + num2;
    console.log("Addition result is " + result);
}
add(10, 20);
// Expression function
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log("Sum is " + sum(100, 200));
// Arrow function
var multiply = function (num1, num2) {
    return num1 * num2;
};
// const multiply = (num1: number, num2: number): number =>  num1 * num2;
console.log("Multiplied result is " + multiply(10, 20));
