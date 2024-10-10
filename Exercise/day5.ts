// 1
// sort
const inputAngka: number[] = [12, 5, 23, 18, 4, 45, 32];
function arrNum(number: number[]) {
  let arrHigh = number.sort((a, b) => b - a)[0];
  let arrLow = number.sort((a, b) => a - b)[0];
  let avg: number = 0;
  number.forEach((numbers) => {
    avg += numbers;
  });
  return `Lowest = ${arrLow}, Highest = ${arrHigh}, Average = ${
    avg / number.length
  }`;
}
console.log(arrNum(inputAngka));
// non sort
// const sama spt atas
function arrNumNoSort(number: number[]) {
  let minNum = Math.min(...number);
  let maxNum = Math.max(...number);
  let avg = number.reduce((a, b) => a + b) / number.length;
  return `Lowest = ${minNum}, Highest = ${maxNum}, Average = ${avg}`;
}
console.log(arrNumNoSort(inputAngka));

// 2
const arrWords: string[] = ["apple", "banana", "cherry", "date"];
const arrWordsHasil = (arrFunc: string[]) => {
  arrFunc.splice(arrFunc.length - 1, 0, "and");
  let tempArr: string = "";
  for (let i = 0; i <= arrFunc.length - 1; i++) {
    if (i <= arrFunc.length - 3) {
      tempArr += arrFunc[i] + ",";
    } else {
      tempArr += arrFunc[i];
    }
  }
  return tempArr;
};
console.log(arrWordsHasil(["apple", "banana", "cherry", "date"]));

// 3
const inputAngka2: number[] = [5, 1, 3, 7, 2, 6];
const angka2 = (number: number[]) => {
  let hasil2 = number.sort((a, b) => a - b)[1];
  return `second smallest number ${hasil2}`;
};

console.log(angka2(inputAngka2));

// 4
// const arrA: number[] = [1,2,3]
// const arrB: number[] = [3,2,1]
// console.log(arrA[1]);

function numOperation(arrA: number[], arrB: number[]) {
  let tempOp: number[] = [];
  for (let i = 0; i <= arrA.length - 1; i++) {
    if (i <= arrA.length - 2) {
      const tampungg= arrA[i] + arrB[i];
      tempOp.push(tampungg)
    } else {
      const tampungg2 = arrA[i] + arrB[i];
      tempOp.push(tampungg2)
    }
    console.log(tempOp);
  }
  console.log(tempOp);
  return tempOp;
}

console.log(numOperation([1, 2, 3], [3, 2, 1]));

// 5
function newElement(arrInput: (string | number)[], numberInput: any) {
  if (arrInput.includes(numberInput)) {
    arrInput[arrInput.findIndex((input) => input == numberInput)] = numberInput;
  } else {
    arrInput.push(numberInput);
  }
  return arrInput;
}
console.log(newElement([1, 2, 3, 4], 5));

// 6
function mixArr(arrAny: any[]) {
  let sum: number = 0;
  arrAny.forEach((n, i) => {
    if (typeof n === "number") {
      sum += n;
    }
  });
  console.log(sum);

  return sum;
}

console.log(mixArr(["3", 1, "string", null, false, undefined, 2]));

// 7
function maxSize(max: number, ...numbers: number[]) {
  let tempMax: number[] = [];
  numbers.slice(0, max).forEach((number) => {
    tempMax.push(number);
  });
  return tempMax;
}
console.log(maxSize(5, 5, 10, 24, 3, 6, 7, 19, 20000));
// 8
function combine2Arr(
  arrInput1: (string | number)[],
  arrInput2: (string | number)[]
) {
  arrInput1 = arrInput1.concat(arrInput2);
  return arrInput1;
}

console.log(combine2Arr([1, 2, 3], [4, 5, 6]));

// 9 belum

function unique2(input: number[]) {
    const unik: number[] = [];
    for (let i = 0; i <= input.length; i++) {
      if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
        if (unik.indexOf(input[i]) == -1) unik.push(input[i]);
      }
    }
    console.log(unik);
    return unik;
}
console.log(unique2([1, 2, 2, 2, 3, 3, 4, 5, 5]));


// 10

// function unique1(input: number[], input2: number[]) {
// let arrTemp: string = "";
// for (let i = 0; i <= input.length - 1 && i<= input2.length; i++) {
//   for (let j = 0; j <= i; j++) {
//     if (input[i] === input2[j]) {
//       arrTemp += input[i] + input2[i];
//       console.log(arrTemp);
//     }

//   }
//   console.log(arrTemp);
// }
// console.log(arrTemp);
// return arrTemp
// }
function unique1(input: number[], input2: number[]) {
  let arrTemp: string = "";
  for (let i = 0; i <= input.length - 1; i++) {
    if (input.includes(input[i]) !== input2.includes(input[i])) {
      arrTemp += input[i] + " ";
      console.log(arrTemp);
    } else if (input2.includes(input2[i]) !== input.includes(input2[i])) {
      arrTemp += input2[i] + " ";
    }
  }
  console.log(arrTemp);
  return arrTemp
    .trim()
    .split(" ")
    .map((n) => parseInt(n));
}
console.log(unique1([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// 11
const arrInputt = [1, [], undefined, "string", {}, []];
console.log(typeof arrInputt);

function checkArray(input: any[]) {
  return input.filter((input) => {
    return typeof input !== "object";
  });
}
console.log(checkArray(arrInputt));

// 12 belum jane sama kek 9
function unique3(input: number[]) {
  const unik: number[] = [];
  for (let i = 0; i <= input.length; i++) {
    if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
      unik.push(input[i]);
    }
  }
  return unik.reduce((a, b) => a + b);
}
console.log(unique3([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// 13 random belum
function game1(input: "rock" | "papper" | "scissors") {
  const choices: string[] = ["rock", "papper", "scissors"];
  const random = choices[Math.floor(Math.random() * 2.9)];

  if (input === random) return { result: "Draw", random, input};

  if (
    (input === "rock" && random === "scissors") ||
    (input === "papper" && random === "rock") ||
    (input === "scissors" && random === "papper")
  ) {
    return { result: "Win", random, input};
  } else return { result: "Lose", random, input}
}

console.log(game1("papper"));
