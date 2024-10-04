// 1
const inputNum: number = 9;
let angkaKali: number = 1;

while (true) {
  console.log(`${inputNum} x ${angkaKali} = ${angkaKali * inputNum}`);
  if (angkaKali == 10) break;
  angkaKali++;
}

//2 palindrome
const kata: string = "madam";
const kataKedua: string = kata.split("").reverse().join("");
console.log(kataKedua);
console.log(kata.split(""));

if (kata == kataKedua) {
  console.log("Kata palindrome");
} else {
  console.log("bukan palindrome");
}

const kata01: string = "madam";
let reverse01: string = "";
for (let i = kata01.length - 1; i >= 0; i--) {
  reverse01 += kata01[i];
}
console.log(kata01 === reverse01 ? "palindrome" : "bukan palindrome");

//3
let jarakCm: number = 100_000;
//jarak dalam cm
let konversi = jarakCm / 100_000;
console.log(`Hasil konversi yaitu ${konversi} Km`);

//4 currency IDR >> Rp 1.000,00
let nominal: number = 1_000;
console.log(`Rp ${nominal.toLocaleString()},00`);

// const hasil: Intl.NumberFormat = new Intl.NumberFormat("id-ID", {
//   style: "currency",
//   currency: "IDR",
//   maximumFractionDigits: 2,
// }).format(nominal)

// console.log(hasil01);


//5
let string2: string = "Hello world";
let search: string = "ell";
console.log(string2.replace(search, ""));

//6
const string1: string = "hello world rawrrrrrr ooiii";
const words: string[] = string1.trim().split(" ");
console.log(words);
// array of string >> string [] // arraay of number >> number[]
for (let i = 0; i < words.length; i++) {
  console.log((words[i] = words[i][0].toUpperCase() + words[i].slice(1)));
}
console.log(words.join(" "));

//7
// worrds[i] === words[i].uppercase
// words[1] ===
const kata1: string = "WahYuDi ";
let kataBaru = kata1.split("");
console.log(kataBaru);

for (let i = 0; i < kataBaru.length; i++) {
  if (kataBaru[i] === kataBaru[i].toUpperCase()) {
    kataBaru[i] = kataBaru[i].toLocaleLowerCase();
    console.log(kataBaru[i]);
  } else {
    kataBaru[i] = kataBaru[i].toUpperCase();
    console.log(kataBaru[i]);
  }
  console.log(kataBaru.join(""));
}
console.log(kataBaru.join(""));

// 8
const number1: number = 99;
const number2: number = 27;
if (number1 > number2) {
  console.log(`${number1}`);
} else {
  console.log(`${number2}`);
}

//9
// a<b<c
// const A: number = 42
// const B: number = 27
// const C: number = 18
// if (A > B) {
//     let E = `${B}, ${A}`
// } else if (A < B) {
//     let D = `${A}, ${B}`
// } else if (A < C) {
//     let F = `${A}, ${C}`
// } else if (B < C) {
//     let G = `${B}, ${c}`
// } else {
//     let H = `${C}, ${B}`
// };
// console.log(`${E}`);

const num1: number = 42;
const num4: number = 27;
const num3: number = 18;

let maxNum: number = Math.max(num1, num4, num3);
let minNum: number = Math.min(num1, num4, num3);
let midNum: number = num1 + num4 + num3 - (maxNum + minNum);

console.log(`${minNum}, ${midNum}, ${maxNum}`);

//10
const word1 = undefined;

if (typeof word1 === "string") {
  console.log("1");
} else if (typeof word1 === "number") {
  console.log("2");
} else {
  console.log("3");
}

//11
const word: string = "An apple a day keeps the doctor away";
console.log(word.toLowerCase().replaceAll("a", "*"));
