const { createServer } = require("http");

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

const server = createServer((req, res) => {
  const items = req.url.split("/");
  //   res.writeHead(200, {
  //     "Content-Type": "application/json",
  //   });
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      console.log(`data ${friend}`);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      res.end(JSON.stringify(friends[+items[2]]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "message") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<li>Hello</li>");
    res.write("<li>Thanks for dropping by!</li>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});
