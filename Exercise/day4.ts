// exercise example
const tinggi2: number = 5;
let bintang: string = "";
let temp: number = 1;
function segitiga1(input: number) {
  let arrSegitiga1: string[] = [];
  for (let i = 1; i <= input; i++) {
    bintang += temp + " ";
    temp++;
    console.log(bintang);
  }
  arrSegitiga1 = bintang.split("\n");
  arrSegitiga1 = arrSegitiga1.map((array) => array.trim());
  arrSegitiga1.pop();
  return arrSegitiga1;
}
// console.log(segitiga1(5));
segitiga1(5).forEach((n) => {
  console.log(n);
});

// example mas daniel
function segitiga2(heigth: number) {
  for (let i = 1; i <= heigth; i++) {
    let row: string = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
segitiga2(5);

// 1
// const tinggi: number = 4;
// let tampungan: string =""
// for
const tinggi: number = 4;
let count: number = 1;
function segitiga(input: number) {
  let tampungan: string = "";
  let arrSegitiga: string[] = [];
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
      if (count < 10) {
        tampungan += "0" + count + " "; // tampungan = tampungan + "0" + count
      } else {
        tampungan += count + " ";
      }
      count++;
    }
    tampungan += "\n";
    console.log(tampungan.trim());
  }
  arrSegitiga = tampungan.split("\n");
  arrSegitiga = arrSegitiga.map((array) => array.trim());
  arrSegitiga.pop();
  return arrSegitiga;
}
// console.log(segitiga(4))

segitiga(4).forEach((n) => {
  console.log(n);
});

// cara mas daniel
function segitiga3(height: number) {
  let currentNumber: number = 1;
  let result13: string = "";
  for (let i = 1; i <= height; i++) {
    let row: string = "";
    for (let j = 1; j <= i; j++) {
      row += (currentNumber < 10 ? "0" : "") + currentNumber + " ";
      currentNumber++;
    }
    console.log(row);

    result13 += row + "\n";
  }
  return result13;
}
console.log(segitiga3(5));

// 2
//  n = input > 15
// fizz /3 == 0
// buzz / 5 == 0
// fizzbuzz == /3 && ==/5

const fizzBuzzs2 = (fizzbuzz: number) => {
  let variableReturn: (string | number)[] = [];
  for (let i = 1; i <= fizzbuzz; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      variableReturn.push("FizzBuzz");
    } else if (i % 3 == 0) {
      variableReturn.push("Fizz");
    } else if (i % 5 == 0) {
      variableReturn.push("Buzz");
    } else {
      variableReturn.push(i);
    }
    console.log(variableReturn);
  }
  return variableReturn;
};

fizzBuzzs2(15);
console.log(fizzBuzzs2(15));

// const fizzBuzzs2 = (nPut: number[]) => {
//   for (let i = 1; i <= nPut.length; i++) {
//     const numInput = nPut[i]
//     if (numInput % 3 == 0 || numInput % 5 == 0) {
//       if (numInput % 3 == 0 && numInput % 5 == 0) {
//         console.log("FizzBuzz");
//       } else if (numInput % 3 == 0) {
//         console.log("Fizz");
//       } else if (numInput % 5 == 0) {
//         console.log("Buzz");
//       }
//     } else {
//       console.log(numInput);
//     }
//   }
// };
// ;

// 3 BMI
const inputWeight: number = 100;
const inputHeight: number = 170;

function BMI(inputWeight: number, inputHeight: number) {
  let hasil: string = " ";
  let inputBmi = (inputWeight / (inputHeight / 100)) * (inputHeight / 100);

  if (inputBmi < 18.5) {
    hasil = "Less weight";
  } else if (inputBmi >= 18.5 && inputBmi <= 24.9) {
    hasil = "Ideal";
  } else if (inputBmi >= 25 && inputBmi <= 29.9) {
    hasil = "overweight";
  } else if (inputBmi >= 30 && inputBmi <= 39.9) {
    hasil = "Very Overweight";
  } else hasil = "obesity";
  console.log(inputBmi);

  return hasil;
}
console.log(BMI(60, 170));
// 4

const odds: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 16,
];
const result12 = odds.filter((odd) => {
  const modulus = odd % 2;
  if (modulus == 0) return odd;
});
// const result12 = odds.filter((odd)=> odd%2? re )
console.log(result12);

function removeOdd(number: number[]) {
  return number.filter((number) => number % 2 === 0);
}
console.log(removeOdd(odds));

// 5
let input3: string = "Hello World hibban";
let hasilArr: string[] = input3.split(" ").filter((input3) => input3);
console.log(hasilArr);

const splitString = (string: string) => {
  const kata: string[] = [];
  let tempStr: string = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      kata.push(tempStr);
      tempStr = "";
      continue;
    }
    tempStr += string[i];
  }
  kata.push(tempStr)
  console.log(kata);
  
};
splitString("Hello World Hibban")
