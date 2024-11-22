const { readFile } = require("../utils/fileHandler"); // Import file utility functions.

const listTasks = ([status]) => {
  const tasks = readFile(); // Read all tasks from the JSON file.
  let filteredTasks = tasks;

  // If a status is provided, filter the tasks by that status.
  if (status) {
    filteredTasks = tasks.filter((task) => task.status === status);
  }

  console.log("Tasks:", filteredTasks); // Log the list of tasks (filtered or all).
};

module.exports = listTasks; // Export the listTasks function for use in the main CLI.
