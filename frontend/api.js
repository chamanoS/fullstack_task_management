// app.js

// Fetch all tasks from the backend
async function fetchTasks() {
    const response = await fetch('http://localhost:3000/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.textContent = task.title;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteTask(task.id));
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }
  
  // Create a task by sending a POST request to the backend
  async function createTask(event) {
    event.preventDefault();
    const title = document.getElementById('taskInput').value;
    await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    document.getElementById('taskInput').value = '';
    await fetchTasks();
  }
  
  // Delete a task by sending a DELETE request to the backend
  async function deleteTask(id) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    });
    await fetchTasks();
  }
  
  // Add event listeners and initialize the application
  document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    taskForm.addEventListener('submit', createTask);
  
    const fetchTasksBtn = document.getElementById('fetchTasksBtn');
    fetchTasksBtn.addEventListener('click', fetchTasks);
  
    fetchTasks();
  });
  