// Method 1: Interface for defining the structure of an object
// interface Course {
//     title: string;
//     duration: number;
// }

// Method 2: Type alias for defining the structure of an object
type Course = {
    title: string
    duration: number
}

const fullStack: Course = {
    title: "Angular with Spring boot",
    duration: 5
}

console.log(fullStack)