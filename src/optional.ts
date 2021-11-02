export {};

let bmi = (height: number, weight: number, printble?: boolean): number => {
    const bmi:number =weight/(height*height);
    if (printble){
        console.log(bmi);
    }
    return bmi;
}
bmi(1.78,80);
// pritble=false;
// if (printble) {
//     let rrr = bmi(1.78, 86);
//     console.log(rrr);
// }