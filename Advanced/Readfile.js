const fs = require("fs");
const path = require("path");

function getData(arquivo) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, arquivo);
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
}

getData("dados.txt")
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Erro:", error);
  });
