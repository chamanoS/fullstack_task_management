

// Fetch all tasks from the backend
async function fetchTasks() {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.jason();
    
    
  }
  
  // Create a task by sending a POST request to the backend
  async function createTask(event) {
    
  }
  
  // Delete a task by sending a DELETE request to the backend
  async function deleteTask(id) {
   
  }
  
  // Add event listeners and initialize the application
  document.addEventListener('DOMContentLoaded', () => {
   
  });
  