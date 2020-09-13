// src/objectExperiments.ts
const objectOne = {
  firstName: "Alice",
  lastName: "the Rabbit Hunter",
};

console.log("Value of object One: ", objectOne);

const objectTwo = objectOne;
objectTwo.lastName = "The nice girl";

console.log("Value of object One: ", objectOne);
console.log("Value of object Two: ", objectTwo);
