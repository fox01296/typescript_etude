export {};

class Person {
    // name: string;
    // protected age: number;

    constructor(public name: string, protected age: number) {
        // this.name = name;
        // this.age = age;
    }
}

const me = new Person('Ham', 12);
console.log(me);