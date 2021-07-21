export class Nationality {
    nationality: string;
    name: string;

    constructor(name, nationality){
        this.name = name;
        this.nationality = nationality;
    }

    sayNationality(){
        return "My name is " + this.name + "." + "My nationality is " + this.nationality + ".";
    }

}
