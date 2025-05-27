/**
 * Processes an array of tasks to get titles of completed tasks sorted by ID
 * @param {Array<{id: number, title: string, status: string}>} tasks - Array of task objects
 * @returns {string[]} Array of titles from completed tasks, sorted by ID
 * 
 * @example
 * const tasks = [
 *   { id: 3, title: "Task 3", status: "completed" },
 *   { id: 1, title: "Task 1", status: "pending" },
 *   { id: 2, title: "Task 2", status: "completed" }
 * ];
 * const completedTitles = getCompletedTaskTitles(tasks);
 * // Returns: ["Task 2", "Task 3"]
 */
function getCompletedTaskTitles(tasks) {
    return tasks
      .filter(task => task.status === "completed")
      .sort((a, b) => a.id - b.id)
      .map(task => task.title);
  }
  
  // Example usage:
  const tasks = [
    { id: 3, title: "Task 3", status: "completed" },
    { id: 1, title: "Task 1", status: "pending" },
    { id: 2, title: "Task 2", status: "completed" }
  ];
  
  console.log(getCompletedTaskTitles(tasks)); // ["Task 2", "Task 3"]