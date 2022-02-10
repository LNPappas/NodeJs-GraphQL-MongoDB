const axios = require("axios");

// axios
//   .get("https://www.google.com")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("all done"));

const getGoogle = async () => {
  try {
    const resp = await axios.get("https://www.google.com");
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

getGoogle();
