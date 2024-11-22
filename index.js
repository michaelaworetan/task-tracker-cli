// Main CLI application logic

const addTask = require("./commands/addTask");

const command = process.argv[2]; // Extract the command (e.g., "add") from the CLI arguments
const args = process.argv.slice(3);

switch (command) {
  case "add":
    addTask(args); // Call the `addTask` function with the arguments.
    break;

  default:
    // Log an error message if the user provides an invalid command.
    console.log("Invalid command. Use one of the following: add");
}
