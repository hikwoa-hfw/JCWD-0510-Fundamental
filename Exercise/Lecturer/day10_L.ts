// 1
function phoneNumber(input: string) {
  if (input.length !== 12) return "invalid number";
  for (let i = 0; i < input.length; i++) {
    if (input[i] < "0" || input[i] > "9") {
      return "invalid number";
    }
  }

  input = "62" + input.slice(1);
  let temp = "(xxxx)-xxxx-xxxxx";

  input.split("").forEach((item) => (temp = temp.replace("x", item)));
  return temp;
}

console.log(phoneNumber("082221257072"));

//  2

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
  bahan: string;

  constructor(
    nama: string,
    berat: number,
    price: number,
    stok: number,
    bahan: string
  ) {
    super(nama, berat, price, stok);
    this.bahan = bahan;
  }
}

class OnlineShop {
  products: Product[];
  cart: { jumlah: number; product: Product }[];

  constructor() {
    this.products = [];
    this.cart = [];
  }
  tambahProduk(product: Product) {
    const existingProduct = this.products.find((p) => p.nama === product.nama);

    if (existingProduct) {
      return "Produk sudah ada di katalog";
    }
    this.products.push(product);
    return "tambah produk sukses";
  }

  tambahKeranjang(jumlah: number, product: Product) {
    const availableProduct = this.products.find((p) => p.nama === product.nama);

    if (!availableProduct) {
      return "produk tidakada";
    }

    let cartItem = this.cart.find((item) => item.product.nama === product.nama);

    if (cartItem) {
      if (availableProduct.stok >= jumlah) {
        availableProduct.stok -= jumlah;
        cartItem.jumlah += jumlah;
        return "produk berhasil ditambahkan";
      } else {
        return {
          message: "stok tidak cukup",
          remainingStok: availableProduct.stok,
        };
      }
    } else {
      if (availableProduct.stok >= jumlah) {
        this.cart.push({ jumlah, product });
        availableProduct.stok -= jumlah;
        return "produk berhasil ditambahkan ke keranjang";
      } else {
        return {
          message: "stok tidak cukup",
          remainingStok: availableProduct.stok,
        };
      }
    }
  }

  transaksi(uangUser: number, jarak: number) {
    let totalBelanja: number = 0;
    let totalWeight: number = 0;

    this.cart.forEach((item) => {
      totalBelanja += item.product.price * item.jumlah;
      totalWeight += item.product.price * item.jumlah;
    });

    let costPerKm: number;

    if (totalWeight < 2) costPerKm = 2000;
    if (totalWeight >= 2 && totalWeight < 5) costPerKm = 3000;
    else costPerKm = 5000;

    const ongkir = jarak * costPerKm;
    const totalHarga = totalBelanja + ongkir;

    if (uangUser < totalHarga) return "minggir lu miskin";

    this.cart = [];

    return {
      message: "transaksi sukses",
      totalBelanja,
      ongkir,
      totalHarga,
      kembalian: uangUser - totalHarga,
    };
  }

  showCart() {
    let total: number = 0;

    this.cart.forEach((item) => {
      total += item.product.price * item.jumlah;
    });
    return {
      cart: this.cart,
      totalBarang: this.cart.length,
      total,
    };
  }

  showkatalog() {
    return {
      katalog: this.products,
      totalBarang: this.products.length,
    };
  }
}

const product1 = new Buku("algebra", 0.3, 100_000, 2, "ibnu sina");
const product2 = new Pakaian("kaos",1, 200_000, 10, "kathun")

const onlineShop = new OnlineShop()

console.log(onlineShop.tambahProduk(product1));
console.log(onlineShop.tambahProduk(product2));

console.log(onlineShop.tambahKeranjang(1, product1));
console.log(onlineShop.tambahKeranjang(2, product2));
console.log(onlineShop.tambahKeranjang(2, product2));

console.log(onlineShop.showkatalog());
console.log(onlineShop.showCart());

console.log(onlineShop.transaksi(1_200_000,2));




