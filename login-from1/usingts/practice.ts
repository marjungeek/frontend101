import { updateLanguageServiceSourceFile, updateSpread } from "typescript";

interface user{
    user: string
    pass: string
    age: number
    address: any
}

class Register implements user{
    user = "euzell";
    pass = "ghuser";
    age = 25;
    address = 139;
}

class register2 implements user{
    user = "mamo";
    pass = "ko";
    age = 24;
    address = 132;
}
console.log(register2);