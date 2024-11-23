# Task Tracker CLI

 Sample solution for a [task-tracker](https://roadmap.sh/projects/task-tracker) challange by [roadmap.sh](https://roadmap.sh/) to track and manage tasks. 

## Features
- Add a new task.
- Update an existing task.
- Delete a task.
- Mark tasks as:
  - **In Progress**
  - **Done**
- List tasks by status:
  - All tasks
  - Completed tasks
- Stores tasks persistently in a `tasks.json` file.

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/your-username/task-tracker-cli.git
   cd task-tracker-cli
   ```
2. Install dependencies:
  ```
  npm install
  ```
3. Run the CLI:
  ```
  node index.js
  ```

## Usage

### Add a task
```
  node index.js add "Buy groceries"
```
#### Output: Task added successfully (ID: <unique-id>)

### Update a Task
 Update an existing task's description:
  ```
  node index.js update <task-id> "Updated task description"
  ```
  ``` Example
  node index.js update 12345678-1234-1234-1234-1234567890ab "Buy groceries and cook dinner"
  ```

### Delete a Task
Remove a task by its ID:
  ```
  node index.js delete <task-id>
  ```
Example:
```
node index.js delete 12345678-1234-1234-1234-1234567890ab
```
### Mark a Task
Mark a task as:
```
node index.js mark-in-progress <task-id>
node index.js mark-done <task-id>
```

### List Tasks
List tasks by their status:
```
node index.js list
node index.js list done
node index.js list todo
node index.js list in-progress
```

## Task Properties
##### Each task includes the following properties:
- id: A unique identifier.
- description: The task description.
- status: Task status (todo, in-progress, done).
- createdAt: Date and time the task was created.
- updatedAt: Date and time the task was last updated.

## Acknowledgment
Thanks to [roadmap.sh](https://roadmap.sh/) for providing this CLI project. Feedback and suggestions are always appreciated!
