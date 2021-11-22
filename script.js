const data = require("./data.json");
const axios = require("axios").default;

// Coloque o nome da sua coleção aqui
const colletionName = "";

async function postData(data) {
  await axios.post(`https://ironrest.herokuapp.com/${colletionName}`, data);
}

for (let i = 0; i < data.length; i++) {
  postData(data[i]);
}
