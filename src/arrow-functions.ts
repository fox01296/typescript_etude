export {};

let bmi = (height: number, weight: number): number =>
    weight / (height * height);
;

console.log(bmi(1.78, 86));