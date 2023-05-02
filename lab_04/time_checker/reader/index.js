const fs = require("fs");

const directoryPath = "../logs";

function checkDirectory() {
  fs.readdir(directoryPath, (err, files) => {
    if (err) throw err;

    if (files.length === 0) {
      console.log(`There are no files in ${directoryPath}.`);
    } else {
      console.log(`There are some files in ${directoryPath}:`);
      files.forEach((file) => {
        fs.readFile(`${directoryPath}/${file}`, "utf8", (err, data) => {
          if (err) throw err;
          console.log(`- ${file}: ${data}`);
        });
      });
    }
  });
}

setInterval(checkDirectory, 5000);
