const burger = document.querySelector(".burger");
const overlay = document.querySelector(".menu-overlay");
const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");

burger.addEventListener("click", () => {
  overlay.classList.toggle("active");

  const isOpen = overlay.classList.contains("active");
  burgerIcon.style.display = isOpen ? "none" : "block";
  closeIcon.style.display = isOpen ? "block" : "none";
});
