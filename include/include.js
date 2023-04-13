document.addEventListener("DOMContentLoaded", function () {
    includeHTML("aside", "aside.html");
  });
  
  function includeHTML(id, source) {
    const element = document.getElementById(id);
    if (!element) return;
  
    fetch(source)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          return Promise.reject(new Error("Failed to load HTML"));
        }
      })
      .then((html) => {
        element.innerHTML = html;
      })
      .catch((error) => {
        console.warn("Error loading", source, ":", error);
      });
  }
  