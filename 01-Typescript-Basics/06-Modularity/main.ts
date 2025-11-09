import Person, { message, welcomeUser } from "./utils";

console.log(message)

console.log(welcomeUser("John"))

const obj = new Person("Peter", 24)
obj.display()