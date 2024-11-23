// Main CLI application logic

const addTask = require("./commands/addTask"); // Import the function to add tasks.
const deleteTask = require("./commands/deleteTask");
const listTasks = require("./commands/listTask"); // Import the function to list tasks.
const markTask = require("./commands/markTask");
const updateTask = require("./commands/updateTask"); // Import the function to update tasks.

const command = process.argv[2]; // Extract the command (e.g., "add") from the CLI arguments
const args = process.argv.slice(3);

switch (command) {
  case "add":
    addTask(args); // Call the `addTask` function with the arguments.
    break;

  case "list":
    listTasks(args); // Call the `listTasks` function with the arguments.
    break;

  case "update":
    updateTask(args); // Call the `updateTask` function with the arguments.
    break;

  case "delete":
    deleteTask(args); // Call the `deleteTask` function with the arguments.
    break;

  case "mark":
    markTask(args);
    break;

  default:
    // Log an error message if the user provides an invalid command.
    console.log("Invalid command. Use one of the following: add, list, update, delete, mark");
}
