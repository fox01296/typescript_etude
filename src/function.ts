export {};

// function bmi(height: number, weight: number): number {
//     return weight / (height * height);
// }
//
// console.log(bmi(1.78, 80));

let bmi = function (height:number,weight:number):number{
    return weight/(height*height);
};

console.log(bmi(1.78,80));