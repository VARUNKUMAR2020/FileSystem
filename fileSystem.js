const file = require("fs").promises;
const path = require("path");

// Reading the File using FileSystem Modules
file.readFile(
  path.join(__dirname, "files", "doc.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// Writing the File using FileSystem Modules
file.writeFile(
  path.join(__dirname, "files", "varun.txt"),
  "Hi I have created the file using the fileSystem",
  (err) => {
    if (err) throw err;
  }
);

// Update the File using FileSystem Modules
file.appendFile(
  path.join(__dirname, "files", "new.txt"),
  "\n Varun you are updated",
  (err) => {
    if (err) throw err;
  }
);

// Rename the File using FileSystem Modules
file.rename(
  path.join(__dirname, "files", "new.txt"),
  path.join(__dirname, "files", "newDoc.txt"),
  (err) => {
    if (err) throw err;
  }
);

// Delete the File using FileSystem Modules
file.unlink(path.join(__dirname, "files", "new.txt"), (err) => {
  if (err) throw err;
});

// condition to check the file exits
if (!fs.existsSync("./new")) {
  // creating new directory
  fs.mkdir("./new", (err) => {
    if (err) throw err;
  });
}

//for error handling
process.on("uncaughtException", (err) => {
  console.log(`You Got the error ${err}`);
  process.exit(1);
});
