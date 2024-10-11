const checkObjectEqual = (obj1: any, obj2: any) => {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) return false;

  for (const key of key1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
 const obj1 = {a: 1, b: 2}
 const obj2 = {a: 1, b:3}
 console.log(checkObjectEqual(obj1, obj2));
 