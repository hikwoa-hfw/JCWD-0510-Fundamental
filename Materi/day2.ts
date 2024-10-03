// if statement
/* syntax: 
if(condition: boolean trusti dan value){
codeblock
}
*/
const age: number = 18;

if (age >= 17) {
  console.log("Anda bisa buat Ktp");
}

// else statement
// backup plan dari if
const age1: number = 15;
if (age1 >= 17) {
  console.log(`Anda bisa bikin ktp`);
} else {
  console.log(`Anda belum bisa bikin ktp`);
}

// else if statement

const input: string = "A";
const grade: string = input.toLocaleLowerCase();

if (grade === "a") {
  console.log("nilai bagus");
} else if (grade === "b") {
  console.log("nilai lumayann");
} else if (grade === "c") {
  console.log("nilai buruk");
} else {
  console.log("nilai tidak diketahui");
}

// switch case : untuk decision making kalo kondisi 1 aja kalo kondisi ribet pake if else
//  hanya membandingkan satu value
// penggunaan break untuk meng stop loopingnya dimana break pasti digunakan di switch case

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("hari senin");
    break;
  case "selasa":
    console.log("hari senin");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default:
    console.log("Hari tidak ditemukan");
    break;
}

/* Logical operator 
&& -> dan
|| -> atau (pencet atas enter)
! -> Not */

const car: string = "mercy";
if (car === "bmw" || car === "mercy") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

const umur: number = 19;
const punyaSIM: boolean = true;
if (umur >= 18 && punyaSIM) {
  // if (umur >= 18 && punyaSIM === true) { << gini juga bisa
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// Ternary operator
// shortcut untuk if else condition
// condition ? true : false

const str: string = "javascript";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

/* loop statement
rangkaian instruksi yang dilakukan berulang hingga kondisi tidak 
terpenuhi

type loop: for loop, while loop, dan do while loop

for loop ada 3 statement
1. menginisialisasi variable looping
2. mendefinisikan kondisi dari looping tsb
3. kode yang dieksekusi diakhir setiap iterasi

syntax : for(statement1; 2; 3) {
codeblock
}    */

for (let i = 0; i < 5; i++) {
  console.log("hey");
  console.log(i);
}

/* While loop
jalan terus menerus selama memenuhi kondisi dan bisa infinite loop
*/

let i: number = 1;
while (i < 5) {
  console.log("hey");
  console.log(i);
  i++;
}

/* do while loop
sama spt while loop 
pertama dia do lalu dilakukan pengecekan
klo do while loop dicek dulu di awal
while loop pengecekkan diakhir */

let count: number = 1;

do {
  console.log(`ini iterasi ke ${count}`);
  count++;
} while (count <= 5);

/* break untuk stop loop
bisa satu line aja > if(cond) break;
tapi kalo butuh lebih dari 1 line maka bisa ditaruh bawahnya */

let sum: number = 0;
while (true) {
  console.log("sum: " + sum);
  if (sum >= 5) break;
  sum++;
}
/* if (sum >= 5) {
        break;
    }  juga bisa kalo butuh lebih dari 1 line*/

// continue > melakukan skip pada looping
for (let i=0; i<5; i++) {
    if (i===3) continue;
    console.log(i);
}
/* bisa juga if (i===3) {
continue
} */
