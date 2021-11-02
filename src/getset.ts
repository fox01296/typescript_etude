export {};

class MyNumberCard {
    private _owner: string;
    private _secretnumber: number;

    constructor(owner: string, secretnumber: number) {
        this._owner = owner;
        this._secretnumber = secretnumber;
    }

    get owner() {
        return this._owner;
    }

    set secretnumber(secretnumber: number) {
        this._secretnumber = secretnumber;
    }

    debugPrint() {
        return `secretnumber: ${this._secretnumber}`;
    }
}

let card = new MyNumberCard('Ham', 123);
// card.owner='ham';
console.log(card.owner);
console.log(card.debugPrint());
card.secretnumber=12345;
console.log(card.debugPrint());
