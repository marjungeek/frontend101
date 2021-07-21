import { test2 } from "./test2";

export class test extends test2{
    testMethod(data:any){
        console.log(data);
        this.test2method("HELLO");
    }
}