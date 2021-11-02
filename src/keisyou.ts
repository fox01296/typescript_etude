export {};

class Animal {
    constructor(public name: string) {
    }

    run(): string {
        return "I can run";
    }
}

class Lion extends Animal {
    public speed:number;
    constructor(name: string,speed: number) {
        super(name);

        this.speed = speed;
    }

    run(): string {
        // const parentmessege = super.run();
        // console.log({parentmessege});
        return `${super.run()} ${this.speed}km`;
    }
}

// let animal = new Animal();
// console.log(animal.run());
//
// let lion = new  Lion();
// console.log(lion.run());

console.log(new Animal('mik').run());
console.log(new Lion('lion',80).run());