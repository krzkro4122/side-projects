const fs = require("fs");
const { join } = require("path");

const traverse = (dir) => {
  const subdirs = fs.statSync(dir).isDirectory() && fs.readdirSync(dir);

  if (subdirs) {
    console.log("Traversing: ", dir);

    subdirs.forEach((path) => {
      fullPath = join(dir, path);
      traverse(fullPath);
    });
  }
};

traverse(process.cwd());
