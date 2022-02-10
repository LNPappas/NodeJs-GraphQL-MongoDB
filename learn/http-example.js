// const http = require("https");
const { get, request } = require("https");
import { get, request } from "https";

const google = "https://www.google.com";

// const req = request(google, (res) => {
//   res.on("data", (chunk) => {
//     console.log(`Chunk: ${chunk}`);
//   });
//   res.on("end", () => {
//     console.log("no more data");
//   });
// });

// Don't need if you use get
// req.end();

get(google, (res) => {
  res.on("data", (chunk) => {
    console.log(`Chunk: ${chunk}`);
  });
  res.on("end", () => {
    console.log("no more data");
  });
});
