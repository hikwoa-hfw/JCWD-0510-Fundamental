// no 1
function checkEqual(object1: { a: any }, object2: { a: any }) {
  return Object.values(object1)[0] === Object.values(object2)[0];
}
console.log(checkEqual({ a: 1 }, { a: 1 }));

//  no2
function getIntersection(object1: {}, object2: {}) {
  let objectOne: {} = {};
  for (
    let i = 0;
    i < Object.keys(object1).length && Object.keys(object2).length;
    i++
  ) {
    if (Object.keys(object1)[i] === Object.keys(object2)[i]) {
      objectOne[Object.keys(object1)[i]];
      console.log(objectOne[object1[i]]);

      for (
        let j = 0;
        j < Object.values(object1).length && Object.values(object2).length;
        j++
      ) {
        if (Object.values(object1)[j] === Object.values(object2)[j])
          objectOne[Object.keys(object1)[i]] = Object.values(object1)[j];
      }
    }
  }
  return objectOne;
}

console.log(getIntersection({ a: 1, b: 2 }, { a: 1, c: 3 }));

//  no 3
function concat(input: {}[], input2: {}[]) {
  let conC = input.concat(input2);
  let pokes: number[] = [];
  for (let i = 0; i < conC.length; i++) {
    for (let j = i + 1; j < conC.length; j++) {
      if (conC[i]["email"] === conC[j]["email"]) {
        pokes.push(conC.indexOf(conC[j]));
      }
    }
  }
  pokes.forEach((poke)=> {
    conC.splice(poke,1)
  })
  
  return conC
}

console.log(concat(
  [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
  ],
  [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
  ]
))



// 4
function switchValue(input: {}[]) {
  let key: string[] = [];
  let value: any[] = [];
  let result: {} = {};
  let resultFix: {} = {}

  for (let i = 0; i < input.length; i++) {
    key = Object.keys(input[i]);
    
    console.log(key);
  }
  for (let i = 0; i < input.length; i++) {
    value = Object.values(input[i]);
    result[value[i]]
    console.log(value);

  }
  for (let i = 0; i < key.length; i++) {
    result[value[i]] = key[i];
    console.log(result);
    resultFix[value[i]] = key[i]
    console.log(resultFix);
    
  }

  return result;
}

console.log(switchValue([{ name: "David", age: 20 }]));

// 5
function factorial(number: number) {
  let resultFactorial: number = 1;
  let numberFactorial: number | string = "";
  if (number > 0) {
    for (let i = number; i > 0; i--) {
      resultFactorial *= i;
      if (i > 1) {
        numberFactorial += i + " x ";
      } else if ((i = 1)) numberFactorial += i;
    }
    return `${number}! = ${numberFactorial}`;
  }
}
console.log(factorial(5));
