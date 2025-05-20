document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Köszönöm az üzenetet! Hamarosan jelentkezem.";
  this.reset();
});

function openKapcsolat() {
  const width = 600;
  const height = 600;

  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;

  window.open(
    "kapcsolat.html",
    "KapcsolatAblak",
    `width=${width},height=${height},left=${left},top=${top},resizable=no`
  );
}
