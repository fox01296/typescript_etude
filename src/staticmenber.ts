export {};

class Me{
    static isProgrammer:boolean=true;
    static firstname:string = 'Atsushi';
    static lastname: string ='Ishida';

    static work() {
        return `Hey guys! This is ${this.firstname}! Are you interested in ts?`;
    }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());