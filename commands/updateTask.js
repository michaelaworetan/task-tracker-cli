const { readFile, writeFile } = require("../utils/fileHandler"); // Import file utility functions.

const updateTask = ([id, description]) => {
  // Validate input: both ID and description are required.
  if (!id || !description) {
    console.log("Error: Task ID and description are required.");
    return; // Stop execution if either is missing.
  }

  const tasks = readFile(); // Read the existing tasks.
  const task = tasks.find((task) => task.id === id); // Find the task with the specified ID.

  if (!task) {
    console.log("Error: Task not found.");
    return; // Stop execution if the task doesn't exist.
  }

  task.description = description; // Update the task's description.
  task.updatedAt = new Date().toISOString(); // Update the timestamp for when the task was last updated.
  writeFile(tasks); // Save the updated tasks array to the JSON file.

  console.log("Task updated successfully.");
};

module.exports = updateTask; // Export the updateTask function for use in the main CLI.
