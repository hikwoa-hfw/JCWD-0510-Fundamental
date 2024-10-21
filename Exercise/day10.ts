/*
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085211155555"
    output = "(6285)-2111-55555"

    ========================================================
    
    buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/
// 1
// function phoneNumber(inputNum: any) {
//   const temp: number = parseFloat(inputNum)
//     if (typeof inputNum !== "string") return "Invalid phone number";
//   let result = inputNum.split("").slice(1, 12);
//   result.unshift("62");
//   return result.join(result[0]);
// }

// function phoneNumber(inputNum: any) {
//     const number = inputNum.split("").map(Number)
//     let newNum: number[]= []
//     if (typeof inputNum!== "string") return "invalid phone number"
//     for (let i = 0; i <= number.length; i++){

//     }

// }
// console.log(phoneNumber("082221257072"));
// 1
function phoneNumber(inputNum: any) {
  if (typeof inputNum !== "string") return "invalid phone number";
  if (inputNum.length !== 12) return "invalid phone number";
  const numCode = /^[0-9]+$/;
  if (!numCode.test(inputNum)) return "invalid phone number";

  let one = inputNum.split("").slice(1, 3);
  one.unshift("62");
  let oneJoin = one.join("");
  
  let two = inputNum.split("").slice(3, 7);
  let twoJoin = two.join("");
  let three = inputNum.split("").slice(7);
  let threeJoin = three.join("");
  return `(${oneJoin})-${twoJoin}-${threeJoin}`;
}

console.log(phoneNumber("082221222222"));

// 2
class Product {
  nama: string;
  berat: number;
  price: number;
  stok: number;

  constructor(nama: string, berat: number, price: number, stok: number) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stok = stok;
  }
}

class Buku extends Product {
  author: string;

  constructor(
    nama: string,
    berat: number,
    price: number,
    stok: number,
    author: string
  ) {
    super(nama, berat, price, stok);
    this.author = author;
  }
}
class Pakaian extends Product {
  brand: string;

  constructor(
    nama: string,
    berat: number,
    price: number,
    stok: number,
    brand: string
  ) {
    super(nama, berat, price, stok);
    this.brand = brand;
  }
}
interface Product {
  nama: string;
  berat: number;
  price: number;
  stok: number;
}
interface Keranjang {
  nama: string;
  berat: number;
  price: number;
  jumlah: number;
}

class OnlineShop {
  produks: Product[];
  cart: Keranjang[];
  total: number;

  constructor() {
    this.produks = [];
    this.cart = [];
    this.total = 0;
  }

  tambahProduk(produk: Product) {
    const existingProduct = this.produks.find(
      (item) => item.nama === produk.nama
    );
    if (existingProduct) {
      return "Produk sudah ada dalam toko";
    }
    this.produks.push({
        nama: produk.nama,
        berat: produk.berat,
        price: produk.price,
        stok: produk.stok

    });
    return "ok";
  }

  tambahKeranjang(produk: Product, jumlah: number) {
    let existingProduct = this.cart.find((item) => item.nama === produk.nama);

    if (!this.produks.find((item) => item.nama === produk.nama))
      return "Barang raono su";
    let produkIndex = this.produks.findIndex(
      (index) => produk.nama === index.nama
    );
    this.produks[produkIndex].stok -= jumlah;

    if (this.produks[produkIndex].stok < 0) return "Bajingan wes entek nyuk";
    if (jumlah === 0) return "asu i raniat tuku";
    if (existingProduct) {
      existingProduct.jumlah += jumlah;
      
      //   return "ok";
    }
    console.log(jumlah);

    this.cart.push({
      nama: produk.nama,
      jumlah,
      berat: produk.berat * jumlah,
      price: produk.price * jumlah,
    });
    this.total += produk.price * jumlah;
  }
  transaction(uangUser: number, jarak: number) {
    let tempJarak = jarak * 4000;
    let tempTotal = tempJarak + this.total;
    if (uangUser < tempTotal) return "Minggir lu miskin";
    this.cart = []
    return {
      Ongkir: "Rp" + tempJarak.toLocaleString("id-ID"),
      Harga_Barang: "Rp" + this.total.toLocaleString("id-ID"),
      Total: "Rp" + tempTotal.toLocaleString("id-ID"),
      Message: "Transaksi berhasil, makasih bos",
      Cashback: "Rp" + (uangUser-tempTotal).toLocaleString("id-ID")
    };
  }

  showCatalog() {
    return this.produks.map((item) => ({
      Nama: item.nama,
      Berat: item.berat,
      Stok: item.stok,
      Harga: item.price,
    }));
  }

  showCart() {
    return this.cart.map((item) => ({
      Nama: item.nama,
      Jumlah: item.jumlah,
      Berat: item.berat,
      Harga: item.price,
    }));
  }
}

const buku = new Buku("Laut Bercerita", 1, 20_000, 2, "Agung herkules");
const buku2 = new Buku("Laut Bercerita", 1, 20_000, 2, "Agung herkules");
const uniqlo = new Pakaian("Kaos Jujutsu", 1, 200_000, 1, "UT x JJK")
const toko = new OnlineShop();
console.log(toko.tambahProduk(buku));
console.log(toko.tambahProduk(buku));
console.log(toko.tambahProduk(uniqlo));
console.log(toko.tambahKeranjang(buku2, 2));
console.log(toko.tambahKeranjang(uniqlo, 1));

console.log(toko.showCart());
console.log(toko.showCatalog());
console.log(toko.transaction(250000,2));

