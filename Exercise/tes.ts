function fizzzz(fiz: number) {
  const fizzbuzz = fiz;
  let variableReturn: (string | number)[] = [];
  for (let i = 1; i <= fizzbuzz; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      variableReturn = ["FizzBuzz"];
    } else if (i % 3 == 0) {
      variableReturn = ["Fizz"];
    } else if (i % 5 == 0) {
      variableReturn = ["Buzz"];
    } else {
      variableReturn = [i];
    }
    console.log(variableReturn.join(" "));
    return variableReturn.join(" ");
  }
}
// fizzzz(6);
console.log(fizzzz(6));

// const tinggi: number = 4;
// let count: number = 1;
// function segitiga(input: number) {
//   let segitiga = input;
//   let tampungan: string = "";
//   let arrSegitiga : string[] = []
//   for (let i = 1; i <= input; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (count < 10) {
//         tampungan += "0" + count + " "; // tampungan = tampungan + "0" + count
//       } else {
//         tampungan += count + " ";
//       }
//       count++;
//     }
//     tampungan += "\n";
//     console.log(tampungan.trim());
//   }
//   arrSegitiga = tampungan.split("\n")
//   console.log(arrSegitiga);
//   arrSegitiga= arrSegitiga.map((array) =>array.trim() )
//   arrSegitiga.pop()
//   return arrSegitiga;
// }
// // console.log(segitiga(4))

// segitiga(4).forEach((n)=> {
//     console.log(n);
// })

function unikArr(input: number[], input2: number[]){
  let tempArr: number[]=[]
  const hasill = input.map((x,index) => {
    input.includes((x[index])) !== input2.includes((x[index]))
    return x[index]
  })
  return hasill
}
console.log(unikArr([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
