// Fetch all tasks from the backend
async function fetchTasks() {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.json();
    const allBlogs = document.getElementById("blog-lists");
  
    allBlogs.innerHTML = ""; // Clear the blog list before appending new tasks
  
    tasks.forEach((task) => {
      const blog = document.createElement("div");
      blog.classList.add("post");
  
      const title = document.createElement("h2");
      title.classList.add("post-title");
      title.textContent = task.title;
      blog.appendChild(title);
  
      const date = document.createElement("p");
      date.classList.add("post-date");
      date.textContent = task.date;
      blog.appendChild(date);
  
      const content = document.createElement("p");
      content.classList.add("post-content");
      content.textContent = task.content;
      blog.appendChild(content);
  
      const buttons = document.createElement("div");
      buttons.classList.add("post-buttons");
  
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("edit-post");
      editButton.addEventListener("click", () => editTask(task.id));
      buttons.appendChild(editButton);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-post");
      deleteButton.addEventListener("click", () => deleteTask(task.id));
      buttons.appendChild(deleteButton);
  
      blog.appendChild(buttons);
      blog.appendChild(document.createElement("br"));
  
      const readMore = document.createElement("a");
      readMore.href = "#";
      readMore.classList.add("read-more");
      readMore.textContent = "Read More";
      blog.appendChild(readMore);
  
      allBlogs.appendChild(blog);
    });
  }
  
  // Create a task by sending a POST request to the backend
  async function createTask(event) {
    event.preventDefault();
    const title = document.getElementById("title-input").value;
  
    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
  
    document.getElementById("title-input").value = "";
    await fetchTasks();
  }
  
  // Edit a task by sending an EDIT request to the backend
    async function editTask(id) {
    const titleElement = document.querySelector(".post-title");
    const contentElement = document.querySelector(".post-content");
    let title = titleElement.textContent;
    let content = contentElement.textContent;
  
    // Check if the title is editable and retrieve the new value if it is
    if (titleElement.contentEditable === "true") {
      title = titleElement.innerText;
    }
  
    // Check if the content is editable and retrieve the new value if it is
    if (contentElement.contentEditable === "true") {
      content = contentElement.innerText;
    }
  
    if (title && content) {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT", // Assuming your backend supports a PUT request for editing tasks
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      await fetchTasks();
    }
  }
  
  
  // Delete a task by sending a DELETE request to the backend
  async function deleteTask(id) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    await fetchTasks();
  }
  
  // Add event listeners and initialize the application
  document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit");
    submit.addEventListener("submit", createTask);
  
    const fetchAll = document.getElementById("fetch-btn");
    fetchAll.addEventListener("click", fetchTasks);
    fetchTasks();
  });
  