const fs = require("fs");

fs.readFile("./lab_02_task.txt", function (err, buf) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(buf.toString());
});
