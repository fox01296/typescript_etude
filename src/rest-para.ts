export {};

const sum = (...values: number[]): number => {
    console.log(values);
    return 100;
};

sum(1, 2, 3, 4, 5);