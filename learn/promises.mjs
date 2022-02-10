/* to run this file you must put:
{
  "type": "module"
}

in package.json
*/

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("Worked");
//   } else {
//     reject("Broke");
//   }
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "P2");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 10, "P3");
// });

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "P4");
// });

// Promise.all([promise, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

// promise
//   .then((result) => result + "!")
//   .then((result2) => {
//     // throw Error;
//     console.log(result2);
//   })
//   .catch(() => console.log("error"));

import fetch from "node-fetch";

// const urls = [
//   "http://jsonplaceholder.typicode.com/users",
//   "http://jsonplaceholder.typicode.com/posts",
//   "http://jsonplaceholder.typicode.com/albums",
// ];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((resp) => resp.json());
//   })
// )
//   .then((results) => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
//   })
//   .catch(() => console.log("Error"));

// async function fetchUsers() {
//   const response = await fetch("http://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// }
// fetchUsers();

// const getData = async function () {
//   try {
//     // throw Error;
//     const [user, posts, albums] = await Promise.all(
//       urls.map((url) => fetch(url).then((resp) => resp.json()))
//     );
//     console.log("Posts: ", posts);
//   } catch {
//     console.log("oops!", Error);
//   }
// };

// getData();

const urls = [
  "https://swapi.dev/api/films/1",
  "https://swapi.dev/api/films/2",
  "https://swapi.dev/api/films/3",
  "https://swapi.dev/api/films/4",
  "https://swapi.dev/api/films/5",
  "https://swapi.dev/api/films/6",
];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((resp) => resp.json());
//   })
// )
//   .then((results) => {
//     console.log("1 \n", results[0]);
//     console.log("2 \n", results[1]);
//     console.log("3 \n", results[2]);
//   })
//   .catch(() => console.log("Error"))
//   .finally(() => console.log("All Done!"));

// const getFilm = async () => {
//   try {
//     const response = await fetch("https://swapi.dev/api/films/4");
//     const data = await response.json();
//     console.log(data["title"]);
//   } catch {
//     console.log("oops!", Error);
//   }
// };
// getFilm();

// for await of
const getData = async () => {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data["title"]);
  }
};

getData();
