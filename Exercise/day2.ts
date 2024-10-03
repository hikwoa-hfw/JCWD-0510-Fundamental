//1
let n: number = 25;
let bilangan = n % 2;
if (bilangan === 1) {
  console.log("angka ganjil");
} else {
  console.log("angka genap");
}

//2
const num: number = 10;
let jumlahPembagi = 0;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    jumlahPembagi++;
  }
}
if (jumlahPembagi == 2) {
  console.log("bilangan prima");
} else {
  console.log("bukan bilangan prima");
}

const num2: number = 5
let isPrime: boolean = true;

if (num <=1) {
  isPrime=false;
} else {
  for(let i=2; i<num; i++) {
  if (num % 2 === 0) {
    isPrime = false;
    break;
    }
  }
}
console.log(isPrime);

//3
let sum = 0;
for (let i = 0; i <= 5; i++) {
  sum += i;
}
console.log(sum);

let sum2 = 0;
for (let i = 0; i <= 3; i++) {
  sum2 += i;
}
console.log(sum2);

//4
let sum3 = 4;
let result: number = 1
for (let i = sum3; i >= 1; i--) {
  result *= i;
  console.log(result);
  
}
console.log(result);

let sum4 = 6;
let result2: number = 1
for (let i = sum4; i > 0; i--) {
  result2 *= i;
}
console.log(result2);

//5
/* rumus fibonacci > Un-1 +Un+1 */
let deretFibo: number = 15
let value: number = 0
let value1: number = 1
let nilaiBaru = 0
for (let i = 1; i < deretFibo; i++) {
    nilaiBaru = value + value1; //=1 next 2 next 3 next 5
    value = value1; //=1 next 1 next 2
    value1 = nilaiBaru; //=1 next 2 next 3
}
console.log(nilaiBaru);

console.log(a);
