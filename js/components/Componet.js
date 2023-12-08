const fs = require("fs");

class Component {}

let file = fs.readFile("templates/components/portfolio-item.html", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

console.log(file.img);
