import { Nationality } from "./class2";

export class Person extends Nationality {
    name: string;
    age: number;

    constructor(name: string, age: number, nationality: string){
        super(name, nationality);
        this.name = name;
        this.age = age;
    }

    callPerson(){
        return "I am " + this.name + ", and I am " + this.age + " years old.";
    }

}
