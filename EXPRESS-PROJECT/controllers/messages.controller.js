const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "messages to friends",
    friend: "Harvey",
  });
  // res.sendFile(path.join(__dirname, "..", "public", "images", "photo.png"));
}

function postMessages(req, res) {
  console.log("updating messages...");
  res.send("updating...");
}

module.exports = {
  getMessages,
  postMessages,
};
