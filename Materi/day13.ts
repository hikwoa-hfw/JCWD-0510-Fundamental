// callback
// adalah sebuah function di dalam argumen

// function sequence
// fungsi di js berjalan ketika di eksekusi
// misal ada fungsi greet, arigato, dan helo
// kalo dipanggil cuma arigato dan helo maka yang kepanggil ya arigato dan helo
// yang penting adalah urutan pemanggilannya.
//  Promise & async await

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Data berhasil diambil");
      } else {
        reject("terjadi kesalahan");
      }
    }, 1000); //miliseken
  });
}

// promise / tanpa async await
fetchData()
  .then((data) => {
    console.log(data);
    return "asdsadas";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
//   menggunakan async await
const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData()

async function getData2() {}

// tanpa async await
const fetchData2 = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchData2();

// dengan async await
const fetchData3 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
  }
};

fetchData3();

// JSON -> js object notation

const user = {
    name: "budi",
    age: 40
}

const userJSON = JSON.stringify(user) // js obj to JSON

console.log(userJSON);

const parseJSON= JSON.parse(userJSON) // JSON to js obj

// Modules
import { myFunc, name } from "./tes";

myFunc()

console.log(name);

// Hoisting -> var & func declaration

// func expression
// testFuncExp()// cannot access karena dalam bentuk expression harus dipanggil dulu. pemanggilan ngikut eksekusi code ts dari atas kebawah jd kalo manggil diatas y gabisa
const testFuncExp = () => {}

// func declaration
testFuncDec() // bisa karena dalam bentuk func declaration
function testFuncDec() {}

// typeof, var let const, built in method Array, naming convention of variable, lifo visualViewport, type of loop, primitive non, big o
