const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Lauren",
  },
  {
    id: 1,
    name: "Pappas",
  },
  {
    id: 2,
    name: "LNPappas",
  },
];

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const id = req.params.id;
  const friend = friends[+id];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ error: "Friend does not exist" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello! time for express...");
});

app.get("/messages", (req, res) => {
  res.send(
    "<ul><li>Welcome to the express server!</li><li>it's way better.</li></ul>"
  );
});

app.post("/messages", (req, res) => {
  console.log("updating messages...");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
