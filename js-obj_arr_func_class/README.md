## Objects
Object is a non-primitive data type in JavaScript. It is like any other variable, the only difference is that an object holds multiple values in terms of properties and methods. Properties can hold values of primitive data types and methods are functions.

In JavaScript, an object can be created in two ways:
1. Object literal - using { } brackets

```
var objectName = { key1: value1, key2: value2,... keyN: valueN};
```

2. Object constructor - using the `new` keyword

```
var objectName = new Object();
```

## Class
JavaScript Classes are templates for JavaScript Objects.

Use the keyword class to create a class.

Always add a constructor() method.
<br/>
<br/>

### Inheritance
Inheritance is an important concept in object oriented programming. 

To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

```
class MyClass() {
    constructor() {
        ...        
    }

    abcMethod() {
        return "Hello World!";
    }
}

class MyClass2 extends MyClass {
    constructor() {
        super();
        ...
    }

    xyzMethod() {
        return this.abcMethod() + " Foo Bar";
    }
}
```


### Getters and Setters
Classes also allows you to use getters and setters.

To add getters and setters in the class, use the get and set keywords.

```
class MyClass() {
    constructor(arg) {
        this.name = arg;
    }

    get myname() {
        return this.name;
    }

    set myname(x) {
        this.name = x;
    }
}
```