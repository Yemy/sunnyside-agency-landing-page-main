// Open and close menu and toggle image //

const mobileMenuButton = document.querySelector(".nav__ham-button");
const mobileMenu = document.querySelector(".nav__menu");

const toggleMobileMenu = function () {
  mobileMenu.classList.toggle("hidden");
  toggleImage(
    ".nav__ham-button-img",
    "./images/icon-hamburger.svg",
    "./images/icon-close-menu.svg"
  );
};

const toggleImage = function (img, open, close) {
  let imgSrc = document.querySelector(img);
  if (imgSrc.src.match(open)) {
    document.querySelector(img).src = close;
  } else {
    document.querySelector(img).src = open;
  }
};

mobileMenuButton.addEventListener("click", toggleMobileMenu);
