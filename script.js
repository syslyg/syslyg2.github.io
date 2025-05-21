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
  const projektDiv = document.getElementById("projekt");

  fetch(fajlNev)
    .then(response => {
      if (!response.ok) throw new Error("Hiba történt a fájl betöltésekor.");
      return response.text();
    })
    .then(szoveg => {
      document.getElementById("projekt").innerHTML = szoveg;
      if (szoveg.trim() !== "") {
        projektDiv.classList.add("vanSzoveg");
        } else {
        projektDiv.classList.remove("vanSzoveg");
        }
    })
    .catch(error => {
      document.getElementById("projekt").innerHTML = "Nem sikerült betölteni az adatokat.";
      console.error(error);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  betolt("_weboldal/home.html");
});