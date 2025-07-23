const form = document.querySelector('form');
form.addEventListener("submit", function(e) {
  e.preventDefault();  // Prevent form submission/reload

  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;
  const h3Tag = document.getElementById("url");

  // Encode values for URL safety
  const params = new URLSearchParams({ name, year }).toString();
  h3Tag.textContent = `https://localhost:8080/?${params}`;
});