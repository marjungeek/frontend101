import { ParentClass } from "./parentClass";
export class Hello extends ParentClass {
    constructor() {
       super();    
    } 

    doHi(){
        console.log('Hello from childclass');
    }

    doHello(): void{
        console.log("this is my class");
        this.testing();
        this.doHi();
    }


}