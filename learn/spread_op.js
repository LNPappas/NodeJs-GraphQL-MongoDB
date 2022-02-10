const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 54,
};

const { tiger, lion, ...rest } = animals;
console.log(tiger);
console.log(rest);
console.log(rest.lion);

const array = [1, 2, 3, 4, 5];
let sum = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

const res = sum(...array);
console.log(res);

const res2 = sum(array);
console.log(res2);

const objectSpread = (p1, p2, p3) => {
  console.log(p1);
  console.log(p2);
  console.log(p3);
};

objectSpread(tiger, lion, rest);
