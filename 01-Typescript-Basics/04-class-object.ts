class Person{
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

// create an object
const john = new Person("John", 25)
john.display()