// const person = {
//   name: "John Doe",
//   age: 34,
//   greet() {
//     console.log(this.name);
//   },
// };

// const hobbies = ["Teste", "New York", "San Francisco"];

// console.log(
//   hobbies.map((hobby) => {
//     return "hobby" + hobby;
//   })
// );

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hi");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timeout");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hi");
console.log("Hobbies");
