// This module adds a new task to the task list.
const { readFile, writeFile } = require("../utils/fileHandler"); // Import the file utility functions
const { v4: uuidv4 } = require("uuid"); // Import the UUID library for generating unique IDs.

const addTask = ([description]) => {
  //chack if a description was provided, if not log a message
  if (!description) {
    console.log("Error: Description is required");
    return;
  }

  const tasks = readFile(); // Read the existing tasks from the JSON file

  // Create a new task object with necessary properties
  const newTask = {
    id: uuidv4(), // Generate a unique Id for the task
    description, // Assign the provided description for the task
    status: "todo", // Default  for a new task is 'todo'.
    createdAt: new Date().toDateString(), // Record the current date and time.
    updatedAt: new Date().toDateString(), // Initially, updatedAt is the same as createdAt.
  };

  tasks.push(newTask); // Add new task to the tasks array
  writeFile(tasks); //Save the updated array back to the JSON file

  console.log(`Task added successfully (ID: ${newTask.id})`); //log a succedd with the new Tasks Id
};

module.exports = addTask; // Export the addTask function for use in the main CLI.
