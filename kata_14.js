// How do you swap two numbers without using a third variable?

const swapWithoutThirdVariable = () => {
    let a = 5;
    let b = 6;

    [a, b] = [b, a];

    return `a = ${a} and b = ${b}`;
}

console.log(swapWithoutThirdVariable());