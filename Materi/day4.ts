// Array
const arr = [90, "kon", 900, "lop"];
const arr1: string[] = ["A", "B", "C"];
const arr2: string[] = new Array("A", "B", "C");

const arr3: number[] = [9, 0, 9];
const arr4: number[] = new Array(9, 0, 0);

// Array of Object
// objek ditandai dgn kurung kurawal {}
// const student: { name: string; email: string}[] = [
//     { name: "budi", email: "budi@gmail.com"},
//     { name: "siti", email: "siti@gmail.com"},
//     { name: "joko", email: "joko@gmail.com"},
// ]

// PascalCase
// Singular

// interface Student {
//     name: string;
//     email: string;
// };

type Student = {
  name: string;
  email: string;
  hobby?: string; // ? menandakan opsional
  address?: Address;
};
interface Address {
  street: string;
  city: string;
}
const students: Student[] = [
  { name: "budi", email: "budi@gmail.com", hobby: "fudsal" },
  {
    name: "siti",
    email: "siti@gmail.com",
    address: { street: "Jalan xyz", city: "xyz" },
  },
  { name: "joko", email: "joko@gmail.com" },
];

// for of
// cara sederhana for loop untuk memanggil data dari array tanpa menggunakan index
// const diluar for of pluralnya
const fruits: string[] = ["Apple", "Banana", "Orange"];
// const didalam for of adalah singularnya
for (const fruit of fruits) {
  console.log(fruit);
}

// exercise
const numbers: number[] = [1, 2, 3, 4, 5, 6];
let hasilJumlah: number = 0;

for (let total of numbers) {
  hasilJumlah += total;
}
console.log(hasilJumlah);

/* function
ada 2 cara untuk menuliskan fungsi: declaration dan expression*/
// nama function "square" aslinya bebas mau diisi apa aja kaya bikin variabel
// function square(parameter "bebas diisi apa dan bisa diisi kaya bikin variable") {} basic syntax
// parameter bisa diisi lebih dari 1
// kalau parameter 2 maka argumen juga 2
// isi parameter harus selalu diberi data type

function square(number: number) {
  return number * number;
}

// agar bisa jalan fungsi harus dipanggil
// square() akan merah karna hrs diisi argumen
const result = square(4);
console.log(result);
// argumen akan selalu berkaitan dengan parameter> kalau argumen diisi maka argumen akan masuk parameter

// function expression
// bedanya cuma penggunaan variabel

const square1 = function (number: number) {
  return number * number;
};

const result3 = square1(4);
const result4 = square(10);
console.log(result3);
console.log(result4);

// function scope
// variable yang didalam scope tidak bisa diakses diluar function karena hanya dijelaskan dalam function (dalam kurung kurawa)
function greeting() {
  const hello12 = "hello";
  console.log(hello12);
  return hello12;
}
greeting();

// ini untuk aktivasi function agar log bisa keluar

// Parameter dan argumen
// Parameter = variabel yang mewakili value dari argumen yang dimasukkan
// argumen = value yg dimasukkan dalam pemanggilan function
// harus di return karena kalu tidak direturn tidak akan muncul ketika diaktivasi

function greetin2(name: string) {
  const hello2 = "hello";
  console.log(hello2);
  return hello2 + " " + name;
}

console.log(greetin2("wahyu"));

// default parameter

function multiply(a: number, b: number = 2) {
  console.log(a);
  console.log(b);
  return a * b;
}
console.log(multiply(2));
// default harus di parameter paling belakang

// Rest Parameter
// meawakili sisa argumen ke dalam 1 variabel Parameter

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 4, 5, 6, 7, 8);

// Nested Func
// fungsi yang berada dalam fungsi
// inner func bisa akses parameter dari outer func
// outer func tidak bisa akses parameter inner func

// outer func
function getMessage(firstname: string) {
  // inner func
  function sayHello() {
    return "Hello " + firstname + ",";
  }
  // inner func 2
  function welcome() {
    return "Welcome to Purwadhika";
  }
  return sayHello() + " " + welcome();
}
console.log(getMessage("Hibban"));

//Closure
// inner function selalu mempunyai akses ke variable dan parameter dari outer function
// bahkan setelah function ini direturn
// function harus diaktifkan dua kali karena return dari outer function merupakan function juga

function greeting1(name: string) {
  const defaultMessage: string = "hello";

  return function () {
    return defaultMessage + " " + name;
  };
}
const result2 = greeting1("Budi");
console.log(result2());
console.log(greeting1("hibban")());

// Recursive
// fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  let nextNumber = number - 1;
  console.log(number);

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(10);
console.log(countDown(10));
// undefined karena tidak diberikan return

// Arrow func
// shortcut untuk menulis function expression

// expres
const square2 = function (number: number) {
  return number * number;
};
//  arrow
const sqare3 = (number: number) => {
  return number * number;
};
//arrow 1 line
const square4 = (number: number) => number * number;
// kalau 1 line gaperlu pakai kurawal dan ga perlu return

// Array build in method
// JOin = menggabungkan value dalam arraay menjadi dalam bentuk string
const words: string[] = ["hello", "world"]
console.log(words.join(" "));

// Pop = menghilangkan isi value paling akhir dalam array
const words1: string[] = ["hello", "wello", "hello"]
words1.pop()
console.log(words1);
// kalo pop di console log maka log akan menampilkan value yang hilang trsb
console.log(words1.pop());

// shift = menghilangkan value paling depan dalam array
const words2: string[] = ["test", "hello", "world"]
words2.shift()
console.log(words2);
console.log(words2.shift());

// Push = menambahkan value ke dalam array terakhir
const words3: string[] = ["hello", "world"]
words3.push("purwadhika")
console.log(words3);

// Unshift = menambahkan value ke urutan paling dpn array
const words4: string[] = ["hello", "wello"]
words4.unshift("oi")
console.log(words4);

//  concat = menggabungkan array menjadi satu array
const arr5: string[] = ["hey"]
const arr6: string[] = ["koooo"]
const arr7: string[] = ["hello", 'world']

console.log(arr5.concat(arr6));
console.log(arr5.concat(arr6).concat(arr7));
// another option
const mergeArr = [...arr5, ...arr6, ...arr7]
console.log(mergeArr);
//... akan mengcopy seluruh isi array target dan dimasukkan ke dalam value

// Splice = menghapus, mengganti, attau menghapus value pada sebuah array
// rumus = splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "march", "april", "june"]
months.splice(1, 0, "feb")
console.log(months);

months.splice(4,1)
console.log(months);

months.splice(3, 1, "may")
console.log(months);


// Sort = mengurutkan isi array berupa string atau number
// versi string
const fruits1: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"]
fruits1.sort()
console.log(fruits1);
// Number tanpa compare function
const points: number[]= [3, 5, 1, 9, 8, 200]
points.sort((a, b)=> a-b);
console.log(points);






