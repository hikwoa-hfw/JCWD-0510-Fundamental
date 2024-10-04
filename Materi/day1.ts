// js
// const message = "Hello World"
// ts
const message: string = 'hello world';


// == String build in method
const nama: string = 'Siti Khodijah';
const nama2: string = " Metal"
const nama3: string = " Banget"

console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("S", "o"));
console.log(nama.replaceAll("i", "o"));
console.log(nama.split(" "));
console.log(nama.concat(nama2));
console.log(nama.concat(nama2).concat(nama3));
console.log(nama.slice());



const nama1: string = nama.toLocaleLowerCase();
console.log(nama1);
// template literals / template string

const nama4: string = 'Jack';
const message1: string = `Welcome ${nama4}`;
console.log(message1);
// number build in method
const angka: string = '2000';
console.log(Number(angka)); 
console.log(typeof Number(angka)); 
console.log(typeof angka); 

// Type conversion
// string conversion

const angka1: number = 20;
console.log(String(123));
console.log(angka1.toString());

// Boolean conversion
console.log((Boolean(1)));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("false"));

// Date data types
const now: Date = new Date();

console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth() +1);
console.log(now.getDate());

// set method
now.setDate(10);
now.setMonth(5);
now.setFullYear(2010);
// yang month otomatis +1 jadi bulan 06
console.log(now);

// Basic Operator
// + 
// - 
// * 
// / 
// % modulo sisa bagi
// ** pangkat

const a = 20;
const b = 10;
const c = a+b;
console.log(c);

console.log(1+1);
console.log(2-1);
console.log(4/2);
console.log(9%2);
console.log(3**2);

// modify in place
let n: number = 4;

n+= 2;
console.log(n);


// increment dan decrement
let counter: number =2
// counter++
counter--
console.log(counter);

// prefix postfix

let counter2: number =2;

// console.log(++counter2); prefix nampilin 3 dulu tp aslinya dibelakang belum ditambah
console.log(counter2++); // postfix nampilin 2 tapi aslinya udah ditambah

// comparison operator
// console.log(5 == '5'); true
// console.log(5 === '5'); false

// MATH
console.log(Math.floor(4.9));
console.log(Math.ceil(3.1));
console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.round(4.6));
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.min(1, 2, 3, 4));
console.log(Math.random());



