// Globale Variablen zur Speicherung der aktuellen Bildindizes
let currentIndex = 0;
let cncIndex = 0;
let carouselIndex = 0;

const images = [
  "images/stahlbau.jpg",
  "images/konstruktion.jpg",
  "images/rohrleitung.jpg",
  "images/behaelter.jpg"
];

const cncImages = [
  "images/matec_cnc.jpg",
  "images/frase.jpg", // Beispiel für ein weiteres Bild
  "images/frase2.jpg"  // Beispiel für ein weiteres Bild
];

const carouselImages = [
  "images/karusel3.jpg",
  "images/karusel2.jpg", // Beispiel für ein weiteres Bild
  "images/karusel1.jpg"  // Beispiel für ein weiteres Bild
];

function showImage(index) {
  const imageElement = document.getElementById("current-image");
  if (imageElement && index >= 0 && index < images.length) {
    imageElement.src = images[index];
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

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
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

// Initialisierung des ersten Bildes
window.onload = () => {
  showImage(currentIndex);
  showCNCImage(cncIndex);
  showCarouselImage(carouselIndex);
};