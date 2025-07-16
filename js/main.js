// Globale Variablen zur Speicherung der aktuellen Bild-/Medienindizes
let currentIndex = 0;       // Hauptkarussell (Hero Section)
let cncIndex = 0;           // CNC-Maschine-Karussell
let carouselIndex = 0;      // Dörries-Karussell
let trulaserMediaIndex = 0; // Trumpf Trulaser-Media-Karussell

// Arrays mit den Medien (Bilder und Video)
const images = [
  "stahlbau.jpg",
  "konstruktion.jpg",
  "rohrleitung.jpg",
  "behaelter.jpg"
];

const cncImages = [
  "matec_cnc.jpg",
  "frase.jpg", // Beispiel für ein weiteres Bild
  "frase2.jpg" // Beispiel für ein weiteres Bild
];

const carouselImages = [
  "karusel3.jpg",
  "karusel2.jpg", // Beispiel für ein weiteres Bild
  "karusel1.jpg"  // Beispiel für ein weiteres Bild
];

// Media für Trumpf Trulaser (Bild und Video)
const trulaserMedia = [
  { type: "image", src: "trulaser.jpg" },
  { type: "video", src: "trulaser_video.mp4" }
];

// Funktionen zum Anzeigen der Bilder/Videos
function showImage(index, elementId) {
  const element = document.getElementById(elementId);
  if (element && index >= 0 && index < images.length) {
    element.src = images[index];
  }
}

function showCNCImage(index) {
  const imageElement = document.getElementById("cnc-image");
  if (imageElement && index >= 0 && index < cncImages.length) {
    imageElement.src = cncImages[index];
  }
}

function showCarouselImage(index) {
  const imageElement = document.getElementById("carousel-image");
  if (imageElement && index >= 0 && index < carouselImages.length) {
    imageElement.src = carouselImages[index];
  }
}

function showTrulaserMedia(index) {
  const mediaContainer = document.getElementById("trulaser-media");
  const imageElement = mediaContainer.querySelector("img");
  const videoElement = mediaContainer.querySelector("video");

  if (index >= 0 && index < trulaserMedia.length) {
    const currentMedia = trulaserMedia[index];

    // Verstecke alle Elemente
    imageElement.classList.add("hidden");
    videoElement.classList.add("hidden");

    // Zeige das aktuelle Medium an
    if (currentMedia.type === "image") {
      imageElement.src = currentMedia.src;
      imageElement.classList.remove("hidden");
    } else if (currentMedia.type === "video") {
      videoElement.src = currentMedia.src;
      videoElement.classList.remove("hidden");
    }
  }
}

// Funktionen zum Wechseln der Bilder/Videos
function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex, "current-image");
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex, "current-image");
}

function showPreviousCNCImage() {
  cncIndex = (cncIndex - 1 + cncImages.length) % cncImages.length;
  showCNCImage(cncIndex);
}

function showNextCNCImage() {
  cncIndex = (cncIndex + 1) % cncImages.length;
  showCNCImage(cncIndex);
}

function showPreviousCarouselImage() {
  carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
  showCarouselImage(carouselIndex);
}

function showNextCarouselImage() {
  carouselIndex = (carouselIndex + 1) % carouselImages.length;
  showCarouselImage(carouselIndex);
}

function showPreviousTrulaserMedia() {
  trulaserMediaIndex = (trulaserMediaIndex - 1 + trulaserMedia.length) % trulaserMedia.length;
  showTrulaserMedia(trulaserMediaIndex);
}

function showNextTrulaserMedia() {
  trulaserMediaIndex = (trulaserMediaIndex + 1) % trulaserMedia.length;
  showTrulaserMedia(trulaserMediaIndex);
}

// Initialisierung bei Seitenstart
window.onload = () => {
  showImage(currentIndex, "current-image");
  showCNCImage(cncIndex);
  showCarouselImage(carouselIndex);
  showTrulaserMedia(trulaserMediaIndex); // Initialisierung für Trumpf Trulaser
};