function add(num1: number, num2: number):void {
    let result = num1 + num2;
    console.log("Addition result is "+ result)
}

add(10, 20)

// Expression function
const sum = function(num1: number, num2: number): number {
    return num1 + num2;
}

console.log("Sum is "+ sum(100, 200))

// Arrow function
const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
}

// const multiply = (num1: number, num2: number): number =>  num1 * num2;

console.log("Multiplied result is "+ multiply(10, 20))