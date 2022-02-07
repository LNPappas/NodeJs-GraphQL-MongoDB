function getMessages(req, res) {
  res.send(
    "<ul><li>Welcome to the express server!</li><li>it's way better.</li></ul>"
  );
}

function postMessages(req, res) {
  console.log("updating messages...");
  res.send("updating...");
}

module.exports = {
  getMessages,
  postMessages,
};
