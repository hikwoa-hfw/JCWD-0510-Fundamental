interface Student {
  name: string;
  email: string;
  age: number;
  score: number;
}

class CalculateStudent {
  students: Student[];

  constructor(students: Student[]) {
    this.students = students;
  }
  calculate() {
    let maxScore: number,
      minScore: number,
      avgScore: number,
      maxAge: number,
      minAge: number,
      avgAge: number;

    const sortByScore = this.students.sort((a, b) => a.score - b.score);
    const sumScore = this.students.reduce((a, b) => a + b.score, 0);
    minScore = sortByScore[0].score;
    maxScore = sortByScore[sortByScore.length - 1].score;
    avgScore = sumScore / this.students.length;

    const sortByAge = this.students.sort((a, b) => a.age - b.age);
    const sumAge = this.students.reduce((a, b) => a + b.age, 0);
    minAge = sortByAge[0].age;
    maxAge = sortByAge[sortByAge.length - 1].age;
    avgAge = sumAge / this.students.length;

    return {
      score: { highest: maxScore, lowest: minScore, average: avgScore },
      age: { highest: maxAge, lowest: minAge, average: avgAge },
    };
  }
}

const students: Student[] = [
  {
    name: "budi",
    email: "budi@mail.com",
    age: 20,
    score: 90,
  },
  {
    name: "joko",
    email: "joko@mail.com",
    age: 22,
    score: 88,
  },
  {
    name: "siti",
    email: "siti@mail.com",
    age: 21,
    score: 98,
  },
];
const calculateStudents = new CalculateStudent(students);
// console.log(new CalculateStudent(students).calculate());
console.log(calculateStudents.calculate());

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// const cart = [
//   { product: { name: "test1", price: 2000 }, qty: 2 },
//   { product: { name: "test2", price: 3000 }, qty: 3 },
//   { product: { name: "test3", price: 4000 }, qty: 4 },
//   { product: { name: "test4", price: 5000 }, qty: 5 },
// ];

interface Cart {
  product: Product;
  qty: number;
}

class Transaction {
  cart: Cart[];
  total: number;

  constructor() {
    this.cart = [];
    this.total = 0;
  }

  showCart() {
    return this.cart;
  }

  showTotal() {
    return this.total;
  }

  addToCart(product: Product, qty: number) {
    const existingProduct = this.cart.find(
      (item) => item.product.name === product.name
    );
    
    if (existingProduct) {
        existingProduct.qty += qty
    } else {
        this.cart.push({product,qty})
    }
    this.total+= product.price*qty
  }
  checkout(userMoney: number){
    if(userMoney < this.total){
        return "Minggir lu miskin"
    }
     return {
        total: "Rp " + this.total.toLocaleString("id-ID"),
        message: "Transaksi berhasil",
        kembalian: "Rp " + (userMoney - this.total).toLocaleString("id-ID"),
     }
  }
}
const book = new Product("Cara jago ngoding", 200_000);
const pen = new Product("Pillot", 400_000);

const transaction = new Transaction();

transaction.addToCart(book, 4);
transaction.addToCart(book, 4);
transaction.addToCart(pen, 2);
transaction.addToCart(pen, 2);

console.log(transaction.showCart());
console.log(transaction.showTotal());
console.log(transaction.checkout(4000000));