const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const PORT = 3000;
const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now();
  -start;
  console.log(
    `${req.method} ${req.baseUrl}${req.url} Time Elapsed: ${delta}ms`
  );
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! time for express...");
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
