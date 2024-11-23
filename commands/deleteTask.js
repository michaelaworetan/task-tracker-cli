const { readFile, writeFile } = require("../utils/fileHandler");

const deleteTask = ([id]) => {
  // Validate input: the ID is required.
  if (!id) {
    console.log("Error: Task ID is required.");
    return; // Stop execution if no ID is provided.
  }

  const tasks = readFile(); // Read the existing tasks.
  const newTasks = tasks.filter((task) => task.id !== id); // Filter out the task with the specified ID.

  // If the task wasn't found, log an error message.
  if (tasks.length === newTasks.length) {
    console.log("Error: Task not found.");
    return;
  }

  writeFile(newTasks); // Save the updated array back to the JSON file.
  console.log("Task deleted successfully.");
};

module.exports = deleteTask; // Export the deleteTask function for use in the main CLI.
