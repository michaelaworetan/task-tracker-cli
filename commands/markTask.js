// This module marks a task as "todo," "in-progress," or "done."
const { readFile, writeFile } = require("../utils/fileHandler");

// Validate input: both ID and a valid status are required.
const markTask = ([status, id]) => {
  if (!id || !["done", "in-progress", "todo"].includes(status)) {
    console.log("Error: Invalid status or task ID.");
    return; // Stop execution if input is invalid.
  }

  const tasks = readFile(); // Read the existing tasks.
  const task = tasks.find((task) => task.id === id); // Find the task with the specified ID.

  // If the task is not found, log an error message
  if (!task) {
    console.log("Error: Task not found.");
    return;
  }

  task.status = status; // Update the task's status.
  task.updatedAt = new Date().toISOString(); // Update the timestamp for when the task was last updated.

  writeFile(tasks); // Save the updated tasks array to the JSON file.

  console.log(`Task marked as ${status}.`); // Log a success message with the new status.
};

module.exports = markTask; // Export the markTask function for use in the main CLI.
