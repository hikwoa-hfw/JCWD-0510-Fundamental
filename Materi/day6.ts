// properties isinya key dan value > nama : "budi"
// function di dalam object maka disebut method
// cara menuliskan object
// cara 1
const user = {};

//  cara 2
const user2 = new Object();
// new adalah kelas nanti dibahas dibawah

//  properties and method
// interface ga perlu pake sama dengan
interface user {
  name: string;
  hobby?: string; // ? menandakan opsional boleh diisi boleh ga diisi
  greet: () => void;
  greet2: () => void;
}
// type pake sama dengan
// type user = {}
// propertiesnya ada 3 yaitu nama, greet, dan greet2
const user3 = {
  name: "budi",
  greet() {
    console.log("hello");
  },
  greet2: () => {
    console.log();
  },
};

// add and delete property
const person: any = {
  name: "joko",
  age: 20,
};
console.log(person);
person.hobby = "Futsal"; // cara 1 pakai .input
console.log(person);
person["address"] = "Yojo"; // cara 2 pakai square bracket
console.log(person);

// delete property
delete person.address;
console.log(person);

// accessing value
console.log(person.name); // using dot
console.log(person["hobby"]);

// mau ambil keynya aja built in method
console.log(Object.keys(person));
//  built in method untuk mengambil value aja
console.log(Object.values(person));

person.hobby = "badminton"; // changing value of property
console.log(person);
// Immutable & mutable
// mutable : variable yang bisa diubah datanya
// immutable : object yang tidak bisa diubah saat sudah dibuat
// Mutable primitive data types : number, string, null, undefined,
const count1: number = 4;
let count2: number = count1;
count2 = 10;

console.log(count1);
console.log(count2);

// immutable > non primitive data types: array dan object
let orang1: any = { name: "budi" };
// let orang2: any = orang1 >> kalau ini maka orang 1 iikut ketambahan age
let orang2: any = { ...orang1 }; // maka orang 2 harus membuat orang 1 menjadi object tersendiri
orang2.age = 20;
console.log(orang1);
console.log(orang2);

// optional chaining > cara aman untk akses object kalau tidak tau isinya apa
// kalau ga ada ? dan ternyata value nya jg gaada maka aplikasi akan error

const user4: any = {};

console.log(user4.address);
console.log(user4.address?.city);
// console.log(user4.address.city); cannot find karena tidak ada ? sehingga harus ada (bukan opsional)

// for in > untuk loop seperti for of
const person3 = {
  name: "aceng",
  age: 90,
};
for (const key in person3) {
  console.log(key);
  console.log(person3[key]);
}

// destructuring assignment
// mengeluarkan property dalam object menjadi sebuah variable
//  versi destructing object
const person4 = {
  name: "aceng",
  age: 90,
  hobby: "main game",
};
console.log(person4.name);
console.log(person4.age);

const { name, age } = person4;

console.log(name);
console.log(age);

// versi destructing array
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = [10, 20];
console.log(a);
console.log(b);
// harus sesuai penempatannya (index) karena array

// spread operator
// copy isi object / menggabungkan object

const objetOne = { name: "jacky", password: "Admin123" };
const objetTwo = { email: "email@email.com", name: "pepeng" };
// akan nimpa nama yg depan dgn nama yg blkg (objet1 dgn objet2)
const result = { ...objetOne, ...objetTwo };
console.log(result);

// THIS keyword
//  mengakses property lain di dalam sebuah object

const person5 = {
  firstName: "aceng",
  lastName: "racing",
  greet() {
    console.log(`hello, ${this.firstName} ${this.lastName}`);
  },
};
person5.greet();

// class
//  adalah cetakan/template untuk membuat objek
// penamaan menggunakan Pascalcase
// new untuk membuat instance baru

// class declaration
class User1 {
  greeting() {
    // ini adalah method > fungsi dalam object atau kelas
    console.log("hello world");
  }
}

// class expression
const User2 = class {
  greeting() {
    console.log("hello world");
  }
};

// kita bisa buat value baru berdasarkan template tsb / class tsb
//  create an object from class
const human = new User1();
const human2 = new User1();
human2.greeting();
human.greeting();
// dipelajari agar ketika tidak menggunakan ts akan terbiasa

// Constructor
// method bawaan dari class yang akan dijalankan pertama kali
// saat membuat object baru menggunakan template class

class Person {
  name: string;
  #email: string; //# privatenya ke property
  constructor(name: string, email: string) {
    this.name = name;
    this.#email = email;
  }
  greeting() {
    console.log(`hello ${this.name}`);
    return `Hello ${this.name}`;
  }
  private showEmail() {
    //method ini hanya bisa diakses dalam class (private)
    console.log(this.#email);
    return `${this.#email}`;
  }
  sendReminder() {
    return this.showEmail;
  }
}
const orang3 = new Person("Budi", "budi@mail.com");
console.log(orang3.name);
console.log(orang3.greeting());
// orang3.showEmail  gabakal bisa karena show email adalah method private

// getter and setter
// get untuk membaca data dan set untuk set value dalam object

const orang4 = {
  firstName: "ujang",
  lastName: "racing",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const words = value.split(" ");
    this.firstName = words[0];
    this.lastName = words[1];
  },

  fullNmae2(value: string) {
    const words = value.split(" ");
    this.firstName = words[0];
    this.lastName = words[1];
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(orang4.fullName);
orang4.fullName = "Budi joko";
console.log(orang4.fullName);
orang4.fullNmae2("siti kodijah");
console.log(orang4.fullNmae2("siti kodijah"));

// kapan menggunakan getetr dan setter?

// getter berguna ketika ingin mendapatkan nilai properti, tapi mau nambah logika
//  contoh: format atau validasi

//  setter berguna untuk memvalidasi atau menambah logika sebelum menetapkan nilai ke properti

// gunakan method biasa jika ingin tindakan lebih eksplisit atau melakukan
// lebih dari sekedar mengambil atau menetapkan nilai properti

// Encapsulation
//  konsep di OOP untuk ngebundle data dalam 1 unit
// >> class dan object

// INheritance
// pewarisan dari parent class ke child class
// property dan method dari parent class bisa diakses oleh child class

class Product {
  productName: string;
  price: number;

  constructor(name: string, price: number) {
    this.productName = name;
    this.price = price;
  }

  readPrice() {
    console.log(this.price);
    return "Rp " + this.price.toLocaleString("id-ID");
  }
}
// tidak menggunakan konsep inheritance
// class Book {
//   productName: string;
//   price: number;
//   author: string;

//   constructor(name: string, price: number, author: string) {
//     this.productName = name;
//     this.price = price;
//     this.author = author;
//   }
// }

// konsep inheritance
class Book extends Product {
  author: string;

  constructor(name: string, price: number, author: string) {
    super(name, price);
    this.author = author;
  }
}

const buku = new Book("abc", 10_000, "aceng" )

console.log(buku.productName);
console.log(buku.price);
console.log(buku.readPrice());

// Instance Of
// mengecek apakah sebuah object memiliki hubungan ke class tertentu

class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit()

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
