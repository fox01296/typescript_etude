export {};

const kansuu = (): number => 43;

let numberUnknown: unknown = kansuu();

if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
}