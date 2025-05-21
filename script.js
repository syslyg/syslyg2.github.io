function openKapcsolat() {
  const width = 600;
  const height = 600;

  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;

  window.open(
    "_weboldal/kapcsolat/kapcsolat.html",
    "KapcsolatAblak",
    `width=${width},height=${height},left=${left},top=${top},resizable=no`
  );
}

function openBootstrapCarousel() {
  const width = 800;
  const height = 601;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;

  window.open(
    "_weboldal/bootstrap.html",
    "BootstrapCarousel",
    `width=${width},height=${height},left=${left},top=${top},resizable=no`
  );
}

let aktualisFajl = "";

function betolt(fajlNev) {
  fetch(fajlNev)
    .then(response => {
      if (!response.ok) throw new Error("Hiba történt a fájl betöltésekor.");
      return response.text();
    })
    .then(szoveg => {
      document.getElementById("tartalom").innerHTML = szoveg;
      aktualisFajl = fajlNev;

      const homeGomb = document.getElementById("homeBtn");
      if (aktualisFajl === "_weboldal/home.html") {
        homeGomb.style.display = "none";
      } else {
        homeGomb.style.display = "inline-block";
      }
      const projektDiv = document.getElementById("projekt");
        projektDiv.innerHTML = "";
        projektDiv.classList.remove("vanSzoveg");
    })
    .catch(error => {
      document.getElementById("tartalom").innerHTML = "Nem sikerült betölteni az adatokat.";
      console.error(error);
    });
}

function projekt_betolt(fajlNev) {
  fetch(fajlNev)
    .then(response => {
      if (!response.ok) throw new Error("Hiba történt a fájl betöltésekor.");
      return response.text();
    })
    .then(szoveg => {
      const projektDiv = document.getElementById("projekt");
      const aboutSection = document.getElementById("about");

      if (projektDiv) {
        projektDiv.innerHTML = szoveg;
        projektDiv.classList.add("vanSzoveg")
      }
    })
    .catch(error => {
      const projektDiv = document.getElementById("projekt");
      if (projektDiv) projektDiv.innerHTML = "Nem sikerült betölteni az adatokat.";
      console.error(error);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  betolt("_weboldal/home.html");
});