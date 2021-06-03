const burgerBtn = document.querySelector("#burgerBtn");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const navLinks = document.querySelectorAll(".overlayNavLink");

// Hamburger Toggler
burgerBtn.addEventListener("click", function () {
  // Close burger menu
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("no-scroll");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open burger menu
    body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// Close hamburger on link click
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    header.classList.remove("open");
    body.classList.remove("no-scroll");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  })
);
