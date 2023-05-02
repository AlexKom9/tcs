const fs = require("fs");

const directoryPath = "../logs";

if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath);
}

function writeTimeToFile() {
  const now = new Date();
  const filename = `time_${now.getTime()}.txt`;
  const content = now.toISOString();

  fs.writeFile(`${directoryPath}/${filename}`, content, (err) => {
    if (err) throw err;
    console.log(`File ${filename} was written`);
  });
}

setInterval(writeTimeToFile, 10000);
