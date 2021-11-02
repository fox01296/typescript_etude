export {};

type Pitcher1 = {
    throwingSpeed: number;
}

type Butter1 = {
    battingA: number;
}

const Daimajin: Pitcher1 = {
    throwingSpeed: 154
};

const Otiai: Butter1 = {
    battingA: 0.361
};

type TwoWay = Pitcher1 & Butter1;

const Ootani: TwoWay = {
    throwingSpeed: 160,
    battingA: 0.333
};

