import { animalClass } from "./animalClass";

export class catClass extends animalClass {
  constructor() {
    super();
  }

  catWalking(){
    return "This cat is walking";
  }
}
