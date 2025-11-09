export const message = "Welcome message"

export function welcomeUser(name:string): string{
    return "Welcome "+ name;
}

export default class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    display(): void{
        console.log(this.name, this.age)
    }
}