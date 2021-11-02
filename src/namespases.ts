export {};

namespace Japanese{
    export class Person {
        constructor(public name:string) {
        }
    }
}
// class Person {
//     constructor(public name:string) {
//     }
// }
namespace Eng{
    export class Person {
        constructor(
            public firstname:string,
            public middlename:string,
            public  lastname:string) {
        }
    }
}
// class Person {
//     constructor(
//         public firstname:string,
//         public middlename:string,
//         public  lastname:string) {
//     }
// }


const me = new Japanese.Person('ham');
const engme=new Eng.Person('mikael','josef','jacson');

console.log(me.name);
console.log(engme.lastname);