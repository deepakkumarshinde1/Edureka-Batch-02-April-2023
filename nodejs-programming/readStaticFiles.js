const fs = require("fs");

// fs module ==> read , update , delete , create file
function readPublicFile(file) {
  let path = `./public/${file}.html`; // location of file
  let data = fs.readFileSync(path);
  return data;
}

module.exports = { readPublicFile };
