const cardElemList = document.querySelectorAll(".js-card");
const overlay = document.querySelectorAll(".js-card__overlay");
const overlayText = document.querySelectorAll(".js-card__overlay-text");

for (let i = 0; i < cardElemList.length; i++) {
  cardElemList[i].addEventListener("mouseenter", () => {
    overlayText[i].classList.add("card--active");
    overlay[i].classList.add("card--active");
  });
}

for (let i = 0; i < cardElemList.length; i++) {
  cardElemList[i].addEventListener("mouseleave", () => {
    overlayText[i].classList.remove("card--active");
    overlay[i].classList.remove("card--active");
  });
}
