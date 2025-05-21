document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Köszönöm az üzenetet! Hamarosan jelentkezem.";
  this.reset();
});

function closeWindow() {
    window.close();
}