// Handles files interactions like reading and writing tasks to the JSON file
const fs = require("fs"); //import Nodejs file system moddule
const filePath = "./tasks.json";

//check if file exists
const ensureFile = () => {
  if (!fs.existsSync(filePath)) {
    // If it doesn't exist, create and intialize it with an empty array
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
};

// readfile function
const readFile = () => {
  // Ensure the file exists before trying to read it.
  ensureFile();
  // Read the file and parse its contents into a Javascript array
  return JSON.parse(fs.readFileSync(filePath));
};

// writeFile funciton
const writeFile = (data) => {
  // convert array back to JSON format and write it to the fule
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readFile, writeFile }; // Export the utility functions for use in other modules.
