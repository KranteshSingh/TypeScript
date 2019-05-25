let multiply = function (x, y) {
    return x * y
}

let multiplyTs = function (x: number, y: number): number {
    return x * y
}

console.log(multiply(2, 3))

console.log(multiplyTs(5, 8))

// Arrow Functions

let divide = (x, y) => {
    return x / y;
}

let divideTs = (x: number, y: number): number => {
    return x / y;
}

// Only Function Definitions

let divideTs3: (x: number, y: number) => number;