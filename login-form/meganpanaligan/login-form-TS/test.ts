class Test {
  name: string;

  constructor(message: string) {
      this.name = message;
  }

  fullname() {
      return "Megan "+ this.name;
  }
}
let fullname: Test;
fullname = new Test("Panaligan");
console.log(fullname.fullname());


class Fruits {
  prutas: string;

  constructor(name: string) {
    this.prutas = name;
  }
  veggies(){
    return "Mango and " + this.prutas;
  }
}
let veggies: Fruits;
veggies = new Fruits("Broccoli");
console.log(veggies.veggies());


class Megan {
  greeting: string;

  constructor(greet: string){
    this.greeting = greet;
  }
  testing(){
    return "Hello " + this.greeting;
  }
}
let testing: Megan;
testing = new Megan("hello again!");
console.log(testing.testing());