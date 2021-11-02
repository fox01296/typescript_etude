export {};

class Visa {
    constructor(public readonly owner:string) {}
}


let myvisa =new Visa('ham');
console.log(myvisa.owner);
