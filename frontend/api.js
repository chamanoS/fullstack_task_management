

// Fetch all tasks from the backend
async function fetchTasks() {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.json();
    const allBlogs = document.getElementById("blog-lists");

    tasks.forEach(task => {
        var blog = "";

        blog += '<div class="post">';
        blog += '<h2 class="post-title">;';
        blog += task.title;
        blog += "</h2>";
        blog += '<p class="post-date">';
        blog += task.date;
        blog += "</p>";
        blog +='<p class="post-content">';
        blog += task.content;
        blog += '</p>';
        blog += '<div class="post-buttons">';
        blog += '<button class="edit-post">Edit</button>';
        blog += '<button class="delete-post">Delete</button>';
        blog += "</div>";
        blog += "<br>";
        blog += '<a href="#" class="read-more">Read More</a>';
        blog += "</div>";

        allBlogs.append(blog);
    
    });
    
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
  