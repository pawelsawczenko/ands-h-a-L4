// -- H / A - L4 - 1
//

class Calculator {
  #x;
  #y;

  constructor(x, y) {
    this.isValidNum(x);
    this.isValidNum(y);

    this.#x = x;
    this.#y = y;
    // --- other solution without arrow func
    // this.logSum = this.logSum.bind(this)
  }

  isValidNum(value) {
    if (typeof value !== "number")
      throw new Error("Error! Variable is not valid. NaN");

    if (value === Infinity)
      throw new Error("Error! Infinity is not valid variable type.");
  }

  setX(value) {
    this.isValidNum(value);
    this.#x = value;
  }

  setY(value) {
    this.isValidNum(value);
    this.#y = value;
  }

  // --- other solution without arrow func
  // logSum() {
  //   return this.#x + this.#y;
  // }

  logSum = () => {
    return this.#x + this.#y;
  };

  logMul = () => {
    return this.#x * this.#y;
  };

  logSub = () => {
    return this.#x - this.#y;
  };

  logDiv = () => {
    if (this.#y === 0) throw new Error("Error! Divided by 0");
    return this.#x / this.#y;
  };
}

// for testing
const calc = new Calculator(10, 5);
const logSumRef = calc.logSum;

console.log(calc);

console.log(`cacl.logSum() -> ${calc.logSum()}`);
console.log(`logSumRef()   -> ${logSumRef()}`);

console.log(`cacl.logMul() -> ${calc.logMul()}`);
console.log(`cacl.logSub() -> ${calc.logSub()}`);
console.log(`cacl.logDiv() -> ${calc.logDiv()}`);

calc.setX(5);

console.log(`cacl.logSum() after setX(5) -> ${calc.logSum()}`);
console.log(`logSumRef() after setX(5)   -> ${logSumRef()}`);

calc.setY(0);

console.log(`cacl.logDiv() after div by 0 -> ${calc.logDiv()}`);
