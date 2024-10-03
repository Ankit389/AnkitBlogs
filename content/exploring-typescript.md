---
title: Exploring TypeScript
description: This is JavaScript tutorial and this is for learning JavaScript
slug: exploring-typescript 
date: 01/01/1978
author: Brian Kernighan Dennis Ritchie
image: /type.png    
---


 ### Introduction to TypeScript
TypeScript is a superset of JavaScript that adds static types. It helps in catching errors during development and improving code quality through type-checking.

 ### Why Learn TypeScript?
Enhanced JavaScript: TypeScript builds on JavaScript, adding powerful features like static typing.
Early Error Detection: Catch errors at compile-time rather than runtime.
Improved Tooling: Get better tooling support with features like autocompletion and refactoring.
Setting Up TypeScript
To get started with TypeScript, you'll need to set up a development environment. Here are the steps:

 ### Install TypeScript: You can install TypeScript globally using npm:

bash
Copy code
npm install -g typescript
Initialize a TypeScript Project: Create a tsconfig.json file to configure TypeScript:


tsc --init
Verify Installation: Ensure TypeScript is installed correctly by running:


tsc --version
TypeScript Basics
Now that your environment is set up, let’s start with the basics. In this section, we'll cover:

Basic Types: Learn about TypeScript’s basic data types.

Functions: Understand how to write functions with types.

Interfaces: Explore how to define and use interfaces.
Basic Types
typescript
 
 ## basicTypes.ts
 ```c showLineNumbers {1-3} /printf/
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
  ## Functions
console.log(`Name: ${name}, Age: ${age}, Active: ${isActive}`);
```

Functions
typescript
Copy code
// functions.ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}
 

 ```c showLineNumbers {1-3} /printf/
let greeting: string = greet("Alice");
console.log(greeting);
Interfaces
typescript
// interfaces.ts
interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "John",
    age: 30
};
```

console.log(`Name: ${person.name}, Age: ${person.age}`);
Intermediate TypeScript
Once you are familiar with the basics, it's time to explore more advanced features:

Classes: Learn about object-oriented programming in TypeScript.
Generics: Understand how to create reusable components with generics.
Modules: Explore how to organize code using modules.
Classes
typescript
Copy code
// classes.ts
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

let cat = new Animal("Whiskers");
console.log(cat.getName());
Generics
typescript
```c showLineNumbers {1-3} /printf/
// generics.ts
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello World");
console.log(output);
```
Modules
moduleA.ts:

typescript
```c showLineNumbers {1-3} /printf/
// moduleA.ts
export function greet(name: string): string {
    return `Hello, ${name}`;
}
moduleB.ts:

typescript

// moduleB.ts
import { greet } from './moduleA';

console.log(greet('Alice'));
Compile both files:



tsc moduleA.ts moduleB.ts
Run moduleB.js:

node moduleB.js
 ### Advanced TypeScript
Now that you are comfortable with intermediate topics, let’s move on to some advanced TypeScript concepts:

Advanced Types: Explore union types, intersection types, and more.
Decorators: Learn how to use decorators to add metadata to classes.

 ### Namespaces: 

Understand how to use namespaces to organize code.
Advanced Types
typescript

### 
// advancedTypes.ts
type ID = number | string;

function logId(id: ID): void {
    console.log(`ID: ${id}`);
}

logId(123);
logId("abc");


 ### Decorators


 ### decorators.ts




```c showLineNumbers {1-3} /printf/

function log(target: any, propertyName: string) {
    console.log(`Property ${propertyName} was accessed.`);
}

class Person {
    @log
    name: string = "John";
}

let person = new Person();
console.log(person.name);

```



 ### namespaces.ts
```c showLineNumbers {1-3} /printf/
namespace Utility {
    export function log(message: string): void {
        console.log(message);
    }
}

Utility.log("Hello from namespace!");

namespace Utility {
    export function log(message: string): void {
        console.log(message);
    }
    
Utility.log("Hello from namespace!");
}
```

Conclusion
Congratulations on completing this TypeScript tutorial! You’ve covered everything from the basics to advanced topics. Keep practicing and exploring the vast capabilities of TypeScript to enhance your programming skills.

Happy coding!

